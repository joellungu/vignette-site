<script>
// @ts-nocheck

    import Radio from './Radio.svelte';
  import RepInscription from './RepInscription.svelte';
	/**
   * @type {boolean}
   */
	 export let showModal; // boolean
     //
     let showModalRep = false;
     let messageServeur = "";

	/**
   * @type {HTMLDialogElement}
   */
	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
    // 
    let foo = 'baz'
	let bar = 'qux'
    let nom = '';
    let postnom = '';
    let prenom = '';
    let email = '';
    let telephone = '';
    let ville = '';
    let commune = '';
    let quartier = '';
    let avenue = '';
    let numero = '';
    let jour = '';
    let mois = '';
    let annee = '';
    $: dateNaissance = '';
    //
    /**
   * @type {any}
   */
    let radioValue = 'femme';
    console.log(radioValue);
	
	const options = [{
		value: 'femme',
		label: 'Femme',
	}, {
		value: 'homme',
		label: 'Homme',
	},]
    // 
    let genre = '';
    let mdp = '';
	/**
   * @type {string | null}
   */
	let result = null
	
	async function doPost () {
		const res = await fetch('https://httpbin.org/post', {
			method: 'POST',
			body: JSON.stringify({
				foo,
				bar
			})
		})
		
		const json = await res.json()
		result = JSON.stringify(json)
	}
    // ________________________________
    // @ts-ignore
    async function handleSubmit(e) {
        // getting the action url
		const ACTION_URL = e.target.action
        // @ts-ignore
        //var data = new Map();
        //
        
        // data.set("nom", nom);
        // data.set("nom", nom);
        // data.set("nom", nom);

        // get the form fields data and convert it to URLSearchParams
        const formData = new FormData(e.target)
        const data = new Map()
        data.set('nom', nom);
        data.set('postnom', postnom);
        data.set('prenom', prenom);
        data.set('email', email);
        data.set('telephone', telephone);
        data.set('ville', ville);
        data.set('commune', commune);
        data.set('quartier', quartier);
        data.set('avenue', avenue);
        data.set('numero', numero);
        // let data = new Map();
        console.log("le data: "+JSON.stringify(data));
        console.log("le data: "+nom);
        console.log("le data: "+data.get('nom'));
        console.log("le data: "+data.get('postnom'));
        console.log("le data: "+data.get('prenom'));
        // for (let field of formData) {
        //     const [key, value] = field
        //     data.set(key, value);
        // }
        //
        const res = await fetch("http://localhost:8080/utilisateur", {
				method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
				body: JSON.stringify({
                    'nom':nom,
                    'postnom':postnom,
                    'prenom':prenom,
                    'email':email,
                    'telephone':telephone,
                    'ville':ville,
                    'commune':commune,
                    'quartier':quartier,
                    'avenue':avenue,
                    'numero':numero,
                    "jour":jour,
                    "mois":mois,
                    "annee":annee,
                    'genre': radioValue,
                    'mdp':"123456789",
                    'activer':false,
                }),
                //makeid(10)
			});
            //
            const json = await res.json()
            result = JSON.stringify(json)
            console.log("----------------------------: "+json.body);
            console.log("----------------------------");
            messageServeur = json['message'];
            showModalRep = true;
            
		
        //['data']
        console.log("----------------------------");
        console.log("rep: "+result['message']);
        console.log("rep: "+result);
    }
    //
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
        }
        return result;
    }
    //Test rep
    function testRep() {
        showModalRep = true;
    }
