import { oware } from "./draw";

function main() {
	const appDiv = document.getElementById("app") as HTMLDivElement;
	oware(appDiv);
}

export type AppFunction = (appDiv: HTMLDivElement) => void;

main();
