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
			btns[i].style.webkitAnimation = "fadeOut 0.4s";
			btns[i].style.animation = "fadeOut 0.4s";
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
});	
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
		desc : '중국은 사람들 사이의 불평등이 용인될 수 있다고 믿는 사회로 상하 관계는 양극화되는 경향이 있습니다. 개인은 공식적인 권위와 제재의 영향을 받으며 일반적으로 리더십과 주도권에 대한 사람들의 능력에 대해 낙관적입니다.<br> 자신을 위하기보다 집단의 이익을 위해 행동하는 높은 집단주의적인 문화를 갖고 있기 때문에 조직에 대한 개인의 몰입도가 낮고 동료와의 관계에서 내집단에 대해서는 협력적인 반면 외집단에 대해서는 차갑거나 심지어 적대적인 경우가 있습니다. <br>성공 지향적이고 주도적인 남성 사회로 성공을 위해 가족과 여가 우선순위를 희생하는 경향이 있습니다. 그리고 불확실성 회피성이 낮은 것에 비해 법률과 규칙을 준수하는 것은 상황에 맞게 유연하게 행동하며 모호함을 편안하게 받아들이기 때문에 적응력이 뛰어납니다. <br>실용적 지향을 가진 사회로 전통을 변화된 조건에 쉽게 적응시키는 능력과 저축과 투자에 대한 강한 성향, 검소함, 결과 달성 등에 대한 인내를 보여줍니다.<br> 하지만 여가를 중시하지 않고 욕구충족을 통제하는 억제된 사회의 특징을 가지고 있어 냉소주의와 비관주의 경향이 있습니다.'
	},
	{	
		name : '일본',
		desc : '일본은 경계선에 있는 위계 사회입니다. 어떤 사회적 환경에서도 자신의 위계적 위치를 의식하고 그에 따라 행동하지만 대부분의 다른 아시아 문화만큼 계층적이지는 않습니다. 그 예시로 일본 교육 시스템에는 모든 사람이 평등하게 태어나고 충분히 열심히 노력하면 누구나 출세하여 무엇이든 될 수 있다는 강한 개념이 있습니다. <br>확실히 일본 사회는 개인의 의견보다 집단의 화합을 중시하는 집단주의 사회의 특징을 많이 보여주고 있으며, 체면을 잃는 것에 대한 수치심이 강하지만 대부분의 아시아처럼 집단주의적이지는 않습니다. 그래서 일본인은 서구 기준으로 볼 때 집단주의로 보이지민 아시아 기준으로 볼 때는 개인주의자로 보여집니다. <br> 또한 세계에서 가장 남성적인 사회 중 하나입니다. 그러나 그들의 온화한 집단주의와 결합하여 우리가 종종 남성적 문화와 연관시키는 독단적이고 경쟁적인 개인 행동은 볼 수 없으며 악명 높은 일본의 일중독은 남성성의 또 다른 표현입니다. 고된 노동과 장시간 노동이라는 남성적 규범이 있는 일본에서 여성이 기업의 사다리를 오르는 것은 여전히 ​​어려운 특징이 있습니다. <br>다른 특징으로는 가장 불확실성을 회피하는 국가 중 하나입니다. 자주 발생하는 지진 등의 자연재해의 영향을 받았는데 이러한 불확실한 상황에 대비하는 법을 배워 최대한의 예측 가능성을 위해 규정되어 있다고 말할 수 있습니다. 예를 들어 학교 행사에서 사람들이 무엇을 입고 어떻게 행동해야 하는지는 에티켓 책에 아주 자세하게 규정되어 있으며 학교 교사와 공무원들은 선례가 없는 일을 하기를 꺼립니다. 그리고 일본 기업에서는 타당성 조사에 많은 시간과 노력을 투자하고 프로젝트를 시작하기 전에 모든 위험 요소를 해결해야 하는 경향이 있습니다. 이러한 불확실성 회피에 대한 높은 필요성이 일본에서 변화를 실현하기 어려운 이유 중 하나입니다. <br> 그리고 장기 지향적인 사회로 사람들은 미덕과 실제적인 모범에 따라 삶을 살아가고 기업에서는 경제적으로 어려운 시기에도 지속적으로 분기 이익보다는 장기적인 방향성을 봅니다. <br>마지막으로 일본은 절제 문화가 있는 것으로 이런 사회는 다소 냉소주의와 비관주의 경향이 있어 여가를 중시하지 않고 욕구충족을 통제합니다.'
	},
	{	
		name: '인도',
		desc : '인도는 상사 또는 권력 보유자의 지시에 따르며, 권력을 가진 사람과 서열에서 더 낮은 사람 사이의 불평등한 권리를 수용합니다. 그래서 자신의 기능과 기대하는 바에 대해 명확하게 지시받기를 기대합니다. 통제는 익숙한 단어이며 심지어 심리적인 안정감이 있고 이들의 의사소통은 하향식이며 스타일이 지시적이며 종종 부정적인 피드백은 윗선에 제공되지 않습니다. <br> 집단주의적 특성과 개인주의적 특성을 모두 지닌 사회입니다. 그리고 인도는 남성 사회로 간주되는데 실제로 성공과 권력을 시각적으로 보여주는 면에서 매우 남성적입니다. 자신의 성공을 광고하는 데 사용되는 영상과 과시 목적인 디자이너 브랜드도 널리 사용됩니다. <br>그러나 인도는 또한 수백만의 신과 다양한 종교 철학을 가진 영적 국가입니다. 또한 겸손과 금욕의 가치에 대한 충분한 교훈을 제공하는 가장 오래 살아남은 문화 중 하나를 가진 고대 국가입니다. <br> 또 다른 특징은 불확실성을 피하기 위한 선호도는 중간 정도로 낮습니다. 인도에서는 불완전함을 받아들이며 어떤 것도 완벽할 필요도 없고 정확히 계획한 대로 진행될 필요도 없다고 생각하고 규칙은 우회하기 위한 경우가 많으며 극복할 수 없어 보이는 문제에 대한 독특하고 독창적인 해결책을 찾습니다. <br>하지만 절제의 문화를 갖고 있는데 이런 사회는 냉소주의와 비관주의 경향이 있습니다.'
	},
	{	
		name: '태국',
		desc : '태국은 불평등이 용인되는 사회로 아시아 국가 평균보다 약간 낮습니다. 각 직급에는 특권이 있으며 직원은 보호와 지도에 대한 보답으로 상사에 대한 충성, 존경 및 존경을 나타내는데 이것은 가부장적 관리로 이어질 수 있습니다. <br>매우 집단주의적인 국가로 내집단에 대한 충성이 가장 중요하며 사회는 모든 사람이 그룹의 동료 구성원에 대해 책임을 지는 강력한 관계를 조성합니다. 그리고 여성 사회로 간주되어 평균 아시아 국가 53개, 세계 평균 50개 중 남성성 순위가 가장 낮습니다. 그렇기 때문에 자기 ​​주장과 경쟁력이 덜한 사회를 의미하기도 합니다.<br> 또 다른 특징은 불확실성을 피하기 위한 선호도를 약간 나타내는데 이러한 수준의 불확실성을 최소화하거나 줄이기 위해 엄격한 규칙, 법률, 정책 및 규정을 채택하고 시행합니다. 이런 사회의 궁극적인 목표는 예상치 못한 상황을 제거하거나 피하기 위해 모든 것을 통제하는 것입니다. <br> 태국 문화는 실용적이기보다 규범적이라는 것을 나타냅니다. 그러한 사회의 사람들은 전통을 크게 존중하고 미래를 위해 저축하는 경향이 상대적으로 적으며 빠른 결과를 얻는 데 집중합니다.'
	},
	{	
		name : '영국',
		desc : '영국은 사람들 사이의 불평등이 최소화되어야 한다고 믿는 사회에 속합니다. 흥미롭게도 노동 계급보다 영국의 상류층에서 권력간 불평등 지수가 더 낮습니다. <br> 영국인은 매우 개인주의적이고 사적이며 아이들은 어릴 때부터 스스로 생각하고 삶의 고유한 목적이 무엇이며 사회에 고유하게 기여할 수 있는 방법을 발견하도록 배우고 행복은 개인적인 성취를 통해서 이룰수 있다고 생각합니다. 그리고 성공 지향적이고 주도적인 남성 사회이기 때문에 일하기 위해 살고 분명한 성과 야망을 가지고 있습니다.<br>영국은 불확실성 회피에 대해 낮은 점수를 받았습니다. 즉, 그들은 새로운 정보가 오면 계획을 변경하는 것을 기쁘게 생각하고 모호한 상황에서 편안함을 느낍니다. 또 다른 특징은 관대함으로 분류되는 문화임을 나타냅니다. 이런 사회의 사람들은 일반적으로 인생을 즐기는 것과 관련하여 자신의 충동과 욕구를 실현하려는 의지를 나타내고 긍정적인 태도를 가지고 있으며 낙관적인 경향이 있습니다. 또한 여가를 중시하고 마음대로 행동하며 마음대로 돈을 쓰기도 합니다.'
	},
	{	
		name : '프랑스',
		desc : '프랑스는 어느 정도의 불평등이 용인되는 사회로 아이들이 어느 정도 부모에게 정서적으로 의존하도록 양육됩니다. 이 종속성은 교사에게 이전되고 나중에는 상사에게 이전되고 권력은 기업과 정부뿐만 아니라 지리적으로도 중앙 집중화됩니다. <br>그리고 개인주의 사회로 나타나는데 부모는 자녀가 속한 그룹과 관련하여 자녀를 정서적으로 독립적으로 만드는데 이것은 자신과 가족만 돌봐야 한다는 것을 의미합니다. <br> 프랑스는 다소 여성스러운 문화를 가지고 있습니다. 주당 35시간 근무, 연간 5주의 휴일 및 삶의 질에 중점을 둔 것으로 알 수 있지만 또 다른 독특한 특징이 있습니다. 상류층은 여성성을, 노동계급은 남성적 성향이 나타나는데 다른 나라에서는 볼 수 없는 특징입니다. <br> 그리고 불확실성 회피가 높은데 프랑스인은 놀라움을 좋아하지 않습니다. 구조와 계획이 필요하고 회의 및 협상 전에 그들은 필요한 모든 정보를 받기를 좋아하기 때문에 결과적으로 프랑스인들은 원자력발전소, 쾌속열차, 항공산업의 경우와 같이 안정된 환경에서 복잡한 기술과 시스템을 개발하는 데 능합니다. <br> 또한 불확실성 회피에 대한 높은 점수와 함께 일반적으로 생각하는 것보다 덜 편안한 삶을 즐긴다는 것을 의미합니다. 실제로 프랑스는 행복 지수에서 그다지 높은 점수를 받지 못했습니다.' 
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