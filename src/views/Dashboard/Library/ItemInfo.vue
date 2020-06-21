<template>
    <Item :item="item" />
</template>

<script>
import Item from './Item'

export default {
    data() {
        return {
            item: {
                name: 'Mocked book'
            }
        }
    },
    components: {
        Item
    }
}
</script>