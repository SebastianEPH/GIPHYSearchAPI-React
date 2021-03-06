import Navbar from "./component/Navbar";
import Main from "./Main";
import React from "react";
import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";


function Routing() {

    const nameRepository = "GIPHYSearchAPI"

  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" exact element={<Main/>}/>
              <Route path={`/${nameRepository}/`} exact element={<Main/>}/> {/*Only Github pages */}
              {/*<Route path="/about" element={*/}
              {/*      <h1>acerca de???  </h1>*/}
              {/*}/>*/}
              <Route path="*" element={<h1>Error 404 Page not found </h1>}/>
          </Routes>
      </BrowserRouter>




  );
}

export default Routing;
