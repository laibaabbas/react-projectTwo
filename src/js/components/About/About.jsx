import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
          
          <div class="container">
        <div class="row">

          <div class="col-lg-5 ">
            <div class="about-img">
              <img src={this.props.about[0].about_img} alt=""/>
            </div>
          </div>

          <div class="col-lg-7 ">
            <div class="about-content">
              <h2>{this.props.about[0].about_heading}</h2>
              <h3>{this.props.about[0].about_title}</h3>
              <p>{this.props.about[0].about_para1}</p>
              <p>{this.props.about[0].about_para2}</p>
              <ul>
                <li><i class="fa fa-check-square"></i> {this.props.about[0].point1}</li>
                <li><i class="fa fa-check-square"></i> {this.props.about[0].point2}.</li>
                <li><i class="fa fa-check-square"></i> {this.props.about[0].point3}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default About;
