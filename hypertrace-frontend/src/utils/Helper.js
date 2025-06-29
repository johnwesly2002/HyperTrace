import { subDomainList } from "./constants";

export const getAppRouter = () => {
	const subdomain = getSubDomain(window.location.hostname);

	const mainApp = subDomainList.find((app) => app.main);

	if (subdomain == "") return mainApp.app;

	const apps = subDomainList.find((app) => subdomain === app.subdomain);
	return apps ? apps.app : mainApp.app;
};

//http://url.localhost:5173
//http://url.urlbestshort.com/
export const getSubDomain = (location) => {
	const locationParts = location.split(".");
	const isLocalhost = locationParts.slice(-1)[0] === "localhost";
	const sliceTill = isLocalhost ? -1 : -2;
	return locationParts.slice(0, sliceTill).join("");
};
