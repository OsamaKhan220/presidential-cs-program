import React, { Component } from 'react';
import './home.css';
import News from './News/News';
import Programs from './Programs/Programs';
import Footer from '../Footer/Footer';
import HomeVideo from './HomeVideo/HomeVideo';
import Countdown from './Countdown/Countdown';
import SupportingPartners from './SupportingPartners/SupportingPartners';
import Cover from "../Cover/Cover"




class Home extends Component {
  constructor() {
    super();
    this.state = {
      showed: JSON.parse(localStorage.getItem("showed")) ?
       true : false
    }
  }
  cover = () => {
    this.CoverPage.className += " slide "
    localStorage.setItem("showed",true);
  }
  render() {
    const currentDate = new Date();
    const {showed} = this.state;
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div>
      {!showed && <Cover cover={this.cover} parentThis = {this} />}
     <div className="App">

     
        <HomeVideo />
        <Programs />
        <SupportingPartners />

        

        
        {/* {
          
          <News />
          
        } */}
        
        <Footer />
      </div >
      </div>
    );
  }
}

export default Home;
