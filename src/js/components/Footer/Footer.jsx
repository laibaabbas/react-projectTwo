import React, { Component } from 'react';

class Footer extends Component {
  render() {
   let links=this.props.footer[2].info_list.map((v,i)=>{
     return(
      <li key={i}><a href="#">{v.items} </a></li>

     )
   })
    return (
        <footer id="footer" class="section-bg">
        <div class="footer-top">
          <div class="container">
    
            <div class="row">
    
              <div class="col-lg-6">
    
                <div class="row">
    
                    <div class="col-sm-6">
    
                      <div class="footer-info">
                        <h3>{this.props.footer[0].title} </h3>
                        <p>
                       {this.props.footer[0].para}
                       </p>
                      </div>
    
                      <div class="footer-newsletter">
                        <h4>{this.props.footer[1].title}</h4>
                        <p>
                        {this.props.footer[1].para}</p>
                        <form action="" method="post">
                          <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                        </form>
                      </div>
    
                    </div>
    
                    <div class="col-sm-6">
                      <div class="footer-links">
                        <h4>{this.props.footer[2].title}</h4>
                        <ul>
                          {links}
                         
                        </ul>
                      </div>
    
                      <div class="footer-links">
                        <h4>{this.props.footer[3].title}</h4>
                        <p>
                        {this.props.footer[3].address[0]} <br/>
                        {this.props.footer[3].address[1]}<br/>
                        {this.props.footer[3].address[2]} <br/>
                          <strong>Phone:</strong> {this.props.footer[3].phone}<br/>
                          <strong>Email:</strong> {this.props.footer[3].email}<br/>
                        </p>
                      </div>
    
                      <div class="social-links">
                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                      </div>
    
                    </div>
    
                </div>
    
              </div>
    
              <div class="col-lg-6">
    
                <div class="form">
                  
                  <h4>{this.props.footer[4].title}</h4>
                  <p>{this.props.footer[4].para}</p>
                  <form action="" method="post" role="form" class="contactForm">
                    <div class="form-group">
                      <input type="text" name="name" class="form-control" id="name" placeholder={this.props.footer[4].name} data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                      <div class="validation"></div>
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control" name="email" id="email" placeholder={this.props.footer[4].email} data-rule="email" data-msg="Please enter a valid email"/>
                      <div class="validation"></div>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" name="subject" id="subject" placeholder={this.props.footer[4].sub} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"/>
                      <div class="validation"></div>
                    </div>
                    <div class="form-group">
                      <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                      <div class="validation"></div>
                    </div>
    
                   
                
    
                    <div class="text-center"><button type="submit" title="Send Message">{this.props.footer[4].btn}</button></div>
                  </form>
                </div>
    
              </div>
    
              
    
            </div>
    
          </div>
        </div>
    
        <div class="container">
          <div class="copyright text-center">
          {this.props.footer[5].copyright[0]} <strong>{this.props.footer[5].copyright[1]} </strong>{this.props.footer[5].copyright[2]}
          </div>
          
        </div>
      </footer>
    )
  }
}

export default Footer;
