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
},450);	
}

//1번 버튼 클릭시 2번 출력
$('.q1-btn').on('click',function() {
	main.style.webkitAnimation = "fadeOut 1s";
	main.style.animation = "fadeOut 1s";
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