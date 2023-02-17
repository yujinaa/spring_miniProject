
const start = document.querySelector("#start-page")
const main = document.querySelector("#main-page"); 
const viewResult = document.querySelector('#result-page');
const endPoint = 6; 
const select = [];

function totalResult(){
	console.log(select);
	calResult();
}

function calResult(){
	var clickArray = [
		{name:'한국', value:0, key:0},
		{name:'중국', value:0, key:1},
		{name:'일본', value:0, key:2},
		{name:'인도', value:0, key:3},
		{name:'태국', value:0, key:4},
		{name:'영국', value:0, key:5},
		{name:'프랑스', value:0, key:6},
		{name:'이탈리아', value:0, key:7},
		{name: '독일', value:0, key:8},
		{name:'스위스', value:0, key:9},
		{name:'미국', value:0, key:10},
		{name:'캐나다', value:0, key:11},
		{name:'멕시코', value:0, key:12},
		{name:'브라질', value:0, key:13},
		{name:'아르헨티나', value:0, key:14},
		{name:'이집트', value:0, key:15},
		{name:'오스트레일리아', value:0, key:16},
		{name:'뉴질랜드', value:0, key:17},
	]
		for(let i = 0;i<endPoint;i++){
			var target  = list[i].a[select[i]];
			for(let j = 0;j<target.type.length;j++){
				for(let k = 0;k<clickArray.length;k++){
					if(target.type[j]===clickArray[k].name){
						clickArray[k].value +=1;
					}
				}
			}
		}
		var resultArray = clickArray.sort(function(a,b){
			if(a.value > b.value){
				return -1;
			}
			else if(a.value <b.value){
				return 1;
			}
			return 0;
		});
		console.log(resultArray);
		let resultString = resultArray[0].key;
		return resultString;
}

function result(){
	main.style.webkitAnimation = "fadeOut 0.4s";
	main.style.animation = "fadeOut 0.4s";
	setTimeout(() => {
		viewResult.style.webkitAnimation = "fadeIn 0.4s";
		viewResult.style.animation = "fadeIn 0.4s";
		setTimeout(() => {
			main.style.display ="none";
			viewResult.style.display = "block";
	},450)})	
	console.log(select);
	calResult();
}
 

//질문,선택 createElement, innerHTML로 구현
function qAnswer(answerText, qIndex,index){
	var a = document.querySelector('.answer-box');
	var answer = document.createElement('button'); //answer에 button넣기
	answer.classList.add('answerList');//answerdml classList에서 클래스값 넣기
	a.appendChild(answer);
	answer.innerHTML = answerText;
	answer.addEventListener("click",function(){
		var btns = document.querySelectorAll('.answerList'); //버튼 값을 클릭하면 전부 사라지고 다음 문제의 버튼 생성
		for(let i = 0; i<btns.length;i++){
			btns[i].disabled = true;
			//btns[i].style.webkitAnimation = "fadeOut 0.4s";
			//btns[i].style.animation = "fadeOut 0.4s";
		}
		setTimeout(() => {			
		select[qIndex] = index;//몇번 문제,답을 클릭했는지 select배열에 담기
		for(let i = 0; i<btns.length;i++){
			btns[i].style.display = 'none';
		}
		next(++qIndex);
		},450)
		},false);
}
	
function next(qIndex){
	if(qIndex === endPoint){//테스트 끝나면 결과페이지 호출
	result();
	return;
	}
	var q = document.querySelector('.question-box');
	var n = document.querySelector('.q-num');
	q.innerHTML = list[qIndex].q; //list 첫 번째 요소에 q를 넣는다.
	n.innerHTML = list[qIndex].n;
	for(let i in list[qIndex].a){
		qAnswer(list[qIndex].a[i].answer,qIndex,i);
	}
	var progress = document.querySelector('.progress-bar');
	progress.style.width = (100/endPoint) * (qIndex+1) +'%';
}
//시작하기 버튼 클릭시 문제 출력
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

const list=[
	{	
		n : 'Q1',
		q : '조직이나 단체에서 불평등한 상황이 생길 경우 <br>권리를 요구하기보다는 수용한다.',
		a : [
			{answer:'전혀 아니다' , type:[]},
			{answer: '약간 아니다',type:['캐나다','뉴질랜드','스위스','독일','영국','미국','오스트레일리아']},
			{answer: '보통이다', type:['한국','아르헨티나','일본','이탈리아']},
			{answer: '약간 그렇다',type:['태국','중국','이집트','브라질','인도','프랑스']},
			{answer: '매우 그렇다',type:['멕시코']},
			]
	},
	{
		n : 'Q2',
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
		n : 'Q3',
		q: '소통, 화합보다 <br>경쟁, 성취, 승리가 더 중요하다고 생각한다.',
		a : [
			{answer:'전혀 아니다' , type:[]},
			{answer: '약간 아니다',type:['한국','태국']},
			{answer: '보통이다', type:['캐나다','뉴질랜드','아르헨티나','이집트','브라질','인도','프랑스']},
			{answer: '약간 그렇다',type:['스위스','독일','영국','미국','오스트레일리아','이탈리아','중국','멕시코']},
			{answer: '매우 그렇다',type:['일본']},
			]
	},
	{
		n : 'Q4',
		q: '미래에 대한 불확실하고 모호한 상황보다<br> 예측 가능성과 안정성을 추구한다.',
		a : [
			{answer:'전혀 아니다' , type:[]},
			{answer: '약간 아니다',type:['영국','중국','인도']},
			{answer: '보통이다', type:['캐나다','뉴질랜드','스위스','미국','오스트레일리아','이집트']},
			{answer: '약간 그렇다',type:['독일','이탈리아','태국','브라질']},
			{answer: '매우 그렇다',type:['한국','일본','아르헨티나','프랑스','멕시코']},
			]
	},
	{
		n : 'Q5',
		q: '단기적인 이익보다는 <br>장기적인 관점에서의 이익을 추구한다.',
		a : [
			{answer:'전혀 아니다' , type:['아르헨티나']},
			{answer: '약간 아니다',type:['캐나다','뉴질랜드','미국','오스트레일리아','태국','멕시코']},
			{answer: '보통이다', type:['영국','이집트','브라질','인도']},
			{answer: '약간 그렇다',type:['스위스','이탈리아','프랑스']},
			{answer: '매우 그렇다',type:['독일','한국','일본','중국']},
			]
	},	
	{
		n : 'Q6',
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
const resultList=[
	{	
		country : '한국',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '중국',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '일본',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '인도',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '태국',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '영국',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '프랑스',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '이탈리아',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '독일',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '스위스',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '미국',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '캐나다',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '멕시코',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '브라질',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '아르헨티나',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '이집트',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '오스트레일리아',
		desc : '어쩌구 저쩌구'
	},
	{	
		country : '뉴질랜드',
		desc : '어쩌구 저쩌구'
	},
]