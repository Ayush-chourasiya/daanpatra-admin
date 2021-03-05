import React, { useState } from "react";
import ContactForm from "./ForgotPassword";
import "./styles.css";

export default function App() {
  const [values, setValues] = useState({
    
    email: "my@example.com",
    
  });

  const saveForm = () => {
    const sendAction = fetch( {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(values)
    });

    sendAction.then(() => {
      alert("thanks");
      setValues({ email: ""});
    });
    sendAction.catch(err => {
      alert(err.message);
    });
  };
  return (
    <div className="App">
      <ContactForm values={values} setValues={setValues} onSubmit={saveForm} />
    </div>
  );
}
