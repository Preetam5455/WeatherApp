import React, { useState } from "react";

const Time= ()=>{
    let time = new Date().toLocaleTimeString();

    const [ctime,setcTime]=useState(time);

    const updateTime= () => {

        time = new Date().toLocaleTimeString();
        setcTime(time);
    };
    // setInterval(Updatetime,1000);
    console.log(ctime,setcTime)

return(
    <>
    <h1>The current time is <i>{ctime}</i></h1>

    <button onClick={updateTime}>Click to know Current city time</button>
    </>
)

}
export default Time;