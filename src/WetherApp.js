import React, { useEffect, useState } from "react";
// import './index.css'


const WetherApp =() =>{

    const [city,setcity] = useState();
   
    const [search,setsearch] = useState("Solapur");
    
    let time = new Date().toLocaleTimeString();

    const [ctime,setcTime]=useState(time);

    const Updatetime= () => {

       const time = new Date().toLocaleTimeString();
        setcTime(time);
    };
    setInterval(Updatetime,1000);

    useEffect ( ( ) => {
        const fetchApi = async() => {
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=24cc22c6617fcd5b7371c6d2b855e75c`

            const response = await fetch(url);
            const resJson = await response.json();
            setcity(resJson.main);
        };
        
        fetchApi();
  }, [search] )



    return(
        <>
    <div className="box">
    <div className="inputData">
        <input type="search"
        value={search}
        className="inputField" 
        onChange = {(event) => { setsearch(event.target.value) } } />
        
    </div>
    {!city ? (<p className="nodata">No Data found</p>) :
    (
   <div>
        <div className="info">
            <h2 className= "location"> 
            <i className="fas fa-smog"></i>
            {search}
            </h2>
            <h1 className="temp">
                {city.temp}.°cel
            </h1>
            <h3 className="tempmin_max">min:{city.temp_min}°cel | max:{city.temp_max}°cel </h3>
                <h2> Current Local time </h2>
                <h1> {ctime}</h1>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        
      
    </div>
    
    )
    }
    </div>
        </>
    );
}
export default WetherApp;