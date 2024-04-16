<template>
    <div class="slider">
        <img src="/src/assets/Media/Background.jpg" alt="image montrant un ordinateur et des écritures de langages HMTL" class="slider_background">

        <div class="slider_content">
            <h2>404 ERROR</h2>
            <p>Page Not Found</p>
        </div>
    </div>
    
</template>

<script></script>

<style scoped>
.slider{
    width: 100%;
    min-height: 80vh;
    aspect-ratio: 16/9;
    position: relative;

}

.slider_background{
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(30%);
}

.slider_content{
    position: absolute;
    top: 50%;
    left: 50%;   
    transform: translate(-50%, -50%);
    text-align: center;text-align: center;
}

.slider_content p{
    color: #fff;
    font-size: 6rem;
    font-weight: 300;
}

.slider_content h2{
    color: #fff;
    font-size:  6rem;
}
</style>