<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Create
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          タスク入力
        </v-card-title>

        <v-card-text>
          やるべきことを書き出しましょう。
        </v-card-text>
        <v-text-field
          v-model="taskName"
          class="add-task-form"
          type=""
          label="タスク名"
          style=""
        >
        </v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            キャンセル
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            追加
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  

</template>











<script>
export default {
  data () {
      return {
        dialog: false,
        taskName: []
      }
    },
    methods: {
      async addTask() {
        await this.$store.dispatch('task/addTasks', this.taskName)
        this.dialog = false
        this.taskName = []
        this.fetchTasks()
      },
      async fetchTasks() {
        await this.$store.dispatch('skill/fetchTasks')
      }
    }

}

</script>

<style>
.add-task-form {
  width: 230px;
  margin: 0 auto;
}

</style>