/**
카카오톡 공유하기
 */

function kakaoTalkShare(){
	
Kakao.API.request({
  url: '/v2/api/talk/memo/default/send',
  data: {
    template_object: {
      object_type: 'feed',
      content: {
        title: '내 성향과 맞는 나라 찾기',
        description: '#테스트 #심리테스트 #성향테스트 #mbti',
        image_url:
          'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          web_url: 'https://developers.kakao.com',
          mobile_web_url: 'https://developers.kakao.com',
        },
      },
      item_content: {
        profile_text: 'Kakao',
        profile_image_url: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        title_image_url: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        title_image_text: 'Cheese cake',
        title_image_category: 'Cake',
        items: [
          {
            item: 'Cake1',
            item_op: '1000원',
          },
          {
            item: 'Cake2',
            item_op: '2000원',
          },
          {
            item: 'Cake3',
            item_op: '3000원',
          },
          {
            item: 'Cake4',
            item_op: '4000원',
          },
          {
            item: 'Cake5',
            item_op: '5000원',
          },
        ],
        sum: 'Total',
        sum_op: '15000원',
      },
      social: {
        like_count: 100,
        comment_count: 200,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobile_web_url: 'https://developers.kakao.com',
            web_url: 'https://developers.kakao.com',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobile_web_url: 'https://developers.kakao.com',
            web_url: 'https://developers.kakao.com',
          },
        },
      ],
    },
  },
})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
}