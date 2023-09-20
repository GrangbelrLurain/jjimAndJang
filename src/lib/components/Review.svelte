<script lang="ts">
  export let image = '';
  export let index = 0;
  export let aos = '';
  export let className = '';
</script>

<div data-aos={aos} class={`shadow-lg py-5 rounded ${className}`}>
  <img src={image} alt="리뷰 이미지입니다." />
</div>
