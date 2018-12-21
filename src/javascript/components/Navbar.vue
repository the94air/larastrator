<template>
    <nav class="navbar navbar-fixed">
        <div class="container">
            <div class="navbar-main">
                <div class="navbar-brand">
                    <a href="#">Larastrator</a>
                </div>
                <ul class="navbar-menu">
                    <li class="navbar-item">
                        <a href="#" class="navbar-link select">Link1</a>
                    </li>
                    <li class="navbar-item">
                        <a href="signin.html" class="navbar-link">Sign in</a>
                    </li>
                    <li class="navbar-item">
                        <a href="signup.html" class="navbar-link">Sign up</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="navbar-notify">
                            <Fa :icon="['far', 'bell']" />
                            <span class="navbar-dot bg-red-dark text-white">8</span>
                        </a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="navbar-avatar" @click.prevent="dropdown = !dropdown">
                            <div class="navbar-avatar-info">
                                <span>John Doe</span>
                                <span><span class="navbar-status bg-green border-green-lighter"></span> Online</span>
                            </div>
                            <img class="img-fluid rounded-full" src="images/avatar.jpeg" alt="@john__doe" title="@john__doe">
                        </a>
                        <transition name="dropdown-slide-down">
                            <ul class="navbar-dropdown" v-if="dropdown">
                                <li class="navbar-dropdown-item">
                                    <a href="#" class="navbar-dropdown-link">Profile</a>
                                    <a href="#" class="navbar-dropdown-link">Sign out</a>
                                </li>
                            </ul>
                        </transition>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                dropdown: false
            }
        },
    }
</script>

<style scoped>
    .dropdown-slide-down-enter-active, .dropdown-slide-down-leave-active {
        transition: all .3s ease;
    }
    .dropdown-slide-down-enter, .dropdown-slide-down-leave-to  {
        transform: translateY(-10px) translateX(10px);
        opacity: 0;
    }
</style>
