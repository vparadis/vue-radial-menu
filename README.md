# vue-radial-menu

> Simple radial menu for vue2 apps

## Installation

`npm i vue-radial-menu --save`

## Basic usage

Suggested use :

``` html

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
          @click="handleClick">
          <span>{{item}}</span>
        </radial-menu-item>
      </radial-menu>
  </div>
</template>

<script>
import { RadialMenu,  RadialMenuItem } from 'vue-radial-menu'

export default {
  name: 'app',
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data () {
    return {
      items: ['foo', 'bar', 'hello', 'world', 'more', 'items']
    }
  },
  methods: {
    handleClick () {
      console.log('Something')
    }
  }
}
</script>
```

## Options

### RadialMenu props

Note that no prop is actually required.
Also take note that no color is given to the menu by default, you would do well to add your own class for these kind of things.

| Name | Type  | Default Value | Description |
| ---- | ----  | ------------- | ----------- |
| angle-restriction | Number | 180 | The maximum angle in a circle for the items to be displayed in. A value of 90 would represent the quarter of a circle, 180 half a circle and so on. |
| size | Number | 50px | The size in pixels of the main button to open the menu. |
| itemSize | Number | 36px | The size in pixels of menu items. |
| rotate | Number | 0 | An angle value to rotate the menu. Positive values will rotate the menu counter clockwise. |
| radius | Number | 100 | The radius of the circle to form with the items. |

### RadialMenuItem props

This component has no props that should be assigned by the user.

## Liscense

This project is under the MIT liscence.