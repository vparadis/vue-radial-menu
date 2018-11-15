<template>
    <div class="menu-wrapper" :style="style">
        <div
        :class="['menu-container', open ? 'open' : '', buttonClass]"
        :style="style"
        @click="toggleMenu">+</div>
        <slot v-if="open" @click="toggleMenu"></slot>
    </div>
</template>

<style>
    .menu-wrapper {
        position: relative;
        user-select: none;
    }

    .menu-container {
        font-size: 32px;
        font-weight: bold;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        box-shadow: 0 1px 3px rgba(0,0,0,0.24), 0 0 0 rgba(0,0,0,0.16);
        transition: all 0.2s ease;
        position: relative;
        z-index: 6;
    }

    .menu-container.open {
        transform: rotateZ(45deg);
    }
</style>

<script>
const RadialMenu = {
  name: 'RadialMenu',
  props: {
    angleRestriction: { type: Number, default: 180 },
    size: { type: Number, default: 50 },
    itemSize: { type: Number, default: 36 },
    rotate: { type: Number, default: 0 },
    radius: { type: Number, default: 100 },
    buttonClass: { type: String, default: '' }
  },
  data () {
    const { size } = this
    return {
      open: false,
      style: {
        width: size + 'px',
        height: size + 'px'
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.closeMenuEvent)

    // Manually add prop data to the items
    const items =  this.$slots.default.map((s) => s.componentOptions.propsData);
    const { size, itemSize, angleRestriction, rotate, radius } = this
    const angle = angleRestriction > 300 || angleRestriction < -300 ? 300 : angleRestriction
    const frags = angle / (items.length - 1)
    const angles = items.map((item, index) => ((Math.PI * (frags * index + rotate)) / 180))

    items.forEach((propData, index) => {
      propData.width = itemSize
      propData.height = itemSize
      propData.left = (size / 2) + Math.cos(angles[index]) * radius - (itemSize / 2)
      propData.top = (size / 2) - Math.sin(angles[index]) * radius - (itemSize / 2)
      propData.onClick = this.toggleMenu
    })
  },
  beforeDestroy () {
    document.removeEventListener('click', this.closeMenuEvent)
  },
  methods: {
    closeMenuEvent (e) {
      if (this.open && !this.$el.contains(e.target)) { this.toggleMenu() }
    },
    toggleMenu () {
      this.open = !this.open
    }
  }
}

export default RadialMenu
</script>
