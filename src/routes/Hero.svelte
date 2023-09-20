<script lang="ts">
  import bannerImg from '$lib/images/banner.png';
  import bannerMobileImg from '$lib/images/bannerMobile.png';
  import { hero } from '$lib/info';
</script>

<article class="w-full pt-16 overflow-hidden relative" id="banner">
  <img class="object-cover w-full lg:block hidden" src={bannerImg} alt="기업 이미지입니다." />
  <img class="object-cover w-full lg:hidden" src={bannerMobileImg} alt="기업 이미지입니다." />
</article>
