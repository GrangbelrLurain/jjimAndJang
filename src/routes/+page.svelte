<script>
  import Card from '../lib/components/Card.svelte';
  import Hero from './Hero.svelte';
  import menu1 from '$lib/images/해물찜1.png';
  import menu2 from '$lib/images/해물찜2.png';
  import menu3 from '$lib/images/해물찜3.png';
  import c1 from '$lib/images/01.jpg';
  import c2 from '$lib/images/pc02.jpg';
  import c3 from '$lib/images/pc03.jpg';
  import c4 from '$lib/images/pc04.jpg';
  import c5 from '$lib/images/pc05.jpg';
  import c6 from '$lib/images/pc06.jpg';
  import c7 from '$lib/images/pc07.jpg';
  import c8 from '$lib/images/pc08.jpg';
  import review from '$lib/images/review.gif';
  import fiveMinute from '$lib/images/5minute_white.gif';
  import hall from '$lib/images/매장.gif';
  import delevery from '$lib/images/배달.gif';
  import threeDay from '$lib/images/숙성.gif';
  import haccp from '$lib/images/HACCP_logo.png';
  import galic from '$lib/images/마늘.gif';
  import twice from '$lib/images/2인.gif';
  import Connect from '$lib/components/Connect.svelte';
  import FigureImage from '$lib/components/FigureImage.svelte';
  import IconCard from '$lib/components/IconCard.svelte';

  const images = [c1, c2, c3, c4, c5, c6, c7, c8];
</script>

<svelte:head>
  <title>찜앤장입니다.</title>
  <meta
    name="description"
    content={`찜앤장은 특별한 양념장으로 독보적인 맛을 자랑합니다.\n수 많은 성공과 실패에서 비롯한 노하우로\n컨설팅해 드립니다.`}
  />
</svelte:head>

