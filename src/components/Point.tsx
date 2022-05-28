import { useState } from "react";
import { ValueInput } from "./ValueInput";

export function Point({
	index,
	mass,
	totalMechanicalEnergy,
}: {
	index: number;
	mass: number;
	totalMechanicalEnergy: number;
}) {
	let [height, setHeight] = useState("");

	let gravitationalPotentialEnergy = Number(height) * mass * 10;
	let velocity =
		Math.sqrt(
			((totalMechanicalEnergy - gravitationalPotentialEnergy) * 2) / mass
		) || 0;

	return (
		<div>
			<h1>Point {(index + 1).toString()}:</h1>
			{velocity ? (
				<div className="numbers">
					<p> Velocity: {velocity} meters / second</p>
					<p>
						Gravitational Potential Energy:{" "}
						{gravitationalPotentialEnergy} J
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
