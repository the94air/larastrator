<template>
    <div class="content">
        <Breadcrumb />
        <h1 class="panel-title">Page title</h1>
        <div class="panel-card">
            <form>
                <div class="flex -mx-2">
                    <div class="w-1/2 px-2">
                        <div class="input">
                            <label for="full_name">Full name</label>
                            <input type="text" id="full_name">
                        </div>
                    </div>
                    <div class="w-1/2 px-2">
                        <div class="input">
                            <label for="email">Email</label>
                            <input type="email" id="email">
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-full">
                        <div class="flex">
                            <div class="w-full">
                                <label class="checkbox-title">Gender</label>
                            </div>
                        </div>
                        <div class="flex -mx-2">
                            <div class="w-1/2 px-2">
                                <div class="radio">
                                    <input type="radio" name="gender" id="male">
                                    <label for="male">Male</label>
                                </div>
                            </div>
                            <div class="w-1/2 px-2">
                                <div class="radio">
                                    <input type="radio" name="gender" id="female">
                                    <label for="female">Female</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-full">
                        <div class="flex">
                            <div class="w-full">
                                <label class="radio-title">Your hobbies</label>
                            </div>
                        </div>
                        <div class="flex -mx-2">
                            <div class="w-1/2 px-2">
                                <div class="checkbox">
                                    <input type="checkbox" id="basketball">
                                    <label for="basketball">Basketball</label>
                                </div>
                            </div>
                            <div class="w-1/2 px-2">
                                <div class="checkbox">
                                    <input type="checkbox" id="football">
                                    <label for="football">Football</label>
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-2">
                            <div class="w-1/2 px-2">
                                <div class="checkbox">
                                    <input type="checkbox" id="tennis">
                                    <label for="tennis">Tennis</label>
                                </div>
                            </div>
                            <div class="w-1/2 px-2">
                                <div class="checkbox">
                                    <input type="checkbox" id="golf">
                                    <label for="golf">Golf</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex -mx-2">
                    <div class="w-1/2 px-2">
                        <div class="input">
                            <label>Profile image</label>
                            <div class="file">
                                <input type="file" id="profile_image">
                                <label for="profile_image">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 px-2">
                        <div class="input">
                            <label for="country">Country</label>
                            <select id="country">
                                <option value="">Select an option</option>
                                <option value="america">U.S. of america</option>
                                <option value="unitedkingdom">United Kingdom</option>
                                <option value="japan">Japan</option>
                                <option value="china">China</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="flex -mx-2">
                    <div class="w-1/2 px-2">
                        <div class="input">
                            <label for="bio">Tell us more about you</label>
                            <textarea id="bio"></textarea>
                        </div>
                    </div>
                    <div class="w-1/2 px-2">
                        <div class="input">
                            <label for="favorite_fruit">What's your favorite fruit?</label>
                            <select id="favorite_fruit" multiple>
                                <option value="banana">Banana</option>
                                <option value="mango">Mango</option>
                                <option value="apple">Apple</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-full">
                        <div class="input">
                            <button @click="(e) => {e.preventDefault();}">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="panel-card"></div>
    </div>
</template>

<script>
    import Breadcrumb from './Breadcrumb';

    export default {
        components: { Breadcrumb }
    }
</script>
