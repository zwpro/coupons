exports.success = (data = null, msg = 'success', code = 200) => {
	return {
		data,
		msg,
		code,
	}
}
exports.error = (data = null, msg = 'fail', code = 400) => {
	return {
		data,
		msg,
		code,
	}
}