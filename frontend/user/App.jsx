import { useState } from "react";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="text-center mt-10">
      {showRegister ? <Register/> : <Login />}
      <button
        onClick={() => setShowRegister(!showRegister)}
        className="mt-4 text-blue-500"
      >
        {showRegister ? "Go to Login" : "Go to Register"}
      </button>
    </div>
  );
}

export default App;