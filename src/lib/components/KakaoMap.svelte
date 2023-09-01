<script lang="ts">
	import { onMount } from 'svelte';
	import kakaoMap from '../kakao-map';

    /**
    지도 가져오기 기능을 최대한 간단하게 구현하기 위해 컴포넌트로 구현하였습니다.
    해당 컴포넌트는 카카오맵 검색 후 해당 주소 공유하기 시 나타나는 HTML 공유 소스를 바탕으로 홈페이지에 지도를 구현할 수 있도록 제작되었습니다.
    lander props에 해당하는 값을 넣어주시면 카카오 맵이 해당 컴포넌트로 랜더링됩니다.
    검색 후 소스 생성 시 넓이/높이값을 잘 확인하시고 작성해주세요.
    아래는 예제입니다.
    <KakaoMap
        lander={{
            timestamp: '1693458757720',
            key: '2g2fx',
            mapWidth: '640',
            mapHeight: '360'
        }}
    />
    */

	type TLander = {
		timestamp: string;
		key: string;
		mapWidth?: string;
		mapHeight?: string;
	};

    /** lander에 카카오 맵 [ 검색 > 공유하기 > HTML복사 > 실행 스크립트 ]에서 가져온 지도 정보를 넣어주세요.*/
	export let lander: TLander;
	onMount(() => {
		if (kakaoMap) {
			new kakaoMap.roughmap.Lander(lander).render();
		}
	});

    export let className = '';
</script>

<div
	id={`daumRoughmapContainer${lander.timestamp}`}
	class={`root_daum_roughmap root_daum_roughmap_landing ${className}`}
/>
