<template>
  <v-container>
    <AddTaskBtn />
    <TaskIndex />
  </v-container>
</template>

<script>
import AddTaskBtn from '~/components/tasks/add_task_modal'
import TaskIndex from '~/components/tasks/task_index'
export default {
  components: {
    AddTaskBtn,
    TaskIndex
  }
}
</script>