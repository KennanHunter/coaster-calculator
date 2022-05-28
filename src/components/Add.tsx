export function Add({
	points,
	setPoints,
}: {
	points: number;
	setPoints: Function;
}) {
	return (
		<div className="addPoints">
			<button
				onClick={() => {
					setPoints(points + 1);
				}}
			>
				Add Point
			</button>
			<button
				onClick={() => {
					if (points > 1) setPoints(points - 1);
				}}
			>
				Remove Point
			</button>
		</div>
	);
}
