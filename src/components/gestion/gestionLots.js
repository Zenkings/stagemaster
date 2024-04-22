import React from "react";
import { TitlePage } from "../templates/templates";
import "../../style/style_test.css";
const GestionLots = ({ MenuCollapse, theme, logo }) => {
  return (
    <div className={!MenuCollapse ? "content" : "contentCollapse"}>
      <TitlePage theme={theme} title="Gestion des lots" />
      <div className="rounded-2 shadow-sm bg-white p-2 d-flex gap-3">
        <div className="container-fluid w-70">
          <div className="row">
            <div className="col-md-2 px-0">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical">
                <a
                  className="nav-link-lot active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true">
                  En cours
                </a>
                <a
                  className="nav-link-lot"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false">
                  En attente
                </a>
                <a
                  className="nav-link-lot"
                  id="v-pills-contact-tab"
                  data-bs-toggle="pill"
                  href="#v-pills-contact"
                  role="tab"
                  aria-controls="v-pills-contact"
                  aria-selected="false">
                  Terminés
                </a>
              </div>
              <div className="p-3">
                <p>
                  Total en cours : <span>000</span>
                </p>
                <p>
                  Total en attente : <span>000</span>
                </p>
                <p>
                  Total terminés : <span>000</span>
                </p>
              </div>
            </div>
            <div className="col-md px-0">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="col-2">
                          Lots en cours
                        </th>
                        <th scope="col" className="col-3">
                          Intervenant
                        </th>
                        <th scope="col">Images</th>
                        <th scope="col" className="col-2">
                          Temps estimés
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-custom "
                              role="progressbar"
                              style={{ width: "50%" }} // ajuster la largeur de la barre de progression
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100">
                              <span className="progress-value">
                                50 sur 100
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-custom "
                              role="progressbar"
                              style={{ width: "25%" }} // ajuster la largeur de la barre de progression
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100">
                              <span className="progress-value">
                                25 sur 100
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>
                          <div className="progress ">
                            <div
                              className="progress-bar progress-bar-custom "
                              role="progressbar"
                              style={{ width: "25%" }} // ajuster la largeur de la barre de progression
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100">
                              <span className="progress-value">
                                25 sur 100
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Larry</td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-custom "
                              role="progressbar"
                              style={{ width: "25%" }} // ajuster la largeur de la barre de progression
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100">
                              <span className="progress-value">
                                25 sur 100
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab">
                  <div className="p-2">Profile content...</div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-contact"
                  role="tabpanel"
                  aria-labelledby="v-pills-contact-tab">
                  <div className="p-2">Contact content...</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-50 luminess-bg-color text-white p-2 rounded-2 ">
          <p>
            Laborum velit cupidatat reprehenderit minim magna aliqua enim esse.
            Ex aliqua fugiat aliquip Lorem reprehenderit. Velit elit est velit
            velit sit magna eu cillum non ipsum do sit ea. Dolore ad cillum
            commodo est aliqua Lorem id non consequat sunt et incididunt.
            Reprehenderit consectetur sint id aliqua consectetur irure sunt. Ad
            commodo dolor qui esse elit fugiat consequat laboris eu adipisicing
            ea sunt. Id eu duis in cupidatat tempor occaecat sunt in quis ut.
          </p>
        </div>
      </div>
    </div>
  );
};
export default GestionLots;
