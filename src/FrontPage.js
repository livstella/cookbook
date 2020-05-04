import React from "react"
import "./front-page-style.css";

export default()=>{
    return(
        <div>
          <div className="front-text">
            <h1>Welcome to our recipe blog </h1>
            <h5>To jump straight to our recipes click the menu on the left</h5>
            <h6>But as a true blog we want to tell you about our process making this. So if you want to know more of the valueable lessons weve learned due scroll down</h6>
         </div>    
         <hr></hr>
            <div className="front-page-wrapper">
                <div className="front-card" >
                <img className="card-img-top" id="firstImg"src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fih1.redbubble.net%2Fimage.30416963.4324%2Fsticker%2C375x360.u7.png&f=1&nofb=1" alt="CSS is awesome"/>
                <div className="card-body">
                <h5 className="card-title">CSS is awesome</h5>
                <p className="card-text">How much we can do with CSS and how straight forward it is.</p>
                </div>
            </div>

            <div class="front-card" >
                <img className="card-img-top" src="https://devhumor.com/content/uploads/images/April2020/javascrip_semicolon.jpg" alt="Does JS need an ;"/>
                <div className="card-body">
                <h5 className="card-title">Using JS logic</h5>
                <p className="card-text">We have definetly learned that JavaScript always makes sense!</p>
                </div>
            </div>

            <div className="front-card" >
                <img className="card-img-top" id="img-three"src="https://devhumor.com/content/uploads/images/March2020/code_doing_tasks.jpg" alt="Me shouting at my computer"/>
                <div className="card-body">
                <h5 className="card-title">Debugging</h5>
                <p className="card-text">The simple and beatiful process of debuggin our code. A pretty process that is definetly suitable to be shared</p>
                </div>
            </div>
        </div>
      </div>
    )
}
