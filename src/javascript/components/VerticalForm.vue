<template>
    <form @submit.prevent="(e) => {}">
        <div class="input">
            <div class="flex -mx-2">
                <div class="w-1/3 px-2">
                    <label for="vfull_name">Full name</label>
                </div>
                <div class="w-2/3 px-2">
                    <input type="text" id="vfull_name">
                </div>
            </div>
        </div>
        <div class="input">
            <div class="flex -mx-2">
                <div class="w-1/3 px-2">
                    <label for="vemail">Email</label>
                </div>
                <div class="w-2/3 px-2">
                    <input type="email" id="vemail">
                </div>
            </div>
        </div>
        <div class="flex -mx-2 mb-2">
            <div class="w-1/3 px-2">
                <label class="checkbox-label">Gender</label>
            </div>
            <div class="w-2/3 px-2">
                <div class="flex">
                    <div class="w-full">
                        <div class="radio">
                            <input type="radio" name="gender" id="vmale">
                            <label for="vmale">Male</label>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-full">
                        <div class="radio">
                            <input type="radio" name="gender" id="vfemale">
                            <label for="vfemale">Female</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex -mx-2 mb-2">
            <div class="w-1/3 px-2">
                <label class="radio-label">Your hobbies</label>
            </div>
            <div class="w-2/3 px-2">
                <div class="flex">
                    <div class="w-1/2">
                        <div class="checkbox">
                            <input type="checkbox" id="vbasketball">
                            <label for="vbasketball">Basketball</label>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div class="checkbox">
                            <input type="checkbox" id="vfootball">
                            <label for="vfootball">Football</label>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-1/2">
                        <div class="checkbox">
                            <input type="checkbox" id="vtennis">
                            <label for="vtennis">Tennis</label>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div class="checkbox">
                            <input type="checkbox" id="vgolf">
                            <label for="vgolf">Golf</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="input">
            <div class="flex -mx-2">
                <div class="w-1/3 px-2">
                    <label for="vprofile_image">Profile image</label>
                </div>
                <div class="w-2/3 px-2">
                    <div class="file">
                        <input type="file" id="vprofile_image" @change='showFileName' tabindex="0">
                        <label for="vprofile_image">{{ inputFileName }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="input">
            <div class="flex -mx-2">
                <div class="w-1/3 px-2">
                    <label for="vcountry">Country</label>
                </div>
                <div class="w-2/3 px-2">
                    <select id="vcountry">
                        <option value="">Select an option</option>
                        <option value="america">U.S. of america</option>
                        <option value="unitedkingdom">United Kingdom</option>
                        <option value="japan">Japan</option>
                        <option value="china">China</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="input">
            <div class="flex -mx-2">
                <div class="w-1/3 px-2">
                    <label for="vbio">Tell us more about you</label>
                </div>
                <div class="w-2/3 px-2">
                    <textarea id="vbio"></textarea>
                </div>
            </div>
        </div>
        <div class="input">
            <div class="flex -mx-2">
                <div class="w-1/3 px-2">
                    <label for="vfavorite_fruit">What's your favorite fruit?</label>
                </div>
                <div class="w-2/3 px-2">
                    <select id="vfavorite_fruit" multiple>
                        <option value="banana">Banana</option>
                        <option value="mango">Mango</option>
                        <option value="apple">Apple</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="flex -mx-2">
            <div class="ml-auto w-2/3 px-2">
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
