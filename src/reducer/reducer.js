export const reducer = (state, action) => {
	switch (action.type) {
		case "SET_CHEVRON":
			return {
				...state,
				chevron: !state.chevron,
			};
		case "NEW_FILTER_SELECTED":
			return {
				...state,
				newFilterSelected: action.direction,
			};
		case "SORT_DATA":
			const sorted = state.data.sort((a, b) => a.vote_average - b.vote_average);
			return {
				...state,
				data: state.sortRating === "Descending" ? sorted.reverse() : sorted,
			};
		case "SORT_RATING":
			return {
				...state,
				sortRating: action.direction,
			};
		case "SET_DATA":
			return {
				...state,
				data: action.data,
			};
		case "LOADING":
			return {
				...state,
				loading: action.status,
			};
		case "ERROR":
			return {
				...state,
				error: action.message,
			};
		default:
			return state;
	}
};
