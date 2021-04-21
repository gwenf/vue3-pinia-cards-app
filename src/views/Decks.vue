<template>
  <div class="decks container">
    <div class="row">
      <div class="col-sm d-flex">
        <DeckCard
          v-for="(deck, i) in decks"
          :key="i"
          :deck="deck"
          :i="i"
        />
      </div>
    </div>
    <div class="row card p-4 mt-5">
      <input class="form-control mb-2" v-model="name" />
      <input class="form-control mb-2" v-model="description" />
      <button @click="createDeck">Create Deck</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import DeckCard from '@/components/DeckCard.vue'
import { useStore } from '@/store'

export default {
  components: {
    DeckCard
  },
  data () {
    return {
      title: 'Python Study',
      name: '',
      description: ''
    }
  },
  computed: {
    ...mapState(useStore, ['decks'])
  },
  methods: {
    ...mapActions(useStore, ['appendDeck']),
    createDeck () {
      const deck = {
        name: this.name,
        description: this.description
      }
      this.appendDeck(deck)
    }
  }
}
</script>
