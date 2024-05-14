<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogDelete" max-width="400" persistent>
      <v-card
        prepend-icon="mdi-map-marker"
        text="Deseja deletar essa nota?"
        title="Apagar a nota "
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red-darken-1"
            variant="elevated"
            @click="taskStore.toggleDelete"
          >
            Cancelar
          </v-btn>

          <v-btn
            color="red-darken-1"
            variant="outlined"
            @click="taskStore.deleteTask"
          >
            Deletar
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/task";
const taskStore = useTaskStore();
</script>
