<template>
    <div :style="style" class="vue-radial-menu-wrapper">
        <div
            :class="['vue-radial-menu-container', open && 'open']"
            :style="style"
            @click="toggleMenu">+</div>
        <slot v-if="open" @click="toggleMenu"></slot>
    </div>
</template>

<style>
.vue-radial-menu-wrapper {
    position: relative;
    user-select: none;
    border-radius: 50%;
    font-size: 32px;
    font-weight: bold;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.24), 0 0 0 rgba(0,0,0,0.16);
}

.vue-radial-menu-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.2s ease;
    position: relative;
    z-index: 6;
}

.vue-radial-menu-container.open {
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
        radius: { type: Number, default: 100 }
    },
    data () {
        const { size } = this;
        return {
            open: false,
            style: {
                width: size + 'px',
                height: size + 'px'
            }
        };
    },
    mounted () {
        document.addEventListener('click', this.closeMenuEvent);
        this.setChildProps();
    },
    updated () {
        this.setChildProps();
    },
    beforeDestroy () {
        document.removeEventListener('click', this.closeMenuEvent);
    },
    methods: {
        closeMenuEvent (e) {
            if (this.open && !this.$el.contains(e.target)) { this.toggleMenu(); }
        },
        toggleMenu () {
            this.open = !this.open;
        },
        setChildProps () {
            // Manually add prop data to the items
            const items = this.$slots.default
                .filter((s) => s.componentOptions && s.componentOptions.tag === 'radial-menu-item') // Filter to only take the items that matter
                .map((s) => s.componentOptions.propsData);
            const { size, itemSize, angleRestriction, rotate, radius } = this;
            const angle = angleRestriction > 300 || angleRestriction < -300 ? 300 : angleRestriction;
            const frags = angle / (items.length - 1 || 1);
            const angles = items.map((item, index) => ((Math.PI * (frags * index + rotate)) / 180));

            items.forEach((propData, index) => {
                propData.width = itemSize;
                propData.height = itemSize;
                propData.left = (size / 2) + Math.cos(angles[index]) * radius - (itemSize / 2);
                propData.top = (size / 2) - Math.sin(angles[index]) * radius - (itemSize / 2);
                propData.onClick = this.toggleMenu;
            });
        }
    }
};

export default RadialMenu;
</script>
