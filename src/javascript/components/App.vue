<template>
    <div class="h-full">
        <Navbar />
        <Main />
        <Notifications />
    </div>
</template>

<script>
    import Navbar from './Navbar';
    import Main from './Main';
    import Notifications from './Notifications';

    export default {
        components: { Navbar, Main, Notifications }
    }
</script>
