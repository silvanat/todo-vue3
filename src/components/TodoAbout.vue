<template>
  <v-card class="size">
    <v-img
      color="surface-variant"
      height="200"
      src="https://cdn.vuetifyjs.com/docs/images/cards/house.jpg"
      cover
    >
    </v-img>

    <v-card-text>
      <h1 class="text-h4 font-weight-thin padding">
        Aplicativo de criação de notas feito em Vue.
      </h1>
      <h2 class="padding font-weight-regular">
        Github:
        <a href="https://github.com/silvanat/todo-vue3" target="_blank"
          >https://github.com/silvanat/todo-vue3</a
        >
      </h2>
      <div class="font-weight-bold ms-1 mb-2 padding">Recursos:</div>

      <v-timeline align="start" density="compact">
        <v-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :dot-color="item.color"
          size="x-small"
        >
          <div class="mb-4">
            <div class="font-weight-normal">
              <strong>{{ item.title }}</strong>
            </div>

            <div></div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script setup>
const items = [
  { title: "Vue", color: "deep-purple-lighten-1" },
  { title: "Vuetify", color: "green" },
  { title: "Pinia", color: "orange" },
  { title: "Yarn", color: "blue-darken-1" },
  { title: "Animated.css", color: "yellow-darken-1" },
  { title: "Netlify", color: "brown" },
  { title: "Vite", color: "pink-darken-1" },
];
</script>

<style scoped>
.title {
  padding: 20px;
}
.padding {
  padding: 30px 10px;
}
.lista {
  background-color: transparent;
  width: 50%;
  margin: 0 auto;
}
.size {
  width: 100%;
}
</style>
