<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type TIcon = {
		path: string;
		viewBox: string;
	};

	const icons: Record<string, TIcon> = {
		menu: {
			path: 'M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z',
			viewBox: '0 0 512 512'
		},
	};

	export let props: HTMLAttributes<SVGElement> & {
		icon: keyof typeof icons;
	};
</script>

<svg
	stroke={'currentColor'}
	fill="currentColor"
	stroke-width="0"
	viewBox={icons[props.icon].viewBox}
	xmlns="http://www.w3.org/2000/svg"
	class={props.class}
>
	<path d={icons[props.icon].path} />
</svg>
