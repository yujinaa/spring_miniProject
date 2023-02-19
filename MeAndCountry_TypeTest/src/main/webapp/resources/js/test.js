
const start = document.querySelector("#start-page")
const main = document.querySelector("#main-page"); 
const viewResult = document.querySelector('#result-page');
const endPoint = 6; 
const select = [];

function setResult(){
	let point = calResult();
	//나라
	const countryName = document.querySelector('.resultCountry');
	countryName.innerHTML = resultList[point].name; //나라 이름에 정보 리스트의 이름을 담는다
	//이미지
	var resultImg = document.createElement('img'); //이미지 태그 만들기
	const imgDiv = document.querySelector('#resultImg');//이미지 태그 선택
	var imgURL = 'resources/img/image-' + point + '.jpg';
	resultImg.src = imgURL;
	resultImg.alt = point;
	imgDiv.appendChild(resultImg); //이미지 연결하기
	
	//설명
	const des = document.querySelector('.resultDes');
	des.innerHTML = resultList[point].desc;
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
		{name:'호주', value:0, key:16},
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
function totalResult(){
	//calResult();
	setResult();
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
	setResult();
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
	//setResult();
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
			{answer: '약간 아니다',type:['캐나다','뉴질랜드','스위스','독일','영국','미국','호주']},
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
			{answer: '매우 그렇다',type:['영국','미국','호주']},
			]
	},
	{
		n : 'Q3',
		q: '소통, 화합보다 <br>경쟁, 성취, 승리가 더 중요하다고 생각한다.',
		a : [
			{answer:'전혀 아니다' , type:[]},
			{answer: '약간 아니다',type:['한국','태국']},
			{answer: '보통이다', type:['캐나다','뉴질랜드','아르헨티나','이집트','브라질','인도','프랑스']},
			{answer: '약간 그렇다',type:['스위스','독일','영국','미국','호주','이탈리아','중국','멕시코']},
			{answer: '매우 그렇다',type:['일본']},
			]
	},
	{
		n : 'Q4',
		q: '미래에 대한 불확실하고 모호한 상황보다<br> 예측 가능성과 안정성을 추구한다.',
		a : [
			{answer:'전혀 아니다' , type:[]},
			{answer: '약간 아니다',type:['영국','중국','인도']},
			{answer: '보통이다', type:['캐나다','뉴질랜드','스위스','미국','호주','이집트']},
			{answer: '약간 그렇다',type:['독일','이탈리아','태국','브라질']},
			{answer: '매우 그렇다',type:['한국','일본','아르헨티나','프랑스','멕시코']},
			]
	},
	{
		n : 'Q5',
		q: '단기적인 이익보다는 <br>장기적인 관점에서의 이익을 추구한다.',
		a : [
			{answer:'전혀 아니다' , type:['아르헨티나']},
			{answer: '약간 아니다',type:['캐나다','뉴질랜드','미국','호주','태국','멕시코']},
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
			{answer: '약간 그렇다',type:['캐나다','뉴질랜드','스위스','영국','미국','호주','아르헨티나']},
			{answer: '매우 그렇다',type:['멕시코']},
			]
	}
]
const resultList=[
	{	
		name : '한국',
		desc : '약간 위계적인 사회로 어느 정도 계층적 질서를 수용하는 문화입니다.집단주의 사회로 분류되기 때문에 구성원에 대한 긴밀하고 장기적인 헌신으로 나타나고 보통 사회적 규칙과 규정을 우선시 하는 경향이 있습니다. <br>한국은 여성성이 더 높은 사회로 간주되는데 합의를 위해 노력하고,평등과 연대를 중시하며 갈등은 타협과 협상으로 해결합니다.그리고 세계에서 가장 불확실성을 회피하는 국가 중 하나로 신념과 엄격한 행동을 유지하는데 이런 문화의 사람들은 바쁘고 열심히 일하고 싶은 내적 충동을 가지고 있으며, 정확성과 시간 엄수를 중요시합니다.<br>가장 실용적이고 장기적인 사회를 지향하는 사회 중 하나로 단기 이익보다는 꾸준한 성장을 우선시하는 등 장기적인 방향을 봅니다. <br>또 다른 특징은 절제사회로 여가를 중시하지 않고 욕구충족을 통제하는데 이 성향을 가진 사람들은 자신의 행동이 사회적 규범에 의해 제한된다는 인식을 가지고 있으며 다소 냉소적이며 비관주의 경향이 있습니다.'
	},
	{	
		name : '중국',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '일본',
		desc : '어쩌구 저쩌구'
	},
	{	
		name: '인도',
		desc : '어쩌구 저쩌구'
	},
	{	
		name: '태국',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '영국',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '프랑스',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '이탈리아',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '독일',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '스위스',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '미국',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '캐나다',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '멕시코',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '브라질',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '아르헨티나',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '이집트',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '호주',
		desc : '어쩌구 저쩌구'
	},
	{	
		name : '뉴질랜드',
		desc : '어쩌구 저쩌구'
	},
]