import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    // Auth, product, cart slices added module by module
  },
})

export default store