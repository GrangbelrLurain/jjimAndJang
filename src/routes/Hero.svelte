<script lang="ts">
	import { hero } from '$lib/info';
</script>

<article class="hero bg-base-200 relative overflow-hidden text-white">
	<div class="absolute w-full bg-black h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
		<img
			class="opacity-30 min-h-full min-w-full object-cover"
			src={hero.backgroundImage}
			alt="기업 이미지입니다."
		/>
	</div>
	<div class="hero-content text-center">
		<div class="max-w-lg py-60">
			<h1 class="text-5xl font-bold">{hero.title}</h1>
			<p class="mt-2">{hero.description}</p>
			<a href={hero.buttonHref} class="btn btn-outline btn-primary mt-5 uppercase">{hero.buttonValue || 'contact us'}</a
			>
		</div>
	</div>
</article>
