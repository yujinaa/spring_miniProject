/**
	$('#page').on('click',function() {
		var link = window.location.href;
		if(link == "http://localhost:8083/type/test/q1"){
			location.href='q2';
		}else if(link == "http://localhost:8083/type/test/q2"){
			location.href='q3';
		}else if(link == "http://localhost:8083/type/test/q3"){
			location.href='q4';
		}else if(link == "http://localhost:8083/type/test/q4"){
			location.href='q5';
		}else{
			location.href='q6';
		}
	});	
 */

	
	//버튼 클릭 시 다음페이지 이동
	/**
	
	const btn = document.createElement('btn');
	btn.addEventListener("click", function() {
		let link = "q1";
		if(link == "q1"){
			location.href="q2";
		}else if(link == "q2"){
			location.href="q3";
		}else if(link == "q3"){
			location.href="q4";
		}else if(link == "q4"){
			location.href="q5";
		}else{
			location.href="q6";
		}
	})
	 */

//function next() { //1번
  // $("#title").html(q[num]["title"]); //2번
  // $("#type").val(q[num]["type"]); //3번
  // $("#A").html(q[num]["A"]); //4번
  // $("#B").html(q[num]["B"]); //5번
  // num++; //6번
//}

const start = document.querySelector("#start-page")
const main = document.querySelector("#main-page"); //1번
const nextQ = document.querySelector("#main-page2");//2번
const nextQ3 = document.querySelector("#main-page3");//3
const nextQ4 = document.querySelector("#main-page4");//4
const nextQ5 = document.querySelector("#main-page5");//5
const nextQ6 = document.querySelector("#main-page6");//6
const result = document.querySelector("#result");
const select = [];

 

	
	//const two = document.getElementById("little");
	//const thr = document.getElementById("normal");
	//const fou = document.getElementById("some");
	//const fiv = document.getElementById("very");
	
//시작하기 버튼 클릭시 1번 문제 출력
function begin(){	
	start.style.webkitAnimation = "fadeOut 1s";
	start.style.animation = "fadeOut 1s";
	setTimeout(() => {
		main.style.webkitAnimation = "fadeIn 1s";
		main.style.animation = "fadeIn 1s";
		setTimeout(() => {
			start.style.display ="none";
			main.style.display = "block";
	},450)
	next();
},450);	
}
//1번 버튼 클릭시 2번 출력
$('.q1-btn').on('click',function() {
	main.style.webkitAnimation = "fadeOut 1s";
	main.style.animation = "fadeOut 1s";
	//if(one.value !=null || two.value !=null || thr.value !=null || fou.value !=null || fiv.value !=null){
		//btnOne.value;
	console.log(this.value);
	setTimeout(() => {
		nextQ.style.webkitAnimation = "fadeIn 1s";
		nextQ.style.animation = "fadeIn 1s";
		setTimeout(() => {
			main.style.display ="none";
			nextQ.style.display = "block";
	},450)
},450);	
})

//2번 버튼 클릭시 3번 출력
$('.q2-btn').on('click',function() {
	nextQ.style.webkitAnimation = "fadeOut 1s";
	nextQ.style.animation = "fadeOut 1s";
	setTimeout(() => {
		console.log(this.value);
		nextQ3.style.webkitAnimation = "fadeIn 1s";
		nextQ3.style.animation = "fadeIn 1s";
		setTimeout(() => {
			nextQ.style.display ="none";
			nextQ3.style.display = "block";
	},450)
},450);	
})
//3번 버튼 클릭시 4번 출력
$('.q3-btn').on('click',function() {
	nextQ3.style.webkitAnimation = "fadeOut 1s";
	nextQ3.style.animation = "fadeOut 1s";
	setTimeout(() => {
		nextQ4.style.webkitAnimation = "fadeIn 1s";
		nextQ4.style.animation = "fadeIn 1s";
		setTimeout(() => {
			nextQ3.style.display ="none";
			nextQ4.style.display = "block";
	},450)
},450);	
})
//4번 버튼 클릭시 5번 출력
$('.q4-btn').on('click',function() {
	nextQ4.style.webkitAnimation = "fadeOut 1s";
	nextQ4.style.animation = "fadeOut 1s";
	setTimeout(() => {
		nextQ5.style.webkitAnimation = "fadeIn 1s";
		nextQ5.style.animation = "fadeIn 1s";
		setTimeout(() => {
			nextQ4.style.display ="none";
			nextQ5.style.display = "block";
	},450)
},450);	
})
//5번 문제 버튼 클릭시
$('.q5-btn').on('click',function() {
	nextQ5.style.webkitAnimation = "fadeOut 1s";
	nextQ5.style.animation = "fadeOut 1s";
	setTimeout(() => {
		nextQ6.style.webkitAnimation = "fadeIn 1s";
		nextQ6.style.animation = "fadeIn 1s";
		setTimeout(() => {
			nextQ5.style.display ="none";
			nextQ6.style.display = "block";
	},450)
},450);	
})
function next(){
	//var q = document.querySelector('.qBox');
	//q.innerHTML = list[0].q; //list 첫 번째 요소에 q를 넣는다.
}
/*
function result(){
	nextQ6.style.webkitAnimation = "fadeOut 1s";
	nextQ6.style.animation = "fadeOut 1s";
	setTimeout(() => {
		result.style.webkitAnimation = "fadeIn 1s";
		result.style.animation = "fadeIn 1s";
		setTimeout(() => {
			nextQ6.style.display ="none";
			result.style.display = "block";
	},450)})	
}
 */


