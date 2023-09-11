<script lang="ts">
  import { hero } from '$lib/info';
</script>

<article class="hero bg-base-200 relative overflow-hidden text-white pt-16 h-[50rem]" id="banner">
  <div class="absolute w-full bg-black h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <img
      class="min-h-full min-w-full object-cover relative top-1/2 -translate-y-1/2 contrast-125"
      src={hero.backgroundImage}
      alt="기업 이미지입니다."
    />
  </div>
  <div class="hero-content text-center w-full">
    <div class="max-w-xl max-h-[30rem] bg-primary flex flex-col justify-center px-10 aspect-square w-full">
      <h1 class="md:text-5xl sm:text-4xl text-3xl font-bold">
        {hero.title}
      </h1>
      <p class="mt-2">
        {hero.description}
      </p>
    </div>
  </div>
</article>
