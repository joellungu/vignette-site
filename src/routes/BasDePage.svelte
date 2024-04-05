
<script>
    import { Google, Linkedin, Facebook, TwitterX, PhoneFill, EnvelopeFill, GeoAltFill } from "svelte-bootstrap-icons";
  
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
        justify-content: start;
        align-items: center;
        width: 69%;
        /* height: 100vh; */
        /* background-color: white; */
        background-color:oldlace;
        gap: 1px;
        padding: 0px 10px;
    }
    .haut {
        display: flex;
        flex-direction: row;
        /* justify-content: center; */
        align-items: start;
        justify-content: space-between;
        width: 100%;
        gap: 10px;
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
        border-top: 1px solid rgb(159, 159, 159);
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
        align-items: self-start;
        justify-content: space-evenly;
        /* background-color: aqua; */
        width: 100%;
        /* height: 100px; */
        padding: 0px 0px;
    }
    
    .titre {
        font-size: larger;
        font-weight: bold;
        color: black;
        font-family: chbd, chs;
        font-size: 1.1em;
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
        font-size: 0.8em;
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
        /* background-color: aquamarine; */
        width: 300px;
    }
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* width: 15%; */
        padding: 0px 10px;
    }
    a {
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        color: #1859bb;
        text-decoration: none;
        font-size: 0.8em;

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

</style>

<div class="bas-de-page">
    <div class="centre">
        <div class="goupe-titre">
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
        </div>
        
        <div class="haut">
            <div class="goupe-titre2">
                <div class="titre">
                    Accès Rapides
                </div>
                <div class="goupe-titre">
                    <a class="sous" href="/">Accueil</a>
                    <a class="sous" href="/">Commande votre vignette</a>
                    <a class="sous" href="/">Foire aux questions</a>
                    <a class="sous" href="/">Compte</a>
                </div>
            </div>
            <div class="goupe-titre2">
                <div class="titre">
                    Contactez-Nous
                </div>
                <div class="goupe-titre">
                    <a href="/"><GeoAltFill height={15} width={15} color="black"/> 30 Avenue de la Justice Kinshasa, Gombe</a>
                    <a href="/"><EnvelopeFill height={15} width={15} color="black"/> lungujoel138@gmail.com</a>
                    <a href="/"><PhoneFill height={15} width={15} color="black"/> +243 815 381 693</a>
                </div>
            </div>
            <div class="goupe-titre2">
                <div class="titre">
                    Réseaux sociaux
                </div>
                <div class="goupe-titre">
                    <a href="/"><Google height={15} width={15} color="black"/> lungujoel138@gmail.com</a>
                    <a href="/"><TwitterX height={15} width={15} color="black"/> +243 815 381 693</a>
                    <a href="/"><Facebook height={15} width={15} color="black"/> lungujoel138@gmail.com</a>
                    <a href="/"><Linkedin height={15} width={15} color="black"/> +243 815 381 693</a>
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
                    <Google height={30} width={15} color="black"/>
                </div>
                <div class="icon-compte">
                    <TwitterX height={30} width={15} color="black"/>
                </div>
                <div class="icon-compte">
                    <Facebook height={30} width={15} color="black"/>
                </div>
                <div class="icon-compte" >
                    <Linkedin height={30} width={15} color="black"/>
                </div>
            </div> -->
        </div>
    </div>
</div>