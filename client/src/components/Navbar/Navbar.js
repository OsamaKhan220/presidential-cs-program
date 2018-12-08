import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../assets/assets/logo/piaic-white.svg';
import { Link } from 'react-router-dom';
// import withRouter from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal/Modal';

class Navbar extends Component {
    state = { 
        condition:false,
        ai : false,
        cn : false,
        about : false,
        bc : false,
        subs : false
       }
  
  
       hideModal = () => {
         const {condition} = this.state;
         this.setState({condition: false})
       }
      

     catd() {
        var div = document.getElementById('nav-flex-ul');
        var style = getComputedStyle(div);
        var state = style.getPropertyValue('display');
        if (state == 'none') {
            div.style.display = 'block';
        } else if (state == 'block') {
            div.style.display = 'none';
        }
        else if (state == 'flex') {
            div.style.display = 'none';
        }
    }

    render() { 
        console.log(this.state)
        const {condition , ai , cn , bc, about , subs} = this.state;
        return ( 
            <div className="navbar">
            <Modal condition={condition} hideModal={this.hideModal}/>
            
                <div className="container">
                <div className="navbar_cont">
                    <div className="navbar-flex nav-flex-1" onClick={()=>{this.setState({ai : false , cn : false , manageCommitte : false , about : false , subs : false })}}><Link to='/'><img src={logo} /></Link>
                  

                   <div className="hamb-btn" onClick={() => {this.catd()}}>
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC7SURBVGhD7djdCcJAEEXhaAWxFRvSYqwhYCu2YBGKhex6B+7rEJ+ScTkfzNssHMmPkAkAAIys937UXFtri+ZebJZoi0bn5rR802Jp0ejcnJae3i8rGp2bG+aKaO+gKfuMaC7R6FwAQFF6V8+aU7GZnbdOfzhnzUeHSlLbOxqdm9PSw2fKikbn5kb6IXFrvXymnGiLRueu05n/ftgBALvQu5oPdFuJRufmtMQHuq38dEW0xwc6AACwq2n6AiwYumzclQgXAAAAAElFTkSuQmCC" />
                   </div>

                    </div>
                    <div className="navbar-flex nav-flex-2"></div>
                    <div className="navbar-flex nav-flex-3">
                    {/* <p>Aftificial Inteligence</p> */}
                    <ul id="nav-flex-ul">

                    <Link to='/artificial-inteligence'> <li className={ai ? 'active-color' : ''} onClick={()=>{this.setState({ai : true , cn : false , bc : false , about : false , subs : false });this.catd()}}>Artificial Intelligence</li></Link>
                        {/* <BrowserRouter></BrowserRouter> */}
                        <Link to='/cloud-native'>  <li className={cn ? 'active-color' : ''} onClick={()=>{this.setState({ai : false , cn : true , bc : false , about : false , subs : false });this.catd()}}>Cloud Native</li></Link>
                         {/* <li onClick={() => {this.setState({condition: true})}} className="about">About</li> */}
                         <Link to='/block-chain'>  <li className={bc ? 'active-color' : ''} onClick={()=>{this.setState({ai : false , cn : false , bc : true , about : false , subs : false });this.catd()}}>Blockchain</li></Link>

                        
                        
                        <Link to='#'>  <li className={about ? 'active-color' : ''} id="about" onClick={()=>{this.setState({ai : false , cn : false , bc : false , about : true , subs : false })}}>About
                        
                        {/* <div className="drop1 border"> */}
                        <ul className="drop1ul">
                        <Link onClick={()=>{this.catd()}} to='about'><li>President</li></Link>
                        <Link onClick={()=>{this.catd()}} to='managementcommittee'><li>Management Committee</li></Link>
                            
                        </ul>
                        {/* </div> */}
                        
                        </li></Link>
                        {/* <Link to='/managementcommittee'>  <li className={manageCommitte ? 'active-color' : ''} onClick={()=>{this.setState({ai : false , cn : false , manageCommitte : true , about : false , subs : false });this.catd()}}>Management Committee</li></Link> */}

                        {
                          /*
                            <Link to='/apply'>  <li>Apply</li></Link>
                          */      
                        }
                        

                        
                        <Link to='/subscribe'>  <li className={subs ? 'active-color' : ''} onClick={()=>{this.setState({ai : false , cn : false , bc : false , about : false , subs : true });this.catd()}}>Subscribe</li></Link>

                    </ul>
                    
                    
                    
                    </div>
                    
                </div>
                </div>
            </div>
         );
    }
}
 
// export default withRouter(Navbar);
export default Navbar;