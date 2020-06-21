<template>
    <div class="empty-holder">
        <img v-if="image" :src="getImageSource(image)" alt="">
        <i class="material-icons" v-else-if="icon">{{ icon }}</i>
        <h5 class="headline-5">{{ title ? title : '' }}</h5>
        <p class="body-one">{{ content ? content : '' }}</p>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        image: String,
        title: String,
        content: String
    },
    methods: {
        getImageSource(img) {
            return require('../assets/img/'+img)
        }
    }
}
</script>

<style scoped>

.empty-holder i {
    font-size: 110px;
    color: #414141;
}

.headline-5 {
    margin: 10px 0 !important;
}
</style>