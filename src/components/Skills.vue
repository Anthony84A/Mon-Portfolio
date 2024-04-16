<template>
    <div id="competences" class="section dark">
        <div class="boxed text_center">
            <h2>Mes Compétences</h2>
            <div class="flex gap20">
                <div class="w25 skill">
                    <img src="/src/assets/Media/html.png" alt="logo html-5">
                    <h3>HTML</h3>
                </div>
                <div class="w25 skill">
                    <img src="/src/assets/Media/css.png" alt="logo CSS">
                    <h3>CSS</h3>
                </div>
                <div class="w25 skill">
                    <img src="/src/assets/Media/js.png" alt="logo javascript">
                    <h3>JavaScript</h3>
                </div>
                <div class="w25 skill">
                    <img src="/src/assets/Media/vuejs.png" alt="logo vue.js">
                    <h3>Vue.JS</h3>
                </div>

            </div>
        </div>
    </div>
</template>


<script></script>

<style scoped>

.section{
    padding: 100px 0;
}

.dark{
    background: rgb(31, 30, 30);
    color: #fff;
}

.boxed{
    max-width: 1280px;
    margin-inline: auto;
}

.flex{
    display: flex;
}

.gap20{
    gap: 20px;
}

.w25{
    width: 25%;
}

.skill{
    background: #fff;
    border-radius: 20%;
    padding: 20px;
    box-sizing: border-box;
}

.skill img{
    width: 200px;
    height: 100px;
    aspect-ratio: 1/1;
    object-fit: contain;
}

.skill h3{
    margin-top: 10px;
    color: #000;
}

</style>