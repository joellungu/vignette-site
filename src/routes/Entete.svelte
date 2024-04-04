<script>

  import UserIcon from "./UserIcon.svelte";
  import { userSelect } from "../stores";

  function onClickAccueil () {
    $userSelect = { anglet: "Accueil"}
  }
  function onClickCmdVignette () {
    //choix = 'Commande votre vignette'
    $userSelect = { anglet: "Commande votre vignette"}
  }
  function onClickFac () {
    //choix = 'Foire aux questions'
    $userSelect = { anglet: "Foire aux questions"}
  }
  function onClickCompte () {
    //choix = 'Compte'
    $userSelect = { anglet: "Compte"}
  }
  
  let choix = "Accueil"
  

</script>
    
<style>
    /* @import '../index.css'; */
    button {
        margin: none;
        padding: none;
        border: none;
        background-color: white;
    }
    .accueil {
        background-color: #1859bb;
        text-align: center;
        height: 100%;
        /*  */
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: whitesmoke;
        /* background-color: rgb(121, 121, 243); */
        padding: 0px 10px;
        font-family: chbd, chs;
        
    }
    .accueil:hover{
        background-color: #688cc3;
        /* rgb(236, 234, 234); */
        color: black;
    }

    .cmd-vignette {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        /* background-color: rgb(121, 121, 243); */
        padding: 0px 10px;
    }
    .cmd-vignette:hover{
        background-color: #688cc3;
        /* rgb(236, 234, 234); */
        color: black;
    }
    /*  */
    .fac {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        /* background-color: rgb(121, 121, 243); */
        padding: 0px 10px;
        font-family: chl;
    }
    .fac:hover{
        background-color: #688cc3;
        /* rgb(236, 234, 234); */
        color: black;
    }
    /*  */
    .compte {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        /* background-color: rgb(121, 121, 243); */
        padding: 0px 10px;
    }
    .compte:hover{
        background-color: #688cc3;
         /* rgb(236, 234, 234); */
        color: black;
    }
    /*  */
    
</style>

<div class="entete">
    <div class="centre-entete">
        <div class="entete-1">
            <div class="logo-centre">
                <div class="logo"></div>
            </div>
            <div class="bannier">
                <div class="bleu"></div>
                <div class="jaune"></div>
                <div class="rouge"></div>
                
            </div>
            <div class="style-text-dgrk-titre">
                DIRECTION GENERALE DES RECETTES DE KINSHASA
            </div>
            <!-- <div class="login">
                <div>
                    Connectez-vous
                </div>
                <div>
                    Inscrivez-vous
                </div>
            </div> -->
        </div>
    
        <div class="espace"></div>
        <div class="entete-2 titre">
            <button class="{$userSelect.anglet === "Accueil" ? 'accueil' : 'fac'}" on:click={onClickAccueil}>
                Accueil
            </button>
            <button class="{$userSelect.anglet === "Commande votre vignette" ? 'accueil' : 'fac'}" on:click={onClickCmdVignette}>
                Commande votre vignette
            </button>
            <button class="{$userSelect.anglet === "Foire aux questions" ? 'accueil' : 'fac'}" on:click={onClickFac}>
                Foire aux questions
            </button>
            <button class="{$userSelect.anglet === "Compte" ? 'accueil' : 'fac'}" on:click={onClickCompte}>
                Compte
            </button>
        </div>
    </div>
</div>