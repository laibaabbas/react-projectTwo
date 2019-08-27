import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
      let filter=this.props.portfolio[0].flters.map((v,i)=>{
          return(
            <li key={i} data-filter={v.filter} class="">{v.list} </li>
          )
      })
      let items=this.props.portfolio[0].container.map((v,i)=>{
          return(
            <div key={i} class={`col-lg-4 col-sm-6 p-2 portfolio-item ${v.class}`} >
            <div class="portfolio-wrap">
              <img src={v.img} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4><a href="#">{v.h2}</a></h4>
                <p>{v.para} </p>
                
              </div>
            </div>
          </div>
          )
      })
    return (
        <section id="portfolio" >
        <div class="container">
  
          <header class="section-header text-center">
            <h3 class="section-title"> {this.props.portfolio[0].title} </h3>
          </header>
  
          <div class="row">
            <div class="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">All</li>
                {filter}
               
              </ul>
            </div>
          </div>
  
          <div class="row portfolio-container" style={{" height": "384.797px"}}>
  {items}
          {/* <div class="col-lg-4 col-sm-6 portfolio-item filter-app" >
            <div class="portfolio-wrap">
              <img src="https://bootstrapmade.com/demo/themes/Rapid/img/portfolio/app1.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4><a href="#">App 1</a></h4>
                <p>App</p>
                
              </div>
            </div>
          </div> */}
  
          </div>
  
        </div>
      </section>
    );
  }
}

export default Portfolio;
