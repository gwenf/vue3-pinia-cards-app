<template>
  <div class="d-flex flex-column align-items-center">
    <h2>{{ deck.name }}</h2>
    <h3>{{ deck.description }}</h3>

    <div class="study-card">
      {{ cards[currentIndex].name }}
    </div>

    <button v-on:click="increment" class="btn btn-default">
      Next
    </button>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStore } from '@/store'

// getDeckByIndex
export default {
  data () {
    return {
      deck: {},
      cards: [
        {
          name: 'Card 1'
        },
        {
          name: 'Card 2'
        },
        {
          name: 'Card 3'
        }
      ],
      currentIndex: 0
    }
  },
  methods: {
    increment () {
      this.currentIndex++
    }
  },
  computed: {
    // ...mapState(useStore, ['getDeckByIndex'])
    ...mapState(useStore, {
      deck: store => store.decks[this.$route.params.id]
    })
  }
  // mounted () {
  //   const deckIndex = this.$route.params.id
  //   this.deck = this.getDeckByIndex(deckIndex)
  // }
}
</script>

<style lang="scss" scoped>
.study-card {
  border: 4px solid black;
  height: 300px;
  width: 400px;
}
</style>
