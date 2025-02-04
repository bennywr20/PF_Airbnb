import './App.css'
import { Route, Routes, Outlet } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Home from "../../Client/src/views/Home/home";
import Form from "../src/views/Form/Form/Form"
import AutoRender from './views/autoRender/autoRender';
import Details from './components/detail/CardDetail';
import Account from "./views/UserProfile/Account";
import Team from './views/Team/Team';
import Profile from './views/UserProfile/Profile';
import Anuncio from './views/UserProfile/Anuncio';
import MisAnuncios from './views/UserProfile/MisAnuncios';
import Layout from "./views/DashBoard/shared/Layout";
import Users from './views/DashBoard/Users';
import Properties from './views/DashBoard/Properties';
import DashAdmin from './views/DashBoard/DashAdmin';
import DashRent from './views/DashBoard/DashRent';
import DashBoard from './views/DashBoard/Dashboard';
import Favoritos from "./views/UserProfile/favoritos";
import Rent from './views/UserProfile/Rent';
import Vacaciones from './views/UserProfile/Vacaciones';
// import DashLogin from './views/DashBoard/DashLogin';


function App() {
  
  console.log("esto se ve?");
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedad/:id" element={<Details />} />
        <Route path="/formulario" element={<Form/>} />
        <Route path="/usuario/perfil" element={<Account />} />
        <Route path="/ayuda" element={<Team />} />
        <Route path="/usuario/profile" element={<Profile />} />
        <Route path="/usuario/anuncios" element={<MisAnuncios />} />
        <Route path="/usuario/anuncio/:id" element={<Anuncio />} />
        <Route path="/usuario/favoritos" element={<Favoritos />} />
        <Route path="/usuario/reservas" element={<Rent />} />
        <Route path="/usuario/viajes" element={<Vacaciones />} />



        <Route path="/dashboard/*" element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="users" element={<Users />} />
          <Route path="properties" element={<Properties />} />
          <Route path="admin" element={<DashAdmin />} />
          <Route path="rent" element={<DashRent />} />
        </Route>
        <Route path="/dashboard/login" element={<div>aca va un login </div> } />
        

      </Routes>  
      <AutoRender/>
    </div>
  );
}

export default App;

