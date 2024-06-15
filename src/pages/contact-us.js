import React from "react";
import Header from "../Components/Header";
import Scripts from "../Components/Scripts";
import Footer from "../Components/Footer";

const ContactUs = () => {
    return (
        <html lang="en">
        <Scripts></Scripts>
        <body className="page1">
        <Header current="Contact us"></Header>
        {/* <!--=======content================================--> */}
        <div className="content">
            <div className="container_12">

                <div className="grid_12">
                    <br/>
                    <ul className="tabrow">
                        <li className="selected" id="arati">Arati Registration</li>
                        <li id="donation">Monthly Charitable Volunteering Registration</li>
                    </ul>
                    <br/>
                </div>

            </div>

            {/* <!-- *************************** --> */}

            <div className="container_12">

                <div className="grid_12" id="donationdetail">
                    Please let us know if you are interested in participating in our monthly charitable activities. We
                    do a monthly food and clothes drive for the needy every 2nd Sunday of each month. You can
                    participate in the following way either for a month or few months or on long term basis:
                    <br/>
                    <ul className="b">
                        <li>You may provide food and drop off at the temple</li>
                        <li>You may donate clothes</li>
                        <li>You may volunteer to drive and deliver</li>
                        <li>or sign up for all</li>
                    </ul>
                    <br/>
                </div>

                <div className="grid_12">

                    <div id="form-main">
                        <div id="form-div">
                            <form className="form" action="mail.php" method="POST" id="form1">

                                <p className="name">
                                    <input name="name" type="text"
                                           className="validate[required,custom[ ],length[0,100]] feedback-input"
                                           placeholder="Name" id="name" required/>
                                </p>
                                <p className="email">
                                    <input name="email" type="text"
                                           className="validate[required,custom[email]] feedback-input" id="email"
                                           placeholder="Email" required/>
                                </p>
                                <p className="phone">
                                    <input name="phone" type="text"
                                           className="validate[required,custom[phone]] feedback-input" id="phone"
                                           placeholder="Phone" required/>
                                </p>
                                <div id="divMonth">
                                    <p className="month">
                                        <input name="month" type="text"
                                               className="validate[required,custom[],length[0,20]] feedback-input"
                                               id="month" placeholder="Month"/>
                                    </p>
                                </div>
                                <p className="text">
                                    <textarea name="comment"
                                              className="validate[required,length[8,1000]] feedback-input" id="comment"
                                              placeholder="Comment" required></textarea>
                                </p>
                                <input id="subject" name="subject" type="hidden" value="Arati Registration"/>

                                <div className="submit">
                                    <input type="submit" value="Submit" id="button-blue"/>
                                    <div className="ease"></div>
                                </div>

                            </form>

                        </div>
                        <br/>
                    </div>

                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/>

                </div>
                {/* <!-- ********************* --> */}

            </div>
        </div>
        <Footer></Footer>
        </body>

        </html>
    );
};
 
export default ContactUs;