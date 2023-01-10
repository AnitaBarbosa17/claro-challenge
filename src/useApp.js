import { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { API_URL, transformChannels, transformEgp, roundMinutes } from "./helpers";
import { useEpg } from "planby";
import { theme } from "./helpers/theme";

const globalStyles = `
	.planby {
		font-family: "Poppins" sans-serif;
	}
`;

export function useApp() {
	const [channelsList, setChannelsList] = useState([]);
	const [channels, setChannels] = useState([]);
	const [epg, setEpg] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	function fetchAllChannels() {
		setIsLoading(true)
		axios.get(API_URL)
			.then(res => res.data) 
			.then(data => {
				setChannelsList(data.response.channels);
				setIsLoading(false);
			})
	}
	
	const date = new Date()
	const startDate = roundMinutes(date);	

	const channelsData = useMemo(() => channels, [channels]);
	const epgData = useMemo(() => epg, [epg]);

	const { getEpgProps, getLayoutProps } = useEpg({
		channels: channelsData,
		epg: epgData,
		dayWidth: 7200,
		sidebarWidth: 150,
		itemHeight: 80,
		isSidebar: true,
		isTimeline: true,
		isLine: true,
		startDate: startDate,
		isBaseTimeFormat: true,
		theme,
		globalStyles
	});

	useEffect(() => {
		fetchAllChannels();
	}, []);
	
	useEffect(() => {
		if (channelsList.length !== 0) {
			const formatedChannels = transformChannels(channelsList)
			const formatedEpg = transformEgp(channelsList)
			setChannels(formatedChannels)
			setEpg(formatedEpg);
		}
	}, [channelsList]);

	return { getEpgProps, getLayoutProps, isLoading };
}
