<template>
    <div class="content">
        <Breadcrumb />
        <h1 class="panel-title">Page title</h1>
        <div class="panel-card">
            <HorizontalForm />
        </div>
        <div class="panel-card">
            <VerticalForm />
            <hr>
            <nav class="paginate">
                <a class="previous" href="#"><Fa :icon="['fas', 'arrow-left']" /> Prev</a>
                <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><span>&hellip;</span></li>
                    <li><a href="#">6</a></li>
                    <li><a class="select">7</a></li>
                    <li><a href="#">8</a></li>
                    <li><span>&hellip;</span></li>
                    <li><a href="#">12</a></li>
                    <li><a href="#">13</a></li>
                </ul>
                <a class="next" href="#">Next <Fa :icon="['fas', 'arrow-right']" /></a>
            </nav>
        </div>
        <div class="w-full">
            <div class="flex justify-between text-center my-10">
                <div>
                    <button class="btn" @click="notify">Show a notification</button>
                </div>
                <div >
                    <button class="btn success">Button</button>
                </div>
                <div >
                    <button class="btn danger">Button</button>
                </div>
                <div >
                    <button class="btn info">Button</button>
                </div>
                <div>
                    <button class="btn warning">Button</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from './Breadcrumb';
    import HorizontalForm from './HorizontalForm';
    import VerticalForm from './VerticalForm';

    export default {
        data() {
            return {
                inputFileDefault: 'Choose file',
                inputFileName: 'Choose file',
                num: 1,
            };
        },
        components: { Breadcrumb, HorizontalForm, VerticalForm },
        methods: {
            showFileName(e) {
                if(e.target.value != "") {
                    this.inputFileName = e.target.value.split(/(\\|\/)/g).pop();
                } else {
                    this.inputFileName = this.inputFileDefault;
                }
            },
            notify() {
                this.num = this.num * 10;
                this.$notify({
                    group: 'notes',
                    text: 'Your new post saved ' + this.num,
                    duration: 5000,
                });
            }
        }
    }
</script>
