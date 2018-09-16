<template>
    <div class="container">
        <div class="panel">
            <Sidebar />
            <Content />
        </div>
    </div>
</template>

<script>
    import Sidebar from './Sidebar';
    import Content from './Content';

    export default {
        components: { Sidebar, Content }
    }
</script>
