import { Fragment, Suspense, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import { HomePage } from '../pages/HomePage';
import { routes } from "../routes/routes";


export const Sidebar = () => {

  const { logout } = useContext(AuthContext)

  return (
    <Suspense fallback={<span>Loading...</span>}>

      <>
        <Fragment>
          <div className="wrapper">

            <nav id="sidebar" >
              <div className="sidebar-header" >
                <h3 style={{ color: '#ccc' }}>
                  <NavLink to="/home">Home </NavLink>
                </h3>
              </div>
              <ul className="list-unstyled components">
                
                {/* <li>
                  <NavLink to="/home">Home <i className="bi bi-arrow-down" style={{ marginTop: '10px' }}></i></NavLink>
                </li> */}

                {
                  routes.map(({ name, path }, i) => (
                    <li key={i}>
                      <NavLink key={i} to={path}>{name}</NavLink>
                    </li>
                  ))

                }

              </ul>

              <div className="form-group d-grid gap-2 mt-1"
                style={{
                  position: 'fixed',
                  //width: '30%',
                  bottom: '10px',
                  marginLeft: '20px'
                  //border: '3px solid #8AC007',
                }}>


                <button className="btn btn-danger" onClick={logout}>
                  Logout
                </button>
              </div>

            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
              {
                routes.map(({ path, component: Component }) => (
                  <Route path={path} element={<Component />} />
                ))
              }

            </Routes>
          </div>
        </Fragment>

      </>
    </Suspense>

  );
}