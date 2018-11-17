<template>
  <div id="app">
    <radial-menu
      style="top: calc(50% - 18px); left: calc(50% - 25px); position: fixed"
      class="menu-item main"
      :itemSize="50"
      :radius="120"
      :angle-restriction="180">
        <radial-menu-item class="menu-item" @click="handleClick">
          <span>{{menu}}</span>
        </radial-menu-item>
        <radial-menu-item class="menu-item" @click="handleClick">
          <span>{{menu}}</span>
        </radial-menu-item>
      </radial-menu>
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
      menu: 'foo'
    }
  },
  methods: {
    handleClick () {
      this.menu += '1'
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

.menu-item {
  background-color: white;
  font-size: 16px;
}

.main {
  font-size: 34px;
}
</style>
