<script>
import { onMounted, onUnmounted } from "vue"
export default {
    name: "modal-component",
    props: {
        open: {
            type: Boolean,
            required: true
        }
    },
    setup(_, { emit}) {
        const close = () => {
            emit("close")
        };

        const handleKeyup = (event) => {
            if(event.keyCode === 27) {
                close()
            }
        }

        onMounted( () => document.addEventListener("keyup", handleKeyup))
        onUnmounted( () => document.removeEventListener("keyup", handleKeyup))

        return{ close };
    }

}
  
</script>
<template>
    <transition name="fade">
        <div class="vue-modal" v-show="open">
            <transition name="drop-in" v-show="open">
                <div class="relative vue-modal-inner" v-show="open">
                    <p @click="close" class="absolute top-5 z-10 right-5 cursor-pointer font-semibold text-lg text-[gray]">X</p>
                    <div class="vue-modal-content">
                        <slot/>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>
<style scoped>
*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.vue-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.relative  {
    max-width: 600px;
    margin: 3rem auto;
}

.vue-modal-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 0.3rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.drop-in-enter-active,
.drop-in-leave-active {
    transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
    opacity: 0;
    transform: translateY(-50px);
}
</style>