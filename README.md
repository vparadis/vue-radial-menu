# Important Notes

This package is no longer supported. Feel free to fork it on github however.

# vue-radial-menu

> Simple radial menu for vue2 apps

![Image](https://raw.githubusercontent.com/vparadis/vue-radial-menu/master/public/demo_180.gif)

## Installation

`npm i vue-radial-menu --save`

## Basic usage

### Menu in automatic mode :

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
          @click="() => handleClick(item)">
          <span>{{item}}</span>
        </radial-menu-item>
      </radial-menu>
      <div style="color: rgba(0,0,0,0.6); margin-top: 16px;">{{ lastClicked }}</div>
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
```

## Options

### RadialMenu props

Note that no prop is actually required.
Also take note that no color is given to the menu by default, you would do well to add your own class for these kind of things.

| Name | Type  | Default Value | Description |
| ---- | ----  | ------------- | ----------- |
| open | Boolean | undefined | Force the menu to assume the given value. If this prop is not provided, the menu will handle the state on its own. Useful in cases where the user might want to make an action before displaying, i.e. displaying an overlay. Note that this can also be achieved by listening on the `open` and `close` events. |
| angle-restriction | Number | 180 | The maximum angle in a circle for the items to be displayed in. A value of 90 would represent the quarter of a circle, 180 half a circle and so on. |
| size | Number | 50 | The size in pixels of the main button to open the menu. |
| itemSize | Number | 36 | The size in pixels of menu items. |
| rotate | Number | 0 | An angle value to rotate the menu. Positive values will rotate the menu clockwise. |
| radius | Number | 100 | The radius of the circle to form with the items. |

### RadialMenu events

| Name | Params | Description |
| ---- | ---- | ---- |
| click | none | Triggered when the main button is pressed. |
| open | none | Triggered when the menu is opened. |
| close | none | Triggered when the menu is closed. |

### RadialMenuItem

This component has no props that should be assigned by the user.
This component only supports basic events.

## Liscense

This project is under the MIT liscence.
