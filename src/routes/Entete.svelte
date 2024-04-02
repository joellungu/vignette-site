<script>

  import UserIcon from "./UserIcon.svelte";

</script>
<!-- <style>
    @import '../index.css';
</style> -->

<div class="entete">
    <div class="accueil">
        <div class="logo">Accueil</div>
    </div>
    <div class="titre1">
        <div class="style">
            <!-- <div>
                Republique Démocratique Du Congo
            </div>
            <div>
                Ministère de finance
            </div> 
            <div>
                Site officiel d'achat de Vignette pour tout l'ettendu du térritoire National
            </div> -->
        </div>
        
    </div>
    <div class="logo1">
        <div class = "compte">
            <div class="langue"></div>
            <div class="icon-compte">
                <svelte:component this={UserIcon} />
                <!-- <img src="./PhUserBold.svg" alt="icon"> -->
            </div>
            <!-- <div></div> -->
        </div>
    </div>
</div>