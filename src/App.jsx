import React from "react";
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";
import Home from "./Home";
import Resource from "./Resources";
import Loader from "./components/Loader";
import Event from "./Event";
import Teams from "./Teams";
import Member from "./Member";
import Contact from "./Contact"
import Join from "./JoinUs"
import PageLoading from "./hooks/PageLoading";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"

export default function App() {
  const isLoading = PageLoading();

  if (isLoading) {
    return <Loader />;
  }


  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Event} />
          <Route exact path="/member" component={Member} />
          <Route path="/resources" component={Resource} />
          <Route path="/teams" component={Teams} />
          {/* <Route path="/gallery" component={Gallery} /> */}
          <Route path="/contact" component={Contact} />
          <Route path="/join" component={Join} />
        </Switch>
        <Foot />
      </div>
    </BrowserRouter>
  );
}
