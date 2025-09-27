import { useState } from "react";
import "./LoginSignup.css";
export default function AuthGate() {
  const [mode, setMode] = useState("");
  return (
    <section className={`auth-bg ${mode}`}>
      <div className="auth-choice">
        <button className="login-btn"
          onMouseEnter={()=>setMode("login")}
          onClick={()=>setMode("login")}>Login</button>
        <button className="signup-btn"
          onMouseEnter={()=>setMode("signup")}
          onClick={()=>setMode("signup")}>Signup</button>
      </div>
      <div className={`auth-form login ${mode==="login"?"form-rollout":"collapsed"}`}>
        {/* Login Form Here */}
      </div>
      <div className={`auth-form signup ${mode==="signup"?"form-rollout":"collapsed"}`}>
        {/* Signup Form Here */}
      </div>
    </section>
  );
}
