<script>
    import { Google, Linkedin, Facebook, Question } from "svelte-bootstrap-icons";
    const sections = {
		"Comment puis-je accéder à la plateforme de paiement de vignettes automobiles en RDC ?": 
        "Vous pouvez accéder à notre plateforme de paiement de vignettes automobiles en RDC en vous rendant sur notre site web officiel à l'adresse [insérer l'adresse du site web]. Une fois sur la page d'accueil, vous trouverez des instructions pour vous inscrire et commencer à utiliser nos services.",
  	    
        "Quels sont les moyens de paiement acceptés sur la plateforme ?": 
        "Nous acceptons plusieurs méthodes de paiement sécurisées, y compris les cartes bancaires, les paiements mobiles et les transferts bancaires. Vous pouvez choisir la méthode qui vous convient le mieux lors du processus de paiement.",
		
        "Est-ce que je peux payer la vignette pour plusieurs véhicules en même temps sur la plateforme ?": 
        "Oui, notre plateforme vous permet de gérer et de payer les vignettes pour plusieurs véhicules à la fois. Vous pouvez ajouter tous vos véhicules à votre profil et effectuer un seul paiement pour l'ensemble.",
		
        "Comment puis-je obtenir mon reçu de paiement après avoir effectué ma transaction sur la plateforme ?": 
        "Après avoir effectué votre paiement avec succès, un reçu numérique sera automatiquement généré. Vous pourrez le télécharger à partir de votre compte utilisateur ou le recevoir par e-mail ou SMS, selon vos préférences.",
		
        "Est-ce que mes informations personnelles sont sécurisées lors de l'utilisation de la plateforme de paiement ?": 
        "Oui, la sécurité de vos informations personnelles est notre priorité absolue. Notre plateforme utilise des mesures de sécurité avancées pour protéger vos données contre tout accès non autorisé ou toute utilisation frauduleuse.",

        "Que dois-je faire si j'ai des problèmes ou des questions concernant le paiement de ma vignette sur la plateforme ?":
        "Si vous rencontrez des problèmes ou si vous avez des questions, n'hésitez pas à contacter notre équipe d'assistance clientèle. Vous pouvez nous joindre par e-mail à [adresse e-mail] ou par téléphone au [numéro de téléphone], et nous serons heureux de vous aider.",
        
        "Est-ce que je peux modifier ou annuler ma transaction une fois qu'elle a été effectuée sur la plateforme ?":
        "Malheureusement, une fois qu'une transaction a été confirmée et traitée sur notre plateforme, elle ne peut pas être modifiée ou annulée. Nous vous encourageons à vérifier attentivement toutes les informations avant de finaliser votre paiement.",
        
        "Comment puis-je savoir si ma vignette a été correctement émise après avoir effectué mon paiement sur la plateforme ?":
        " Après avoir effectué votre paiement, vous recevrez une confirmation de transaction ainsi qu'un reçu numérique. Ces documents serviront de preuve de paiement et de confirmation que votre vignette a été correctement émise.",
        
	}
</script>

<style>
    .centre {
        overflow: scroll;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        /* height: 100vh; */
        background-color: white;
        gap: 10px;
        padding: 110px 0px;
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
    .carte-body {
        padding: 5px;
        display: flex;
        justify-content: left;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
    }
    
    .index {
        background-color: #0095C9;
        width: 100px;
        height: 100px;
        text-align: center;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .titre {
        font-size: larger;
        font-weight: bold;
        color: #585858;
        font-family: chbd, chs;
        font-size: 1em;
        /* background-color: aqua; */
    }

    .reponse {
        font-size: medium;
        font-weight: bold;
        color: rgb(53, 51, 51);
        font-family: chli, chl;
        font-size: 0.8em;
        /* background-color: aquamarine; */
    }
    
  </style>

<div>
    <div class="corps-page">
        <div class="centre">
            {#each Object.entries(sections) as [title, paragraph]}
                <!-- <h1>{title}</h1>
                <p>{paragraph}</p> -->
                <div class="carte">
                    <div class="index">
                        <Question height={30} width={30} color="white"/>
                    </div>
                    <div class="carte-body">
                        <div>
                            <div class="titre">{title}</div>
                            <div class="reponse">
                                {paragraph}
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
            
      </div>
    </div>
</div>