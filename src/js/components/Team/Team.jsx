import React, { Component } from 'react';

class Team extends Component {
  render() {
      let profil=this.props.team[1].cards.map((v,i)=>{
          return(
            <div key={i} class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={v.anim} 
            style={{"visibility": "visible", "animation-delay": `${v.anim}`," animation-name":" fadeInUp"}}>
              <div class="member">
                <img src={v.img} class="img-fluid" alt=""/>
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>{v.name} </h4>
                    <span>{v.title}</span>
                    <div class="social">
                      <a href=""><i class="fa fa-twitter"></i></a>
                      <a href=""><i class="fa fa-facebook"></i></a>
                      <a href=""><i class="fa fa-google-plus"></i></a>
                      <a href=""><i class="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      })
    return (
        <section id="team" class="section-bg">
        <div class="container">
          <div class="section-header">
            <h3>{this.props.team[0].title} </h3>
            <p>{this.props.team[0].parah}</p>
          </div>
  
          <div class="row">
  
            
  
           {profil}
            
          </div>
  
        </div>
      </section>
    );
  }
}

export default Team;
