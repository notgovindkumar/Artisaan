import { useState } from "react";
import "./AuthGate.css";
export default function AuthGate() {
  const [mode, setMode] = useState("");
  return (
    <section className={`auth-bg ${mode}`}>
      <div className="auth-choice">
        <button className="login-btn"
                onMouseEnter={() => setMode('login')}
                onClick={() => setMode('login')}>Login</button>
        <button className="signup-btn"
                onMouseEnter={() => setMode('signup')}
                onClick={() => setMode('signup')}>Signup</button>
      </div>
      <div className={`auth-form login ${mode === "login" ? "form-rollout" : "collapsed"}`}>
        {/* Login Form */}
      </div>
      <div className={`auth-form signup ${mode === "signup" ? "form-rollout" : "collapsed"}`}>
        {/* Signup Form */}
      </div>
    </section>
  );
}
