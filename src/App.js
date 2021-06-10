import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import TopNav from "./components/TopNav";
import Access from "./pages/Access";
import Landing from "./pages/Landing";

const routes = [
  { path: "/", name: "Home", Component: Landing },
  { path: "/access", name: "Access", Component: Access },
];

function App() {
  // const onEnter = (node) => {
  //   //enter animation
  //   console.log(node, "JO");
  // };

  // const onExit = (node) => {
  //   //enter animation
  //   console.log(node);
  // };
  return (
    <>
      <TopNav />
      {routes.map(({ path, Component, name }) => (
        <Route key={name} path={path} exact>
          {({ match }) => (
            <CSSTransition in={match != null} timeout={600} classNames="page" unmountOnExit>
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
