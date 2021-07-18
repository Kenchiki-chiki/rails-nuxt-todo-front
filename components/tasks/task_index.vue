<template>
  <v-container>
    <p>{{ headers }}</p>
    
    

  </v-container>
  
  

</template>

<script>
import { mapGetters } from 'vuex'
export default {
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