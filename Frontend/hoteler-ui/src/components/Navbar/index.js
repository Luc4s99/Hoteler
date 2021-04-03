import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar (){
    return (
       <nav className="navbar navbar-expand-lg">
         <span className="navbar-brand text-white font-weight-bold">Hoteler</span>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars text-white"></i>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
               <li className="nav-item">  <Link className="nav-link" to="/telaInicial">Voltar a tela inicial</Link>   </li>
               <li className="nav-item ">  <Link className="nav-link" to="/">Sair</Link>   </li>
            </ul>  
         </div>
       </nav>
    )
}
export default Navbar;
