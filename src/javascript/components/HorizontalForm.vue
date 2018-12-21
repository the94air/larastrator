<template>
    <form @submit.prevent="(e) => {}">
        <div class="flex flex-wrap -mx-2">
            <div class="input w-full md:w-1/2 px-2">
                <label for="full_name">Full name</label>
                <input type="text" id="full_name">
            </div>
            <div class="input w-full md:w-1/2 px-2">
                <label for="email">Email</label>
                <input type="email" id="email">
            </div>
        </div>
        <div class="flex flex-wrap -mx-2 mb-2">
            <div class="w-full px-2">
                <label class="checkbox-label">Gender</label>
            </div>
            <div class="radio w-full md:w-1/2 px-2">
                <input type="radio" name="gender" id="male">
                <label for="male">Male</label>
            </div>
            <div class="radio w-full md:w-1/2 px-2">
                <input type="radio" name="gender" id="female">
                <label for="female">Female</label>
            </div>
        </div>
        <div class="flex flex-wrap -mx-2 mb-2">
            <div class="w-full px-2">
                <label class="radio-label">Your hobbies</label>
            </div>
            <div class="checkbox w-full md:w-1/2 px-2">
                <input type="checkbox" id="basketball">
                <label for="basketball">Basketball</label>
            </div>
            <div class="checkbox w-full md:w-1/2 px-2">
                <input type="checkbox" id="football">
                <label for="football">Football</label>
            </div>
            <div class="checkbox w-full md:w-1/2 px-2">
                <input type="checkbox" id="tennis">
                <label for="tennis">Tennis</label>
            </div>
            <div class="checkbox w-full md:w-1/2 px-2">
                <input type="checkbox" id="golf">
                <label for="golf">Golf</label>
            </div>
        </div>
        <div class="flex flex-wrap -mx-2">
            <div class="input w-full md:w-1/2 px-2">
                <label for="profile_image">Profile image</label>
                <div class="file">
                    <input type="file" id="profile_image" @change='showFileName' tabindex="0">
                    <label for="profile_image">{{ inputFileName }}</label>
                </div>
            </div>
            <div class="input w-full md:w-1/2 px-2">
                <label for="country">Country</label>
                <select id="country">
                    <option value="">Select an option</option>
                    <option value="america">US</option>
                    <option value="unitedkingdom">UK</option>
                    <option value="japan">Japan</option>
                    <option value="china">China</option>
                </select>
            </div>
        </div>
        <div class="flex flex-wrap -mx-2">
            <div class="input w-full md:w-1/2 px-2">
                <label for="bio">Tell us more about you</label>
                <textarea id="bio"></textarea>
            </div>
            <div class="input w-full md:w-1/2 px-2">
                <label for="favorite_fruit">What's your favorite fruit?</label>
                <select id="favorite_fruit" multiple>
                    <option value="banana">Banana</option>
                    <option value="mango">Mango</option>
                    <option value="apple">Apple</option>
                </select>
            </div>
        </div>
        <div class="flex">
            <div class="w-full">
                <button type="submit" class="button">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                inputFileDefault: 'Choose file',
                inputFileName: 'Choose file',
            };
        },
        methods: {
            showFileName(e) {
                if(e.target.value != "") {
                    this.inputFileName = e.target.value.split(/(\\|\/)/g).pop();
                } else {
                    this.inputFileName = this.inputFileDefault;
                }
            },
        }
    }
</script>
