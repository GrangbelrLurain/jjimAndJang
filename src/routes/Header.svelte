<script lang="ts">
  import { logo, routes } from '$lib/info';
  import Icon from '$lib/components/Icon.svelte';
  let isImage = true;
  $: isImg = isImage;
</script>

<header class="navbar sticky top-0 bg-white z-40">
  <div class="navbar-start">
    <label for="main-drawer" class="btn btn-ghost">
      <Icon props={{ icon: 'menu', class: 'w-6 h-6' }} />
    </label>
  </div>
  <div class="navbar-center flex gap-5 justify-center">
    {#if isImg}
      <a href="/"> <img on:error={() => (isImage = false)} class="w-10 aspect-square" src={logo} alt={logo} /></a>
    {:else}
      <a href="/">{logo}</a>
    {/if}
    {#each routes as { title, route }}
      <a class="link link-hover text-lg font-bold text-primary" href={route}>{title}</a>
    {/each}
  </div>
  <div class="navbar-end" />
</header>
