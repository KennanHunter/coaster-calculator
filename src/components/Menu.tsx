import { ChangeEvent, useState } from "react";
import "./Menu.css";
import { Point } from "./Point";
import { ValueInput } from "./ValueInput";

export function Menu() {
	const [startingHeight, setStartingHeight] = useState("");
	const [mass, setMass] = useState("");
	let totalMechanicalEnergy = Number(mass) * Number(startingHeight) * 10;
	let [numberOfPoints, setNumberOfPoints] = useState(1);

	return (
		<div className="Menu">
			<h1>{JSON.stringify(Number(mass))}</h1>
			<ValueInput
				label="mass"
				unit="kg"
				state={mass}
				setState={setMass}
			/>
			<ValueInput
				label="initial height"
				unit="meters"
				state={startingHeight}
				setState={setStartingHeight}
			/>

			{[...new Array(numberOfPoints)].map((_, index) => {
				return (
					<Point
						index={index}
						mass={Number(mass.trim())}
						totalMechanicalEnergy={totalMechanicalEnergy}
					/>
				);
			})}
		</div>
	);
}
