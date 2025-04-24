import { defineStore } from "pinia"

interface OutlierStoreState {
  outlier: null | number
}

export const useOutlierStore = defineStore("main", {
  state: (): OutlierStoreState => ({
    outlier: null,
  }),
  actions: {
    setOutlier(num: number) {
      this.outlier = num
    },
    reset() {
      this.outlier = null
    },
  },
})
