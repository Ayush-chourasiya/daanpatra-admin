import React from "react";

const ForgotPassword = ({ values, setValues, onSubmit }) => (

     <>
       <div className="BGColor">
        <div className="BgImage" > 
        <p className='alignment'>Forgot your password?</p>
        <div className='formAlignment'>

      <label className="text">Email</label>
      <form 
        onSubmit={evt => {
          evt.preventDefault();
          onSubmit();
        }}>
        
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          value={values.email}
          onChange={evt => setValues({ ...values, email: evt.target.value })}
        />
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
  </div>
  
     </>
  
);

export default ForgotPassword;
