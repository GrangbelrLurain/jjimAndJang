<script>
  import IconOutbound from '$lib/components/IconOutbound.svelte';
  import { routes, outbound } from '$lib/info';
</script>

<aside class="drawer-side z-40">
  <label for="main-drawer" class="drawer-overlay" />
  <ul class="menu p-4 w-80 min-h-full text-base-content bg-white">
    {#each routes as { title, route }}
      <li>
        <a class="text-lg font-bold text-primary" href={route}>{title}</a>
      </li>
    {/each}
    {#if outbound.length}
      <div class="mt-auto flex flex-col items-end gap-2 text-primary">
        {#each outbound as { href, type }}
          <a {href}> <IconOutbound props={{ icon: type, class: 'w-8 h-8' }} /></a>
        {/each}
      </div>
    {/if}
  </ul>
</aside>
