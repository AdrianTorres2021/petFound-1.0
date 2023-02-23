import { useState } from "react";

import './Register.css'
import BasicForm2 from "../components/BasicForm2";
import Loginform from "../components/LoginForm";
import Navbar from "../components/Navbar";

function Register() {
  const [view, setView] = useState("basic");
  return (
    <>
    <Navbar/>
    <div className="App-register">
      <nav id="nav">
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Register
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Log in
        </h3>
      </nav>
      {view === "basic" ? <BasicForm2 /> : <Loginform />}
    </div>
    </>
  );
}

export default Register;