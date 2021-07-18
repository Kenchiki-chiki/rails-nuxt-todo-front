<template>
  <v-container>
    <AddTaskBtn />
    <p>{{ headers }}</p>
    
    

  </v-container>
  
  

</template>











<script>
import { mapGetters } from 'vuex'
import AddTaskBtn from '~/components/tasks/add_task_modal'
export default {
  components: {
    AddTaskBtn
  },
  data() {
    return {
      tasks: [],
    }
  },
  computed: {
    ...mapGetters({
      headers: 'task/tasks',
    })
  },

}
</script>