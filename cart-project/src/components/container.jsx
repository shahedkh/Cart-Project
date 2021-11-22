import React, { Component } from "react";
import Card from "./card";
import Navbar from "./navbar";
import Image from "../bruger.png";
import Image2 from "../burger2.jpg";
import Image3 from "../burgerr.jpg";

class Container extends React.Component {
  state = {
    allCounter: 0,
  };
  incrementAll = () => {
    this.setState({ allCounter: this.state.allCounter + 1 });
  };
  decrementAll = () => {
    this.setState({ allCounter: this.state.allCounter - 1 });
  };
  render() {
    return (
      <div>
        <Navbar allCounter={this.state.allCounter} />
        <div class="cont">
          <Card
            incrementAllHandler={this.incrementAll}
            decrementAllHandler={this.decrementAll}
            title="American Beef Burger"
            description="Cheddar cheese ,onion ,tomato, lettuce ,chili sauce and makers sauce"
            img={Image}
          />

          <Card
            incrementAllHandler={this.incrementAll}
            decrementAllHandler={this.decrementAll}
            title="Irish Chiken Burger"
            description="Grilled chicen patty , light cheese , tomato , lettuce "
            img={Image2}
          />

          <Card
            incrementAllHandler={this.incrementAll}
            decrementAllHandler={this.decrementAll}
            title="lorem"
            description="Loredsaffffffffffffffffffff"
            img={Image3}
          />
        </div>
      </div>
    );
  }
}

export default Container;
