import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'

import trafficImg from "../../img/traffic2.jpg"
import trafficNoise from "../../audio/traffic-noise.mp3"

const TrafficLightTime = () => {
    const [redLight, setRedLight] = useState("off")
    const [amberLight, setAmberLight] = useState("off")
    const [greenLight, setGreenLight] = useState("lit")
    const [counter, setCounter] = useState(0)

    const isLargeScreen = useMediaQuery({ query: '(min-width: 2500px)' }); // mostrar solo los mini semáforos si la pantalla es grande

    useEffect(() => {
        const intervalId = setInterval(() => {
    
            setCounter((prevCounter) => prevCounter + 1);
            console.log(counter);
    
            if(counter === 4) {
                setAmberLight("lit")
                setRedLight("off")
                setGreenLight("off")
            }
    
            else if(counter === 6) {
                setRedLight("lit")
                setAmberLight("off")
                setGreenLight("off")
            }

            else if(counter === 12) {
                setGreenLight("lit")
                setAmberLight("off")
                setRedLight("off")
                setCounter(0)
            }
        }, 1000)

        return () => clearInterval(intervalId)
    }, [counter])



    return(
        <div className="main-div d-flex justify-content-center" style={{backgroundImage: `url(${trafficImg})`}}>
            <div className="support"></div>
            <div className="card d-flex align-items-center flex-column">
                    <button className={`mb-3 red ${redLight == "off" ? "off" : "lit"}`}></button>
                    <button className={`mb-3 amber ${amberLight == "off" ? "off" : "lit"}`}></button>
                    <button className={`mb-3 green ${greenLight == "off" ? "off" : "lit"}`}></button>
            </div>
            {isLargeScreen && (
                <>
                    <div className="card small-light1">
                        <button className={`red ${redLight == "off" ? "off" : "lit"}`}></button>
                    </div>
                    <div className="card small-light2">
                        <button className={`big-btn mb-3 p-5 red ${redLight == "off" ? "off" : "lit"}`}></button>
                    </div>
                </>
            )}
            <audio src={trafficNoise} autoPlay></audio>
        </div>
    )
}

export default TrafficLightTime