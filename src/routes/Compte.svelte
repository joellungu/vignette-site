<script>
  import Inscription from "./Inscription.svelte";
  import Modal from './Modal.svelte';

	let showModal = false;

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
                <input type="text" id="email" name="email">
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password">
              </form>
              <button>
                  Se connecter
              </button>
              <button>
                Mot de passe oublié
              </button>
              <button on:click={() => (showModal = true)}>
                Créer un compte
              </button>
              <Inscription bind:showModal>
                <!-- <h2 slot="tete2">
                  modal
                  <small><em>adjective</em> mod·al \ˈmō-dəl\</small>
                </h2> -->
                <!-- <div class="tete2">
                  Connexion
                </div> -->
                <!-- <ol class="definition-list">
                  <li>of or relating to modality in logic</li>
                  <li>
                    containing provisions as to the mode of procedure or the manner of taking effect —used of a
                    contract or legacy
                  </li>
                  <li>of or relating to a musical mode</li>
                  <li>of or relating to structure as opposed to substance</li>
                  <li>
                    of, relating to, or constituting a grammatical form or category characteristically indicating
                    predication
                  </li>
                  <li>of or relating to a statistical mode</li>
                </ol> -->
              
                <!-- <a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a> -->
              </Inscription>
            </div>
            
          </div>
      </div>
    </div>
</div>