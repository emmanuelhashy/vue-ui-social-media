<template>
    <div @click="toggleCheck(item.id)"
        class="border flex justify-center items-center cursor-pointer "
        :class="`${checkVariant ? checkVariant : 'rounded'} ${checkVariant === 'rounded-full' && 'p-1'} ${width} ${height}`">
        <p :class="`${checked && color} ${checkVariant ? checkVariant : 'rounded'}`" class="w-full h-full flex justify-center items-center">
            <span v-if="checkVariant !== 'rounded-full'" class="text-white">✓</span>
        </p>
    </div>
</template>
<script>
export default {
    name: "check-component",
    props: {
        item: Object,
        resetSelect: Boolean,
        handleSelectReset: Function,
        color: String,
        variant: String,
        width: {
           type: String,
           default: 'w-6'
        },
        height: {
           type: String,
           default: 'h-6'
        }
    },
    data() {
        return {
            checked: false,
            variantHashTable: {
                round: 'rounded-full',
                roundedBox: 'rounded',
                roundedBoxLg: 'rounded-lg'
            }
        }
    },
    computed:{
        checkVariant() {
            return this.variantHashTable[this.variant]
        }
    },
    watch: {
        resetSelect() {
            if (this.resetSelect) {
                this.checked = false
            }
        }
    },
    methods: {
        toggleCheck(id) {
            this.checked = !this.checked;
console.log({id})
        }
    }
}
</script>
<style scoped>
.toast__text {
    color: white !important;
}
</style>