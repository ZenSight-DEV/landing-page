import { createApp } from 'vue'
import App from './App.vue'
import { themePlugin } from '@/presentation/plugins/theme.plugin'
import { registerDependencies } from '@/presentation/di/container'
import { router } from '@/presentation/router'
import '@/presentation/styles/base.css'

const app = createApp(App)

app.use(themePlugin)
app.use(router)
registerDependencies(app)

app.mount('#app')
