import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SupportingPartners.css';
import psx2Logo from '../../../assets/psx2.png';
import panacloudLogo from '../../../assets/panacloudLogo.svg';
import iqraLogo from '../../../assets/iqraLogo2.jpeg';
import saylaniLogo from '../../../assets/saylaniLogo.png';
// import saylaniLogo from '../../../assets/';

class SupportingPartners extends Component {

    state = {}
    render() {
        return (
            <div className="supportingBg">
                <div className="container App supportingCont" style={{paddingBottom: "380px",paddingTop: "50px"}}>
                    <div className="row">
                        <div className="col-12 mt-2 d-flex justify-content-center align-items-center">
                            <p>SUPPORTING PARTNERS</p>
                        </div>
                        <div className="col-12 mt-4 mb-4 supporterIcons d-flex justify-content-center align-items-center">
                            <div className="">
                                <ul>
                                    <a href="https://iqra.edu.pk/" target="_blank" rel="noopener noreferrer"> <li><img src={iqraLogo} className="SIimg1" alt="iqra-logo"/></li></a>
                                    <a href="https://www.panacloud.ai/" target="_blank" rel="noopener noreferrer"> <li><img src={panacloudLogo} alt="panacloud-logo" /></li> </a>
                                    <a href="https://www.psx.com.pk/" target="_blank" rel="noopener noreferrer"> <li><img src={psx2Logo} alt="pak-stock-logo" /></li></a>
                                    <a href="http://www.saylaniwelfare.com/" target="_blank" rel="noopener noreferrer"> <li><img src={saylaniLogo} alt="saylani-logo" /></li></a>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default SupportingPartners;