<script>
  import IconOutbound from '$lib/components/Icon-outbound.svelte';
  import { companyInfo, logo, routes, outbound } from '$lib/info';
</script>

<footer class="bg-base-100 border-t">
  <article class="flex max-w-screen-xl py-10 gap-20 mx-auto flex-grow text-sm flex-wrap px-10 justify-between">
    <div class='flex gap-5'>
      <img src={logo} alt="" class="w-20 h-20" />
      <div class="text-base">
        <p class="font-bold mb-2 text-sm">주소</p>
        <p>{companyInfo.address}</p>
        <p>{companyInfo.roadAddress}</p>
        <a href={companyInfo.kakaoMap} class="btn btn-xs" target='_blank'>카카오맵</a>
      </div>
    </div>
    <div class="flex justify-between grow">
      {#if outbound.length}
        <div class="">
          <p class="font-bold mb-2 text-sm">SNS</p>
          <div class="flex gap-2">
            {#each outbound as { href, type }}
              <a href={href} target='_blank'>
                <IconOutbound props={{ icon: type, class: 'w-8 h-8' }} />
              </a>
            {/each}
          </div>
        </div>
      {/if}
      <div class="flex flex-col w-max ml-auto">
        <p class="font-bold mb-2">사이트맵</p>
        {#each routes as { title, route }}
          <a class="link link-hover" href={route}>{title}</a>
        {/each}
      </div>
    </div>
  </article>
</footer>
