<template>
    <div class="h-full">
        <Navbar />
        <Main />
        <Notifications />
        <!-- <SignIn /> -->
    </div>
</template>

<script>
    import Navbar from './Navbar';
    import Main from './Main';
    import Notifications from './Notifications';
    import SignIn from './SignIn';

    export default {
        components: { Navbar, Main, Notifications, SignIn }
    }
</script>
