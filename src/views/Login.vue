<template>
    <form @submit.prevent="loginUser">
        <div>
            <label>Username:</label>
            <input type="text" v-model="username">
        </div>
        <div>
            <label>Password:</label>
            <input type="password" v-model="password">
        </div>
        <p v-if="error">{{error}}</p>
        <button>Login</button>
    </form>
</template>

<script>

import LoginService from '../composables/login'
import UserCredentialsService from '../composables/UserCredentialsService'
import router from '../router'

export default {
    setup() {
        const { username, password, error, login } = LoginService()
        const loginUser = async () => {
            const response = await login()
            if (error.value) {
                console.log("error!!!")
                return
            }
            UserCredentialsService.setUserCredentials(response)
            router.push({ name: "Home" })
        }
        return {
            username,
            password,
            error,
            loginUser
        }
    }
}
</script>

<style>

</style>