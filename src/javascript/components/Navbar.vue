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
                        <a href="#" class="navbar-link">Link2</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="navbar-notify">
                            <Fa :icon="['far', 'bell']" />
                            <span class="navbar-dot bg-red-dark text-white">8</span>
                        </a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="navbar-avatar">
                            <div class="navbar-avatar-info">
                                <span>Abdalla Arbab</span>
                                <span><span class="navbar-status bg-green border-green-lighter"></span> Online</span>
                            </div>
                            <img class="img-fluid rounded-full" src="images/avatar.jpeg" alt="@abdalla__Arbab" title="@abdalla__Arbab">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
