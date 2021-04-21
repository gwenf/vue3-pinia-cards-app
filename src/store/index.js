import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'cards',
  state () {
    return {
      decks: [
        {
          name: 'Python Study',
          description: 'Learn Python'
        },
        {
          name: 'JavaScript Study',
          description: 'Learn JS'
        },
        {
          name: 'Blockchain Study',
          description: 'Learn Blockchain'
        }
      ]
    }
  },
  getters: {
    getDeckByIndex () {
      return (index) => this.decks[index]
    }
  },
  actions: {
    appendDeck (deck) {
      this.decks.push(deck)
    }
  }
})
