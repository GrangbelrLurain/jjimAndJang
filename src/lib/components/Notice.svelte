<script lang="ts">
	export let title: string;
	export let detail: string;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div tabindex="0" class="collapse border focus:bg-primary group transition-all">
	<p class="collapse-title font-bold flex items-center group-focus:text-white transition-colors">{title}</p>
	<p class="collapse-content group-focus:text-white transition-colors">{detail}</p>
</div>
