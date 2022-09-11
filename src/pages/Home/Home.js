import React from 'react'
import './Home.css'

import { Link } from "react-router-dom"
const Home = () => {
    return (
        // <div className="container">
        //     <h1 className="text-center" style={{paddingTop: "30%"}}>
        //         Home
        //     </h1>
                    
        // </div>
        <div>
            <div className="banner">
                <video muted autoplay="autoplay" loop className="video-section"> 
                    <source src="video.mp4" type="video/mp4" media=""/> 
                </video>
                <div className="banner-section">

                    <div className="banner-content">
                        <h1>Charotar University of Science and Technology (CHARUSAT)</h1>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <div className="cards">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card01">
                                <div class="card-body">
                                    <h5 class="card-title">Student Feedback</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    
                                    


                                    <a class="login-trigger" href="#" data-target="#login" data-toggle="modal">LOGIN</a>

                                    <div className="pop">

                                        <div id="login" class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                
                                                <div class="modal-content">
                                                    <div class="modal-body">
                                                        <button data-dismiss="modal" class="close">&times;</button>
                                                        <h4>LOGIN</h4>
                                                        <form>
                                                        <input type="text" name="username" class="username form-control" placeholder="Username"/>
                                                        <input type="password" name="password" class="password form-control" placeholder="password"/>
                                                        <input class="btn login-submit" type="submit" value="Login" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card02">
                                <div class="card-body">
                                    <h5 class="card-title">Teacher's Feedback</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    
                                    


                                    <a class="login-trigger" href="#" data-target="#login" data-toggle="modal">LOGIN</a>

                                    <div className="pop">

                                        <div id="login" class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                
                                                <div class="modal-content">
                                                    <div class="modal-body">
                                                        <button data-dismiss="modal" class="close">&times;</button>
                                                        <h4>LOGIN</h4>
                                                        <form>
                                                        <input type="text" name="username" class="username form-control" placeholder="Username"/>
                                                        <input type="password" name="password" class="password form-control" placeholder="password"/>
                                                        <input class="btn login-submit" type="submit" value="Login" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card03">
                                <div class="card-body">
                                    <h5 class="card-title">Parent's Feedback</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="/Parentform" class="login-trigger">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}







            <div id="services" class="services offset-1 section-bg">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="section-title">
                                <h2>Services We Provide</h2>

                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et exercitationem, quaerat placeat labore maxime rerum. Minus veniam ratione labore eos officia, maiores nam autem possimus et nemo dolor itaque provident quis? Corporis dolore fuga cupiditate perspiciatis aliquam maxime autem deserunt illo iusto beatae, minus inventore laboriosam, itaque commodi quo modi. Doloribus impedit aliquam nulla dolorem facilis odio iusto repellat a aliquid sed molestiae, illum fugiat est quasi consequuntur nesciunt, omnis quia eos totam? Voluptatem enim necessitatibus, adipisci harum perspiciatis fugiat aliquam aperiam qui sapiente neque, laudantium optio, dolor eum iste nulla corrupti quisquam dolores ex quis! Pariatur sed repellendus dolore itaque rem voluptatibus quis! Minima consequatur corporis consectetur aperiam maxime, dolorum a consequuntur qui quas quasi nihil veritatis. Quas, numquam!
                                    
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="row">
                                {/* <div class="co-md-6 d-flex align-item-stretch ">
                                    <div class="icon-circle purple">
                                        <div class="icon">
                                            <i class="fas fa-drumstick-bite"></i>
                                        </div>
                                        <h4 class="text-white">Good Hotels</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur 
                                            adipisicing elit. Labore </p>
                                    </div>
                                </div> */}
                                <div class="co-md-6 d-flex align-item-stretch mt-4
                                mt-lg-0">
                                    <div class="icon-circle pink">
                                        <div class="icon">
                                        <i class="fas fa-user-graduate"></i>                                        
                                    </div>
                                        <h4 class="text-white">Student Feedback</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur 
                                            adipisicing elit. Labore </p>
                                    {/* Trigger */}


                                        <a class="login-trigger" href="#" data-target="#login" data-toggle="modal">LOGIN</a>

                                        <div className="pop">

                                            <div id="login" class="modal fade" role="dialog">
                                                <div class="modal-dialog">
                                                    
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button data-dismiss="modal" class="close">&times;</button>
                                                            <h4>LOGIN</h4>
                                                            <form>
                                                            <input type="text" name="username" id="studentid" class="username form-control" placeholder="Username"/>
                                                            <input type="password" name="password" id="password" class="password form-control" placeholder="password"/>
                                                            <input class="btn login-submit" type="submit" value="Login" />
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>

                                    </div>
                                </div>
                                <div class="co-md-6 d-flex align-item-stretch mt-4">
                                    <div class="icon-circle yellow">
                                        <div class="icon">
                                        <i class="fas fa-chalkboard-teacher"></i>                                        
                                    </div>
                                        <h4 class="text-white">Teacher's Feedback</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur 
                                            adipisicing elit. Labore </p>
                                            <a class="login-trigger" href="#" data-target="#login" data-toggle="modal">LOGIN</a>

                                            <div className="pop">

                                                <div id="login" class="modal fade" role="dialog">
                                                    <div class="modal-dialog">
                                                        
                                                        <div class="modal-content">
                                                            <div class="modal-body">
                                                                <button data-dismiss="modal" class="close">&times;</button>
                                                                <h4>LOGIN</h4>
                                                                <form>
                                                                <input type="text" name="username" class="username form-control" placeholder="Username"/>
                                                                <input type="password" name="password" class="password form-control" placeholder="password"/>
                                                                <input class="btn login-submit" type="submit" value="Login" />
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>

                                    </div>
                                </div>
                                <div class="co-md-6 d-flex align-item-stretch mt-4">
                                    <div class="icon-circle blue">
                                        <div class="icon">
                                        <i class="fas fa-user-friends"></i>                                     </div>
                                        <h4 class="text-white">Parent's Feedback</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur 
                                            adipisicing elit. Labore </p>
                                            <a href="/Parentforms" class="login-trigger">Go somewhere</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
            

        

    )
}

export default Home
