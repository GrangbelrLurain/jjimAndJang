<script>
  import FigureImage from '$lib/components/FigureImage.svelte';
  import KakaoMap from '$lib/components/KakaoMap.svelte';
  import informationImage from '$lib/images/infomation.jpg';
</script>

<article class="flex flex-col gap-20 pb-20">
  <div>
    <FigureImage src={informationImage} alt="" className="h-[24rem]" titleText="CONNECT" titleDiscription="문의하기" />
    <div class="flex justify-center">
      <a href="/notice" class="btn rounded-none w-full px-20 flex-shrink">공지사항</a>
      <a href="/connect" class="btn rounded-none w-full px-20 flex-shrink btn-primary">문의하기</a>
    </div>
  </div>
  <div class="max-w-screen-lg mx-auto flex flex-col gap-2">
    <p class="font-bold max-w-full w-screen">찾아오시는 길</p>
    <div class="flex items-center flex-col">
      <KakaoMap
        lander={{
          timestamp: '1693459776577',
          key: '2g2gg',
          mapHeight: 'full',
          mapWidth: '480',
        }}
        className="min-w-full max-w-full"
      />
    </div>
  </div>
  <div>
    <form class="border max-w-screen-md mx-auto p-10 flex flex-col gap-5">
      <p class="font-bold">개인정보 수집관련 동의사항</p>
      <p class="border whitespace-pre-line p-5 text-sm">
        {`○ 개인정보 수집/이용 목적 : 상담에 대한 다양한 정보 제공
○ 수집하는 개인정보의 항목 : 성명, 연락처
※상담예약서비스 이용과정에서 아래와 같은 정보들이 생성되어 수집될 수 있습니다.
- 서비스이용기록, 접속로그, 쿠키, 접속IP정보
○ 개인정보의 보유 및 이용기간
-보존기간은 5년이며, 정보 제공자가 삭제를 요청할 경우 즉시 파기합니다.
-고객님의 정보는 개인정보 보호법에 따라 보호되며 위의 이용목적 외에 별도로 사용하지 않을 것을 약속드립니다.`}
      </p>
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" />
        <span>개인정보 취급방침을 읽었으며 이에 동의합니다.(필수)</span>
      </label>
      <p class="font-bold">문의 내용</p>
      <label class="flex"
        ><span class="w-20">성함</span><input class="join-item input input-bordered input-sm w-full" /></label
      >
      <label class="flex"
        ><span class="w-20">연락처</span><input class="join-item input input-bordered input-sm w-full" /></label
      >
      <label class="flex">
        <span class="w-20">문의내용</span>

        <textarea class="join-item textarea textarea-bordered w-full" /></label
      >
      <button class="btn btn-primary">문의하기</button>
    </form>
  </div>
</article>
