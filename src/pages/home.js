import React from "react";
import "../styles.css"
import "../css/camera.css"
import "../css/autoscroll.css"
import "../Components/Header"
import Header from "../Components/Header";
 
const Home = () => {
    return (
        <div>
            <Header current="Home"></Header>
            <div className="container_12">
                <div className="grid_3">
                    <div className="box">
                        <img src="images/Saiimages/Sai4.jpg" alt=""/>
                        <div className="pad1">
                            <a href="/sai-baba">Shri Shirdi Sai Baba</a>
                            <text>
                             is revered as one of the greatest saints ever seen in India, endowed with
                            unprecedented powers, and is worshipped as a God incarnate. (SAI meaning Sakshaat Ishwar) -
                            GOD THE ABSOLUTE ...
                            </text>
                        </div>
                    </div>
                </div>
                <div className="grid_6">
                    <div className="slider_wrapper">
                        <div id="camera_wrap" className="">
                            <div data-src="RotatingImages/1.JPG"></div>
                            <div data-src="RotatingImages/2.JPG"></div>
                            <div data-src="RotatingImages/3.JPG"></div>
                            <div data-src="RotatingImages/4.JPG"></div>
                            <div data-src="RotatingImages/5.JPG"></div>
                            <div data-src="RotatingImages/6.jpeg"></div>
                        </div>
                    </div>
                </div>
                <div className="grid_3">
                    <div className="box">
                        <img src="images/Saiimages/guruji.jpg" alt=""/>
                    </div>
                </div>
            </div>

            <div className="container_12">
                <div className="grid_3">
                    <div className="box maxheight">

                        <div className="pad1">
                            <div className="title">Opening Hours</div>
                            <div className="pad13">
                                <ul className="b">
                                    <li>Every day from 6 PM to 9 PM</li>
                                    <li>6:30 PM - Dhoop Aarati</li>
                                    <li>8:30 PM - Seja Aarati</li>
                                    <li>
                                        Sai Sandhya on every Thursday and Saturday 6:30 PM

                                        <ul className="b">
                                            <li>Sandhya Aarati</li>
                                            <li>Meditation for 15 minutes</li>
                                            <li>Recital of Sai Satcharita</li>
                                            <li>Bhajans (group music)</li>
                                            <li>Prasadam</li>
                                        </ul>

                                    </li>
                                </ul>
                            </div>
                            <br/>
                            <a href="https://maps.app.goo.gl/Pi6b2idtonBY5afNA">Temple Address</a>
                            <br/>
                            1805 136th place NE Suite 101<br/>
                            Bellevue, WA 98005<br/><br/>
                        </div>
                    </div>
                </div>
                <div className="grid_6">

                    <div className="box maxheight">

                        <div className="pad1">

                            <div className="title">Guruji's Messages</div>
                            <div className="pad10">
                                <div>"In happiness one should not be so absorbed that he does not notice the suffering
                                    of the less fortunate and the miserable fellow beings. The saints forget their own
                                    suffering by enjoying the happiness that they give to their devotees"<br/><br/>
                                </div>
                                <div>"Every shock in life makes one stronger if he does not breakdown. A wise man turns
                                    suffering to creativity and the unwise one to morbidity. Why channelise the impact
                                    of pain to morbidity? Why not to creativity? The Spiritual Masters teach the art of
                                    creativity to their disciples."<br/><br/></div>
                                <div>"The little lamps that has been kindled in us by the Lord is for lighting other
                                    lamps. None on this earth received enlightenment who had not been taught the lesson
                                    to distribute it's energy among others. We should pray for being taught the lesson
                                    to enkindle others before we wish to be kindled. This path is easier."
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="grid_3">
                    <div className="box maxheight">
                        <div className="pad1">
                            <div className="title">Upcoming community service events</div>
                            <br/>
                            <ul className="b">
                                <li>Coming soon!</li>
                            </ul>
                            <br/>
                            <a href="/about-us#whycharity">Why we do it</a>
                            <br/>
                            <div className="title">Upcoming cultural events</div>
                            <br/>
                            <ul className="b">
                                {/* <a href="MahaShivaratri.jpg"><li style={{text-decoration: "underline;"}}>Maha Shivaratri and Akhand Parayan (24th Feb)</li></a> */}
                            </ul>
                            <br/>
                            <a href="https://www.facebook.com/ShirdiSaiDhamBellevue">Previous Events</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="content page1">

            </div>


            <div style={{height: '100px'}}>

            </div>

            <footer>
                <div className="container_12">
                    <h2>Jai Shri Sai</h2>
                    <a href="/login" className="btn">Login</a>
                    <a href="/sign-up" className="btn">Sign Up</a>
                </div>
            </footer>
        </div>
    );
};
 
export default Home;