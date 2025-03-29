//ternary operator
import { useState } from "react";
import DashboardUI from "./Dashboard";
import LoginUI from "./Login";

function App() {
  const [loginState, setLoginState] = useState(false);
  return (
    <div>
      {loginState ? <DashboardUI /> : <LoginUI/>}
      {loginState ? <button 
      onClick={()=> setLoginState(false)}
      >Logout</button> : <button
      onClick={()=> setLoginState(true)}
      >Login</button>}
    </div>
  );
}
export default App;