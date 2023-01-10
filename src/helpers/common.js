
export const toISOStringWithTimezone = date => {
    const tzOffset = -date.getTimezoneOffset();
    const diff = tzOffset >= 0 ? '+' : '-';
    const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        diff + pad(tzOffset / 60) +
        ':' + pad(tzOffset % 60);
};

export const roundMinutes = date => {
	date.setHours(date.getHours() + Math.round(date.getMinutes()/60));
	date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds
	return toISOStringWithTimezone(date).slice(0, 19);
}

const formatDate = date => {
    const getDate = toISOStringWithTimezone(date)
    return getDate.slice(-25).replace(/\D/g,'').slice(0, 14)
}

const date = new Date();
const dateSince = formatDate(date)
const dateTill = formatDate(new Date(date.setDate(date.getDate() + 1)));

export const API_URL = `https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=${dateSince}&date_to=${dateTill}&quantity=60`;

export const transformChannels = channels => {		
	return channels.map(channel => {
		return {
			uuid: channel.id,
			title: channel.name,
			logo: channel.image,
			number: channel.number
		}
	});
}
export const transformEgp = channels => {
	let epgList = [];
	for( let channel of channels ){
		const events = channel.events;
		events.forEach(event => {
			epgList.push({
				channelUuid: event.channel_id,
				id: event.id,
				duration: event.duration,
				since: event.date_begin,
				till: event.date_end,
				title: event.name,
				description: event.description,
			})
		})
		
	}
	return epgList;
}

export const isEmpty = obj => Object.keys(obj).length === 0;