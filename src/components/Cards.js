import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Image9 from "./public/images/img-9.jpg";
import Image2 from "./public/images/img-2.jpg";
import Image3 from "./public/images/img-3.jpg";
import Image4 from "./public/images/img-4.jpg";
import Image8 from "./public/images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destination!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src={Image9}
              text="Explore the hidden waterfall deep insidee the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Image2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src={Image3}
              text="Sea Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={Image4}
              text="Experience Football on Top of the Himalayan Mountains"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Image8}
              text="Rides through the Sahara Dessert on a guided camel tour"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
