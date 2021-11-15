import "./App.css";
import React from "react";
import ProfilePhoto from "./component/profil/profile_photo";
import FullName from "./component/profil/Fullname";
import Adress from "./component/profil/Adress";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
