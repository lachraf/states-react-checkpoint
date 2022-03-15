import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  state = {

    count:0,
    shows: true,

    person: {
      fullName: "Achraf Sallem",
      bio: "Web developer",
      imgSrc:
        "https://scontent.ftun16-1.fna.fbcdn.net/v/t1.18169-9/1525334_699412493412777_1016125961_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RgBJjYBLRFEAX8vpKsM&tn=gp38E0t2ivk5RDvC&_nc_ht=scontent.ftun16-1.fna&oh=00_AT_T3vGXJMUOBhs-gWae4n-dV6y8suoY4Lm4DNbIWWUVtw&oe=62567CC8",
      profession: "Technicien",
    },

  };

  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }

  componentDidMount=()=>{
    setInterval(()=>{
      this.setState({count:this.state.count+1}) 
    }, 1000);

  }


  Handleshows = () => {
    this.setState({ shows: !this.state.shows });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
        <button className={this.state.shows?"buttonHide":"buttonShow"} onClick={this.Handleshows}> {this.state.shows?'Hide':"Show"} </button>
        </div>
        {this.state.shows && (
          <div >
            <div className='counter'>
            <h2> COUNTER </h2>
            <div>
            <button>{this.state.count}</button>
            </div>
            </div>
            <h1> {this.state.person.fullName}</h1>
            <h1> {this.state.person.bio} </h1>
            <img src={this.state.person.imgSrc} alt="" />
            <h1> {this.state.person.profession} </h1>
            <div className='plusmoins'>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            </div>
          </div>
          ) 
          }
      </div>
    );
  }
}
