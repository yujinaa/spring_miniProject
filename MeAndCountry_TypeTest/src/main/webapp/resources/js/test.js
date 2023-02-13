
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