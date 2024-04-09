<script>
  import { Alarm, Lightbulb, ShieldLock } from "svelte-bootstrap-icons";

  /**
   * @type {any[]}
   */
  let actus = [
    {"photo":"_DSC4536.JPG","titre":"Contrôle de vignette dans la ville de Kinshasa .","contenu":"La Direction générale des recettes de Kinshasa (DGRK) a lancé, mardi 4 juillet, la campagne de recouvrement volontaire de la vignette automobile pour les années 2021, 2022 et 2023."},
    {"photo":"_DSC4537.JPG","titre":"recouvrement volontaire de la vignette automobile Kinshasa ","contenu":"La Direction générale des recettes de Kinshasa (DGRK) a lancé, mardi 4 juillet, la campagne de recouvrement volontaire de la vignette automobile pour les années 2021, 2022 et 2023."},
    {"photo":"_DSC4540.JPG","titre":"Beaucoup de véhicules circulAnt dans la ville de Kinshasa  pas en règle avec la vignette automobile","contenu":"La Direction générale des recettes de Kinshasa (DGRK) a lancé, mardi 4 juillet, la campagne de recouvrement volontaire de la vignette automobile pour les années 2021, 2022 et 2023."},
    {"photo":"_DSC4541.JPG","titre":"Kinshasa : moratoire de 14 jours accordé aux conducteurs pour acquérir la vignette automobile","contenu":"La Direction générale des recettes de Kinshasa (DGRK) a lancé, mardi 4 juillet, la campagne de recouvrement volontaire de la vignette automobile pour les années 2021, 2022 et 2023."},
    {"photo":"_DSC4541.JPG","titre":"Contrôle de vignette dans la ville de Kinshasa .","contenu":"La Direction générale des recettes de Kinshasa (DGRK) a lancé, mardi 4 juillet, la campagne de recouvrement volontaire de la vignette automobile pour les années 2021, 2022 et 2023."},
    {"photo":"_DSC4537.JPG","titre":"Contrôle de vignette dans la ville de Kinshasa .","contenu":"La Direction générale des recettes de Kinshasa (DGRK) a lancé, mardi 4 juillet, la campagne de recouvrement volontaire de la vignette automobile pour les années 2021, 2022 et 2023."},
    {"photo":"_DSC4536.JPG","titre":"Contrôle de vignette dans la ville de Kinshasa .","contenu":"La Direction générale des recettes de Kinshasa (DGRK) a lancé, mardi 4 juillet, la campagne de recouvrement volontaire de la vignette automobile pour les années 2021, 2022 et 2023."},
    {"photo":"_DSC4540.JPG","titre":"Contrôle de vignette dans la ville de Kinshasa .","contenu":"La Direction générale des recettes de Kinshasa (DGRK) a lancé, mardi 4 juillet, la campagne de recouvrement volontaire de la vignette automobile pour les années 2021, 2022 et 2023."},
  ];
</script>

