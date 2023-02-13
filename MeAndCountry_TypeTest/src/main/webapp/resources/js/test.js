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
const main = document.querySelector("#main-page");
const nextQ = document.querySelector("#main-page2");
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

$('.q1-btn').on('click',function() {
	main.style.display ="none";
	nextQ.style.display ="block";
	main.style.webkitAnimation = "fadeOut 1s";
	nextQ.style.animation = "fadeOut 1s";
	setTimeout(() => {
		nextQ.style.webkitAnimation = "fadeIn 1s";
		nextQ.style.animation = "fadeIn 1s";
		setTimeout(() => {
			main.style.display ="none";
			nextQ.style.display = "block";
	},450)
},450);	
})