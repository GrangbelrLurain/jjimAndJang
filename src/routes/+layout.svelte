<script>
  import Header from './Header.svelte';
  import '../app.css';
  import '../font/font.css';
  import Footer from './Footer.svelte';
  import Flooting from './Flooting.svelte';
  import Popup from './Popup.svelte';
  import Aside from './Aside.svelte';
  import Toast from './Toast.svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { onMount } from 'svelte';

  onMount(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        duration: 500,
      });
    }
  });
</script>

<div class="drawer">
  <input id="main-drawer" type="checkbox" class="drawer-toggle" />
  <Toast />
  <Popup />
  <Flooting />
  <main class="drawer-content">
    <Header />
    <slot />
    <Footer />
  </main>
  <Aside />
</div>
