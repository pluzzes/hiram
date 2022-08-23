import {React, useState} from 'react'
import logo from '../assets/img/logo.svg'
import {useNavigate } from 'react-router-dom';

import './auth.scss'

import useAuth from "../hook/useAuth";

const Authentication = () => {
    const { signin } = useAuth();
    const {signout} =useAuth(); 
    const navigate = useNavigate();
  
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    signout(email,senha)
    const handleLogin = () => {
      try{
        if (!email | !senha) {
          // setError("Preencha todos os campos");
          alert("Preencha todos os campos")
        }
        const res = signin(email, senha);
        if (res) {
          setError(res);
        }
      }

      catch{
        alert("Erro")
        // return

      }
      navigate("/home");
      
  
    };
  
    return  <div id="page-login">
                <div className='login-form'>
                    <form onSubmit={handleLogin} type='submit'>
                      <label>{error}</label>
                        <img src={logo} alt="Logo" />
                        <div className='form-group'>
                            <label>Usuario</label>
                            <input type="text" name="email" id="email" placeholder="Digite seu email"
                            value = {email}
                            onChange={(e) => [setEmail(e.target.value), setError("")]} />
                        </div>
                        <div className='form-group'>
                            <label >Senha</label>
                            <input type="password" name="password" id="password" placeholder="Digite sua senha" 
                            value ={senha}
                            onChange = {(e) => [setSenha(e.target.value), setError("")]} />
                        </div>
                        <button className='button'>SigIn</button>
                    </form>
                </div>
            </div>
  };
  
  export default Authentication;
  