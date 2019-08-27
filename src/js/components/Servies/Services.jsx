import React, { Component } from 'react';

class Services extends Component {
  render() {
    let cards=this.props.services[1].cards.map((v,i)=>{
      return(
<div key={i} class="col-sm-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style={{"visibility": "visible", "animation-duration": "1.4s", "animation-name": "bounceInUp"}}>
    <div class="box">
      <div class="icon" style={{"background": ` ${v.icon_bg}`}}><i className="fa fa-code" style={{"color": ` ${v.icon_bg}`}}></i></div>
      <h4 class="title"><a href="">{v.title}</a></h4>
      <p class="description">{v.description}</p>
    </div> 
  </div>
      )
    })
    return (
  <section id="services" className="section-bg">
 <div class="container">

<header className="section-header text-center">
  <h3>{this.props.services[0].title}</h3>
  <p>{this.props.services[0].parah}</p>
</header>

<div class="row">
  {cards}

</div>

</div>
  </section>
       
    );
  }
}

export default Services;
