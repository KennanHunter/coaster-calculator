export function titleCase(input: string) {
	return input
		.split(" ")
		.map((word) => {
			let value = word.split("");
			value[0] = value[0].toUpperCase();
			return value.join("");
		})
		.join(" ");
}
