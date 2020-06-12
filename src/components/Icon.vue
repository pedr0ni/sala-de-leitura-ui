<template>
    <i class="material-icons">{{ name ? name : ''}}</i>
</template>

<script>
export default {
    props: {
        name: String
    }
}
</script>