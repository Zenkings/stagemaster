import React, { useState, useEffect } from "react";
import { TitlePage } from "../templates/templates";
import axios from "axios";
import Global_url from "../../global_url";
import "../../style/style_test.css";
import { useCookies } from "react-cookie";
import ChartTest from "../chart/chart-test";
import Clock from "../Clock";

var Url = Global_url;

const Test = ({ MenuCollapse, theme, logo }) => {
  const [cookies] = useCookies(["matricule_react"]);
  const [activeUsersCount, setActiveUsersCount] = useState(0); // État pour stocker le nombre d'utilisateurs actifs

  useEffect(() => {
    // Effectuez une requête à votre backend pour récupérer le nombre d'utilisateurs actifs
    axios
      .get(Url + "/getActiveUsersCount")
      .then((response) => {
        setActiveUsersCount(response.data.activeUsersCount);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération du nombre d'utilisateurs actifs :",
          error
        );
      });
  }, []);

  const class_bar_1 = !theme
    ? " bg-white row gap-3 text-white mx-0"
    : " row gap-3 text-white mx-0";

  const class_bar_2 = !theme
    ? " row  mt-3 mx-0 gap-3"
    : " row  text-white mt-3 mx-0 gap-3";

  let matricule = cookies.matricule_react;
  /*const classCard = !theme
    ? " shadow-sm relative rounded-2 bg-white w-100 h-100 "
    : " shadow-sm relative rounded-2 bg-dark bg-gradient w-100 h-100 ";

  const class_info_droite = !theme
    ? "  container shadow-sm rounded-2 bg-white w-100 "
    : " container row row-col shadow-sm rounded-2 gap-3 ";
  const class_info = !theme
    ? " "
    : " row shadow-sm rounded-2 bg-dark bg-gradient text-white h-200";*/

  return (
    <div className={!MenuCollapse ? "content" : "contentCollapse"}>
      <TitlePage theme={theme} title="Tableau de bord" />
      <div className={class_bar_1}>
        <div className="col-4 py-2 shadow-sm rounded-2 bg-dark bg-gradient ">
          <h4>
            Bienvenue <span className="luminess-text-color">{matricule}</span>
          </h4>
          <h5 className="text-news">It's good day</h5>
          <Clock />
        </div>
        <div className="col px-3 py-2 shadow-sm rounded-2 bg-dark bg-gradient ">
          <div>
            <p className="style-val">0000</p>
          </div>
          <p className="text-style">Lots enregistrés</p>
        </div>
        <div className="col px-3 py-2 shadow-sm rounded-2 bg-dark bg-gradient ">
          <div>
            <p className="style-val">0000</p>
          </div>
          <p className="text-style">Images traitées</p>
        </div>
        <div className="col px-3 py-2 shadow-sm rounded-2 bg-dark bg-gradient ">
          <div>
            <p className="style-val">{activeUsersCount}</p>
          </div>
          <p className="text-style">Nombres d'utilisateurs</p>
        </div>
      </div>

      <div className={class_bar_2}>
        <div className="col luminess-bg-color shadow-sm rounded-2">
          <p className="text-style pt-3">Listes des ressources</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>

          <div className={
          !theme
            ? " row bg-white rounded-bottom shadow-sm"
            : " row bg-dark text-white"
        }>
            <p className="text-style pt-3">Listes des ressources</p>
            <div className="col-7">
              <ChartTest />
            </div>
            <div className="col-5">
              Officia labore veniam ullamco id magna non ea fugiat esse dolor.
              Do id reprehenderit tempor officia eiusmod ea consectetur duis
              enim aliquip dolore non commodo cillum. Velit voluptate veniam et
              quis nulla ea incididunt.
            </div>
          </div>
        </div>
        <div className="col luminess-bg-color">
          Mollit nostrud mollit Lorem eu laborum est irure pariatur. Non
          adipisicing incididunt qui eiusmod cupidatat in incididunt
          reprehenderit labore elit ad. Ut ullamco pariatur ex qui officia enim
          veniam. Eiusmod esse irure laborum enim mollit. Id ullamco quis in
          aliqua occaecat exercitation qui. Non ullamco adipisicing in cillum
          ipsum reprehenderit nostrud do.
        </div>
      </div>
    </div>
  );
};
export default Test;
