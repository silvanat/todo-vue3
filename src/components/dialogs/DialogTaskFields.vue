<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="taskStore.showDialogTaskFields"
      min-width="300"
      max-width="600"
      persistent
    >
      <v-card>
        <v-card-title>Editar nota </v-card-title>
        <v-card-text>
          <v-text-field
            label="Título"
            v-model="props.task.title"
          ></v-text-field>
          <v-text-field
            label="Descrição"
            v-model="props.task.description"
          ></v-text-field>
        </v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn
            color="primary-darken-1"
            variant="elevated"
            @click="taskStore.updateTask()"
          >
            OK
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useTaskStore } from "@/stores/task";
const taskStore = useTaskStore();

const props = defineProps({
  task: Object,
});
</script>
