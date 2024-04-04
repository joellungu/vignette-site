<script>
	/**
   * @type {boolean}
   */
	 export let showModal; // boolean

	/**
   * @type {HTMLDialogElement}
   */
	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

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
  button {
    /* background-color: #1859bb;
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
	<div class="corps" on:click|stopPropagation>
        <!-- <hr /> -->
		<slot class="tete2" />
            S'Inscrire
		<slot />
        
        
        <div class="type1">
            <div class="type2">
                <label for="fname">Email</label>
                <input type="text" id="email" name="email">
            </div>
            <div class="type2">
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password">
            </div>
        </div>
        <div class="type2">
            <label for="password">Mot de passe</label>
            <input type="password" id="password" name="password">
        </div>
        <div class="type2">
            <label for="password">Mot de passe</label>
            <input type="password" id="password" name="password">
        </div>
        <div class="type2">
            <label for="password">Mot de passe</label>
            <input type="password" id="password" name="password">
        </div>
        <div class="type1">
            <div class="type2">
                <label for="fname">Email</label>
                <input type="text" id="email" name="email">
            </div>
            <div class="type2">
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password">
            </div>
            <div class="type2">
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password">
            </div>
        </div>
        <div class="type1">
            <div class="type2">
                <label for="fname">Email</label>
                <input type="text" id="email" name="email">
            </div>
            <div class="type2">
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password">
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
        <button>
            S'Inscrire
          </button>
		<hr />
		<!-- svelte-ignore a11y-autofocus -->
		<!-- <button autofocus on:click={() => dialog.close()}>close modal</button> -->
	</div>
</dialog>

