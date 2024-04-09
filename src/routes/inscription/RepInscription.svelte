<script>

    /**
   * @type {boolean}
   */
	 export let showModalRep; // boolean

     /**
   * @type {any}
   */
      export let messageServeur;

    /**
   * @type {HTMLDialogElement}
   */
	let dialogRep; // HTMLDialogElement

    $: if (dialogRep && showModalRep) dialogRep.showModal();
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
	
</style>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog 
    bind:this={dialogRep}
	on:close={() => (showModalRep = false)}
	on:click|self={() => dialogRep.close()}
>
    <div>
        <h1>Reponse du serveur</h1>
        <h3>{messageServeur}</h3>
        
        <button autofocus on:click={() => dialogRep.close()}>
            Ok
        </button>
    </div>
</dialog>