<script>
import BasDePage from "./BasDePage.svelte";
  import CommandeVignette from "./CommandeVignette.svelte";
import Corps from "./Corps.svelte";
import Entete from "./Entete.svelte";
import Rapidite from "./rapidite.svelte";
import Securite from "./securite.svelte";



</script>
<style>
    @import '../index.css';
    /* @import '../corps.css'; */
    @import '../entete.css';
    /*  */
    
    /*  */
</style>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->


<div class="arriere-plan">
  <div class="containers">
    <!-- <div class="titre">
      Text police 1
    </div>
    <div class="sous-titre">
      Text police 2
    </div> -->
    <Entete/>
    <Corps/>
    <!-- <Corps/>
    <Rapidite/>
    <Securite/>
    <BasDePage/> -->
  </div>
</div>