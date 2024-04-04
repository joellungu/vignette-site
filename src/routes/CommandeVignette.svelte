<script>
    import { Alarm, Bank, CloudMoon, ExclamationTriangle } from "svelte-bootstrap-icons";
    const etapes = {
		"1": "Création et enregistrement de profil",
  	    "2": "Identification du véhicule",
		"3": "Vérification de vos informations",
		"4": "Payement",
    }
</script>
<style>
    .centre {
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 70%;
        height: 120vh;
        
    }
    .etape1 {
        margin: 20px 50px;
    }
    .etape2 {
        margin: 20px 50px;
        /* background-color: violet; */
    }
    .etape3 {
        margin: 20px 50px;
        /* background-color: yellow; */
        display: flex;
        justify-content: center;
        gap: 30px;
        align-items: center;
        flex-direction: row;
        padding: 20px 0px;
    }
    .alertes {
        margin: 20px 50px;
        background-color: blueviolet;
        border: 1 solde #1859bb;
        padding: 0px;
        box-shadow: 0px 2px 5px #B2B2B2;
        
    }
    .carte-body {
        margin: 5px;
        border: 2 solde red;
    }
    .carte-alert {
        display: flex;
        justify-content: start;
        gap: 0px;
        /* align-items: center; */
        flex-direction: row;
        background-color: white;
        border: 1 solid red;
    }
    .commencer {
        margin: 20px 50px;
        display: flex;
        height: 120px;
        font-family: chbo;
        flex-direction: column;
        align-items:self-start;
        justify-content: center;
        color: black;
        /* background-color: bisque; */
    }
    /*  */
    .padding {
        margin: 20px 50px;
    }
    .goupe-titre {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        /* background-color: aqua; */
        height: 100px;
    }
    .titre {
        font-size: larger;
        font-weight: bold;
        color: black;
        font-family: chbd, chs;
        font-size: 1.5em;
        text-align: left;
        padding: 0;
        margin: 0;

        /* background-color: aqua; */
    }
    .sous-titre {
        font-size: medium;
        font-weight: bold;
        color: black;
        font-family: chl, chli;
        text-align: left;
        font-size: 1em;
        font-weight: 400;
        padding: 3px 10px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        /* background-color: aquamarine; */
    }

    .sous-titre .dure {
        color: #1859bb;
        font-weight: bold;
    }

    .carte {
        background-color: #1859bb;
        height: 200px;
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px;
        color: whitesmoke
    }

    .index {
        background-color: red;
        text-align: center;
        height: 100px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 0px 10px;
    }

    .titre-alert {
        text-align: left;
        padding: 0px 10px;
        font-size: 1em;
    }
    .details-alerts {
        text-align: left;
        padding: 1px 10px;
        font-size: 0.8em;
    }

    button {
        background-color: #ffe644; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        color: black;
    }

</style>

<div>
    <div class="corps-page">
        <div class="centre">
            <div class="padding">
            <div class="etape1">
              <div class="goupe-titre">
                <div class="titre">
                  Commande votre vignette
                </div>
                <div class="sous-titre">
                  Ce service vous permet en quelques clics de procéder à la commande d'une vignette pour votre véhicule
                </div>
              </div>
            </div>
            <div class="etape2">
                <div class="goupe-titre">
                    <div class="titre">
                      Commande votre vignette
                    </div>
                    <div class="sous-titre">
                        <Alarm height={14} width={14}/> 
                        <div class="sous-titre">Durée de saisie: </div>
                        <div class="sous-titre dure">
                            5 minutes
                        </div>
                    </div>
                    <div class="sous-titre">
                        <Bank height={14} width={14}/> 
                        <div class="sous-titre">Les étapes qui suivent votre commande.</div>
                        
                    </div>
                  </div>
            </div>
            <div class="etape3">
              {#each Object.entries(etapes) as [etape, label] }
                <div class="carte">
                    <h7>{etape}</h7>
                    <p>{label}</p>
                </div>
              {/each}
            </div>
            <div class="alertes">
                <div class="carte-alert">
                    <div class="index">
                        <ExclamationTriangle height={30} width={20} color="white"/>
                    </div>
                    <div class="carte-body">
                        <div>
                            <div class="titre-alert">Vérification de conformité avec carte d'identité et documents véhiculaires</div>
                            <div class="details-alerts">
                                Veuillez vous assurer que les informations fournies correspondent précisément à celles indiquées sur votre carte d'identité ainsi que sur les documents relatifs à votre véhicule
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="commencer">
              <button>
                Commencer
              </button>
            </div>
          </div>
        </div>
    </div>
</div>