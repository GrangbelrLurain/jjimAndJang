<script lang="ts">
	export let src: string;
	export let className: string = '';
	export let alt = '';
	export let titleText = '';
	export let titleDiscription = '';
</script>

<figure
	class={`relative flex flex-col items-center justify-center overflow-hidden text-center ${className}`}
>
	<div class="absolute w-full bg-black h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
		<img class="opacity-30 min-h-full min-w-full object-cover" {src} {alt} />
	</div>
	{#if titleText}
		<h1 class="relative z-20 text-white text-4xl font-bold">{titleText}</h1>
	{/if}
	{#if titleDiscription}
		<p class="text-white relative z-20">{titleDiscription}</p>
	{/if}
</figure>
