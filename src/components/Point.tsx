import { useState } from "react";
import { ValueInput } from "./ValueInput";
import "./Point.css";

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
	let velocity =
		Math.sqrt(
			((totalMechanicalEnergy - gravitationalPotentialEnergy) * 2) / mass
		) || 0;

	return (
		<div className="point">
			<h1>Point {(index + 1).toString()}:</h1>
			{velocity ? (
				<div className="numbers">
					<p>
						Velocity: {velocity.toFixed(precision)} meters / second
					</p>
					<p>
						Gravitational Potential Energy:{" "}
						{gravitationalPotentialEnergy.toFixed(precision)} J
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
