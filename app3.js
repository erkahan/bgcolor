//massive/array -> olon utga zereg hadgalah
/*var a=5;
var too=[50,456,1,65,11];
var word=["text1","hi","bye"];
console.log(too);
//index --> element - iin bairshil!!!
//index n 0 -ees ehleneee!!!
console.log(too[0])
console.log(too[3])
//.length --> elementiin urt buyu too shirheg
console.log(too.length);
console.log(too[too.length-1]);
console.log(word[word.length-1]);
for(var i=0; i<=too.length-1;i++){
	console.log(too[i])
}
for(var i=0; i<=too.length-1;i++){
	console.log(word[i])
}*/
var body = document.getElementsByTagName('body')[0];
console.log(body);
var color= ['purple','aqua','gray','pink','red']
var i=-1;
var btn=document.getElementsByTagName('button')[0];

function change(){
	var random =Math.floor(Math.random()*(color.length-1));
	i++;
	body.style.backgroundColor=color[random];
	btn.innerText=color[random];
	if(i>=color.length-1){
		i=-1;
	}
}
