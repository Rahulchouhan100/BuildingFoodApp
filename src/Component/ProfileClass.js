// we are going to write class based component
// render method return some jsx
import React from "react";
import Profile from "./Profile";

class ProfileClass extends React.Component {
  render() {
    <>
      <h1>This is Profile class component</h1>
      <Profile />
    </>;
  }
}

export default Profile;
