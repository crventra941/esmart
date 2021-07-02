import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "./components/home/container";
import ServicesContainer from "./components/services/container";
import ProjectsContainer from "./components/projects/container";
import ProjectContainer from "./components/project/continer";
import ContactContainer from "./components/contact/container";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App animate__animated animate__fadeIn">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/services/:id" component={ServicesContainer} />
          <Route exact path="/projects" component={ProjectsContainer} />
          <Route exact path="/project/:id" component={ProjectContainer} />
          <Route exact path="/contact" component={ContactContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
