
<script>
    import Facebook from "./Facebook.svelte";
    import Google from "./Google.svelte";
    import Linkedin from "./Linkedin.svelte";
    import Twetter from "./Twetter.svelte";
    
  
</script>

<div class="bas-de-page">
    <div class="footer">
        Copyright © 2023. Tout droit reservé.
    </div>
    <div class="footer">
        <div class="icon-compte">
            <svelte:component this={Facebook} />
        </div>
        <div class="icon-compte">
            <svelte:component this={Google} />
        </div>
        <div class="icon-compte">
            <svelte:component this={Linkedin} />
        </div>
        <div class="icon-compte" >
            <svelte:component this={Twetter} />
        </div>
    </div>
</div>