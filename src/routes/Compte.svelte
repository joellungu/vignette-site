<script>
  import Inscription from "./inscription/Inscription.svelte";
  // @ts-ignore
  import Modal from './Modal.svelte';
  import { goto } from '$app/navigation';
  import RepLogin from "./RepLogin.svelte";
  import { profil } from "../stores";

  let email = '';
  let mdp = '';
    
    async function login() {
        // Do some login stuff
        const res = await fetch('http://localhost:8080/utilisateur/login?email='+email+'&mdp='+mdp, {
				method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
				// body: JSON.stringify(
        //   {
        //             'nom':nom,
        //             'postnom':postnom,
        //             'prenom':prenom,
        //             'email':email,
        //             'telephone':telephone,
        //             'ville':ville,
        //             'commune':commune,
        //             'quartier':quartier,
        //             'avenue':avenue,
        //             'numero':numero,
        //             'dateNaissance':'13-06-1994',
        //             'genre': radioValue,
        //             'mdp':"123456789",
        //             'activer':false,
        //         },
        //       ),
                //makeid(10)
			});
            //
            const json = await res.json();
            console.log(json);
            if(json['status'] === 'succes'){
              // @ts-ignore
              profil['profil'] = json['data'];
              goto('/profile');
            }else{
              messageServeur = json['message'];
              showModalRep = true;
            }
        //
    }
	let showModal = false;
  //
  let showModalRep = false;
  let messageServeur = "";

</script>


<style>
  /* @import "https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css"; */
  .centre {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    /* background-color: beige; */
    width: 70%;
  }
  .carte {
    height: 70%;
    width: 30%;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  .tete {
    font-family: chbd;
    font-size: 1.5em;
  }
  
  .connexion {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
    padding: 10px;
    height: 100%;
    /* background-color: aqua; */
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
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    background: #FFD814;
    border: 1px solid #FCD200;
    font-size: 13px;
    height: 31px;
    padding: 0 11px;
    text-align: center;
    width: 100%;
    min-width: 100px;
    font-weight: 500;
    color: #0F1111;
    /* :hover{
        background: #F7CA00;
        border-color: #F2C200;
        box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    }
      */
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  

   input {
    /* padding: 10px 5px;
    border-radius: 5px;
    border: 1 solid white; */
    
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
    border-radius: 6px;
    outline: none;
    box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
    /* :focus{
        border-color: #0366d6;
        outline: none;
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    } */       
  } 

  label {
    text-align: left;
    padding-top: 10px;
    font-family: chbo;
  }

  .error {
		display: none;
	}
	input[type='email']:invalid + .error {
		display: initial;
		color: red;
	}

</style>

<div>
    <div class="corps-page">
        <div class="centre">
          <div class="carte">
            <div class="tete">
              Connexion
            </div>
            <div class="connexion">
              <form class="form">
                
                <label for="fname">Email</label>
                <input type="email" id="email" name="email" bind:value={email}>
                <div class="error">
                  Email invalide
                </div>
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password" bind:value={mdp}>
              </form>
              <button on:click={login}>
                  Se connecter
              </button>
              <button>
                Mot de passe oublié
              </button>
              <button on:click={() => (showModal = true)}>
                Créer un compte
              </button>
              <Inscription bind:showModal>
              </Inscription>
            </div>
            
          </div>
      </div>
    </div>
    <RepLogin bind:showModalRep bind:messageServeur>
    </RepLogin>
</div>