<template>
  <div class="card" style="width: 18rem; margin: 5px;">
    <img class="card-img-top" src="https://cdn-media-1.freecodecamp.org/images/1*pK1tarwkvHqKM6vVr1VevQ.jpeg">
    <div class="card-body">
      <h5 class="card-title">{{ deck.name }} {{ i+1 }}</h5>
      <p class="card-text">{{ deck.description }}</p>
      <router-link :to="`/decks/${i}`" class="btn btn-primary">View Deck</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    i: {
      type: Number,
      required: true
    },
    deck: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
