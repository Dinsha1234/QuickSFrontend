import React from "react";
import { useState } from "react";
import AdminLogin from "./AdminLogin/AdminLogin";
import EmployeeLogin from "./EmployeeLogin/EmployeeLogin";
import "./EmployeeLogin/login.css";

const Login = () => {
    const [isEmployeeLogin, setIsEmployeeLogin] = useState(true)
    function handleToggle(){
        setIsEmployeeLogin((prev)=> !prev)
    }
  return (
    <div>
      <div className="main-hdr-box">
        <div className="login-board-main-ttl">
          <div className="border-head-bold-main-ttl q">Q</div>
          <div className="border-head-nrml-ttl q">uick</div>
          <div className="border-head-bold-main-ttl s">S</div>
          <div className="border-head-nrml-ttl s">erve</div>
        </div>
        <div className="tag-line-p1">Lets you</div>
        <div className="pntrs-tag-line p1">
            <p>Book Your Food Quicker</p>
            <p>& Easier</p>
        </div>
        <div className="pntrs-tag-line p2">
            <p>Keep Payment Reminders</p>
            <p>& Make Speedy Transactions</p>
        </div>
    
    <div className="login-hdr-box">
        <div className="toggle-btn-emp-admn">
            <button className={`toggle-button ${isEmployeeLogin ? "employee" : "admin"}`} onClick={handleToggle}>
            <span className={`option employee-option ${!isEmployeeLogin ? "hidden": ""}`}>Employee Login</span>
            <span className={`option admin-option ${isEmployeeLogin ? "hidden" : ""}`}>Admin Login</span>
            </button>
            
        </div>
        <div className="emp-admn-modal">{isEmployeeLogin ? <EmployeeLogin/> : <AdminLogin/>}</div>
    </div>
    </div>
      </div>
     
  );
};

// const Login = () => {
//   const [isEmployeeLogin, setIsEmployeeLogin] = useState(true);
//   function handleToggle() {
//     setIsEmployeeLogin((prev) => !prev);
//   }
//   return (
//     <div className="quickserver-main">
//       <div className="quickserver-main-img-box">
//         <img
//           className="quickserver-main-img"
//           src="./public/photos/logo.png"
//           alt="logo"
//         ></img>
//         <div className="quickserver-main-img-caption">
//           <p>Book Your Food Easier</p>
//           <p>& Quicker</p>
//         </div>

//         <div className="login-board">
//           <div className="login-board-main-ttl">
//             <div className="border-head-bold-main-ttl">
//               <p className="border-head-bold-main-ttl-q">Q</p>
//             </div>
//             <div className="border-head-nrml-ttl">
//               <p className="border-head-nrml-ttl-q">uick</p>
//             </div>
//             <div className="border-head-bold-main-ttl">
//               <p className="border-head-bold-main-ttl-s">S</p>
//             </div>
//             <div className="border-head-nrml-ttl">
//               <p className="border-head-nrml-ttl-s">erve</p>
//             </div>
//             <button
//               className={`toggle-button ${
//                 isEmployeeLogin ? "employee" : "admin"
//               }`}
//               onClick={handleToggle}
//             >
//               <span className={`option employee-option ${!isEmployeeLogin ? "hidden": ""}`}> Employee Login </span>
//               <span className={`option admin-option ${isEmployeeLogin ? "hidden": ""}`}> Admin Login </span>
//             </button>
//             <div>{isEmployeeLogin ? <EmployeeLogin/> : ""}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Login;
