import React, { Component } from "react";
import data from "./Data"
import Header from './Header/Header';
import About from './About/About';
import Services from "./Servies/Services";
import Portfolio from "./Portfolio/Portfolio";
import Team from './Team/Team';
import Clients from './Clients/Clients';
import Footer from './Footer/Footer';


class App extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        data:data
      }
    }
  
  render() {
    return (
      <div >
        

      <Header header={this.state.data[0].header} nav={this.state.data[0].nav}/>

   <About about={this.state.data[0].about} />
   <Services services={this.state.data[0].services}/>
   <Portfolio portfolio={this.state.data[0].portfolio} />
   <Team team={this.state.data[0].Team}/>
   <Clients clients={this.state.data[0].clients} />
   <Footer footer={this.state.data[0].footer}/>


   
      </div>
    );
  }
}
export default App;
