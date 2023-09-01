<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  export let className: string = '';
  export let id: string = '';

  let mArticle: HTMLElement;
  let isVisible: boolean = false;

  const observer =
    typeof window !== 'undefined'
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                console.log(window.innerHeight - entry.boundingClientRect.top);
                if (window.innerHeight - entry.boundingClientRect.top <= 0) {
                  console.log('false');
                  isVisible = false;
                } else {
                  console.log('true');
                  isVisible = true;
                }
              }
            });
          },
          {
            threshold: 0,
            rootMargin: '100px',
          },
        )
      : undefined;

  onMount(() => {
    if (observer) {
      observer.observe(mArticle);
    }
  });

  onDestroy(() => {
    if (observer) {
      observer.unobserve(mArticle);
    }
  });
</script>

<article bind:this={mArticle} class={`${isVisible ? 'animate-fadeInDown' : 'opacity-0'} ${className}`} {id}>
  <slot />
</article>
