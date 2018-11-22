<template>
  <div id="app">
    <radial-menu
      style="margin: auto; margin-top: 300px; background-color: white"
      :itemSize="50"
      :radius="120"
      :angle-restriction="180">
        <radial-menu-item 
          v-for="(item, index) in items" 
          :key="index" 
          style="background-color: white" 
          @click="() => handleClick(item)">
          <span>{{item}}</span>
        </radial-menu-item>
      </radial-menu>
      <div style="color: rgba(0,0,0,0.6); margin-top: 16px;">{{ lastClicked }}</div>
  </div>
</template>

<script>
import RadialMenu from './components/RadialMenu.vue'
import RadialMenuItem from './components/RadialMenuItem.vue'

export default {
  name: 'app',
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data () {
    return {
      items: ['foo', 'bar', 'hello', 'world', 'more', 'items'],
      lastClicked: 'click on something!'
    }
  },
  methods: {
    handleClick (item) {
      this.lastClicked = item;
    }
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
}
</style>
