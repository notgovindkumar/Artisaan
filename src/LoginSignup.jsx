import { useState } from "react";
import "./LoginSignup.css";

export default function LoginSignup() {
  const [active, setActive] = useState(""); // "login" | "signup" | ""

  return (
    <div className={`login-signup-shell ${active}`}>
      <div
        className={`panel login-panel ${active === "login" ? "active" : ""}`}
        onMouseEnter={() => setActive("login")}
        onMouseLeave={() => setActive("")}
      >
        <div className="panel-label">Log In</div>
        <div className={`form-area ${active === "login" ? "rollout" : ""}`}>
          <div class="in">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          </div>
          <button className="login-btn">Log In</button>
          <div className="switch-link move-center">or Sign Up instead</div>
        </div>
      </div>
      <div
        className={`panel signup-panel ${active === "signup" ? "active" : ""}`}
        onMouseEnter={() => setActive("signup")}
        onMouseLeave={() => setActive("")}
      >
        <div className="panel-label">Sign Up</div>
        <div className={`form-area ${active === "signup" ? "rollout" : ""}`}>
          <div class="in">
          <input  type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          </div>
          <button className="signup-btn">Sign Up</button>
          <div className="switch-link move-center">or Log In instead</div>
        </div>
      </div>
    </div>
  );
}
