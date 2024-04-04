<script>
  import PhShieldCheckeredDuotone from "../logo/PhShieldCheckeredDuotone.svelte";
    import MdiShieldLockOpenOutline from "../logo/MdiShieldLockOpenOutline.svelte";
    import MaterialSymbolsSpeed from "../logo/MaterialSymbolsSpeed.svelte";
    import MaterialSymbolsFamilyRestroom from "../logo/MaterialSymbolsFamilyRestroom.svelte";
    //import PhShieldCheckeredDuotone from "logo/MaterialSymbolsFamilyRestroom.svelte";
    import { userSelect } from "../stores";
  import Accueil from "./Accueil.svelte";
  import CommandeVignette from "./CommandeVignette.svelte";
  import Fac from "./Fac.svelte";
  import Compte from "./Compte.svelte";
    
</script>

<style>
  .centre {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 70%;
    height: 100vh;
    background-color: white;
    /* margin: 30px; */
  }
  /* .corps-page {
    grid-area: "corps-page";
    background-color: #D8D8D8;
    background-color: cadetblue;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 0.5fr ;
    align-items: center;
    justify-content: center; 
    height: 100%;
    width: 100vw;
    margin: 5px 0px;
  } */
  .etape1 {
    background-color: blue;
    text-align: left;
    padding: 0% 10% 10% 0%;
  }
  .etape2 {
    background-color: green;
  }
  .etape3 {
    background-color: red;
  }
  .alerte {
    background-color: yellow;
  }
  .commencer {
    background-color: orchid;
  }
  
</style>

{#if ($userSelect.anglet === 'Accueil')}
    <Accueil />
{/if}
{#if ($userSelect.anglet === 'Commande votre vignette')}
    <CommandeVignette />
{/if}
{#if ($userSelect.anglet === 'Foire aux questions')}
    <Fac />
{/if}
{#if ($userSelect.anglet === 'Compte')}
    <Compte />
{/if}
