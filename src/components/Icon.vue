<template>
    <div :class="`${type} toggle-icon toggle-icon-${iconId}`">
        <i @click="toggle" :class="`material-icons ${type ? 'icon-ripple' : ''} toggle-icon-${iconId}`">{{ name ? name : ''}}</i>
        <div v-show="show" class="action-icon-holder">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        type: String
    },
    data() {
        return {
            show: false,
            iconId: ''
        }
    },
    methods: {
        toggle(event) {
            if (this.isActionIcon(event))
                this.show = !this.show
        },
        isActionIcon(event) {
            return event.srcElement.parentElement.classList.contains('action-icon')
        }
    },
    beforeMount() {
        this.iconId = this.randomString()
    },
    mounted() {
        document.addEventListener('click', event => {
            const target = event.target
            if (!target.classList.contains('action-icon-holder') && !target.classList.contains(`toggle-icon-${this.iconId}`)) {
                this.show = false
            }
        })
    }
}
</script>