<template>
  <v-container class="grey lighten-5 mb-6 rowTitle">
    <v-row>
      <v-col class="colTitle">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="cardWrapper"
          outlined
          tile
        >
          <v-card class="cards">
            <v-btn
              @click="cardIsExist(task.id)"
              icon
              color="red"
              class="buttonCard"
            >
              <v-icon>mdi-close-circle</v-icon>
            </v-btn>
            <v-btn
              @click="task.completed = !task.completed"
              icon
              color="red"
              class="buttonCard"
            >
              <v-icon color="grey lighten-1" v-if="task.completed"
                >mdi-check
              </v-icon>
              <v-icon color="green" v-if="!task.completed"
                >mdi-check-all
              </v-icon></v-btn
            >

            <v-card-title v-if="task.completed" class="cardTitle">{{
              task.title
            }}</v-card-title>
            <v-card-title v-else class="cardTitle">
              <del class="cardTitle">{{ task.title }}</del>
            </v-card-title>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    cardExist: [],
  }),
  methods: {
    cardIsExist(inx) {
      this.$store.commit("CARD_EXIST", inx);
    },
  },
  mounted() {
    this.$store.dispatch("fetchTasks");
  },
  computed: {
    tasks() {
      return this.$store.getters.allTasks;
    },
  },
};
</script>
<style lang="scss">
.cardWrapper {
  width: 30%;
  margin: 10px 5px;
}
.cards {
  height: 100%;
}
.colTitle {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.rowTitle {
  margin: 46px auto;
  padding: 23px;
}
.v-card__title {
  text-align: center !important;
  display: block !important;
}
.v-application {
  background-color: #dddddd6b !important;
}
delMargin {
  margin: 0 !important;
  display: none;
}
.buttonCard {
  margin: 0px 0 0 0px !important;
}
.dNone {
  display: none !important;
}
</style>
