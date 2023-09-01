<script>
  import FigureImage from '$lib/components/FigureImage.svelte';
  import informationImage from '$lib/images/infomation.jpg';
  import { notice } from '$lib/info';
  import Notice from '$lib/components/Notice.svelte';
  import AOS from 'aos';
  import { onMount } from 'svelte';
  onMount(() => {
    AOS.refresh();
  });
</script>

<article>
  <FigureImage
    src={informationImage}
    alt=""
    className="h-[24rem]"
    titleText="NOTICE"
    titleDiscription="공지사항 게시판"
  />
  <div class="flex justify-center max-w-screen-lg mx-auto">
    <a href="/notice" class="btn rounded-none w-full flex-shrink btn-primary">공지사항</a>
    <a href="/connect" class="btn rounded-none w-full flex-shrink">문의하기</a>
  </div>
  <div class="max-w-screen-lg mx-auto flex flex-col gap-5 py-10 px-5">
    {#each notice as { detail, title }}
      <Notice dataAos="fade-down" {title} {detail} />
    {/each}
  </div>
</article>
