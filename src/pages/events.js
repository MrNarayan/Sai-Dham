import React from "react";
import Header from "../Components/Header";
import Scripts from "../Components/Scripts";
 
const Events = () => {
    return (
        <html lang="en">

<Scripts></Scripts>
<body className="page1">
    
    
<Header current="Events"></Header>

    {/* <!--=======content================================--> */}
    <div className="content">
        <div className="container_12">

            <div className="grid_3">
                <div className="box1">
                    <div id="eventsTree" className="tree">
                    </div>
                    
                </div>
            </div>
            <div className="grid_9">
                <div className="box1">
                    <div id="eventPhotos">
                    </div>

                </div>
            </div>
                <div className="grid_12">
                    

                </div>

            </div>
    </div>
    
    {/* <!--==============================footer=================================--> */}

    <footer>
        <div className="container_12">
            <h2>Jai Shri Sai</h2>
            {/* <!--<p>&copy; 2014 | <a href="www">Sai Parivar Foundation</a></p>--> */}
        </div>
    </footer>
    </body>

</html>
    );
};
 
export default Events;