<style>
  /*  */
  .centre {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: aqua; */
  }
  .section1 {
    height: 30vh;
    width: 100vw;
    background-color: cadetblue;
  }
  .section2 {
    width: 70%;
    height: 30vh;
    background-color: whitesmoke;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  .section3 {
    width: 100%;
    height: 30vh;
    /* background-color: blueviolet; */
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  .section-actu {
    width: 100%;
    /* height: 30vh; */
    /* background-color: blueviolet; */
    /* display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: start;
    justify-content: center; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);  
    justify-content: center;
    justify-items: center;
    /* flex-wrap: wrap; */
  }
  .carte {
      background-color: whitesmoke;
      text-align: left;
      /*  */
      border: 0px solid #B2B2B2;
      padding: 0px;
      /* box-shadow: 1px 1px 1px #B2B2B2; */
      height: 100px;
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;  
    }
    
    .carte2 {
      /* background-color: green; */
      text-align: left;
      /*  */
      border: 0px solid #B2B2B2;
      padding: 13px;
      /* box-shadow: 1px 1px 1px #B2B2B2; */
      /* height: 200px; */
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column; 
    }
    .carte-body {
        padding: 5px;
        display: flex;
        justify-content: left;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
    }

    .sous-titre {
        font-size: medium;
        font-weight: bold;
        color: #0095C9;
        font-family: chl, chli;
        text-align: left;
        font-size: 1em;
        font-weight: 400;
        padding: 3px 0px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        /* background-color: aquamarine; */
    }
    .sous-titre2 {
      font-size: medium;
        font-weight: bold;
        color: black;
        font-family: chbo, chli;
        text-align: left;
        font-size: 1em;
        font-weight: 400;
        padding: 3px 0px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        /* background-color: aquamarine; */
    }
    .sous-titre-p {
      font-size: medium;
        font-weight: bold;
        color: #4c4c4d;
        font-family: chl, chli;
        text-align: left;
        font-size: 0.7em;
        font-weight: 400;
        padding: 3px 0px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
    }
    .sous-titre-pp {
      font-size: medium;
        font-weight: bold;
        color: #4c4c4d;
        font-family: chl, chli;
        text-align: left;
        font-size: 0.7em;
        font-weight: 400;
        padding: 3px 0px;
        display: flex;
        flex-direction: row;
        gap: 5px;
        flex-wrap: wrap;
        justify-content: left;
        align-items: start;
        text-align: left;
    }
    .separateur {
      height: 1px;
      width: 50%;
      padding: 0px 20px;
      background-color: #B2B2B2;
    }

    .section {
      background-color: whitesmoke;
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .titre {
      margin: 10px;
      font-family: chbd, chs;
      color: black;
    }

    .index {
      background-color: #0095C9;
      height: 40px;
      width: 40px;
      border-radius: 20px;
      color: black;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .photo {
      height: 150px;
      width: 150px;
      background-color: #0095C9;
    }


</style>
<div>
    <div class="corps-page">
        <div class="centre">
          <div class="section1">
            <div class="banner-image"></div>
          </div>
          <!--  -->
          <div class="section2">
            <div class="centre">
              <div class="carte">
                <div class="sous-titre">
                  <Lightbulb height={25} width={25} color="#0095C9"/> 
                  <div class="sous-titre">Simplicité</div>
                  <div class="sous-titre-p">
                    Votre carte grise vous suffit pour effectuer le paiement de votre vignette en quelques clics et sans vous déplacer.
                  </div>
                </div>
              </div>
            </div>
            <div class="centre">
              <div class="carte">
                <div class="sous-titre">
                  <ShieldLock height={25} width={25}/> 
                  <div class="sous-titre">Sécurité</div>
                  <div class="sous-titre-p">
                    Nous vous assurons la sécurité de vos transactions et la confidentialité de toutes vos données personnelles qui seront récoltées lors de votre paiement.
                </div>
                </div>
              </div>
              
            </div>
            <div class="centre">
              <div class="carte">
                <div class="sous-titre">
                  <Alarm height={25} width={25}/> 
                  <div class="sous-titre">Disponibilité</div>
                
                <div class="sous-titre-p">
                  Votre carte grise vous suffit pour effectuer le paiement de votre vignette en quelques clics et sans vous déplacer.
                </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="separateur"></div>
          <!--  -->
          <div class="section">
            <div class="titre">
              Comment-ça marche ?
            </div>
            <div class="section3">
              <div class="centre">
                <div class="carte">
                  <div class="sous-titre">
                    <div class="index">1</div> 
                    <div class="sous-titre2">Saisissez vos informations</div>
                    <div class="sous-titre-p">
                      Remplissez vos informations personnelles et celles relatives à votre véhicule.
                    </div>
                  </div>
                </div>
              </div>
              <div class="centre">
                <div class="carte">
                  <div class="sous-titre">
                    <div class="index">2</div>  
                    <div class="sous-titre2">Vérifiez vos données</div>
                    <div class="sous-titre-p">
                      Avant de confirmer votre transaction, veuillez vérifier vos informations saisies.
                    </div>
                  </div>
                </div>
              </div>
              <div class="centre">
                <div class="carte">
                  <div class="sous-titre">
                    <div class="index">3</div> 
                    <div class="sous-titre2">Payez votre vignette</div>
                    <div class="sous-titre-p">
                      Saisissez vos informations bancaires en toute sécurité afin de valider votre paiement.
                  </div>
                  </div>
                </div>
                
              </div>
              <div class="centre">
                <div class="carte">
                  <div class="sous-titre">
                    <div class="index">4</div> 
                    <div class="sous-titre2">Récupérez votre reçu en ligne</div>
                  
                  <div class="sous-titre-p">
                    Une fois votre paiement effectué, vous recevrez votre reçu via votre adresse Mail. Vous pouvez également le télécharger à tout moment sur notre site
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="separateur"></div>
          <!--  -->
          <div class="section">
            <div class="titre">
              Actualité
            </div>
            <div class="section-actu">
                <!-- <div class="centre"> -->
                  {#each actus as a}
                  <!-- <div style="height: 10px;"></div> -->
                  <div class="carte2">
                    <!-- class="photo" -->
                    <div 
                      style="
                      height: 130px;
                      width: 150px;
                      background-color: #0095C9;
                      background-image: url('{a.photo}');
                      background-repeat: no-repeat;
                      background-size: cover;"
                      >
                      <!-- <img src="{a.photo}" height="150px" width="150px" alt="${a.photo}"> -->
                    </div> 
                      <div class="sous-titre"> 
                        <div class="sous-titre2">{a.titre}</div>
                        <div class="sous-titre-pp">
                          {a.contenu}
                        </div>
                      </div>
                    </div>
                  {/each}
                <!-- </div> -->
              
            </div>
          </div>
          <!-- <div class="commencer">
            Commancer
          </div> -->
        </div>
    </div>
</div>
