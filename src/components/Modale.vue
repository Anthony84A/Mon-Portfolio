<template>
    <div  id="realisations" class="section">
        <div class="boxed text_center">

            <h2>Mes réalisations</h2>

            <div class="flex space_between">

                <div class="w32 realisation">

                    <div class="pc_animation">
                        <img src="/src/assets/Media/ordinateur.png" alt="image d'un écran d'ordinateur">
                        <h3>Mon CV</h3>
                    </div>

                    <div class="modal-container" id="modal_cv">

                        <div class="overlay modal-trigger"></div>

                        <div class="modal">
                            <button class="close-modal modal-trigger" @click="toggleModalCv()">X</button>
                            <h2>Curriculum Vitae</h2>
                            <p>Date de création :<time>2024-01-08</time></p>
                            <p>Technologies utilisées : HTML & CSS</p>
                            <p>Lien : <a href="https://github.com/Anthony84A/CV-Anthony-ARNIAUD"
                                    target="_blank">Github</a></p>
                            <img src="/src/assets/Media/photo_CV.png" alt="photo d'un cv">
                        </div>

                    </div>

                    <button class="modal-btn modal-trigger" @click="toggleModalCv()">+</button>

                </div>

                <div class="w32 realisation">

                    <div class="pc_animation">
                        <img src="/src/assets/Media/ordinateur.png" alt="image d'un écran d'ordinateur">
                        <h3>Cahier des charges "La Socketterie"</h3>
                    </div>

                    <div class="modal-container" id="modal_cdc">

                        <div class="overlay modal-trigger"></div>

                        <div class="modal">
                            <button class="close-modal modal-trigger" @click="toggleModalCdc()">X</button>
                            <h2>Cahier des charges "La Socketterie"</h2>
                            <p>Date de création :<time>2024-02-01</time></p>
                            <p>Technologies utilisées : Word & Figma</p>
                            <p>Lien : <a href="Media/Devoir CEF.pdf" target="_blank">PDF</a></p>
                            <img src="/src/assets/Media/photo_cdc.png"
                                alt="photo d'un Cahier des charges 'la Socketterie' ">
                        </div>

                    </div>

                    <button class="modal-btn modal-trigger" @click="toggleModalCdc()">+</button>

                </div>

                <div class="w32 realisation">

                    <div class="pc_animation">
                        <img src="/src/assets/Media/ordinateur.png" alt="image d'un écran d'ordinateur">
                        <h3>Espace commentaire dynamique</h3>
                    </div>

                    <div class="modal-container" id="modal_commentaire">

                        <div class="overlay modal-trigger"></div>

                        <div class="modal">
                            <button class="close-modal modal-trigger" @click="toggleModalCommentaire()">X</button>
                            <h2>Espace Commentaire Dynamique</h2>
                            <p>Date de création :<time>2024-02-23</time></p>
                            <p>Technologies utilisées : HTML, CSS & JS</p>
                            <p>Lien : <a href="https://github.com/Anthony84A/Dynamiser-un-espace-commentaire"
                                    target="_blank">Github</a></p>
                            <img src="/src/assets/Media/photo_commentaireJS.png" alt="photo d'un espace commentaire">
                        </div>

                    </div>

                    <button class="modal-btn modal-trigger" @click="toggleModalCommentaire()">+</button>

                </div>

            </div>

        </div>

    </div>

</template>


<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const modalContainers = document.querySelectorAll(".modal-container");
    const modalTriggers = document.querySelectorAll(".overlay");

    modalTriggers.forEach(trigger => trigger.addEventListener("click", () => {
        for (let item of modalContainers) {
            item.classList.remove("active");
        }
    }));
});

function toggleModalCv() {
    document.querySelector("#modal_cv").classList.toggle("active");
}

function toggleModalCdc() {
    document.querySelector("#modal_cdc").classList.toggle("active");
}

function toggleModalCommentaire() {
    document.querySelector('#modal_commentaire').classList.toggle('active')
}
</script>

<style scoped>
.section{
    padding: 100px 0;
}

.boxed{
    max-width: 1280px;
    margin-inline: auto;
}

.flex{
    display: flex;
}

.space_between{
    justify-content: space-between;
}

.text_center{
    text-align: center;
}

.w32{
    width: 32%;
}


/* Modal Dynamique */


.modal-btn {
    padding: 10px 14px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 50%;
}
  
.modal-container {
    /* display: none; */
    visibility: hidden;
    position: fixed;
    z-index: 1200;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: visibility 0.4s;
}

.modal-container.active {
    visibility: visible;
}
  
.overlay {
    opacity: 0;
    position: absolute;
    padding: 0;
    width: 100%;
    height: 100%;
    background: #333333d3;
    transition: opacity 0.4s 0.2s ease-out;
}

.modal-container.active .overlay {
    opacity: 1;
    transition: opacity 0.4s ease-out;
}
  
.modal {
    opacity: 0;
    width: 95%;
    max-width: 500px;
    min-width: 300px;
    padding: 30px;
    background: white;
    border-radius: 5px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 50px));
    transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}
  
.modal-container.active .modal {
    opacity: 1;
    transform: translate(-50%, -50%);
    transition: opacity 0.4s 0.2s ease-out,
    transform 0.4s 0.2s ease-out;
}
  
.close-modal {
    padding: 8px 10px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: #ff365e;
    color: #fff;
}

.modal h1 {
    margin-bottom: 10px;
}

.modal p {
    line-height: 1.4;
    margin-bottom: 5px;
}

.modal a{
    text-decoration: none;
    cursor: pointer;
}

.modal img{
    width: 50%;
    height: 50%;
}

.realisation button.modal-btn{
    transform: translate(0%, -300%);
    background-color: lightblue;
}

.pc_animation h3{
    text-decoration: underline;
}

</style>