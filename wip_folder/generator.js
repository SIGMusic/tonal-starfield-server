//todo list to return:
//color
//play these notes
//play these chords

var chordlist = [
[0,2,4],
[1,3,5],
[2,4,6],
[3,5,7],
[4,6,8]
];

var chord1, chord2, chord3, chord4;
var coords = Array();

function sort(a, b){
	return a.x - b.x;
}

function parseCanvas(){
	//clickX and clickY are the useful arrays
	for(var i = 0; i < clickX.length; i++){
		coords.push({x: clickX[i], y: clickY[i]});
	}
	coords.sort(sort);
	$('#chords').text();
}
