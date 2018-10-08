<template>
    <div class="auth h-full">
        <div class="auth-main">
            <div class="auth-content">
                <h1 class="auth-title">Sign in</h1>
                <form @submit.prevent="(e) => {}">
                    <div class="input">
                        <label for="aemail">Email</label>
                        <input type="email" id="aemail">
                        <span class="input-error">The email field is required.</span>
                    </div>
                    <div class="input">
                        <label for="apassword">Password</label>
                        <input type="password" id="apassword">
                        <span class="input-error">The password field is required.</span>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="remember">
                        <label for="remember">Remember me</label>
                    </div>
                    <div class="flex">
                        <button type="submit" class="button w-full">Submit</button>
                    </div>
                </form>
            </div>
            <div class="flex justify-between mt-4">
                <a href="#">Forgot password?</a>
                <a href="#">Sign up</a>
            </div>
        </div>
    </div>
</template>
