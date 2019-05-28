/**
 * function test
 */

/*
alert("hello javascript");
*/
const log = console.log;

function f1(){
	alert("hello javascript f1");
}

const f2 = ()=>alert("hello javascript f2");

function sum(a,b,c){
	if(!c) c =0;
	return a+b+c;
}

function sumall(){
	var sum = 0;
	for(var i=0;i<arguments.length;i++){
		sum += arguments[i]
	}
	
	return sum;
}


function small(a,b){
	return a<b ? a:b;
}

const min = (a,b) => a<b ? a:b;

function callback(){
	log("callback")
}

function callTenTimes(fn){
	for(let i = 0; i < 3; i++){
		try{
		fn();
		} catch(e){
			log("함수를 넘겨주세요")
		}
	}
}
//let f3;
/* callTenTimes(f3 = function(){alert("hello")}) */

callTenTimes();
/*
var intervalID = setInterval(callback,1000); 
// callback 함수가 1000ms 마다 호출
clearinterval(intervalID) // 호출 중지
*/
var id2 = setInterval(function(){log(new Date())},1000);
setTimeout(function(){
	clearInterval(id2);
	//location.href="http://www.naver.com";
},5000); // 5초후에 호출 중지

//location.href="http://www.naver.com"

var f4 = function a1(){
	var data = 0;
	function i1(){
		return ++data;
	}
	return i1;
};

f4()();

var f5 = function a2(){
	var data=0;
	function i1(){
		return ++data;
	}
	return i1;
}();

f5();