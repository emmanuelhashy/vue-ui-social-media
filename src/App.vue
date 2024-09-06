<script>
import Modal from "./components/modals/Modal.vue";
import IconBin from "./components/icons/IconBin.vue"
import IconEdit from "./components/icons/IconEdit.vue"
export default {
  name: "app-component",
  components: { Modal, IconBin, IconEdit },
  data() {
    return {
      isModalOpen: false,
      isModal1Open: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    openModal1() {
      this.isModal1Open = true;
    },
  },
};
</script>

<template>
  <Modal :open="isModalOpen" @close="isModalOpen = !isModalOpen">
    <div class="flex w-full justify-center">
      <IconBin />
    </div>
    <div class="px-8 space-y-3">
          <p class="text-lg font-bold text-center">Are you sure you want to delete </p>
          <p class="text-base font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
          <div class="flex space-x-6 justify-center">
              <button @click="isModalOpen = !isModalOpen" class="btn bg-[#E5DBE5] text-[#4B104B]">
                  <span>No</span>
              </button>
              <button @click="isModalOpen = !isModalOpen" class="btn bg-[#4B104B] text-white">
                  <span>Yes</span>
              </button>
          </div>
      </div>
  </Modal>
  <Modal :open="isModal1Open" @close="isModal1Open = !isModal1Open">
    <div class="flex w-full justify-center">
      <IconEdit />
    </div>
    <div class="px-8 space-y-3">
          <p class="text-lg font-bold text-center">Are you sure you want to save changes</p>
          <p class="text-base font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
          <div class="flex space-x-6 justify-center">
              <button @click="isModal1Open = !isModal1Open" class="btn bg-[#E5DBE5] text-[#4B104B]">
                  <span>No</span>
              </button>
              <button @click="isModal1Open = !isModal1Open" class="btn bg-[#4B104B] text-white">
                  <span>Yes</span>
              </button>
          </div>
      </div>
  </Modal>
  <main class="px-[28px] flex justify-center space-x-3 items-center h-screen bg-white sm:px-[48px]">
    <div class="text-left border space-y-3 py-4 px-8 rounded-md border-[#EEEFF2]">
      <p class="font-bold text-base">Custom Modals</p>
      <div class="space-x-2">
        <button @click="openModal" class="bg-red-700 text-white py-1.5 px-3 rounded-md">
            <span>Delete Changes</span>
          </button>
        <button @click="openModal1" class="bg-green-700 text-white py-1.5 px-3 rounded-md">
            <span>Save Changes</span>
          </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.btn {
    padding: 8px 40px;
    border-radius: 30px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>
