<script lang="ts">
  export let image = '';
  export let index = 0;
  export let aos = '';
</script>

<div data-aos={aos} class="shadow-lg py-5 rounded">
  <img src={image} alt="리뷰 이미지입니다." />
</div>
