<script>
// @ts-nocheck

  import { profil } from "../../stores";

	/**
   * @type {boolean}
   */
	 //export let showModal; // boolean

	/**
   * @type {HTMLDialogElement}
   */
	let dialog; // HTMLDialogElement

	//$: if (dialog && showModal) dialog.showModal();

    function t(){
        console.log(profil['profil']);
    }
    t();

    let nom = profil['profil']['nom'];
    let postnom = profil['profil']['postnom'];
    let prenom = profil['profil']['prenom'];
    let email = profil['profil']['email'];
    let telephone = profil['profil']['telephone'];
    let ville = profil['profil']['ville'];
    let commune = profil['profil']['commune'];
    let quartier = profil['profil']['quartier'];
    let avenue = profil['profil']['avenue'];
    let numero = profil['profil']['numero'];
    let jour = profil['profil']['jour'];
    let mois = profil['profil']['mois'];
    let annee = profil['profil']['annee'];
    let value = profil['profil']['mdp'];
    $: type = show_password ? 'text' : 'password';
    $: show_password = false;
</script>

<style>
	/* dialog {
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
	} */
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
    .centre {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100vh;
        background-color: white;
        /* margin: 30px; */
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
  button svg {
		width: 20px;
		height: 20px;
        max-width: 20px;
        max-height: 20px;
        margin: 10px;
	}
	#eye {
		margin: -10px;
	}
</style>

<div class="corps-page">
    <div class="centre">
        <div class="corps">
            <!-- <hr /> -->
            
            <div class="type1">
                <div class="type2">
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" name="Nom" bind:value={nom}>
                </div>
                <div class="type2">
                    <label for="postnom">Postnom</label>
                    <input type="text" id="postnom" name="Nom de famille" bind:value={postnom}>
                </div>
                <div class="type2">
                    <label for="prenom">Prenom</label>
                    <input type="text" id="prenom" name="prenom" bind:value={prenom}>
                </div>
                
            </div>
            <div class="type2">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" bind:value={email}>
            </div>
            <div class="type2">
                <label for="confiremail">Mot de passe</label>
                <div class="type1">
                    <input type={show_password ? "text" : "password"} id="confiremail" name="confiremail" {value}>
                    <button id="eye" on:click|preventDefault={() => show_password = !show_password}>
                        {#if show_password}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                        {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {/if}
                    </button>
                </div>
            </div>
            <div class="type2">
                <label for="phone">Téléphone</label>
                <input type="phone" id="telephone" name="telephone" bind:value={telephone}>
            </div>
            <div class="type1">
                <div class="type2">
                    <label for="ville">Ville</label>
                    <input type="text" id="ville" name="ville" bind:value={ville}>
                </div>
                <div class="type2">
                    <label for="commune">Commune</label>
                    <input type="text" id="commune" name="commune" bind:value={commune}>
                </div>
                <div class="type2">
                    <label for="quartier">Quartier</label>
                    <input type="text" id="quartier" name="quartier" bind:value={quartier}>
                </div>
            </div>
            <div class="type1">
                <div class="type2">
                    <label for="avenue">Avenue</label>
                    <input type="text" id="avenue" name="avenue" bind:value={avenue}>
                </div>
                <div class="type2">
                    <label for="numero">Numéro</label>
                    <input type="text" id="numero" name="numero" bind:value={numero}>
                </div>
            </div>
            <div class="type2">
                <label for="fname">Date de naissance</label>
                <div class="type1">
                    <div class="type2">
                        <input type="text" id="jour" name="jour">
                    </div>
                    <div class="type2">
                        <input type="text" id="jour" name="jour">
                    </div>
                    <div class="type2">
                        <input type="text" id="annee" name="annee">
                    </div>
                </div>
            </div>
            <div class="type2">
                <label for="fname">Genre</label>
                <div class="type1">
                    <div class="type1">
                        <label for="femme">Femme</label>
                        <input type="checkbox" value="Femme" id="femme" name="femme">
                    </div>
                    <div class="type1">
                        <label for="homme">Homme</label>
                        <input type="checkbox" value="Homme" id="homme" name="homme">
                    </div>
                </div>
            </div>
            <div>_______________</div>
            <button class="button">
                Modifier
            </button>
            <hr />
            <!-- svelte-ignore a11y-autofocus -->
            <!-- <button autofocus on:click={() => dialog.close()}>close modal</button> -->
        </div>
    </div>
</div>
