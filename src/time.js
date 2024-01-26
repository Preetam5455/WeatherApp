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
    <h1>the current time is {ctime}</h1>

    <button onClick={updateTime}> click me</button>
    </>
)

}
export default Time;