<template>
  <div id="app">
    
    <!-- Top -->
    <radial-menu
      style="top: 8px; left: 8px; position: fixed"
      :items="arr"
      :angle-restriction="90"
      :radius="150"
      :item-size="50"
      :rotate="270" />
    <radial-menu
      style="top: 8px; left: calc(50% - 25px); position: fixed"
      :items="arr"
      :rotate="180" />
    <radial-menu
      style="top: 8px; right: 8px; position: fixed"
      :items="arr"
      :angle-restriction="90"
      :rotate="180" />

    <!-- Center -->
    <radial-menu
      style="top: calc(50% - 18px); left: 8px; position: fixed"
      :items="arr"
      :angle-restriction="180"
      :rotate="270" />
    <radial-menu
      style="top: calc(50% - 18px); left: calc(50% - 25px); position: fixed"
      :items="arr"
      :itemSize="80"
      :angle-restriction="360" />
    <radial-menu
      style="top: calc(50% - 18px); right: 8px; position: fixed"
      :items="arr"
      :angle-restriction="180"
      :rotate="90" />

    <!-- Bottom -->
    <radial-menu
      style="bottom: 8px; left: 8px; position: fixed"
      :items="arr"
      :angle-restriction="90" />
    <radial-menu
      style="bottom: 8px; left: calc(50% - 25px); position: fixed"
      :items="arr"
      :radius="130"
      :item-size="50" />
    <radial-menu
      style="bottom: 8px; right: 8px; position: fixed"
      :items="arr"
      :angle-restriction="90"
      :rotate="90" />
  </div>
</template>

<script>
export default {
  name: 'app',
   data () {
    return {
      arr: [
        1, 2,
        'Hello',
        {
          component: '<span style="color: white">World</span>',
          style: {
            backgroundColor: 'rgba(0,0,0,0.4)'
          }
        },
        {
          text: 'Foo',
          onClick: () => console.log('bar')
        }
      ]
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
