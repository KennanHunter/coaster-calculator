import { useState } from "react";
import "./Point.css";
import { ValueInput } from "./ValueInput";

export function Point({
	index,
	mass,
	totalMechanicalEnergy,
	precision,
}: {
	index: number;
	mass: number;
	totalMechanicalEnergy: number;
	precision: number;
}) {
	let [height, setHeight] = useState("");

	let gravitationalPotentialEnergy = Number(height) * mass * 10;
	let kineticEnergy = totalMechanicalEnergy - gravitationalPotentialEnergy;
	let velocity = Math.sqrt((kineticEnergy * 2) / mass);

	return (
		<div className="point">
			<h1>Point {(index + 1).toString()}:</h1>
			{velocity ? (
				<div className="numbers">
					<p>
						Gravitational Potential Energy:{" "}
						{gravitationalPotentialEnergy.toFixed(precision)} J
					</p>
					<p>Kinetic Energy: {kineticEnergy.toFixed(precision)} J</p>
					<p>
						Velocity: {velocity.toFixed(precision)} meters / second
					</p>
				</div>
			) : (
				<p>Marble cannot reach this height</p>
			)}

			<div className="inputs">
				<ValueInput
					label="height"
					unit="meters"
					state={height}
					setState={setHeight}
				/>
			</div>
		</div>
	);
}
