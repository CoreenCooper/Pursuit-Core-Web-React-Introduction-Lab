import React from "react";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";
import "./index.css";
import "./App.css"

const App = () => {
  return (
    <div id="App">
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
};

export default App;
