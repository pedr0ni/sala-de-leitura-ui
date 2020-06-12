<template>
    <div class="empty-holder">
        <i class="material-icons">{{ icon ? icon : '' }}</i>
        <h6 class="headline-6">{{ title ? title : '' }}</h6>
        <p class="body-one">{{ content ? content : '' }}</p>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        title: String,
        content: String
    }
}
</script>