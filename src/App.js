import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Access from "./pages/Access";
import Dashboard from "./pages/Dashboard";
import Institutions from "./pages/Institutions";
import Landing from "./pages/Landing";
import Posts from "./pages/Posts";
import Profiles from "./pages/Profiles";
import Stocks from "./pages/Stocks";

const routes = [
  { path: "/", name: "Home", Component: Landing },
  { path: "/access", name: "Access", Component: Access },
  { path: "/confidential", name: "Confidential", Component: Dashboard },
  { path: "/users", name: "Users", Component: Profiles },
  { path: "/posts", name: "Posts", Component: Posts },
  { path: "/stocks", name: "Stocks", Component: Stocks },
  { path: "/institutions", name: "Institutions", Component: Institutions },
];

function App() {
  return (
    <>
      {routes.map(({ path, Component, name }) => (
        <Route key={name} path={path} exact>
          {({ match }) => (
            <CSSTransition in={match != null} timeout={500} classNames="page" unmountOnExit>
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  );
}

export default App;
