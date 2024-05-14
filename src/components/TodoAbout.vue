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
      <h1 class="text-h4 font-weight-thin mb-4 padding">
        Aplicativo de criação de notas feito em Vue.
      </h1>
      <div class="font-weight-bold ms-1 mb-2">Recursos:</div>

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
  <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <div class="d-flex flex-column fill-height align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4 padding">
        Aplicativo de criação de notas feito em Vue.
      </h1>
      <h4 class="subheading">Recursos e ferramentas:</h4>

      <v-list lines="two" class="lista">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :title="item.title"
        ></v-list-item>
      </v-list>
    </div>
  </v-parallax> -->
</template>

<script setup>
const items = [
  { title: "Vue", color: "deep-purple-lighten-1" },
  { title: "Vuetify", color: "green" },
  { title: "Pinia", color: "orange" },
  { title: "Yarn", color: "green" },
  { title: "Animated.css", color: "green" },
  { title: "Netlify", color: "green" },
  { title: "Vite", color: "green" },
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
