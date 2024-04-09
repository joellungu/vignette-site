
<script>
    import { Google, Linkedin, Facebook, TwitterX, PhoneFill, EnvelopeFill, GeoAltFill, Instagram } from "svelte-bootstrap-icons";
  
</script>

<style>
    .bas-de-page {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .centre {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 99%;
        /* height: 100vh; */
        /* background-color: white; */
        background-color: #0095C9;
        gap: 1px;
        padding: 0px 10px;
    }
    .centre2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 69%;
        /* height: 100vh; */
        /* background-color: white; */
        background-color: #0095C9;
        gap: 1px;
        padding: 0px 10px;
    }
    .haut {
        display: flex;
        flex-direction: row;
        /* justify-content: center; */
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 10px;
        margin: 10px;
        /* background-color: aqua; */
    }
    .haut2 {
        display: flex;
        flex-direction: row;
        /* justify-content: center; */
        align-items: center;
        justify-content: start;
        width: 100%;
        gap: 1px;
        margin: 10px;
        /* background-color: aqua; */
    }
    .bas {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100px;
        /* gap: 10px; */
        /* padding: 10px; */
        border-top: 1px solid rgb(259, 259, 259);
    }
    .goupe-titre {
        display: flex;
        flex-direction: column;
        align-items: self-start;
        justify-content: space-between;
        /* background-color: aqua; */
        /* height: 110%; */
        width: 100%;
        /* height: 100px; */
        padding: 0px 0px;
    }

    .goupe-titre2 {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        /* background-color: aqua; */
        width: 100%;
        /* height: 100px; */
        padding: 0px 0px;
    }
    
    .titre {
        font-size: larger;
        font-weight: bold;
        color: white;
        font-family: chbd, chs;
        font-size: 0.8em;
        text-align: left;
        padding: 0;
        margin: 0;
        
        /* background-color: aqua; */
    }
    .sous-titre {
        font-size: medium;
        font-weight: bold;
        color: white;
        font-family: chl, chli;
        text-align: left;
        font-size: 0.6em;
        font-weight: 400;
        padding: 3px 0px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        text-align: justify;
        
    }
    .contact {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        /* background-color: aquamarine; */
        /* width: 300px; */
    }
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* width: 25%; */
        padding: 0px 10px;
    }
    a {
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        color: white;
        /* text-decoration: none; */
        font-size: 0.6em;

    }
    strong {
        font-weight: bold;
        font-family: chs;
    }
    .avantage {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: start;
    }

    .arr {
        display: flex;
        flex-direction: column;
        justify-content: start;
        background-color: aqua;
        height: 100%;

    }

    /* 
        background-color: #D8D8D8;
    */
    .style-text-logo-bas {
        font-size: 0.6em;
        text-align: left;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: white;
        margin: 2px;
    }
    .style-text-logo-bas2 {
        font-size: 0.7em;
        text-align: left;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: white;
        margin: 2px;
        width: 50%;
    }
    .logo-centre {
        text-align: center;
        margin: 2px;
    }
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: blueviolet;
        background-image: url("DGRK.png");
        background-repeat: no-repeat;
        background-size: contain;
        
        height: 50px;
        width: 50px;
        /* border-radius: 25px; */
    }
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: blueviolet;
        background-image: url("DGRK.png");
        background-repeat: no-repeat;
        background-size: contain;
        
        height: 50px;
        width: 50px;
        /* border-radius: 25px; GoogleMapTA.webp */
    }
    .bannier {
        height: 50px;
        width: 3px;
        background-color: white;
        display: flex;
        flex-direction: column;
        margin: 0px;
    }

    .map {
        height: 100px;
        width: 200px;
        background-color: aquamarine;
        background-image: url("GoogleMapTA.webp");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .espace {
        margin: 3px;
    }
    button {
    /* background-color: #0095C9;
    border: none;
    color: white;
    padding: 10px 27px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px; */

    font-family: chbo;
    display: inline-block;
    outline: 0;
    cursor: pointer;
    border-radius: 0px;
    /* box-shadow: 0 2px 2px 0 rgb(213 217 217 / 50%); */
    background: #FFD814;
    border: 1px solid #FCD200;
    font-size: 10px;
    height: 31px;
    padding: 0 11px;
    text-align: center;
    width: 100%;
    min-width: 70px;
    font-weight: 500;
    color: #0F1111;
    /* :hover{
        background: #F7CA00;
        border-color: #F2C200;
        box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    }
      */
  }

  input {
    /* padding: 10px 5px;
    border-radius: 5px;
    border: 1 solid white; */
    flex: 1;
    font-family: chbo;
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #e1e4e8;
    border-radius: 0px;
    outline: none;
    box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
    /* :focus{
        border-color: #0366d6;
        outline: none;
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    } */       
 }

  .newslatter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 2px;
  }

