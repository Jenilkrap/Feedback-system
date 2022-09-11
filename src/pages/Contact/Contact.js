import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
    <section class="contact mt-3">
        <div class="container">
            <div class="section-title">
                <h2 class="text-center">
                    contact us
                </h2>
                <p class="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, atque?
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-md-12">
                        <div class="icon-box">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="icon-box mt-4">
                            <i class="fas fa-envelope"></i>
                            <h3>Email Us</h3>
                            <p>Info@example.com</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="icon-box mt-4">
                            <i class="fas fa-phone"></i>
                            <h3>24/7 support</h3>
                            <p>+91 1234567890</p>
                        </div><br />
                    </div>
                    
                    <div class="icon-box icon02">
                        </div>
                    </div>
            </div>
            <div class="col-lg-6">
                <form>
                    <div class="form-row">
                        <div class="col-md-6 form-group">
                            <input type="type"name="name"class="form-control"
                            id="name"placeholder="your name"/>
                        </div>
                        <div class="col-6 form-group">
                            <input type="email"name="email"class="form-control"
                            id="email"placeholder="your email"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control"name="subject"
                        id="subject"placeholder="subject"/>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control"name="message"row="6"
                        placeholder="Message"></textarea>
                    </div>
                    <div><a href="#" class="btn btn-about">Send Messages</a></div>
                </form>
            </div>
        </div>
    </section>    )
}

export default Contact
