import React from 'react'
import './Footer.css'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
const Footer = () => {
    return (
        <div className="container-fluid">
            <hr className="default" />
            <div className="row mg row-footer">
                <div className="col-4 offset-1 col-sm-3 links">
                <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="./Home">Home</a></li>
                        <li><a href="./About">About</a></li>
                        <li><a href="./Gallery">Gallery</a></li>
                        <li><a href="./Contact">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-3 address">
                    <h5>Our Address</h5>
                    <address>
                      121, Clear Water Bay Road<br/>
		              Clear Water Bay, Kowloon<br/>
		              INDIA<br/>
                      <i class="fa fa-phone fa-lg"></i> +91 123 4567 890<br/>
		              <i class="fa fa-fax fa-lg"></i> +91 123 4567 890<br/>
                      <i class="fa fa-envelope fa-lg"></i> <a href="mailto:confusion@food.net">confusion@food.net</a>


                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-lg"></i>r</a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube fa-lg"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o fa-lg"></i></a>
                    </div>
                </div>

            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>?? Copyright 2018 Ristorante Con Fusion</p>
                </div>
           </div>
 
        </div>
    )
}

export default Footer
