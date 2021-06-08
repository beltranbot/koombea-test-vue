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
            <th>Actions</th>
        </thead>
        <tbody>
            <tr v-for="contact in contacts" :key="contact.id">
                <td>{{ contact.name }}</td>
                <td>{{ contact.date_of_birth }}</td>
                <td>{{ contact.phone }}</td>
                <td>{{ contact.address }}</td>
                <td> **********{{ contact.cc_last_four_digits }}</td>
                <td>{{ contact.brand }}</td>
                <td>{{ contact.email }}</td>
                <td>
                    <router-link :to="{name: 'ContactDetailsView', params: { id: contact.id } }">view</router-link>
                </td>
            </tr>
        </tbody>
    </table>
    <Paginator v-if="contacts" :total="total" :current_page="current_page" :last_page="last_page" 
        @movetopage="moveToPage"/>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import ContactsService from '../composables/ContactsService'
import Paginator from './Paginator.vue'
export default {
    name: "ContactList",
    setup() {
        const total = ref(0)
        const current_page = ref(0)
        const last_page = ref(0)
        const contacts = ref(null)
        const { getPaginated } = ContactsService()
        const mapData = (jsonResponse) => {
            contacts.value = jsonResponse.data
            total.value = +jsonResponse.total
            current_page.value = +jsonResponse.current_page
            last_page.value = +jsonResponse.last_page
        }
        const moveToPage = async (page) => mapData(await getPaginated(page))
        onMounted(async () => mapData(await getPaginated()))

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
