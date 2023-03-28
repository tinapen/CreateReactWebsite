import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destination!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="/public/images/img-9.jpg"
              text="Explore the hidden waterfall deep insidee the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/public/images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="/public/images/img-3.jpggg"
              text="Sea Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="/public/images/img-4.jpg"
              text="Experience Football on Top of the Himalayan Mountains"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/public/images/img-8.jpg"
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
