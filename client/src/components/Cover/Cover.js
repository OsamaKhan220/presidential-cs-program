import React, { Component } from "react";
import logo from "../../assets/piaic-logo.svg"
import "./Cover.css"

class Cover extends Component {
    render() {
        return (
            <div ref={(el) => this.props.parentThis.CoverPage = el} className="container-fluid my-container-2">
                <div className="container">
                    <div className="my-main">
                        <img src={logo} className="piaic-logo" alt="logo" />
                        <p className="my-text" >Presidential Initiative for<br />
                            Artificial Intelligence and Computing (PIAIC)</p>
                        <a onClick={this.props.cover} className="Rectangle-109">Launch</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cover;