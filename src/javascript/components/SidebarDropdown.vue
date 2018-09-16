<template>
    <VueSlideUpDown :active="select" :duration="100" tag="ul">
        <slot></slot>
    </VueSlideUpDown>
</template>

<script>
    import VueSlideUpDown from 'vue-slide-up-down';

    export default {
        props: [ 'select' ],
        components: { VueSlideUpDown }
    }
</script>
