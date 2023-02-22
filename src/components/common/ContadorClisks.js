import React, { useState } from "react";
import {sendCounterValue} from '../../services/CounterApi';


function Counter({ icon, nombreContador ,ref}) {
  const [contador, setContador] = useState(0);

  const handleClick = async () => {
    setContador(contador + 1);
    await sendCounterValue(nombreContador, contador + 1);
  };

  return  (
    <div  onClick={() => window.open.href = {ref}}>
      <h2>{nombreContador}</h2>
      <p>Contador: {contador}</p>
     {icon && (
        
        <div onClick={handleClick}>
          {React.createElement(icon)}
        </div>
      )}
    </div>
  );
}

export default Counter;
/** <FaFacebookF onClick={handleClick} count= {nombreContador} /> 
      <FaTwitter onClick={handleClick} count= {nombreContador}/>
      <FaInstagram onClick={handleClick} count= {nombreContador} /> */