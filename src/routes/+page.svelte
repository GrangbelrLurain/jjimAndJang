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
  import review1 from '$lib/images/review1.jpg';
  import review2 from '$lib/images/review2.jpg';
  import review3 from '$lib/images/review3.jpg';
  import review4 from '$lib/images/review4.jpg';
  import review5 from '$lib/images/review5.jpg';
  import review6 from '$lib/images/review6.jpg';
  import review8 from '$lib/images/review8.jpg';
  import review10 from '$lib/images/review10.jpg';
  import fiveMinute from '$lib/images/5minute.gif';
  import haccp from '$lib/images/HACCP_logo.png';
  import onion from '$lib/images/onion.png';
  import Connect from '$lib/components/Connect.svelte';
  import FigureImage from '$lib/components/FigureImage.svelte';
  import { comments } from '$lib/info';
  import Review from '$lib/components/Review.svelte';

  const images = [c1, c2, c3, c4, c5, c6, c7, c8];
</script>

<svelte:head>
  <title>찜앤장입니다.</title>
  <meta name="description" content="안녕하세요 해물찜 전문점 찜앤장입니다." />
</svelte:head>

<section class="flex flex-col items-center">
  <Hero />
  <article data-aos="fade-down" class="py-28 w-full flex flex-col gap-10 max-w-[50rem]">
    <h3 class="md:text-3xl sm:text-2xl text-xl font-extrabold uppercase text-primary text-center">
      healthy food
    </h3>
    <div class="flex md:flex-row flex-col items-center gap-10">
      <div class="h-[20rem] w-full mx-auto flex items-center justify-center">
        <div class="animate-bounce h-[5rem] w-full flex items-center justify-center">
          <FigureImage src={onion} alt={'국내산 양파'} className="w-full max-w-[27rem] max-h-[20rem] aspect-[27/20]" />
        </div>
      </div>
      <div class="text-center w-full">
        <p class="text-3xl font-extrabold animate-pulse text-primary">국내산 양파로 면역력 업!</p>
        <p class="text-2xl">맛과 건강을 한 번에 챙기세요!</p>
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
  <article class="flex flex-col py-40 md:gap-5 gap-2 text-center w-full" id="menus">
    <h3 data-aos="fade-down" class="md:text-3xl sm:text-2xl text-xl font-extrabold uppercase text-primary">menus</h3>
    <p data-aos="fade-down">찜앤장은 항상 특별한 맛을 제공합니다.</p>
    <div class="flex gap-5 justify-center items-center flex-col px-5">
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
  <article class="flex flex-col gap-5 py-20 bg-base-200 w-full relative">
    <h3 class="text-center md:text-3xl sm:text-2xl text-xl font-extrabold uppercase text-primary relative z-10">
      easy cooking
    </h3>
    <div class="flex items-center gap-5 mx-auto relative z-10 md:flex-row flex-col">
      <img data-aos="fade-right" src={fiveMinute} alt="5분" class="w-80" />
      <p class="font-extrabold text-4xl animate-bounce">조리까지 단 <span class="text-primary">5분</span></p>
    </div>
  </article>
  <article class="flex flex-col gap-10 pt-40 w-full max-w-4xl">
    <div class="flex flex-col gap-5">
      <h3 class="text-center md:text-3xl sm:text-2xl text-xl font-extrabold uppercase text-primary">reviews</h3>
      <p class="text-center text-xl text-gray-500">
        쿠팡 이츠 리뷰 <span class="text-primary font-bold text-2xl">{Number(2500).toLocaleString()}+</span>
      </p>
    </div>
    <div class="flex flex-col md:flex-row w-[80rem] max-w-full gap-10 px-10">
      <div class="flex-shrink md:w-1/2 flex flex-col gap-5">
        <Review aos="fade-right" image={review1} />
        <Review aos="fade-right" image={review4} />
        <Review aos="fade-right" image={review5} />
        <Review aos="fade-right" image={review8} />
      </div>
      <div class="flex-shrink md:w-1/2 flex flex-col gap-5 justify-between">
        <Review aos="fade-left" image={review2} />
        <Review aos="fade-left" image={review3} />
        <Review aos="fade-left" image={review6} />
        <Review aos="fade-left" image={review10} />
      </div>
    </div>
  </article>
  <Connect />
</section>
