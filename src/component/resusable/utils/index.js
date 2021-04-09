export const formatDate = (dateToFormat) => {
	const options = { weekday: "short", year: "numeric", day: "numeric" };
	const newDateStr = new Date(dateToFormat).toLocaleString("en-GB", options);
	const index = newDateStr.length - 4;
	return `${newDateStr.slice(0, index)}, ${newDateStr.slice(index)}`;
};
