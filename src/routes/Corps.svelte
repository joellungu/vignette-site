<script>
  import PhShieldCheckeredDuotone from "../logo/PhShieldCheckeredDuotone.svelte";
    import MdiShieldLockOpenOutline from "../logo/MdiShieldLockOpenOutline.svelte";
    import MaterialSymbolsSpeed from "../logo/MaterialSymbolsSpeed.svelte";
    import MaterialSymbolsFamilyRestroom from "../logo/MaterialSymbolsFamilyRestroom.svelte";
    //import PhShieldCheckeredDuotone from "logo/MaterialSymbolsFamilyRestroom.svelte";
    
</script>

<div class="haut-de-page">
    <div class="acheter-style">
        Acheter votre vignette en toute simplicité !
    </div>
    <div class="acheter">
        Acheter maintenant
    </div>
</div>
<div class="corps-page">
    <div class="carte">
        <div class="icon-carte">
            <svelte:component this={PhShieldCheckeredDuotone} />
        </div>
        Sécurisé
        <div class="contenu">
Enim pariatur non aliqua reprehenderit sit. Laboris enim excepteur et id. Incididunt eu consequat id culpa nisi occaecat nisi amet esse. Magna officia magna elit cillum officia Lorem. Amet incididunt ex in do voluptate ullamco cupidatat culpa qui. Mollit et elit esse eu pariatur sint anim ex anim nostrud officia nostrud. Et esse esse officia amet qui.
        </div>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a href="/securite" class="bouton">En savoir plus</a>
    </div>
    <div class="carte">
        <div class="icon-carte">
            <svelte:component this={MaterialSymbolsSpeed} />
        </div>
        Rapide
        <div class="contenu">
Enim pariatur non aliqua reprehenderit sit. Laboris enim excepteur et id. Incididunt eu consequat id culpa nisi occaecat nisi amet esse. Magna officia magna elit cillum officia Lorem. Amet incididunt ex in do voluptate ullamco cupidatat culpa qui. Mollit et elit esse eu pariatur sint anim ex anim nostrud officia nostrud. Et esse esse officia amet qui.
        </div>
        <div class="bouton">
            En savoir plus
        </div>
    </div>
    <div class="carte">
        <div class="icon-carte">
            <svelte:component this={MaterialSymbolsFamilyRestroom} />
        </div>
        Accessible
        
        <div class="contenu">
Enim pariatur non aliqua reprehenderit sit. Laboris enim excepteur et id. Incididunt eu consequat id culpa nisi occaecat nisi amet esse. Magna officia magna elit cillum officia Lorem. Amet incididunt ex in do voluptate ullamco cupidatat culpa qui. Mollit et elit esse eu pariatur sint anim ex anim nostrud officia nostrud. Et esse esse officia amet qui.
        </div>
        <div class="bouton">
            En savoir plus
        </div>
    </div>
</div>