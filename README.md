# vue-radial-menu

> Simple radial menu for vue2 apps

## Installation

`npm i vue-radial-menu --save`

## Basic usage

``` html

<template>
  <div id="app">
    <radial-menu
      style="top: calc(50% - 18px); left: calc(50% - 25px); position: fixed"
      :itemSize="50"
      :radius="120"
      :angle-restriction="180">
        <radial-menu-item @click="handleClick">
          <span>foo</span>
        </radial-menu-item>
        <radial-menu-item @click="handleClick">
          <span>foo2</span>
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
  methods: {
    handleClick () {
      console.log('bar')
    }
  }
}
</script>
```

## Options

### RadialMenu props

Note that no prop is actually required.
Also take note that no style is given to the menu by default (other than it's position and round shape), you would do well to add your own class if you want color and such.

| Name | Type  | Default Value | Description |
| ---- | ----  | ------------- | ----------- |
| angle-description | Number | 180 | The maximum angle in a circle for the items to be displayed in. A value of 90 would represent the quarter of a circle, 180 half a circle and so on. |
| size | Number | 50px | The size in pixels of the main button to open the menu. |
| itemSize | Number | 36px | The size in pixels of menu items. |
| rotate | Number | 0 | An angle value to rotate the menu. Positive values will rotate the menu counter clockwise. |
| radius | Number | 100 | The radius of the circle to form with the items. |

### RadialMenuItem props

This component has no props that should be assigned by the user.

## Liscense

This project is under the MIT liscence.