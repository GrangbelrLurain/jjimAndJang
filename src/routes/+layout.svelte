<script>
  import Header from './Header.svelte';
  import '../app.css';
  import '../font/font.css';
  import { logo, routes } from '$lib/info';
  import Footer from './Footer.svelte';
  import Flooting from './Flooting.svelte';
  import Popup from './Popup.svelte';
  import Aside from './Aside.svelte';
</script>

<div class="drawer">
  <input id="main-drawer" type="checkbox" class="drawer-toggle" />
  <Popup />
  <Flooting />
  <main class="drawer-content">
    <Header />
    <slot />
    <Footer />
  </main>
  <Aside />
</div>
