import React, { useState } from "react";
import TrafficLightTime from "./trafficlighttime";

const Home = () => {

	const [showTrafficLight, setShowTrafficLight] = useState(false); 

	function buttonClicked() { // muestra el componente deseado una vez pulsado el boton
		setShowTrafficLight(true)
	}

	return (
		<>
			{showTrafficLight ? (<TrafficLightTime />) : (
			<>				
				<div className="first-div d-flex justify-content-center">
					<button class="button" onClick={buttonClicked}>
						<div class="lid">
							<span class="side top"></span>
							<span class="side front"></span>
							<span class="side back"> </span>
							<span class="side left"></span>
							<span class="side right"></span>
						</div>
						<div class="panels">
							<div class="panel-1">
							<div class="panel-2">
								<div class="btn-trigger">
								<span class="btn-trigger-1"></span>
								<span class="btn-trigger-2"></span>
								</div>
							</div>
							</div>
						</div>
					</button>
				</div>
				<div className="fixed-bottom p-4 text-center fw-normal bg-dark text-white">
					Copyright © Made with ❤️ by JorgeAJT, 2024
				</div>
			</>
			)}
		</>
	);
};

export default Home;