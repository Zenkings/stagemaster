import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Index_menu from "../menu/index_menu";
import Login from "../login/login";
import User from "../utilisateur/index_user";
//import Module from "../module/module";
import Test from "../test/test";
import GestionLots from "../gestion/gestionLots";

const Route_menu = ({ MenuCollapse, theme, logo }) => {
  const Route_Server = "react_app/";
  return (
    <Routes>
      <Route
        path={Route_Server + "accueil"}
        element={<Home MenuCollapse={MenuCollapse} theme={theme} logo={logo} />}
      />
        <Route
        path={Route_Server + "test"}
        element={<Test MenuCollapse={MenuCollapse} theme={theme} logo={logo} />}
      />
      <Route
        path={Route_Server + "gestionLots"}
        element={
          <GestionLots MenuCollapse={MenuCollapse} theme={theme} logo={logo} />
        }/>
      <Route
        path={Route_Server + "menu"}
        element={
          // eslint-disable-next-line react/jsx-pascal-case
          <Index_menu MenuCollapse={MenuCollapse} theme={theme} logo={logo} />
        }
      />
      <Route path={Route_Server + "login"} element={<Login />} />
      <Route
        path={Route_Server + "*"}
        element={<Home MenuCollapse={MenuCollapse} theme={theme} logo={logo} />}
      />
      <Route
        path={Route_Server + "utilisateur"}
        element={<User MenuCollapse={MenuCollapse} theme={theme} logo={logo} />}
      />
      {/*<Route path={Route_Server + "module"} element = {<Module MenuCollapse={MenuCollapse} theme={theme} logo={logo}/>}></Route>*/}
    
      ;
    </Routes>
  );
};
export default Route_menu;
