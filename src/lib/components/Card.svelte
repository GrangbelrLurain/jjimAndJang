<script lang="ts">
  export let title: string;
  export let discription: string;
  export let src: string = '';
  export let alt: string = '';
  export let type: 'left' | 'right' = 'left';
</script>

<div
  data-aos='fade-up'
  class={`card sm:w-80`}
>
  <div
    class={`card-body sm:h-auto rounded-lg gap-0 items-center p-0 bg-white hover:bg-primary hover:text-white transition-all w-auto`}
  >
    {#if src}
      <figure class={`overflow-hidden h-1/2`}>
        <img class="" {src} {alt} />
      </figure>
    {/if}
    <div class="flex flex-col items-center justify-center px-10 py-10 w-auto h-1/2">
      <h4 class="uppercase font-extrabold md:text-2xl sm:text-xl text-base">{title || ''}</h4>
      <p class="whitespace-pre-line h-max grow-0 sm:text-base text-sm">
        {discription}
      </p>
    </div>
  </div>
</div>
