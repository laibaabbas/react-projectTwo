import React, { Component } from 'react';
import Nav from "../Nav/Nav";

class Header extends Component {
  render() {
    return (
      <div className="header " style={{"background-image":`url(${this.props.header.header_bg_img})`}}>
           <Nav  nav={this.props.nav}/>

           <div class="container d-flex h-90">
      <div class="row justify-content-center align-self-center ">
        <div class="col-md-6 intro-info order-md-first order-last">
          <h2>{this.props.header[0].header_title[0]}<br/>{this.props.header[0].header_title[1]}<br/>
           <span>{this.props.header[0].header_title[2]}</span></h2>
          <div>
            <a href="#about" class="btn-get-started scrollto">{this.props.header[0].btn}</a>
          </div>
        </div>
  
        <div class="col-md-6 intro-img order-md-last order-first">
          <img src={this.props.header[0].img} alt="" class="img-fluid"/>
        </div>
      </div>

    </div>
            </div>
    );
  }
}

export default Header;
