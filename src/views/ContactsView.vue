<template>
    <ContactList />
    <router-link :to="{ name: 'HomeView' }">back</router-link>
</template>

<script>
import ContactList from '../components/ContactList.vue'
export default {
    components: { ContactList },
}
</script>

<style>

</style>
