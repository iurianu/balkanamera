import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import * as Component from "./components";
import * as Page from "./pages";


function App() {
  return (
      <>
    <Router>
        <Component.TopBar />
      
        <Switch>
            <Route exact path="/"><Page.Home /></Route>
            <Route path="/about"><Page.About /></Route>
            <Route path="/audio"><Page.Audio /></Route>
            <Route path="/video"><Page.Video /></Route>
            <Route path="/news"><Page.Events /></Route>
            <Route path="/contact"><Page.Contact /></Route>
            <Route component={() => <Page.NotFound />}></Route>
        </Switch>
      
        <Component.Footer />
    </Router>
      </>
  );
}

export default App;
