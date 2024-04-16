<template>
    <div  id="contact" class="dark">
        <div class="size_form text_center">
            <h2>Me Contacter</h2>

                <form @submit.prevent="sendEmail">
                    
                    <div class="form_content">
                        <div class="left_content">

                            <div class="box">
                                <label for="name">Votre Prénom</label>
                                <input type="text" v-model="name">
                                <span class="error" v-if="nameError">{{ nameError }}</span>
                                <i class="fa-solid fa-user"></i>
                            </div>

                            <div class="box">
                                <label for="last_name">Votre Nom</label>
                                <input type="text" v-model="lastName">
                                <span class="error" v-if="lastNameError">{{ lastNameError }}</span>
                                <i class="fa-solid fa-user"></i>
                            </div>

                            <div class="box">
                                <label for="objet">Objet</label>
                                <input type="text" v-model="objet">
                                <span class="error" v-if="objetError">{{ objetError }}</span>
                                <i class="fa-solid fa-pen"></i>
                            </div>

                        </div>

                        <div class="right_content">

                            <div class="box">
                                <label for="message">Message</label>
                                <textarea v-model="message" placeholder="Saisissez ici ..."></textarea>
                                <span class="error" v-if="messageError">{{ messageError }}</span>
                            </div>

                        </div>

                    </div>

                    <div class="form_button">
                        <button type="submit" @click="validateForm">Envoyer le Message</button>
                    </div>
                    
                </form>

        </div>

    </div>

</template>

<script setup>
/* Validateur de formulaire avec Vue.js 3 */

import { ref } from 'vue';

const name = ref('');
const lastName = ref('');
const objet = ref('');
const message = ref('');
const nameError = ref('');
const lastNameError = ref('');
const objetError = ref('');
const messageError = ref('');



const validateForm = () => {

    // réinitialiser les messages d'erreurs

    nameError.value = '';
    lastNameError.value = '';
    objetError.value = '';
    messageError.value = '';
    let isValid = true;

    // valider le champ "name"

    if (name.value === '') {
        nameError.value = 'Un prénom est requis.';
        isValid = false
    }
    

    // valider le champ "last name"

    if (lastName.value === '') {
        lastNameError.value = 'Un nom est requis.';
        isValid = false
    }

    // valider le champ "objet"

    if (objet.value === '') {
        objetError.value = 'Un objet est requis.';
        isValid = false
    }

    // valider le champ "message"

    if (message.value === '' ) {
        messageError.value = 'Un message est requis.';
        isValid = false
    }


    return isValid;
};

const sendEmail = () => {

    if (validateForm()) {
        const emailAddress = import.meta.env.VITE_VUE_APP_EMAIL || '';
        const mailSubject = `${name.value} ${lastName.value} - ${objet.value}`;
        const mailBody = message.value;
        window.location.href = `mailto:${emailAddress}?subject=${mailSubject}&body=${mailBody}`;

        // si le formulaire est valide alors réinitialisation des champs du formulaire

        name.value = '';
        lastName.value = '';
        objet.value = '';
        message.value = '';
    }

};

</script>

<style scoped>
.dark{
    background: rgb(31, 30, 30);
    color: #fff;
}

/* Form Style*/

form{
    background-color: grey;
    padding: 30px;
    border-radius: 10px;
}

.size_form{
    max-width: 500px;
    justify-content: center;
    margin-bottom: 50px;
    margin-inline: auto;
    
}

.form_content{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.box{
    position: relative;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

form .form_content .left_content .box input{
    margin-top: 5px;
    padding: 10px 5px 10px 30px;
    border: 1px solid grey;
    outline-color: lightblue;
    border-radius: 5px;
}

form .form_content .left_content .box i{
    position: absolute;
    left: 0;
    top: 25px;
    padding: 9px 8px;
    color: lightblue;
}

form .form_content .right_content{
    margin-left: 40px;
}

form .form_content .right_content .box{
    height: 100%;
}

form .form_content .right_content .box textarea{
    margin-top: 5px;
    padding: 10px;
    background-color: #f8f8f8;
    border: 2px solid lightblue;
    outline: none;
    border-radius: 5px;
    resize: none;
    height: 79%;
}


form .form_button button{
    margin-top: 10px;
    background-color: lightblue;
    color: #fff;
    font-size: 15px;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: transform 0.5s;
}

form .form_button button:hover{
    transform: scale(1.1);
}


.error{
    color: red;
}

</style>