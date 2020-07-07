let ShaddasOnWhatPageAmI = {};
ShaddasOnWhatPageAmI.text = window.location.href.replace("https://ageoftrades.com/game/", "");
ShaddasOnWhatPageAmI.text = ShaddasOnWhatPageAmI.text.charAt(0).toUpperCase() + ShaddasOnWhatPageAmI.text.slice(1);
document.title += " - " + ShaddasOnWhatPageAmI.text;