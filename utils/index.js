export const sortByDate = (a, b) =>
	new Date(b.metadata.date) - new Date(a.metadata.date);
