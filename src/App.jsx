import './App.css';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Administrador from './components/pages/Administrador';
import Inicio from './components/pages/Inicio';
import Error404 from './components/pages/Error404';
import Nosotros from './components/pages/Nosotros';
import DetalleReceta from './components/pages/receta/DetalleReceta';
import FormularioReceta from './components/pages/receta/FormularioReceta';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route
          path='/administrador'
          element={<Administrador></Administrador>}
        ></Route>
        <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
        <Route
          path='/detalleReceta'
          element={<DetalleReceta></DetalleReceta>}
        ></Route>
        <Route
          path='/administrador/crear'
          element={
            <FormularioReceta
              editar={false}
              titulo='Nueva receta'
            ></FormularioReceta>
          }
        ></Route>
        <Route
          path='/administrador/editar/:id'
          element={
            <FormularioReceta
              editar={true}
              titulo='Editar receta'
            ></FormularioReceta>
          }
        ></Route>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
