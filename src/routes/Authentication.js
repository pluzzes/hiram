import React from 'react'
import logo from '../assets/img/logo.svg'
import { Link } from 'react-router-dom';
import './auth.scss'



const Authentication = () => {
  
    return  <div id="page-login">
                <div className='login-form'>
                    <form onSubmit={''}>
                        <img src={logo} alt="Logo" />
                        <div className='form-group'>
                            <label>Usuario</label>
                            <input type="text" name="email" id="email" placeholder="Digite seu email" />
                        </div>
                        <div className='form-group'>
                            <label >Senha</label>
                            <input type="password" name="password" id="password" placeholder="Digite sua senha" />
                        </div>
                        <Link to='/' className='button'>
                            <button type='submit'>SigIn</button>
                        </Link>
                    </form>
                </div>
            </div>
  };
  
  export default Authentication;
  