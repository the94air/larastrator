<template>
    <aside class="sidebar" id="sidebar">
        <h2 class="sidebar-title">Menu</h2>
        <ul class="sidebar-menu">
            <li class="sidebar-item">
                <a href="#" class="sidebar-link select">
                    <span class="sidebar-link-icon">
                        <Fa :icon="['fas', 'home']" fixed-width />
                    </span>
                    Dashboard
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                    <span class="sidebar-link-icon">
                        <Fa :icon="['fas', 'user']" fixed-width />
                    </span>
                    Profile
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                    <span class="sidebar-link-icon">
                        <Fa :icon="['fas', 'users']" fixed-width />
                    </span>
                    Users
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link" @click.prevent="dropdown = !dropdown">
                    <span class="sidebar-link-icon">
                        <Fa :icon="['fas', 'cubes']" fixed-width />
                    </span>
                    Resources
                </a>
                <SidebarDropdown :select="dropdown" class="sidebar-dropdown">
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link select">Posts</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Pages</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Submissions</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Media</a>
                    </li>
                </SidebarDropdown>
            </li>
        </ul>
        <Footer />
    </aside>
</template>

<script>
    import Footer from './Footer';
    import SidebarDropdown from './SidebarDropdown';

    export default {
        data() {
            return {
                dropdown: false,
            };
        },
        components: { SidebarDropdown, Footer }
    }
</script>
