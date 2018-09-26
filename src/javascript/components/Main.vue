<template>
    <Slideout menu="#sidebar" panel="#content">
        <div class="container">
            <div class="panel">
                <Sidebar />
                <Content />
            </div>
        </div>
    </Slideout>
</template>

<script>
    import Slideout from 'vue-slideout';
    import Sidebar from './Sidebar';
    import Content from './Content';

    export default {
        components: { Sidebar, Content, Slideout }
    }
</script>
