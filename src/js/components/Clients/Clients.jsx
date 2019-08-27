import React, { Component } from 'react';

class Clients extends Component {
  render() {
      let clients=this.props.clients[0].list.map((v,i)=>{
              return(
              <div key={i} className="col-md-2"><img src={v.img}  class="img-fluid" alt=""/></div>

              )
      })
    return (
        <section id="clients" class="wow fadeInUp" style={{"visibility":" visible"," animation-name":" fadeInUp"}}>
        <div class="container">
  
          <header class="section-header text-center">
            <h3>{this.props.clients[0].title}</h3>
          </header>
          <div className="row mt-4">
              {clients}
            
           </div>
  
          
        </div>
      </section>
    );
  }
}

export default Clients;
