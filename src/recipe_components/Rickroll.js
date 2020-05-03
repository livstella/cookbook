import React from "react";
import ReactPlayer from "react-player";
import "../styles.css";

export default() => {
return(
<div className ="rick">
   <h2>What does Rick say about your unknown ingredients?</h2>
   <div align = "center">
   <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ"
        playing = "true"
        muted = "false"
        volume ="1"
        controls = "true"
      />
      </div>
</div>

)
}