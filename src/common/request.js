import 'whatwg-fetch'

const getAccessToken = () => {
	const tokenData = JSON.parse(localStorage.getItem('hkt-token'))
	return tokenData && typeof tokenData['access-token'] !== 'undefined' ? tokenData['access-token'] : false
}

const request = (url, opt = {}) => {
	let defaultSetting = {
		headers: {
		    'Content-Type': 'application/json'
		},
	}

	const access_token = getAccessToken()
	if(access_token) {
		defaultSetting.headers['x-access-token'] = access_token
	}

	return fetch(`${__API_URL__}/${url}` , {
		...defaultSetting,
		...opt,
	})
}

export default request