import { useState } from "react";
import { Add } from "./Add";
import "./Menu.css";
import { Point } from "./Point";
import { ValueInput } from "./ValueInput";

export function Menu() {
	const [startingHeight, setStartingHeight] = useState("");
	const [mass, setMass] = useState("");
	const [numberOfPoints, setNumberOfPoints] = useState(1);
	const [gravityConstant, setGravityConstant] = useState(10);
	const [precisionStr, setPrecisionStr] = useState("1");
	const precisionInt = Number(precisionStr);
	const totalMechanicalEnergy =
		Number(mass) * Number(startingHeight) * gravityConstant;

	return (
		<div className="Menu">
			<div className="left">
				<p>
					Total Mechanical Energy:{" "}
					{totalMechanicalEnergy.toFixed(precisionInt)} J
				</p>
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
				<ValueInput
					label="degree of precision"
					unit="decimal points"
					state={precisionStr}
					setState={setPrecisionStr}
					max={20}
				/>
				<label htmlFor="gravityConstant">Gravity Constant: </label>
				<select
					name="gravityConstant"
					id="gravityConstant"
					value={gravityConstant.toString()}
					onChange={(event) => {
						setGravityConstant(Number(event.target.value));
					}}
				>
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
				<div className="flex">
					{[...new Array(numberOfPoints)].map((_, index) => {
						return (
							<Point
								index={index}
								mass={Number(mass.trim())}
								totalMechanicalEnergy={totalMechanicalEnergy}
								precision={precisionInt}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
