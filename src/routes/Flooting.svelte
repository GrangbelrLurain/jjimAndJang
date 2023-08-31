<script>
  import { flooting } from '$lib/info';

  const bgColors = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-neutral'];
</script>

<div class="fixed z-30 bottom-20 right-2 flex flex-col">
  {#each flooting as floot, index}
    <a
      href={floot.route}
      target="_blank"
      class={`aspect-square w-20 text-white font-bold flex items-center justify-center ${
        bgColors[index % bgColors.length]
      }`}>{'title' in floot && floot.title}</a
    >
  {/each}
  <button
    class="bg-black aspect-square w-20 text-white font-bold"
    on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>TOP</button
  >
</div>
