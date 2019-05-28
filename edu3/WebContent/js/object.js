/**
 * 자바스크립트 객체
 */

const log = console.log;

let array = ['가','하','다','바']

array.length
array[0]
array.pop()
array[4]='~~';
array.push('ppp')

//자바스크립트 객체 => 싱글톤
var student={
	name:"홍길동",
	ko:99,
	eng:100,
	sum:function(){
		return this.ko + this.eng;
	},
	avg:function(){
		return this.sum()/2;
	}
	
}

student.name;
student["name"];

student.address='서울';
delete student.address;

// in은 객체 of는 배열
for(let i in student){
	log(`${i}, ${student[i]}`); //숫자 1옆의 `
}


var product = [
	{name: '바나나', price:1200},
	{name: '사과', price:2000},
	{name: '배', price:3000},
	{name: '고구마', price:700},
	{name: '감자', price:600},
	{name: '수박', price:5000},
	{name: '딸기', price:3000}
];

function print(data){
	log(data.name," ",data.price)
}

print(product[1]);
// 자바스크립트 객체 => 생성자 함수를 통한 객체 생성
/*
function Student(name, ko, eng){
		this.name=name,
		this.ko=ko,
		this.eng=eng,
		this.sum=function(){
			return this.ko + this.eng;
		},
		this.avg=function(){
			return this.sum()/2;
		}
	}
*/
function Student(name, ko, eng){
	this.name=name,
	this.ko=ko,
	this.eng=eng
}
Student.prototype.sum=function(){
	return this.ko + this.eng;
}
Student.prototype.avg=function(){
	return this.sum()/2;
}

var s1 = new Student("홍길동",99,55);
var s2 = new Student("김길동",89,89);

var students = [
	new Student("길동",99,95),
	new Student("기동",89,98),
	new Student("깅동",59,94),
	new Student("깁동",69,45),
	new Student("긷동",89,85),
	new Student("긱동",59,65),
]
log("avg list")
for(let data of students){
		log(data.avg());
}
//오버라이딩
s2.toString = function(){
	return this.name;
}