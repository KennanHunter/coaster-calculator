import { ChangeEvent, ChangeEventHandler } from "react";
import { titleCase } from "../functions/titleCase";
import "./ValueInput.css";

export function ValueInput({
	label,
	unit,
	state,
	setState,
	onChange,
	useLineBreak,
}: {
	label: string;
	unit: string;
	state: string;
	setState?: Function;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	useLineBreak?: boolean;
}) {
	let value = titleCase(label);
	let func = onChange
		? onChange
		: (event: ChangeEvent<HTMLInputElement>) => {
				if (setState) {
					setState(event.target.value);
				}
		  };
	let optBreak = useLineBreak ? <br /> : "";

	return (
		<div className="value">
			<label className="value-label" htmlFor={label}>
				{value}:
			</label>
			{optBreak}
			<input
				type="number"
				id={label}
				value={state}
				className="value-input"
				onChange={func}
			/>
			<p className="value-unit">{unit}</p>
		</div>
	);
}
