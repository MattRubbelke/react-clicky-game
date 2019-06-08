import React, { Component } from "react";
import Wrapper from "./components/Wrapper/Wrapper"
import Images from "./components/Images/Images"
import Header from "./components/Header/Header"
import icons from "./icons.json";

class App extends Component {
  state = {
    icons,
    score: 0,
    best: 0 
  }

  restartGame = () => {
    if (this.state.score > this.state.best) {
      this.setState({best: this.state.score});
    }
    this.state.icons.forEach(icons => {
      icons.count = 0;
    });
    alert(`Zoinks! Game Over - You clicked the same character twice. \n Your score: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  };

  clickCount = id => {
    this.state.icons.find((order, i) => {
      if (order.id === id) {
        if(icons[i].count === 0){
          icons[i].count = icons[i].count + 1;
          this.setState({score: this.state.score + 1});
          this.state.icons.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.restartGame();
        }
      }
    });
  }

  render() { 
    return(
      <Wrapper>
        <Header score={this.state.score} best={this.state.best}>Saturday Morning Cartoon Clicky Game</Header>
        {this.state.icons.map(icon =>(
          <Images
            image={icon.image}
            id={icon.id}
            key={icon.id}
            clickCount={this.clickCount}
          />
          ))}
      </Wrapper>
    );
  }
}

export default App;
