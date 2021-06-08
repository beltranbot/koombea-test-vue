<template>
    <ul>
        <li>ID: {{ contact.id }}</li>
        <li>Name: {{ contact.name }}</li>
        <li>Date of Birth: {{ contact.date_of_birth }}</li>
        <li>Phone: {{ contact.phone }}</li>
        <li>Address: {{ contact.address }}</li>
        <li>CC Length: {{ contact.cc_length }}</li>
        <li>CC: {{ contact.cc_last_four_digits }}</li>
        <li>Brand: {{ contact.brand }}</li>
        <li>Email: {{ contact.email }}</li>
        <li>Created at: {{ contact.created_at }}</li>
    </ul>
    <router-link :to="{ name: 'ContactsView' }">back</router-link>
</template>

<script>
export default {
    name: "ContactDetails",
    props: ["contact"]
}
</script>

<style>

</style>
