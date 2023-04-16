// Verifica se o usuário está em um dispositivo móvel
export function isMobile() {
	return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
if (isMobile()) {
	// Carrega arquivo CSS para dispositivos móveis
	var link = document.createElement("link");
	link.href = "../css/style-mobile.css";
	link.type = "text/css";
	link.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link);
} else {
	// Carrega arquivo CSS para desktops
	var link = document.createElement("link");
	link.href = "../css/style-desktop.css";
	link.type = "text/css";
	link.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link);
}
