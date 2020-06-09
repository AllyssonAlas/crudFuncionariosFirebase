export default function idFormatter(id) {
	if (id < 10) {
		return `00${id}`
	} else if (id >= 10 && id < 100) {
		return `0${id}`
	}
	return id
}
