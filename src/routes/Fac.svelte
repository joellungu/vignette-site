<script>
    const sections = {
		"Voiture sans matricule": "Incididunt dolore commodo tempor quis anim cillum adipisicing excepteur tempor in consectetur minim...",
  	    "Mode de paiement": "Incididunt dolore commodo tempor quis anim cillum adipisicing excepteur tempor in consectetur minim...",
		"Payer à distance": "Incididunt dolore commodo tempor quis anim cillum adipisicing excepteur tempor in consectetur minim...",
		"pour quelqu'un": "Incididunt dolore commodo tempor quis anim cillum adipisicing excepteur tempor in consectetur minim...",
		"Comment télécharger une vignette": "Incididunt dolore commodo tempor quis anim cillum adipisicing excepteur tempor in consectetur minim..."
	}
</script>

<style>
    .centre {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 100vh;
        background-color: white;
        gap: 10px;
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
        height: 70px;
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
        background-color: #1859bb;
        width: 100px;
        height: 70px;
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
        /* background-color: aqua; */
    }

    .reponse {
        font-size: medium;
        font-weight: bold;
        color: rgb(53, 51, 51);
        font-family: chli, chl;
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
                        Index
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