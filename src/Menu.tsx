import { useState } from "react";

export function Menu() {
	const [totalMechanicalEnergy, setTotalMechanicalEnergy] = useState(0);

	return <h1>{totalMechanicalEnergy}</h1>;
}
