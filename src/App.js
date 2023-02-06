

import './App.css';
import { useState } from 'react';
import { Login } from './Login';

function App() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState(null);
  const [isRequesting,setIsRequesting] = useState(false);


  const handleEmail = (event) =>{
    const  value = event.target.value
    setEmail(value)
  }
  const handlePassword = (event) =>{
    const  value = event.target.value
    setPassword(value)
  }

  const handleSubmit = () =>{
    setError(null)
    setIsRequesting(true)
    let values = {email: email, password:password};
    Login(values).then(() => {
      alert("Bem vindo !!!")
    }).catch((error) => {
      setError(error)
    }).finally(() => {
      setIsRequesting(false)
    });
  }


  return (
    <>

      <div className='container'>
        <h1 className='tittle'>Login</h1>
        <div className='line'/>
        <br/>

        {error && <div className='error'>{error.message}</div>}

        <div className='row'>
          <input placeholder='Email' id={'email'} type={"email"} autoComplete="off" value={email} onChange={handleEmail}/> 
        </div>
        <div className='row'>
          <input placeholder='Password' id={'password'} type={"password"} autoComplete="off" value={password} onChange={handlePassword}/> 
        </div>
        <div>

          <button className='btn' onClick={handleSubmit} disabled={email === "" || password.length <8 || isRequesting}>Confirm</button>

        </div>
      </div>
    


    <div className='dica'>
      // a senha deve ser maior que 8 digitos
      <br></br>
      // Senha : senha123
    </div>
    </>
  );
}

export default App;
