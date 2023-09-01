<script lang="ts">
	export let title: string;
	export let discription: string;
	export let src: string = '';
	export let alt: string = '';
</script>

<div class="card bg-white rounded-md max-w-md w-full">
	<div class="card-body">
        {#if src}
		<figure class='rounded-md mb-5'>
			<img class='min-w-full min-h-full' {src} {alt} />
		</figure>
        {/if}
		<h4 class="uppercase font-extrabold md:text-2xl text-xl">{title || ''}</h4>
		<p class="whitespace-pre-line">
			{discription}
		</p>
	</div>
</div>
