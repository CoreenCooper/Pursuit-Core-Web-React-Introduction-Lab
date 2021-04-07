import React from "react";
import '../Styles/UserProfile.css'

const UserProfile = () => {
  return (
    <section id="Profile" className="Flex">
      <img
        src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
        alt="profile"
      />
      <section className="Description">
        <h1>Jordan Walke</h1>
        <h4>React Creator</h4>
        <p>Lorem Ipsem</p>
      </section>
    </section>
  );
};

export default UserProfile;
