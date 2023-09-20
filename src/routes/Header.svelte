<script lang="ts">
  import { routes } from '$lib/info';
  let nowActive = typeof location !== 'undefined' && location.pathname === '/' && '/#banner';

  function handleScroll() {
    if (typeof document !== 'undefined') {
      routes.forEach(({ route }) => {
        const targetID = route.split('#')[1];
        const targetElem = document.querySelector(`#${targetID}`);
        if (targetID && targetElem) {
          const bottom = targetElem.getBoundingClientRect().bottom;
          const top = targetElem.getBoundingClientRect().top - 40;
          if (0 < bottom && 0 >= top) {
            nowActive = route;
          }
        }
      });
    }
  }
</script>

<svelte:window on:scroll={handleScroll} />
<header class="fixed top-0 bg-white z-40 h-16 w-full">
  <div class="flex gap-5 justify-center items-center h-full">
    {#each routes as { title, route }}
      <a
        class={`link link-hover text-base sm:text-lg font-bold transition-colors ${
          nowActive === route ? 'text-primary' : ''
        }`}
        href={route}>{title}</a
      >
    {/each}
  </div>
</header>
