<template>
    <transition name="radial-vue-radial-menu-item">
        <div
            :style="style"
            class="vue-radial-menu-item"
            @click="handleClick">
            <slot></slot>
        </div>
    </transition>
</template>

<style>
.vue-radial-menu-item {
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    z-index: 5;
    transform: none;
    box-shadow: 0 1px 3px rgba(0,0,0,0.24), 0 0 0 rgba(0,0,0,0.16);
    user-select: none;
    font-size: 16px;
}

.radial-vue-radial-menu-item-enter,
.radial-vue-radial-menu-item-leave-to {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%);
  opacity: 0;
}
</style>

<script>
const RadialMenuItem = {
    name: 'RadialMenuItem',
    props: ['top', 'left', 'height', 'width', 'onClick'],
    data () {
        const { top, left, height, width } = this;
        return {
            style: {
                top: top + 'px',
                left: left + 'px',
                width: width + 'px',
                height: height + 'px'
            }
        };
    },
    methods: {
        handleClick (e) {
            this.onClick && this.onClick(e);
            this.$emit('click', e);
        }
    }
};

export default RadialMenuItem;
</script>
