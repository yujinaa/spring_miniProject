
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


//function next() { //1번
  // $("#title").html(q[num]["title"]); //2번
  // $("#type").val(q[num]["type"]); //3번
  // $("#A").html(q[num]["A"]); //4번
  // $("#B").html(q[num]["B"]); //5번
  // num++; //6번
//}

const start = document.querySelector("#start-page")
const main = document.querySelector("#main-page"); 

const result = document.querySelector("#result");
const select = [];

//질문,선택 createElement, innerHTML로 구현
function qAnswer(answerText, qIndex){
	var a = document.querySelector('.answer-box');
	var answer = document.createElement('button'); //answer에 button넣기
	answer.classList.add('answerList');//answerdml classList에서 클래스값 넣기
	a.appendChild(answer);
	answer.innerHTML = answerText;
	answer.addEventListener("click",function(){
		var btns = document.querySelectorAll('.answerList'); //버튼 값을 클릭하면 전부 사라지고 다음 문제의 버튼 생성
		for(let i = 0; i<btns.length;i++){
			btns[i].disabled = true;
			btns[i].style.display = 'none';
		}
		next(++qIndex);
		},false);
}
	
function next(qIndex){
	var q = document.querySelector('.question-box');
	q.innerHTML = list[qIndex].q; //list 첫 번째 요소에 q를 넣는다.
	for(let i in list[qIndex].a){
		qAnswer(list[qIndex].a[i].answer,qIndex);
	}
}
//시작하기 버튼 클릭시 1번 문제 출력
function begin(){	
	start.style.webkitAnimation = "fadeOut 0.4s";
	start.style.animation = "fadeOut 0.4s";
	setTimeout(() => {
		main.style.webkitAnimation = "fadeIn 0.4s";
		main.style.animation = "fadeIn 0.4s";
		setTimeout(() => {
			start.style.display ="none";
			main.style.display = "block";
	},450)
	let qIndex = 0;
	next(qIndex);
},450);	
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

