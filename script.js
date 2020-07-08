let ShaddasOnWhatPageAmI = {};
ShaddasOnWhatPageAmI.text = window.location.href.replace("https://ageoftrades.com/game", "");
ShaddasOnWhatPageAmI.text = ShaddasOnWhatPageAmI.text.replace(/\//g, " - ");
if (ShaddasOnWhatPageAmI.text.indexOf("mods - ")!=-1) {
	ShaddasOnWhatPageAmI.text = " - " + document.getElementById("main-").children[0].innerHTML;
} else {
	//make the first letter uppercase
	ShaddasOnWhatPageAmI.text = ShaddasOnWhatPageAmI.text.slice(0,3) + ShaddasOnWhatPageAmI.text.charAt(3).toUpperCase() + ShaddasOnWhatPageAmI.text.slice(4);
}

document.title += ShaddasOnWhatPageAmI.text;