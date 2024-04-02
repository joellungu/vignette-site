<script>
import BasDePage from "./BasDePage.svelte";
import Corps from "./Corps.svelte";
import Entete from "./Entete.svelte";
import Rapidite from "./rapidite.svelte";
import Securite from "./securite.svelte";

</script>
<style>
    @import '../index.css';
    @import '../corps.css';
</style>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<Entete/>
<div class="container">        
  <Corps/>
  <Rapidite/>
  <Securite/>
  <BasDePage/>
</div>