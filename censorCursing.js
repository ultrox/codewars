/*
 What the hell am I doing here? And where is my wallet? PETE SMASH!
 to 
 W**t t*e h**l am i d***g h**e? A*d w***e is my w****t? P**e s***h!
 */

function peteTalk(speech, ok = []){
	ok = ok.map(s => s.toLowerCase());
	return speech.toLowerCase()
		.replace(/\w{3,}/g, s => ~ok.indexOf(s) ? s : s.replace(/\B\w\B/g, '*'))
		.replace(/(^|[!?.])\s*\w/g, s => s.toUpperCase());
}
