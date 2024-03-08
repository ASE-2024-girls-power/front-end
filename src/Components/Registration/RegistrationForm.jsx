import './RegistrationForm.css'; 
import {useState} from "react"; 
import { validateEmail } from "../../utils/utils";

//Registration form good start.
//https://medium.com/@ericapantojacs/react-registration-form-d298b3b7e75d

const PasswordErrorMessage = () => { 
    return ( 
      <p className="FieldError">Password should have at least 8 characters</p> 
    ); 
   }; 
    
   function RegistrationForm() { 
    const [accountName, setAccountName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState({ 
      value: "", 
      isTouched: false, 
    }); 
    const [role, setRole] = useState("role"); 
   
    const getIsFormValid = () => { 
      return ( 
        accountName && 
        validateEmail(email) && 
        password.value.length >= 8 && 
        role !== "role" 
      ); 
    }; 
    
    const clearForm = () => { 
      setAccountName(""); 
      setEmail(""); 
      setPassword({ 
        value: "", 
        isTouched: false, 
      }); 
      setRole("role"); 
    }; 
    
    const handleSubmit = (e) => { 
      e.preventDefault(); 
      alert("Account created!"); 
      clearForm(); 
    }; 
    
    return ( 
      <div className="RegistrationForm"> 
        <form onSubmit={handleSubmit}> 
          <fieldset> 
            <h2>Sign Up</h2> 
            <div className="Field"> 
              <label> 
                Account name <sup>*</sup> 
              </label> 
              <input 
                value={accountName} 
                onChange={(e) => { 
                  setAccountName(e.target.value); 
                }} 
                placeholder="Account name" 
              /> 
            </div> 
            <div className="Field"> 
              <label> 
                Email address <sup>*</sup> 
              </label> 
              <input 
                value={email} 
                onChange={(e) => { 
                  setEmail(e.target.value); 
                }} 
                placeholder="Email address" 
              /> 
            </div> 
            <div className="Field"> 
              <label> 
                Password <sup>*</sup> 
              </label> 
              <input 
                value={password.value} 
                type="password" 
                onChange={(e) => { 
                  setPassword({ ...password, value: e.target.value }); 
                }} 
                onBlur={() => { 
                  setPassword({ ...password, isTouched: true }); 
                }} 
                placeholder="Password" 
              /> 
              {password.isTouched && password.value.length < 8 ? ( 
                <PasswordErrorMessage /> 
              ) : null} 
            </div> 
            <div className="Field"> 
              <label> 
                Role <sup>*</sup> 
              </label> 
              <select value={role} onChange={(e) => setRole(e.target.value)}> 
                <option value="role">Role</option> 
                <option value="writer">Writer</option> 
                <option value="reader">Reader</option> 
              </select> 
            </div> 
            <button type="submit" disabled={!getIsFormValid()}> 
              Create account 
            </button> 
          </fieldset> 
        </form> 
      </div> 
    ); 
   } 
   
   export default RegistrationForm; 