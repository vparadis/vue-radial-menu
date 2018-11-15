import Vue from 'vue'
import RadialMenu from './RadialMenu.vue'
import RadialMenuItem from './RadialMenuItem'

const Components = {
    RadialMenu,
    RadialMenuItem
}

Object.keys(Components).forEach(c => {
    Vue.component(c, Components[c])
})

export default Components
