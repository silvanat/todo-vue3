<template>
  <v-text-field
    clearable
    label="Adicionar tarefa"
    :rules="rules"
    v-model="taskStore.titleTaskCreating"
    @keyup.enter="taskStore.addTask"
  >
  </v-text-field>
  <ListTasks />
</template>

<script setup>
import { onMounted } from "vue";
import ListTasks from "./ListTasks.vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
const rules = [
  (value) => {
    if (!value || value.length >= 5) return true;

    return "Você deve digitar um título com no mínimo 5 caracteres";
  },
];

onMounted(() => {
  taskStore.getTasks();
});
</script>