</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<style>
	dialog {
		max-width: 80%;
        max-height: 650px;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
    .corps {
        height: 650px;
        width: 80%;
        /* background-color: blueviolet; */
        display: flex;
        gap: 10px;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px 50px;
    }
    .tete2 {
        font-family: chbd;
        font-size: 1.5em;
        font-weight: bold;
        text-align: left;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: left;

    }
  .type1 {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-shrink: initial;
    align-items: stretch;
    padding: 0 50px 0px 0;
    /* background-color: aqua; */
    /* justify-content: space-between; */
    /* align-items: center; */
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
    border-radius: 6px;
    outline: none;
    box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
    /* :focus{
        border-color: #0366d6;
        outline: none;
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    } */       
  }
  .button {
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
    min-width: 200px;
    font-weight: 500;
    color: #0F1111;
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
    min-width: 200px;
    font-weight: 500;
    color: #0F1111;
    /* :hover{
        background: #F7CA00;
        border-color: #F2C200;
        box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    }
      */
  }
  label {
    text-align: left;
    padding-top: 10px;
    font-family: chbo;
  }
  .type2{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>


<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
    <form action="http://localhost:8080/utilisateur" method="post" on:submit|preventDefault={handleSubmit}>
        <div class="corps" on:click|stopPropagation>
            <!-- <hr /> -->
            <slot class="tete2" />
                S'Inscrire
            <slot />
            
            
            <div class="type1">
                <div class="type2">
                    <label for="nom">Nom</label>
                    <input bind:value={nom} type="text" id="nom" name="Nom">
                </div>
                <div class="type2">
                    <label for="postnom">Postnom</label>
                    <input bind:value={postnom} type="text" id="postnom" name="Nom de famille">
                </div>
                <div class="type2">
                    <label for="prenom">Prenom</label>
                    <input bind:value={prenom} type="text" id="prenom" name="prenom">
                </div>
                
            </div>
            <div class="type2">
                <label for="email">Email</label>
                <input bind:value={email} type="email" id="email" name="email">
            </div>
            <div class="type2">
                <label for="confiremail">Confirme email</label>
                <input bind:value={email} type="confiremail" id="confiremail" name="confiremail">
            </div>
            <div class="type2">
                <label for="phone">Téléphone</label>
                <input bind:value={telephone} type="phone" id="telephone" name="telephone">
            </div>
            <div class="type1">
                <div class="type2">
                    <label for="ville">Ville</label>
                    <input bind:value={ville} type="text" id="ville" name="ville">
                </div>
                <div class="type2">
                    <label for="commune">Commune</label>
                    <input bind:value={commune} type="text" id="commune" name="commune">
                </div>
                <div class="type2">
                    <label for="quartier">Quartier</label>
                    <input bind:value={quartier} type="text" id="quartier" name="quartier">
                </div>
            </div>
            <div class="type1">
                <div class="type2">
                    <label for="avenue">Avenue</label>
                    <input bind:value={avenue} type="text" id="avenue" name="avenue">
                </div>
                <div class="type2">
                    <label for="numero">Numéro</label>
                    <input bind:value={numero} type="text" id="numero" name="numero">
                </div>
            </div>
            <div class="type2">
                <label for="fname">Date de naissance</label>
                <div class="type1">
                    <div class="type2">
                        <input bind:value={jour} type="text" id="jour" name="jour">
                    </div>
                    <div class="type2">
                        <input bind:value={mois} type="text" id="jour" name="jour">
                    </div>
                    <div class="type2">
                        <input bind:value={annee} type="text" id="annee" name="annee">
                    </div>
                </div>
            </div>
            <div class="type2">
                <label for="fname">Genre</label>
                <Radio {options} fontSize={16} legend='' bind:userSelected={radioValue}/>
                <div class="type1">
                    <!-- <div class="type1">
                        <label for="femme">Femme</label>
                        <input type="checkbox" value="Femme" id="femme" name="femme">
                    </div>
                    <div class="type1">
                        <label for="homme">Homme</label>
                        <input type="checkbox" value="Homme" id="homme" name="homme">
                    </div> -->
                </div>
            </div>
            <div>_______________</div>
            <input class="button" type="submit" value="S'Inscrire" />
            
                
        <!-- </input> -->
            <hr />
        </div>
    </form>
    <!-- <button on:click={testRep}>
        Test rep serveur
    </button> -->
    <RepInscription bind:showModalRep bind:messageServeur>
    </RepInscription>
    <!-- <div>
        <input bind:value={foo} />
        <input bind:value={bar} />
        <button type="button" on:click={doPost}>
            Post it.
        </button>
        <p>
            Result:
        </p>
        <pre>
        {result}
        </pre>
		<-- svelte-ignore a11y-autofocus --
		<-- <button autofocus on:click={() => dialog.close()}>close modal</button> --
	</div> -->
</dialog>

