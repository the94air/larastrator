<template>
    <div class="w-full">
        <div class="flex justify-between text-center my-10">
            <div>
                <button class="button" @click="notify">Show a notification</button>
            </div>
            <div >
                <button class="button success">Button</button>
            </div>
            <div >
                <button class="button danger">Button</button>
            </div>
            <div >
                <button class="button info">Button</button>
            </div>
            <div>
                <button class="button warning">Button</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 1,
            };
        },
        methods: {
            notify() {
                this.num = this.num * 10;
                this.$notify({
                    group: 'notes',
                    text: 'Your new post saved ' + this.num,
                    duration: 5000,
                });
            }
        },
    }
</script>
