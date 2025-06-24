import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from'./router'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' 

const vuetify = createVuetify({
  components,
  directives, icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})
const pinia = createPinia()
const app =createApp(App)

// app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(pinia)

app.mount('#app')
