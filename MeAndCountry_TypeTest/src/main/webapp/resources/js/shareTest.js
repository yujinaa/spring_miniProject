/**
카카오톡 공유하기
 */

function kakaoTalkShare(){
	
Kakao.Share.sendDefault({
  objectType: 'feed',
  content: {
    title: '내 성형과 맞는 나라 찾기 결과',
    description: '아메리카노, 빵, 케익',
    imageUrl:
      'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
    link: {
	  mobileWebUrl: '',
      webUrl: 'https://developers.kakao.com',
    },
  },
  buttons: [
    {
      title: '결과 확인하기',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
  ],
});
}