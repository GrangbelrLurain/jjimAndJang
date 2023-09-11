<script>
  import IconOutbound from '$lib/components/IconOutbound.svelte';
  import { companyInfo, logo, routes, outbound } from '$lib/info';
</script>

<footer class="bg-base-100 border-t">
  <article class="flex max-w-screen-xl py-10 gap-20 mx-auto flex-grow text-sm flex-wrap px-10 justify-between">
    <div>
      <p class="font-bold mb-2 text-sm">사업자 정보</p>
      <div class="text-base flex flex-wrap gap-1 max-w-sm">
        <p>{companyInfo.address} {companyInfo.companyName}</p>
        <p>{companyInfo.roadAddress}</p>
        <p>대표자 | {companyInfo.companyAgent}</p>
        <p>사업자번호 | {companyInfo.companyNumber}</p>
        <p>전화번호 | {companyInfo.companyPhone}</p>
        <a href={companyInfo.kakaoMap} class="btn btn-xs" target="_blank">카카오맵</a>
      </div>
    </div>
    <div class="flex justify-between grow">
      {#if outbound.length}
        <div class="">
          <p class="font-bold mb-2 text-sm">SNS</p>
          <div class="flex gap-2">
            {#each outbound as { href, type }}
              <a {href} target="_blank">
                <IconOutbound props={{ icon: type, class: 'w-8 h-8' }} />
              </a>
            {/each}
          </div>
        </div>
      {/if}
      <div class="flex flex-col w-max md:ml-auto">
        <p class="font-bold mb-2">사이트맵</p>
        {#each routes as { title, route }}
          <a class="link link-hover" href={route}>{title}</a>
        {/each}
      </div>
    </div>
  </article>
</footer>
