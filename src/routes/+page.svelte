<script>
  import Card from '../lib/components/Card.svelte';
  import Hero from './Hero.svelte';
  import deployImg from '$lib/images/delpoy.jpg';
  import developImg from '$lib/images/develop.jpg';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col items-center">
  <Hero />
  <article data-aos="fade-down" class="flex flex-col py-40 gap-5 text-center px-5" id="company">
    <h2 data-aos="fade-down" class="md:text-4xl sm:text-3xl text-2xl font-extrabold uppercase text-primary">
      best value is best customers
    </h2>
    <p data-aos="fade-down" class="whitespace-pre-line">
      {`저희 회사는 지난 2010년 시작으로 IT 제품들을 판매하며, 연 평균 3,000명 이상의 고객들에게
			특별한 경험을 전달하며 업계를 선도하는 기업으로 성장해 오고 있습니다.`}
    </p>
  </article>
  <article class="flex flex-col py-40 md:gap-5 gap-2 text-center bg-base-200 w-full" id="buisiness">
    <h3 data-aos="fade-down" class="md:text-3xl sm:text-2xl text-xl font-extrabold uppercase text-primary">
      buisiness
    </h3>
    <p data-aos="fade-down">개발부터 배포까지 통합 솔루션을 제공합니다.</p>
    <div data-aos="fade-down" class="flex gap-5 justify-center items-center lg:flex-row flex-col px-5">
      <Card
        src={developImg}
        title="develop"
        discription={`숨겨진 보물같은 제품을 제공하실 수 있도록
            원하시는 금액에 맞춰 웹 어플리케이션으로 제작합니다.`}
      />
      <Card
        src={deployImg}
        title="deployment"
        discription={`만들어진 웹 어플리케이션을 제공할 수 있도록
				배포 서비스를 제공합니다.`}
      />
    </div>
  </article>
</section>