<section class="flex flex-col items-center">
  <Hero />
  <article class="py-40 w-full flex flex-col gap-10">
    <div class="whitespace-pre-line mx-auto max-w-md text-center font-medium text-2xl md:text-5xl flex flex-col gap-5">
      <p><span class="text-primary font-extrabold">2인 운영</span>에</p>
      <p>최적화된 매장 시스템</p>
    </div>
    <figure class="aspect-[3/2] overflow-hidden max-w-xl mx-auto">
      <img src={twice} alt="" />
    </figure>
  </article>
  <article class="flex flex-col gap-10 pb-40 relative items-center">
    <div class="text-center font-medium md:text-5xl text-3xl flex-col gap-5 hidden md:flex w-full md:w-max mx-auto">
      <p class="text-4xl">
        <span class="font-extrabold">배달+홀 겸업</span> 매장 / <span class="font-extrabold">배달</span> 매장
      </p>
      <p>두가지 중 <span class="text-primary font-extrabold">선택 가능</span></p>
    </div>
    <div class="flex max-w-5xl mx-auto justify-between md:gap-10 gap-20 md:flex-row flex-col">
      <figure>
        <img src={hall} alt="홀" class="" />
      </figure>
      <div
        class="text-center font-extrabold md:text-5xl text-3xl flex-col gap-2 flex md:hidden w-full md:w-max mx-auto"
      >
        <p><span class="text-primary">배달+홀</span> 겸업 매장</p>
        <p><span class="text-primary">배달</span>매장 두가지 중 <span class="text-primary">선택 가능</span></p>
      </div>
      <figure>
        <img src={delevery} alt="딜리버리" class="" />
      </figure>
    </div>
  </article>
  <article class="flex flex-col gap-5 py-40 w-full relative bg-primary">
    <h3 class="text-center md:text-3xl sm:text-2xl text-xl font-extrabold uppercase text-white relative z-10">
      easy cooking
    </h3>
    <div class="flex items-center gap-5 mx-auto relative z-10 md:flex-row flex-col">
      <img data-aos="flip-left" src={fiveMinute} alt="5분" class="w-80" />
      <div>
        <p class="font-extrabold text-5xl text-white animate-bounce">조리까지 단 <span class="text-white">5분</span></p>
        <p class="text-white">누구나 조리 가능한 시스템으로 매장 자동화 가능</p>
      </div>
    </div>
  </article>
  <article class="flex flex-col py-40 md:gap-5 gap-2 text-center w-full" id="menus">
    <h3 data-aos="fade-down" class="md:text-3xl sm:text-2xl text-xl font-extrabold uppercase text-primary">menu</h3>
    <p data-aos="fade-down">찜앤장은 항상 특별한 맛을 제공합니다.</p>
    <div class="flex gap-5 justify-center items-center px-5 w-full mx-auto flex-col flex-wrap sm:flex-row">
      <Card src={menu1} title="해물찜" discription={`해물찜의 새로운 기준!\n맛과 양, 신선함까지 챙겼습니다.`} />
      <Card
        src={menu2}
        title="알곤이찜"
        discription={`탱탱한 곤이와 촉촉하고 부드러운 알!\n푸짐한 곤이찜을 만나보세요.`}
        type="right"
      />
      <Card src={menu3} title="아구찜" discription={`푸-짐한 양에 매-콤한 맛,\n역대급 아구찜!`} />
    </div>
  </article>
  <article data-aos="fade-down" class="w-full flex flex-col gap-10 max-w-[50rem]">
    <h3 class="md:text-3xl sm:text-2xl text-xl font-extrabold uppercase text-primary text-center">healthy food</h3>
    <div class="flex flex-col items-center relative">
      <figure class="aspect-square overflow-hidden">
        <img src={galic} alt={'국내산 마늘'} />
      </figure>
      <div class="text-center w-full absolute md:bottom-40 bottom-0">
        <p class="text-3xl font-extrabold animate-pulse text-primary">국내산 마늘로 면역력 업!</p>
      </div>
    </div>
  </article>
  <article class="flex flex-col gap-10 pb-40">
    <figure class="aspect-[3/2] overflow-hidden max-w-xl">
      <img src={threeDay} alt="" />
    </figure>
    <div class="text-2xl md:text-5xl text-center font-extrabold flex flex-col gap-2">
      <p>3일 <span class="text-primary">숙성 양념 소스</span>로 <span class="text-primary">맛</span>은 물론</p>
      <p>몸에 좋은 <span class="text-primary">면역력 강화</span> 효과까지</p>
    </div>
  </article>
  <article class="flex flex-col gap-10 pt-40 w-full">
    <div class="flex flex-col gap-5">
      <div class="bg-black py-10">
        <div class="max-w-4xl w-full mx-auto">
          <img src={review} alt="쿠팡 이츠 리뷰 2500개 달성" />
        </div>
      </div>
    </div>
  </article>
  <article
    class="flex flex-col text-center relative overflow-hidden w-full h-[40rem] items-center justify-center px-5"
    id="company"
  >
    <figure class="min-h-full min-w-full grid grid-cols-4 bg-black top-1/2 -translate-y-1/2 absolute">
      {#each images as image}
        <img class="opacity-30 h-full object-cover grayscale aspect-[16/9]" src={image} alt={image} />
      {/each}
    </figure>
    <div class="max-w-full border-2 border-white border-opacity-100 flex flex-col w-max mx-auto px-10 py-10 gap-5 z-10">
      <img src={haccp} alt="haccp_logo" class="w-32 mx-auto" />
      <h2 data-aos="fade-down" class="md:text-4xl sm:text-3xl text-2xl font-extrabold uppercase text-white">
        SAFETY AND SERVICE
      </h2>
      <p data-aos="fade-down" class="whitespace-pre-line text-white">
        {`저희 찜앤장은 고객 여러분들의 사랑에 힘입어 항상 최고와 최선의 정신으로
      가장 맛있는 양념과 신선하고 안전한 음식으로 행복을 드리기 위해 최선을 다하겠습니다.`}
      </p>
    </div>
  </article>
  <article class="py-40 w-full flex flex-col gap-5 px-5">
    <h3 class="text-center md:text-3xl sm:text-2xl text-xl font-extrabold uppercase text-primary">가맹계약</h3>
    <div class="bg-base-300 h-20 w-[1px] mx-auto" />
    <p class="text-center whitespace-pre text-lg">
      {`별도의 기술없이 누구나 조리가 가능하기 때문에\n빠르게 창업 및 오픈 가능`}
    </p>
    <div class="grid md:grid-cols-2 grid-cols-1 max-w-5xl w-full mx-auto gap-5">
      <IconCard icon="paper" title="STEP1" discription="가맹계약" />
      <IconCard icon="zoom" title="STEP2" discription="상권 분석 및 점포물색" />
      <IconCard icon="gear" title="STEP3" discription="인테리어 시공" />
      <IconCard icon="flag" title="STEP4" discription="인허가" />
      <IconCard icon="pencil" title="STEP5" discription="운영 교육" />
      <IconCard icon="clock" title="STEP6" discription="초도 물량 입고 및 오픈" />
    </div>
  </article>
  <Connect />
</section>
