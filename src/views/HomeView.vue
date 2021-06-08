<template>
  <div class="home">
    <router-link :to="{ name: 'ContactsView' }" >Contacts</router-link> |
    <router-link :to="{ name: 'FilesView' }" >Files</router-link>
  </div>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>
