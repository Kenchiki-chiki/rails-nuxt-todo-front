<template>
  <div class="task-table">
      
    
  </div>
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
}
</script>