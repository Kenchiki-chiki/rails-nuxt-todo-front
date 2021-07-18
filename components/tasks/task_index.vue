<template>
  <v-container class="mt-3">
    <v-data-table
      :headers="headers"
      :items="tasks"
      no-data-text="データがありません。">
    </v-data-table>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      headers: [
        { text: 'タイトル', value: 'title'},
        { text: '内容', value: 'body' }
      ]
    } 
  },
  computed: {
    ...mapGetters({
      tasks: 'task/tasks',
    })
  },
  created() {
    this.fetchTasks()
  },
  methods: {
    async fetchTasks() {
      await this.$store.dispatch('task/fetchTasks')
    }
  }
}
</script>