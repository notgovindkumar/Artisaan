import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAdditionalUserInfo,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "./firebase";

export default function LoginSignup() {
  const navigate = useNavigate();
  const [active, setActive] = useState(""); // Your state for the hover effect
  
  // New state for our forms
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isArtisan, setIsArtisan] = useState(false);
  const [error, setError] = useState("");

  const handleAuthAction = async (authFunction, isNewUserCheck = false) => {
    setError("");
    try {
      const result = await authFunction();
      const user = result.user;
      
      const isNewUser = isNewUserCheck ? getAdditionalUserInfo(result).isNewUser : true;

      // If it's a new user, save their role to the database
      if (isNewUser) {
        const role = isArtisan ? "Artisan" : "Buyer";
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: user.displayName || name, // Use Google name or form name
          email: user.email,
          role: role,
        });
      }
      navigate('/dashboard'); // Go to dashboard after successful action
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={`login-signup-shell ${active}`}>
      {/* Login Panel */}
      <div
        className={`panel login-panel ${active === "login" ? "active" : ""}`}
        onMouseEnter={() => setActive("login")}
        onMouseLeave={() => setActive("")}
        onClick={() => setActive("login")} // Added onClick to make it stick
      >
        <div className="panel-label">Log In</div>
        <div className={`form-area ${active === "login" ? "rollout" : ""}`}>
          <button onClick={() => handleAuthAction(() => signInWithPopup(auth, googleProvider), true)} className="google-btn">
            Log In with Google
          </button>
          <p className="or-text">or</p>
          <form onSubmit={(e) => { e.preventDefault(); handleAuthAction(() => signInWithEmailAndPassword(auth, email, password)); }}>
            <div className="in">
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="login-btn">Log In</button>
          </form>
          <div className="switch-link" onClick={() => setActive("signup")}>or Sign Up instead</div>
          {active === "login" && error && <p className="error-text">{error}</p>}
        </div>
      </div>
      
      {/* Signup Panel */}
      <div
        className={`panel signup-panel ${active === "signup" ? "active" : ""}`}
        onMouseEnter={() => setActive("signup")}
        onMouseLeave={() => setActive("")}
        onClick={() => setActive("signup")} // Added onClick to make it stick
      >
        <div className="panel-label">Sign Up</div>
        <div className={`form-area ${active === "signup" ? "rollout" : ""}`}>
          <button onClick={() => handleAuthAction(() => signInWithPopup(auth, googleProvider), true)} className="google-btn">
            Sign Up with Google
          </button>
          <p className="or-text">or</p>
          <form onSubmit={(e) => { e.preventDefault(); handleAuthAction(() => createUserWithEmailAndPassword(auth, email, password)); }}>
            <div className="in">
              <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <div className="role-checkbox">
              <input type="checkbox" id="isArtisan" checked={isArtisan} onChange={e => setIsArtisan(e.target.checked)} />
              <label htmlFor="isArtisan">I am an Artisan</label>
            </div>
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
          <div className="switch-link" onClick={() => setActive("login")}>or Log In instead</div>
          {active === "signup" && error && <p className="error-text">{error}</p>}
        </div>
      </div>
    </div>
  );
}