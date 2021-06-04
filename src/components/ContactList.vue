<template>
    <h1>contacts list component</h1>
    <table>
        <thead>
            <th>Name</th>
            <th>DOB</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Credit Card</th>
            <th>Brand</th>
            <th>Email</th>
        </thead>
        <tbody>
            <tr v-for="contact in contacts" :key="contact.id">
                <td>{{ contact.name }}</td>
                <td>{{ contact.date_of_birth }}</td>
                <td>{{ contact.phone }}</td>
                <td>{{ contact.address }}</td>
                <td> **********{{ contact.cc_last_four_digits }}</td>
                <td> {{ contact.brand }}</td>
                <td> {{ contact.email }}</td>
            </tr>
        </tbody>
    </table>
    <Paginator v-if="contacts" :total="total" :current_page="current_page" :last_page="last_page" 
        @movetopage="moveToPage"/>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import ContactsService from '../composables/ContactsService'
import Paginator from './Paginator.vue'
export default {
    name: "ContactList",
    setup() {
        const { contacts, total, current_page, last_page, getPaginated } = ContactsService()
        const moveToPage = async (page) => await getPaginated(page)
        onMounted(async () => await getPaginated())

        return {
            contacts,
            total,
            current_page,
            last_page,
            moveToPage
        }
    },
    components: { Paginator }
}
</script>

<style>

</style>