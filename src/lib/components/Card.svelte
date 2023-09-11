<script lang="ts">
  export let title: string;
  export let discription: string;
  export let src: string = '';
  export let alt: string = '';
  export let type: 'left' | 'right' = 'left';
</script>

<div data-aos={type === 'right' ? 'fade-right' : 'fade-left'} class="card max-w-screen-md w-full">
  <div
    class={`card-body sm:h-auto rounded-lg gap-0 items-center p-0 bg-white hover:bg-primary hover:text-white transition-all w-auto ${
      type === 'right' ? 'sm:flex-row-reverse' : 'sm:flex-row'
    }`}
  >
    {#if src}
      <figure class={`sm:w-1/2 sm:h-auto overflow-hidden aspect-square ${type === 'right' ? 'rounded-l-none rounded-r-lg' : 'rounded-r-none rounded-l-lg'}`}>
        <img class="min-w-full" {src} {alt} />
      </figure>
    {/if}
    <div class="sm:w-1/2 sm:h-auto flex flex-col items-center justify-center px-10 aspect-square w-auto">
      <h4 class="uppercase font-extrabold md:text-2xl sm:text-xl text-base">{title || ''}</h4>
      <p class="whitespace-pre-line h-max grow-0 sm:text-base text-sm">
        {discription}
      </p>
    </div>
  </div>
</div>
