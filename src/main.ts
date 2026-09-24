import { createApp } from 'vue'
import App from './App.vue'
import { themePlugin } from '@/presentation/plugins/theme.plugin'
import { registerDependencies } from '@/presentation/di/container'
import '@/presentation/styles/base.css'

const app = createApp(App)

app.use(themePlugin)
registerDependencies(app)

app.mount('#app')
