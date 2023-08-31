<script lang="ts">
  import { onMount } from 'svelte';
  import { popup } from '$lib/info';
  import { DateTime } from 'luxon';

  onMount(() => {
    if (popup.length) {
      popup.forEach(({ startDate, endDate }, index) => {
        const popupModal = document.querySelector(`#popupModal_${index}`) as HTMLDialogElement;

        const today = DateTime.now();
        const luxonStartDate = startDate ? DateTime.fromJSDate(startDate) : undefined;
        const luxonEndDate = endDate ? DateTime.fromJSDate(endDate) : undefined;
        if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(`popupModal_${index}`) !== 'close') {
          if ((luxonStartDate ? luxonStartDate < today : true) && (luxonEndDate ? luxonEndDate > today : true)) {
            popupModal.showModal();
          }
        }
      });
    }
  });
</script>

{#each popup as { href, url }, index}
  <dialog
    id={`popupModal_${index}`}
    class="modal"
    on:submit={() => {
      sessionStorage.setItem(`popupModal_${index}`, 'close');
    }}
  >
    <form class="w-full h-full relative flex items-center justify-center" method="dialog">
      <button class="w-full h-full absolute" />
      <a {href} class='max-w-[1000px] max-h-[1000px] relative z-10' target='_blank'>
        <img class='object-cover' src={url} alt="팝업 이미지입니다." />
      </a>
    </form>
  </dialog>
{/each}
