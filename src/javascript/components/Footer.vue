<template>
    <footer><small>&copy; Larastrator {{ copy }}</small></footer>
</template>

<script>
    export default {
        computed: {
            copy() {
                return new Date().getFullYear();
            }
        }
    }
</script>
