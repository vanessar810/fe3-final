import React, {useState} from "react";
import Message from "./Message";



const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
     });

  console.log(customer);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  
  const handleChangeName = (event) => {
    setCustomer({...customer, name: event.target.value});
  };
  const handleChangeEmail = (event) => {
    setCustomer({...customer, email: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log("regex", numRegex.test(customer.email));
    if(
      customer.name.trim().length > 5 &&
      numRegex.test(customer.email)
    ){
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  const reset = () => {
    setCustomer({
      name: "",
      email: "",
    });
  };

  return (
    <>
    {show ? (
    <Message customer = {customer} />) : (
      <>
      <form onSubmit={handleSubmit}> 
        <label>Nombre completo:</label>
        <input type="text" value={customer.name} onChange={handleChangeName}/>
        <label>Email:</label>
        <input type="text" value={customer.email} onChange={handleChangeEmail}/>
        <button>Enviar</button>
        <button onClick={reset}>Reset form</button>
      </form>
      
    </>
  )
}

{error ? (
  <h4 style = {{ color: "blue"}}> Error: Por favor verifique su información nuevamente </h4>
): null}
</>
  );
};

export default Form;
