/**
카카오톡 공유하기
 */
const url = 'http://localhost:8083/type/index';
function setShare(){
	var resultImg= document.querySelector('#resultImg');
	var resultAlt = resultImg.firstElementChild.alt;
	const shareTitle = '내 성향과 맞는 나차 찾기 결과';	
	const shareDesc = resultList[resultAlt].name;
	const shareImage = url + 'img/image-' + resultAlt + '.png';
	const shareURL = url + 'resultPage.result' + resultAlt + '.jsp';
	
		
Kakao.Share.sendDefault({
  objectType: 'feed',
  content: {
    title: shareTitle,
    description: shareDesc,
    imageUrl:shareImage,
    link: {
	  mobileWebUrl: shareURL,
      webUrl: shareURL
    },
  },
  buttons: [
    {
      title: '결과 확인하기',
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },
  ],
});
}


function kakaoTalkShare(){	
Kakao.Share.sendDefault({
  objectType: 'feed',
  content: {
    title: shareTitle,
    description: shareDesc,
    imageUrl:shareImage,
    link: {
	  mobileWebUrl: shareURL,
      webUrl: shareURL
    },
  },
  buttons: [
    {
      title: '결과 확인하기',
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },
  ],
});
}