const list=[
	{
		q : '조직이나 단체에서 불평등한 상황이 생길 경우 권리를 요구하기보다는 수용한다.',
		a : [
			{answer:'전혀 아니다' , type:[]},
			{answer: '약간 아니다',type:['캐나다','뉴질랜드','스위스','독일','영국','미국','오스트레일리아']},
			{answer: '보통이다', type:['한국','아르헨티나','일본','이탈리아']},
			{answer: '약간 그렇다',type:['태국','중국','이집트','브라질','인도','프랑스']},
			{answer: '매우 그렇다',type:['멕시코']},
			]
	},
	{
		q: '전체의 성과보다 개인의 성과가 더 중요하다.',
		a : [
			{answer:'전혀 아니다' , type:['한국','태국','중국']},
			{answer: '약간 아니다',type:['이집트','브라질','멕시코']},
			{answer: '보통이다', type:['아르헨티나','일본','인도']},
			{answer: '약간 그렇다',type:['캐나다','뉴질랜드','스위스','독일','이탈리아','프랑스']},
			{answer: '매우 그렇다',type:['영국','미국','오스트레일리아']},
			]
	},
	{
		q: '소통, 화합보다 경쟁, 성취, 승리가 더 중요하다고 생각한다.',
		a : [
			{answer:'전혀 아니다' , type:[]},
			{answer: '약간 아니다',type:['한국','태국']},
			{answer: '보통이다', type:['캐나다','뉴질랜드','아르헨티나','이집트','브라질','인도','프랑스']},
			{answer: '약간 그렇다',type:['스위스','독일','영국','미국','오스트레일리아','이탈리아','중국','멕시코']},
			{answer: '매우 그렇다',type:['일본']},
			]
	},
	{
		q: '미래에 대한 불확실하고 모호한 상황보다 예측 가능성과 안정성을 추구한다.',
		a : [
			{answer:'전혀 아니다' , type:[]},
			{answer: '약간 아니다',type:['영국','중국','인도']},
			{answer: '보통이다', type:['캐나다','뉴질랜드','스위스','미국','오스트레일리아','이집트']},
			{answer: '약간 그렇다',type:['독일','이탈리아','태국','브라질']},
			{answer: '매우 그렇다',type:['한국','일본','아르헨티나','프랑스','멕시코']},
			]
	},
	{
		q: '단기적인 이익보다는 장기적인 관점에서의 이익을 추구한다.',
		a : [
			{answer:'전혀 아니다' , type:['아르헨티나']},
			{answer: '약간 아니다',type:['캐나다','뉴질랜드','미국','오스트레일리아','태국','멕시코']},
			{answer: '보통이다', type:['영국','이집트','브라질','인도']},
			{answer: '약간 그렇다',type:['스위스','이탈리아','프랑스']},
			{answer: '매우 그렇다',type:['독일','한국','일본','중국']},
			]
	},	
	{
		q: '여가 생활이나 취미 활동에 대한 욕구가 높다.',
		a : [
			{answer:'전혀 아니다' , type:['이집트']},
			{answer: '약간 아니다',type:['독일','한국','이탈리아','중국','인도']},
			{answer: '보통이다', type:['일본','태국','브라질','프랑스']},
			{answer: '약간 그렇다',type:['캐나다','뉴질랜드','스위스','영국','미국','오스트레일리아','아르헨티나']},
			{answer: '매우 그렇다',type:['멕시코']},
			]
	}
]