</style>

<div class="bas-de-page">
    <div class="centre">
        <!-- <div class="goupe-titre">
            <br>
            <div class="goupe-titre">
                <div class="titre">
                    Mention légale
                  </div>
                  <div class="sous-titre">
                      Ex consequat aliqua aute tempor dolor adipisicing eu deserunt quis consequat est. Ipsum sunt consectetur dolor do tempor eu eu officia non ullamco dolor mollit tempor et. Reprehenderit dolor cillum amet laborum. Fugiat velit magna anim eu. Pariatur minim minim consequat deserunt elit culpa proident labore Lorem dolor consequat. Elit aliquip exercitation tempor duis ex Lorem ullamco excepteur tempor ut Lorem et.
  
  Minim anim cillum est adipisicing eu. Non cillum exercitation cillum exercitation aute. Ex magna Lorem veniam do mollit quis ut anim aliqua qui magna veniam. Sit do aliqua ad magna veniam eiusmod exercitation eu dolore elit. Consequat mollit cillum tempor nulla cupidatat occaecat esse. Quis duis sint cillum excepteur ad qui elit eiusmod minim. Sint velit cupidatat anim irure laborum quis.
  
  Aute et proident anim esse deserunt aute. Pariatur cillum officia in in pariatur aliqua nisi sunt ipsum. Ullamco eiusmod officia proident magna non culpa.
                  </div>
            </div>
            <br>
            <div class="goupe-titre">
                <div class="titre">
                  À propos
                </div>
                <div class="sous-titre">
                    <strong>À Propos de Notre Plateforme de Paiement de Vignettes Automobiles en RDC</strong>
                        Notre plateforme de paiement de vignettes automobiles est une solution numérique innovante conçue pour simplifier et sécuriser le processus de paiement des vignettes pour tous les propriétaires de véhicules du pays. En harmonie avec les objectifs du Plan National du Numérique (PNN) de la RDC, notre plateforme vise à moderniser et à améliorer l'efficacité du système de paiement des vignettes, tout en contribuant à une meilleure gouvernance et à la croissance économique.<br/>
                        <div class="avantage">
                            <strong>Les Avantages de Notre Plateforme :</strong>
                        <ul>
                            <li class="sous-titre"><strong>Accessibilité Améliorée :</strong>Notre plateforme offre aux propriétaires de véhicules un moyen pratique de payer leurs vignettes à tout moment et de n'importe où, éliminant ainsi les barrières géographiques et les contraintes liées aux déplacements vers les points de paiement physiques.</li>
                            <li class="sous-titre"><strong>Sécurité Renforcée :</strong>Avec des mesures de sécurité avancées intégrées à notre plateforme, telles que le chiffrement des données et la protection contre la fraude, les utilisateurs peuvent effectuer leurs transactions en toute confiance, sachant que leurs informations personnelles sont sécurisées.</li>
                            <li class="sous-titre"><strong>Transparence Totale :</strong>Nous promouvons la transparence dans toutes les transactions effectuées via notre plateforme, en fournissant des reçus numériques pour chaque paiement réalisé et en garantissant la traçabilité des vignettes émises, ce qui contribue à renforcer la confiance des utilisateurs dans notre système.</li>
                            <li class="sous-titre"><strong>Simplicité d'Utilisation :</strong>Avec une interface conviviale et intuitive, notre plateforme rend le processus de paiement des vignettes rapide, facile et sans tracas pour les utilisateurs de tous niveaux de compétence technologique.</li>
                            <li class="sous-titre"><strong>Conformité Fiscale Accrue :</strong>En facilitant le processus de paiement des vignettes, notre plateforme encourage une plus grande conformité fiscale parmi les propriétaires de véhicules, contribuant ainsi à augmenter les recettes fiscales pour le gouvernement et à soutenir le développement national.</li>
                        </ul>
                        </div>
                </div>
            </div>
        </div> -->
        <div class="centre2">
            <div class="haut">
                <div class="haut2">
                    <div class="logo-centre">
                        <div class="logo"></div>
                    </div>
                    <div class="bannier">
                        <!-- <div class="bleu"></div>
                        <div class="jaune"></div>
                        <div class="rouge"></div> -->
                        
                    </div>
                    <div class="style-text-logo-bas2">
                        DIRECTION GENERALE DES RECETTES DE KINSHASA
                    </div>
                    <!-- <div class="titre">
                        Accès Rapides
                    </div>
                    <div class="goupe-titre">
                        <a class="sous" href="/">Accueil</a>
                        <a class="sous" href="/">Commande votre vignette</a>
                        <a class="sous" href="/">Foire aux questions</a>
                        <a class="sous" href="/">Compte</a>
                    </div> -->
                </div>
                <div class="goupe-titre2">
                    <div class="titre">
                        Acces rapide
                    </div>
                    <div class="espace"></div>
                    <div class="goupe-titre">
                        
                        <a href="/">Actualité</a>
                        <a href="/">Commandez votre vignette</a>
                        <!-- <a href="/"><Facebook height={25} width={25} color="black"/> lungujoel138@gmail.com</a>
                        <a href="/"><Linkedin height={25} width={25} color="black"/> +243 825 381 693</a> -->
                    </div>
                    <div class="espace"></div>
                    <div class="titre">
                        Adresse physique
                    </div>
                    <div class="goupe-titre">
                        
                        <div class="style-text-logo-bas">3 av kintino Gombe</div>
                        <!-- <a href="/"><Facebook height={25} width={25} color="black"/> lungujoel138@gmail.com</a>
                        <a href="/"><Linkedin height={25} width={25} color="black"/> +243 825 381 693</a> -->
                    </div>
                    <div class="map"></div>
                </div>
                <div class="goupe-titre2">
                    <div class="titre">
                        Contact
                    </div>
                    <div class="goupe-titre">
                        <div class="style-text-logo-bas">Contact: 0853045935</div>
                        <a href="/">info-vignette@dgrk.cd</a>
                        <div class="espace"></div>
                        <div class="style-text-logo-bas">Enregistrez-vous à notre Newslatter</div>
                        <div class="newslatter">
                            <input class="" type="email">
                            <button>Envoyer</button>
                        </div>

                    </div>
                    <div class="espace"></div>
                    <div class="espace"></div>
                    <div class="titre">
                        Suivez-nous
                    </div>
                    <div class="espace"></div>
                    <div class="espace"></div>
                    <div class="espace"></div>
                    <div class="espace"></div>
                    <div class="contact">
                        <TwitterX height={25} width={25} color="white"/>
                        <Facebook height={25} width={25} color="white"/>
                        <Instagram height={25} width={25} color="white"/>
                        <Linkedin height={25} width={25} color="white"/>
                    </div>
                </div>
            </div>
            <div class="bas">
                <div class="footer">
                    <div class="sous-titre">
                        Copyright © 2024. Tout droit reservé.
                    </div>
                </div>
                <!-- <div class="footer">
                    <div class="icon-compte">
                        <Google height={30} width={25} color="black"/>
                    </div>
                    <div class="icon-compte">
                        <TwitterX height={30} width={25} color="black"/>
                    </div>
                    <div class="icon-compte">
                        <Facebook height={30} width={25} color="black"/>
                    </div>
                    <div class="icon-compte" >
                        <Linkedin height={30} width={25} color="black"/>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</div>