import React, { Component } from "react";
class Card extends React.Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.props.incrementAllHandler();
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
    this.props.decrementAllHandler();
  };

  render() {
    return (
      <div>
        <div class="card" style={{ width: 18 + "rem" }}>
          <img src={this.props.img} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.description}</p>
            <div>
              <button
                href="#"
                class="btn btn-danger"
                onClick={() => this.decrement()}
                disabled={this.state.count === 0}
              >
                -
              </button>
              <span class="num">{this.state.count}</span>
              <button
                href="#"
                class="btn btn-primary"
                onClick={() => this.increment()}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
