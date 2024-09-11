<script>
import CustomCheckbox from "./components/custom-checkbox/CustomCheckbox.vue";

export default {
  name: "app-component",
  components: { CustomCheckbox },
  data() {
    return {
      variantA: "round",
      variantB: "roundedBox",
    items: [
      {name: 'John Doe', email: 'johndoe@gmail.com', id: 1},
      {name: 'Pat Paul', email: 'patpaul@gmail.com', id: 2}
    ]
    };
  },
  methods: {
  },
};
</script>

<template>
  <main class="flex flex-col items-center space-y-4 justify-center h-screen bg-white sm:px-[48px] px-[28px]">
    <p class="text-2xl font-bold">Checkbox Example</p>
    <div class=" flex justify-center space-x-3 items-center ">
      <div class="text-left border space-y-3 py-4 px-8 rounded-md border-[#EEEFF2]">
        <p class="font-bold text-base">Variant: {{ variantA  }}</p>
        <div v-for="item in items" :key="item.id" class="flex space-x-2 items-center">
            <CustomCheckbox :item="item" :resetSelect="resetSelect"
              :handleSelectReset="handleSelectReset"
              color="bg-[#4B104B]" :variant="variantA"/>
          <div>
            <p class="text-[#111827] font-semibold">
              {{ item.name }}
            </p>
            <p class="text-[#88888A] font-medium">{{ item.email }}</p>
          </div>
        </div>
      </div>
      <div class="text-left border space-y-3 py-4 px-8 rounded-md border-[#EEEFF2]">
        <p class="font-bold text-base">Variant: {{ variantB  }}</p>
        <div v-for="item in items" :key="item.id" class="flex space-x-2 items-center">
            <CustomCheckbox :item="item" :resetSelect="resetSelect"
              :handleSelectReset="handleSelectReset"
              color="bg-[#4B104B]" :variant="variantB"/>
          <div>
            <p class="text-[#111827] font-semibold">
              {{ item.name }}
            </p>
            <p class="text-[#88888A] font-medium">{{ item.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
