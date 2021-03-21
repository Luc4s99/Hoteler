import { BrowserRouter, Route } from "react-router-dom";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./view/home";
import Login from "./view/login";
import TelaInicial from "./view/telaInicial";

import SelecaoCadastro from "./view/selecaoCadastro";
import CadastroOperador from "./view/cadastroOperador";
import CadastroQuarto from "./view/cadastroQuarto";
import CadastroHospede from "./view/cadastroHospede";

import SelecaoLista from "./view/selecaoLista";
import ListarOperador from "./view/listarOperador";
import ListarReserva from "./view/listarReserva";
import ListarQuarto from "./view/listarQuarto";
import ListarHospede from "./view/listarHospede";

import RealizarReserva from "./view/realizarReserva";
import './Styles/GlobalStyles.css';


toast.configure();
function App() {
  return (
    <>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/telaInicial" component={TelaInicial} />

      <Route exact path="/selecaoCadastro" component={SelecaoCadastro} />
      <Route exact path="/cadastroOperador" component={CadastroOperador} />
      <Route exact path="/cadastroQuarto" component={CadastroQuarto} />
      <Route exact path="/cadastroHospede" component={CadastroHospede} />

      <Route exact path="/selecaoLista" component={SelecaoLista} />
      <Route exact path="/listarOperador" component={ListarOperador} />
      <Route exact path="/listarReserva" component={ListarReserva} />
      <Route exact path="/listarQuarto" component={ListarQuarto} />
      <Route exact path="/listarHospede" component={ListarHospede} />

      <Route exact path="/realizarReserva" component={RealizarReserva} />

    </BrowserRouter>
    </>
  );
}

export default App;
