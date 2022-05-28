import { useState } from "react";
import { Add } from "./Add";
import "./Menu.css";
import { Point } from "./Point";
import { ValueInput } from "./ValueInput";

export function Menu() {
	const [startingHeight, setStartingHeight] = useState("");
	const [mass, setMass] = useState("");
	const totalMechanicalEnergy = Number(mass) * Number(startingHeight) * 10;
	const [numberOfPoints, setNumberOfPoints] = useState(1);

	return (
		<div className="Menu">
			<div className="left">
				<p>Total Mechanical Energy: {totalMechanicalEnergy} J</p>
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
				<label htmlFor="gravityConstant">Gravity Constant: </label>
				<select name="gravityConstant" id="gravityConstant">
					<option value="10">10</option>
					<option value="9.8">9.8</option>
					<option value="9.81">9.81</option>
				</select>
			</div>
			<div className="right">
				<Add
					points={numberOfPoints}
					setPoints={setNumberOfPoints}
				></Add>
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
		</div>
	);
}
