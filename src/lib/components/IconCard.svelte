<script lang="ts">
  import Icon from './Icon.svelte';

  export let icon: string;
  export let title: string;
  export let discription: string;
</script>

<div data-aos="fade-down" class="card card-side border rounded-none hover:bg-primary bg-white group">
  <div class="card-body items-start flex-row gap-5">
    <figure>
      <Icon props={{ icon, class: 'w-8 h-8 text-primary group-hover:text-white' }} />
    </figure>
    <div class="flex flex-col gap-2">
      <p class="text-xl font-bold text-primary group-hover:text-white">{title}</p>
      <p class="text-2xl font-normal group-hover:text-white">{discription}</p>
    </div>
  </div>
</div>
