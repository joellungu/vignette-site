<script>
// @ts-nocheck

    import { Google, Linkedin, Facebook, TwitterX, Phone, Chat, CarFront, CalendarDate } from "svelte-bootstrap-icons";
    
    //import { Qr } from '@sveltevk/qr';
    //new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
    //import QrCode from "svelte-qrcode"


    $: sections = [];
    let showModal = false;
    //
    //
    async function loadData() {
        //
        const res = await fetch("http://localhost:8080/vehicule", {
				method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                //
                //makeid(10)
			},
        );
        //['data']
        //const json = await res.json()
        sections = await res.json();
    }
    //
    loadData();
    //
</script>

<style>
    .centre {
        overflow:scroll;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        /* height: 100vh; */
        /* background-color: white; */
        padding: 10px 0px;
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
        background-color: rgb(193, 204, 210);
        text-align: left;
        /*  */
        border: 0px solid #B2B2B2;
        padding: 0px;
        /* box-shadow: 1px 1px 1px #B2B2B2; */
        /* height: auto; */
        width: 30em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        /* height: 200px; */
        
    }
    .carte-body {
        padding: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        /* background-color: bisque; */
    }
    .carte-corps {
        padding: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 100%;
        /* background-color: bisque; */
    }
    .titre1 {
        font-size: medium;
        font-weight: bold;
        color: white;
        font-family: chbd, chl;
        padding: 0px 10px;
        /* background-color: aquamarine; */
    }
    .titre2 {
        font-size: medium;
        font-weight: bold;
        color: white;
        font-family: chbo, chl;
        padding: 0px 10px;
        /* background-color: aquamarine; */
    }
    button {
        background-color: #0095C9; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        /* color: black; */
    }
    .recherche {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 30em;
        background-color: aqua;
    }
    .matricule {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex: 1;
        background-color: #B2B2B2;
    }
    input[type='text'] {
        flex: 1;
        padding: 10px 10px;
        text-align: center;
        font-size: larger;
        font-weight: bold;
        color: #585858;
        font-family: chbd, chs;
    }
    
    .align-bouton {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: end;
        padding: 0px 0px;
        width: 100%;
    }
    .entete-carte {
        background-color: #0095C9;
        height: 30px;
        width:inherit;
        padding: 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: white;
    }
    /*  */
    .list-title {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        width: 100%;
    }
    .logo-type {
        height: 50px;
        width: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background-color: aquamarine; */
    }
    .corps-type {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: self-start;
        flex: 1;
        /* background-color: cadetblue; */
    }
    .titre-type {
        font-family: chbd, chli;
        text-align: left;
        font-size: 0.8em;
        font-weight: 400;
        padding: 0px 10px;
        text-align: left;
        /*  */
    }

    .sous-titre-type {
        font-family: chbo, chli;
        text-align: left;
        font-size: 0.7em;
        font-weight: 400;
        padding: 0px 10px;
        text-align: left;
    }
    a {
        padding: 10px;
    }
    #qrcode {
        padding: 10px;
        height: 100px;
        width: 100px;
        background-color: aqua;
    }
    
</style>
<!-- <svelte:head>
    <script src="https://js.stripe.com/v3/" on:load={() => console.log('script:load') }></script>
    <script type="text/javascript">
        new QRCode(document.getElementById("qrcode"), "https://webisora.com");
    </script>
</svelte:head> -->
<div>
    <div class="corps-page">
        <div class="centre">
            <div class="recherche">
                <div class="matricule">
                    <input type="text">
                </div>
                <button>
                    Rechercher
                </button>
            </div>
            <br >
            <!-- [title, paragraph] -->
            {#each sections as veh }
                
                <!-- <h1>{title}</h1>
                <p>{paragraph}</p> -->
                <div class="carte">
                    <!-- <div class="index">
                        <CarFront height={24} width={24}/> 
                    </div> -->
                    
                    <!-- <div class="carte-body"> -->
                        
                            <div class="entete-carte">
                                <div class="titre1">{veh.model}</div>
                                <div class="titre2">{veh.marque}</div>
                            </div>

                            <div class="carte-corps">
                                <div class="carte-body">
                                   
                                    <img src="https://quickchart.io/chart?cht=qr&chs=150x150&chl=Testing123&dark=f00&light=0ff" alt="">
                                    <!-- <Qr text="Text to encode" qrSize={256}  /> -->
                                    <!-- <QrCode codeValue="12354234562345" squareSize=200/> -->
                                
                                </div>
    
                                <div class="carte-body">
    
                                    <div class="list-title">
                                        <div class="logo-type"><CalendarDate height={25} width={25} color="black"/></div>
                                        <div class="corps-type">
                                            <div class="titre-type">Date d'achat</div>
                                            <div class="sous-titre-type">12-01-2024</div>
                                        </div>
                                    </div>
    
                                    <div class="list-title">
                                        <div class="logo-type"><CalendarDate height={25} width={25} color="black"/></div>
                                        <div class="corps-type">
                                            <div class="titre-type">Date d'expiration</div>
                                            <div class="sous-titre-type">12-12-2025</div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            
                            <div class="align-bouton">
                                <a href="/">
                                    Télécharger votre vignette
                                </a>
                            </div>
                            <!-- {paragraph} -->
                                <!-- <div class="goupe">
                                    <div><Google height={15} width={15} color="black"/> Hibride</div>
                                    <div><TwitterX height={15} width={15} color="black"/> 2022</div>
                                    <div><Facebook height={15} width={15} color="black"/> Volant Droit</div>
                                    <div><Linkedin height={15} width={15} color="black"/> DFT67H6G7HVYYTYT88</div>
                                </div> -->
                        
                    <!-- </div> -->
                </div>
            {/each}
            <div class="align-bouton">
                <a href="/">
                    1
                </a>
                <a href="/">
                    2
                </a>
                <a href="/">
                    3
                </a>
                <a href="/">
                    suivant
                </a>
            </div>
      </div>
    </div>
</div>