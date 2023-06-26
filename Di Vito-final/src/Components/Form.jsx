import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName.length <= 5 || !email.includes("@")) {
        setErrorMessage("Por favor verifique su información nuevamente");
        setSuccessMessage("");
        return;
      }

    setFullName("");
    setEmail("");
    setErrorMessage("");
    setSuccessMessage(`Gracias ${fullName}, te contactaremos lo antes posible vía mail.`);
  };

  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      {successMessage && <div>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>FullName: 
            <input type= "text" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
            </label>
            <br/>
            <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <br/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;