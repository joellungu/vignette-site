<script>
    import { profilSelect } from "../../stores";
    import UserIcon from "../UserIcon.svelte";
  import HistoriqueCommande from "./HistoriqueCommande.svelte";
  import Profile from "./Profile.svelte";
  import Vehicule from "./Vehicule.svelte";
    // import { profilSelect } from "";
  
    function onClickAccueil () {
      $profilSelect = { anglet: "Profile"}
    }
    function onClickVehicule () {
      //choix = 'Commande votre vignette'
      $profilSelect = { anglet: "HistoriqueCommande"}
    }
    function onClickHistorique () {
      //choix = 'Compte'
      $profilSelect = { anglet: "Vehicule"}
    }
    
    //let choix = "Accueil"
    
  
  </script>
      
  <style>
      @import '../../index.css';
      /*  */
      @import '../../entete.css';
      /*  */
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
      
      /*  */
      
  </style>
  
  <div class="containers">
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
                <button class="{$profilSelect.anglet === "Profile" ? 'accueil' : 'fac'}" on:click={onClickAccueil}>
                    Profil
                </button>
                <button class="{$profilSelect.anglet === "HistoriqueCommande" ? 'accueil' : 'fac'}" on:click={onClickVehicule}>
                    Historiques
                </button>
                <button class="{$profilSelect.anglet === "Vehicule" ? 'accueil' : 'fac'}" on:click={onClickHistorique}>
                    Vos véhicules
                </button>
            </div>
        </div>
    </div>


    {#if ($profilSelect.anglet === 'Profile')}
        <Profile />
    {/if}
    {#if ($profilSelect.anglet === 'HistoriqueCommande')}
        <HistoriqueCommande />
    {/if}
    {#if ($profilSelect.anglet === 'Vehicule')}
        <Vehicule />
    {/if}
</div>