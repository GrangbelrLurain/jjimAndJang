<script lang="ts">
  import KakaoMap from '$lib/components/KakaoMap.svelte';
  import toast from '$lib/toast';

  type TSubmitEvent = SubmitEvent & {
    currentTarget: EventTarget & HTMLFormElement;
  };
  const handleSubmit = async (event: TSubmitEvent) => {
    event.preventDefault();
    if (event.currentTarget) {
      const body = new FormData(event.currentTarget);

      const agree = body.get('agree');
      if (agree !== 'on') {
        toast('개인정보 수집에 동의해주세요.');
        return;
      }

      // const { email, title, content, tel } = reqJson;
      try {
        const get = await fetch('/api/email', {
          method: 'POST',
          body,
        });
        if(get.ok) {
          toast.success('이메일 전송에 성공했습니다.');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  export let className = '';
</script>

<article class={`flex flex-col gap-20 py-40 ${className}`} id="contect">
  <div class="max-w-3xl w-full mx-auto flex flex-col gap-2 md:p-10 p-5 border">
    <p data-aos="fade-down" class="font-bold w-full">찾아오시는 길</p>
    <div data-aos="fade-down" class="flex items-center flex-col">
      <KakaoMap
        lander={{
          timestamp: '1693981902755',
          key: '2g4i2',
          mapHeight: 'full',
          mapWidth: '100',
        }}
        className="min-w-full max-w-full"
      />
    </div>
  </div>
  <div>
    <form class="border max-w-screen-md mx-auto md:p-10 p-5 flex flex-col gap-5" on:submit={handleSubmit} method="POST">
      <p data-aos="fade-down" class="font-bold">개인정보 수집관련 동의사항</p>
      <p data-aos="fade-down" class="border whitespace-pre-line p-5 text-sm">
        {`○ 개인정보 수집/이용 목적 : 상담에 대한 다양한 정보 제공
  ○ 수집하는 개인정보의 항목 : 성명, 연락처
  ※상담예약서비스 이용과정에서 아래와 같은 정보들이 생성되어 수집될 수 있습니다.
  - 서비스이용기록, 접속로그, 쿠키, 접속IP정보
  ○ 개인정보의 보유 및 이용기간
  -보존기간은 5년이며, 정보 제공자가 삭제를 요청할 경우 즉시 파기합니다.
  -고객님의 정보는 개인정보 보호법에 따라 보호되며 위의 이용목적 외에 별도로 사용하지 않을 것을 약속드립니다.`}
      </p>
      <label data-aos="fade-down" class="flex items-center gap-2 text-sm w-max cursor-pointer" id="agree">
        <input class="cursor-pointer" name="agree" type="checkbox" />
        <span>개인정보 취급방침을 읽었으며 이에 동의합니다.(필수)</span>
      </label>
      <p data-aos="fade-down" class="font-bold">문의 내용</p>
      <label data-aos="fade-down" class="flex">
        <span class="w-20">이메일</span>
        <input name="email" class="join-item input input-bordered input-sm w-full" />
      </label>
      <label data-aos="fade-down" class="flex">
        <span class="w-20">제목</span>
        <input name="title" class="join-item input input-bordered input-sm w-full" />
      </label>
      <label data-aos="fade-down" class="flex">
        <span class="w-20">연락처</span>
        <input name="tel" class="join-item input input-bordered input-sm w-full" />
      </label>
      <label data-aos="fade-down" class="flex">
        <span class="w-20">문의내용</span>
        <textarea name="content" class="join-item textarea textarea-bordered w-full" />
      </label>
      <button data-aos="fade-down" class="btn btn-primary" type="submit">문의하기</button>
    </form>
  </div>
</article>
