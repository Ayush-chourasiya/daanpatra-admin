import React from "react";
import "./Card.css";
import UserProfile from "../user-profile/user-profile"
import { Link } from "react-router-dom";
import { colors } from "@material-ui/core";



function dataButton (){

  return(

    <user-Profile/>

  );

}
  


class Card extends React.Component {
  render() {
    return(
        <div className="card">
          <img src={this.props.img} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
                <h1>UserProfile</h1>
            <h5>{this.props.author}</h5>
            <button><Link  to="/user-profile">Data</Link></button>
          </div>
        </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <>
       <div class="header">
         <h1>React Card Component</h1>
         <h3>A simple and responsive card component in React with clean hover effects. Copy and customise.</h3>
       </div>
      
       <div className='cards'>
         <Card
          img='https://picsum.photos/200/300
          '
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler' />
      </div>  
      </>
    )
  }
}




export default Card;

