import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import youtubeIcon from '../../assets/ytIconColor.svg';
import facebookIcon from '../../assets/fb-logo.png';
import twiterIcon from '../../assets/twitter-icon.png';
import president from '../../assets/president.png';


class About extends Component {
    state = { 
      

     }


    render() { 
      
        return ( 
            <div>
              
            <div className="aboutCont App">
            {/* <div className="closeBtnBox">
              <div className="close"  onClick={() => {this.props.hideModal()}}>+</div>

            </div> */}
              <div className="d-flex justify-content-center align-items-center">
             <div className="cardArea ">
                <div className="imgHead">
                {/* <center> */}
                   <div className="greenCir"></div>
                   <div className="whiteCir3" style={{backgroundImage: "url("+president+")",backgroundPosition: "top"}}></div>
                   <div className="imgDiv"></div>

                {/* </center> */}
                </div>
                <h1>Dr. Arif Alvi</h1>
                <p>President of the Islamic republic of Pakistan</p>
                <div className="spans d-flex justify-content-center align-items-center">
                <div>
                <ul>
                <li> 
                  <a target="_blank" href="https://www.facebook.com/Dr.ArifAlvi/">
                  <img  className="span" src={facebookIcon} />
                  </a></li>
                  <li> <a target="_blank" href="https://twitter.com/ArifAlvi">
                  <img  className="span" src={twiterIcon} /></a></li>
                  {/* <li> <img  className="span" src={youtubeIcon} /></li> */}
                </ul>
                </div>
              
                </div>
                
                
              </div>
            
            </div>

            <div className="modalPCont d-flex justify-content-center align-items-center">

                <p style={{textAlign: "justify"}}>
                Arif-ur-Rehman Alvi, born 29 August 1949 is a Pakistani politician who is the 13th and current President of Pakistan, in 
office since 9 September 2018. He was a member of the National Assembly of Pakistan from June 2013 to May 2018 
and again from August to September 2018. A founding member of Pakistan Tehreek-i-Insaf (PTI), Alvi was elected as 
President of Pakistan on 4 September 2018 following the presidential election.

Dr. Alvi did BDS from Lahore and was declared the ‘Best Graduate’ of the University. He underwent his first 
postgraduate training for two years at the University of Michigan, where he was awarded Master of Science in 
Prosthodontics (MS). He was the first Pakistani to have acquired this professional qualification. In 1982 he joined the 
two-year Orthodontic training program at the University of Pacific in San Francisco where was awarded the Master of 
Science in Orthodontics (MSD). Dr. Alvi was again the first Pakistani to specialize in Orthodontics and is also the only 
Pakistani who is a specialist not in one, but two major fields of dentistry. In 1995 he was awarded Diplomate American 
Board of Orthodontists and became one of ten Asians and the only Muslim, Pakistani, or SAARC dentist to have 
achieved this level of qualification. Professional achievements: Dr. Alvi has been the President of the Pakistan Dental 
Association. He was Chairman of the first Pakistan International Dental Conference in 1981. In 1987 too he was 
Chairman of the Third Pakistan International Dental Conference which was inaugurated by Prime Minister Junejo. He 
was the Patron of the Fifth Pakistan International Dental Conference inaugurated by the President of Pakistan and the 
Chairman of the 28th Asia Pacific Dental Congress. Dr. Arif was awarded the Fellowships of The International College 
of Dentists, The American College of Dentists and The Pierre Fauchard Academy in recognition of his outstanding 
academic, clinical and professional achievements. He is the Dean of the Faculty of Orthodontics of the College of 
Physicians and Surgeons Pakistan.

Academics:
BDS (Dentistry) from Lahore affiliate from De’Montmorency College of Dentistry

Master of Science degree in Prosthodontics from the University of Michigan

Master of Science in Orthodontics in from University of the Pacific, San Francisco
                </p>
                
            </div><br />
               
               {/* <button className="modalBtn2" onClick={() => {this.props.hideModal()}}>Close</button> */}
            </div>
          </div> 
           
         );
    }
}
 
export default About;