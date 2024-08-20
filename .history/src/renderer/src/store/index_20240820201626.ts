import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 200
    }
  },
  getters: {},
  actions: {}
})
