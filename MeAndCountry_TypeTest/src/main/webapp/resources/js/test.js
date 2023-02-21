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
		desc : '이탈리아는 북부와 남부 특징이 다른데 북부 이탈리아의 경우 통제와 감독은 일반적으로 팀워크와 개방적인 관리 스타일을 선호하는 젊은 세대 사이에서 싫어하는 반면 남부 이탈리아에서는 북부 이탈리아와는 정반대의 성향이 나타납니다.<br> 개인주의 문화로 본인이 중심이고, 자신만의 개인적인 생각과 삶의 목표를 갖는 이탈리아인에게는 동기 부여가 되며 행복은 개인적인 성취를 통해 이룰수 있다고 생각합니다. 그리고 성공 지향적이고 주도적인 남성 사회입니다. 아이들은 어릴 때부터 경쟁이 좋은 것이고 승자가 되는 것이 인생에서 중요하다는 것을 배우며 아름다운 자동차, 큰 집, 요트와 같은 지위 상징을 획득하고 이국적인 나라를 여행함으로써 그들의 성공을 보여주려고 합니다. 또한 근무 환경은 모든 이탈리아인이 성공할 수 있는 곳이기 때문에 경력을 쌓기 위한 동료 간의 경쟁이 매우 치열할 수 있습니다. <br> 그 다음 특징은 불확실성 회피가 높기 때문에 상세한 계획을 초래합니다. 변화하는 환경에서의 유연함을 발휘하는 것은 매우 스트레스가 될 수 있습니다. 또한 실용적 지향을 가진 사회로 그들은 전통을 변화된 조건에 쉽게 적응시키는 능력, 저축과 투자에 대한 강한 성향, 검소함, 결과 달성에 대한 인내를 보여줍니다. <br>하지만 하지만 절제의 문화를 갖고 있는데 이런 사회는 냉소주의와 비관주의 경향이 있습니다.'
		},
	{	
		name : '독일',
		desc : '고도로 분권화되고 강력한 중산층의 지원을 받는 독일은 직접적이고 참여적인 의사소통 및 회의 스타일이 일반적이며, 통제를 싫어하는 사회입니다. <br>독일 사회는 진정한 개인주의 사회로 자아실현의 이상에 대한 강한 믿음이 있습니다. <br> 독일은 남성 사회로 간주됩니다. 10살이되면 아이들을 여러 유형의 학교로 분리해 보내기 때문에 성과를 매우 중요하게 여기며 사람들은 오히려 "일하기 위해 산다"고 일에서 자존감을 끌어냅니다. <br> 그리고 불확실성 회피 국가 중 하나로 점수가 높은데 계획을 진행하려면 체계적인 개요가 제공되어야 하고 이는 법제도에도 반영이 됩니다. 그래서 독일인은 전문성에 크게 의존하여 높은 불확실성을 보상하는 것을 선호합니다. <br>또 다른 특징은 독일은 실용주의 국가임을 나타냅니다. 실용적 지향을 가진 사회에서 사람들은 전통을 변화된 조건에 쉽게 적응시키는 능력, 저축과 투자에 대한 강한 성향, 검소함, 결과 달성에 대한 인내를 보여줍니다. 하지만 하지만 절제의 문화를 갖고 있는데 이런 사회는 냉소주의와 비관주의 경향이 있습니다. '
	},
	{	
		name : '스위스',
		desc : '사람들 사이의 불평등이 최소화되어야 한다고 믿는 사회인 스위스는 독립적이고, 편의를 위한 계층 구조, 동등한 권리,권한을 부여합니다. <br> 그리고 느슨하게 짜여진 사회적 틀에 대한 선호도가 높기 때문에 개인주의 사회로 간주됩니다. 독일어권 스위스와 프랑스어권 국가의 순위는 모두 남성적 사회를 나타냅니다. 즉, 독일어권 부분에서 그 영향이 훨씬 더 두드러지긴 하지만 매우 성공 지향적이고 주도적인데 남성적인 국가에서 사람들은 "일하기 위해 산다"는 생각과 관리자는 결단력이 있어야 하며 경쟁 및 성과에 중점을 둡니다. <br>스위스 사람들 중 프랑스어를 사용하는 사람들은 불확실성을 피하는 것을 선호하는 반면 독일어를 사용하는 사람들은 점수가 낮습니다. 높은 불확실성 회피를 나타내는 국가는 신념과 행동에 대한 엄격함을 유지하고 새로운 아이디어를 용납하지 않습니다. <br>스위스 문화는 확실히 실용적입니다. 실용적 지향을 가진 사회에서 사람들은 변화된 조건에 쉽게 적응시키는 능력, 저축과 투자에 대한 강한 성향을 보여줍니다. 또 다른 특징은 관대함이 높은 사회로 사람들은 일반적으로 인생을 즐기고 즐기는 것과 관련하여 자신의 충동과 욕구를 실현하려는 의지를 나타내는 경향이 있습니다. 그들은 긍정적인 태도를 가지고 있으며 낙관적인 경향이 있고 또한 여가를 중시합니다.'
			},
	{	
		name : '미국',
		desc : '세계에서 가장 개인주의적인 문화로 미국 사회와 정부의 모든 측면에서 동등한 권리를 강조함으로써 입증됩니다. 미국 조직 내에서 계층 구조는 편의를 위해 설정되고 동시에 의사소통은 직접적입니다. 그리고 미국인들은 잘 알지 못하는 사람들과 교류하는 데 익숙하기 때문에 결과적으로 정보를 얻거나 찾기 위해 상대에게 질문하는 것을 부끄러워하지 않습니다. <br>남성성이 높습니다. 이는 전형적인 미국의 행동 패턴에서 볼 수 있는데 높은 남성성 욕구와 세계에서 가장 개인주의적인 욕구의 조합으로 설명할 수 있습니다. 즉, 미국인들은 모두 남성적 충동을 개별적으로 보여줍니다. <br>불확실성 회피 차원에서 미국은 낮은 편에 속합니다.기술, 비즈니스 관행 또는 음식과 관련하여 새로운 아이디어, 새롭거나 다른 것을 시도하려는 의지에 대한 상당한 정도의 수용을 하고 누구든 생각이나 의견에 더 관대하고 표현의 자유를 허용하는 경향이 있습니다. 또 다른 특징은 미국인들은 새로운 정보가 사실인지 확인하기 위해 분석하는 경향이 있고 미국 기업은 단기적으로 실적을 측정하며 이것은 개인이 작업장 내에서 빠른 결과를 위해 노력하도록 유도합니다.<br> 또한 열심히 일하고 열심히 놀아라라는 마인드를 갖고 있는데 이것의 단점은 마약으로까지 이어질 수 있기 때문에 미국의 마약 중독은 다른 많은 부유한 국가보다 높습니다.' 
	},
	{	
		name : '캐나다',
		desc : '캐나다 문화는 상호의존성을 특징으로 하며 평등에 가치를 두고 있습니다. 서로 협의하고 자유롭게 정보를 공유하는 것이 당연하며 의사소통과 관련하여 캐나다인들은 직접적인 정보 교환을 중시합니다. 그리고 개인주의 문화로 특징지을 수 있는데 자신과 직계 가족을 부양하는 느슨하게 짜여진 사회로 해석됩니다. 마찬가지로, 직업적인 면에서 자립적이고 주도권을 발휘하는 경향이 있습니다.<br> 적당히 남성적인 사회로 일반적으로 캐나다인은 일과 스포츠 모두에서 모든 노력에서 높은 수준의 성과를 달성하기 위해 노력합니다. 또 다른 특징은 불확실성을 수용합니다. 이것은 새로운 아이디어를 쉽게 받아들이고 제품과 관련하여 새롭거나 다른 것을 시도하려는 의지를 나타냅니다. 캐나다인은 또한 누구의 아이디어나 의견에도 관대하며 표현의 자유를 허용합니다. 하지만 그들은 전통을 크게 존중하고 미래를 위해 저축하는 경향이 상대적으로 적으며 빠른 결과를 얻는 데 집중합니다. <br>마지막으로 관대함이 높은 사회의 사람들은 일반적으로 인생을 즐기고 즐기는 것과 관련하여 자신의 충동과 욕구를 실현하려는 의지를 나타냅니다. 또한 긍정적인 태도를 가지고 있으며 낙관적인 경향이 있어서 여가를 중시합니다.'
			},
	{	
		name : '멕시코',
		desc : '멕시코는 위계 사회로 계층적 질서를 수용한다는 것을 의미합니다. 조직의 계층 구조는 내재된 불평등을 반영하는 것으로 간주되고 부하 직원은 지시를 받기를 기대하는 성향이 있습니다. <br> 그리고 집단주의 사회로 간주되는데 이것은 가족, 그룹에 대한 긴밀하고 장기적으로 헌신하는 모습에서 볼 수 있습니다. 이런 사회는 모든 사람이 구성원에 대해 책임을 지는 강력한 관계를 조성합니다.<br> 멕시코는 남성적 성형을 가진 사회입니다. 관리자는 결단력 있고 독단적이어야 하며, 형평성, 경쟁 및 성과를 강조하며 갈등은 그들과 싸워 해결해야 한다는 생각을 갖고 있습니다. 그리고 불확실성을 피하는 것에 대한 선호도가 매우 높습니다. 높은 불확실성 회피를 나타내는 국가는 신념과 행동에 대한 엄격함을 유지하고 새로운 아이디어를 용납하지 않습니다.<br> 또 다른 특징으로 장기적인 방향 선호도가 낮기 때문에 미래를 위해 저축하는 경향이 상대적으로 적으며 빠른 결과 달성에 중점을 둡니다. <br> 이러한 영향으로 멕시코 사람들은 일반적으로 인생을 즐기고 즐기는 것과 관련하여 자신의 충동과 욕구를 실현하려는 의지를 나타냅니다. 그들은 긍정적인 태도를 가지고 있으며 낙관적인 경향이 있고 여가를 중시하고 마음대로 행동하는 특징이 있습니다.'
	},
	{	
		name : '브라질',
		desc : '브라질은 위계가 존중되어야 하고 사람들 사이의 불평등이 용인된다고 믿는 사회적 특징이 있습니다. 예를 들어 권력자가 더 많은 혜택을 받는다는 사실을 정당화하고 회사에는 전적인 책임을 지는 상사가 한 명 있습니다. 그리고 브라질은 개인주의 성향이 매우 낮기 때문에 비즈니스에서는 신뢰할 수 있고 오래 지속되는 관계를 구축하는 것이 중요합니다. <br> 브라질은 남성적/여성적 성향이 중간적인 사회로 여성적인 면은 사회에서 지배적인 가치가 타인에 대한 배려와 삶의 질이라는 것을 의미하는데 반해 남성적인 면은 여성적 성향의 사람들에게 동기를 부여하는 것으로 알 수 있습니다. 또 다른 특징은 불확실성 회피가 높은 사회이지만 관대한 사회임을 나타냅니다. 관대함에서 높은 점수로 분류된 사회의 사람들은 일반적으로 인생을 즐기고 즐기는 것과 관련하여 자신의 충동과 욕구를 실현하려는 의지를 나타내고 긍정적인 태도를 가지고 있으며 낙관적인 경향이 있습니다.'
	},
	{	
		name : '아르헨티나',
		desc : '아르헨티나는 권력간 불평등이 최소화 되야한다고 생각하는 것으로 최하위권에 있습니다. 원인은 1900년경에 약 650만 명의 유럽 이민자들이 아르헨티나에 들어왔고 당시 주민의 30% 이상이 해외에서 태어났기 때문에 불평등을 용인하지 않는 사회라고 할 수 있습니다.<br>그리고 모든 라틴 국가 중에서 가장 개인주의적인 국가이지만 많은 집단주의적 특성이 우세합니다. 예를 들어 현대적이고 개인주의적인 특성은 특히 대도시 대기업에서 찾을 수 있습니다. 고용주-고용인 연결은 다소 계산적이며 개인 생활과 직장 생활 사이에 엄격한 구분이 있습니다.<br>불확실성 회피성은 매우 높은데 대부분의 라틴 아메리카 국가도 마찬가지입니다. 이러한 사회는 삶을 구조화하기 위해 규칙과 정교한 법률 시스템에 대한 강한 필요성을 보여줍니다. 또 다른 특징은 매우 규범적인 문화를 가지고 있는 것으로 나타났습니다. 전통을 크게 존중하고 미래를 위해 저축하는 경향이 상대적으로 적으며 빠른 결과를 얻는 데 집중합니다. 마지막으로 관대한 사회로 분류된 사람들은 일반적으로 인생을 즐기고 즐기는 것과 관련하여 자신의 충동과 욕구를 실현하려는 의지를 나타내고 긍정적인 태도를 가지고 있으며 낙관적인 경향이 있습니다.'
	},
	{	
		name : '이집트',
		desc : '이집트 사람들은 모두에게 자리가 있고 계층적 질서를 받아들입니다. 조직의 계층 구조는 내재된 불평등을 반영하는 것으로 간주되고, 부하 직원은 지시를 받기를 기대합니다.<br> 그리고 집단주의 사회로 간주됩니다. 이러한 문화에서 충성심은 가장 중요하며 대부분의 다른 사회적 규칙과 규정보다 우선시하며 모든 사람이 동료 구성원에 대해 책임을 지는 강력한 관계를 조성합니다. 또한 여성적 요소보다 남성적 요소가 약간 더 존재함을 반영하여 보다 성공 지향적이고 추진력 있게 만듭니다. <br> 또 다른 특d지은 불확실성을 피하는 것을 약간 선호하는데 이것은 신념과 행동에 대한 엄격함을 유지하고 새로운 아이디어를 용납하지 않는 경향이 있습니다. 그리고 문화가 다소 규범적임을 나타냅니다. 그러한 사회의 사람들의 생각은 규범적이고 전통을 존중하고, 미래를 위해 저축하는 경향이 상대적으로 적으며, 빠른 결과 달성에 중점을 둡니다. <br>하지만 이집트는 매우 억제된 국가로 표시됩니다. 이러한 사회는 냉소주의와 비관주의 경향이 있고 여가를 중시하지 않고 욕구충족을 통제하기 때문에 이 성향을 가진 사람들은 자신의 행동이 사회적 규범에 의해 제한된다는 인식을 가지고 있으며 자신을 탐닉하는 것이 다소 잘못되었다고 생각합니다.'
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