import React from 'react';
import MyTitle from "../UI/MyTitle/MyTitle";
import morty from "../img/morty.jpg"
import "./HomePage.scss"
const HomePage = () => {
  return (
    <>
      <MyTitle>Welcome to the master Rick and Morty web-site!</MyTitle>
      <div className="container">
        <p className="description">
          Here you can see persons from this movie and check all the information about them.
          Just choose one word from the header
        </p>
      </div>
      <div className="container">
        <div className="rick">
          <img src={morty} className="photo-rick" alt=""/>
        </div>
      </div>
    </>
  );
};

export default HomePage;