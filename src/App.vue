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
  <main class="px-[28px] flex justify-center space-x-3 items-center h-screen bg-white sm:px-[48px]">
    <div class="text-left border space-y-3 py-4 px-8 rounded-md border-[#EEEFF2]">
      <p class="font-bold text-base">Variant: {{ variantA  }}</p>
      <div v-for="item in items" :key="item.id" class="flex space-x-2 items-center">
          <CustomCheckbox :item="item" :resetSelect="resetSelect"
            :handleSelectReset="handleSelectReset"
            color="bg-green-600" :variant="variantA"/>
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
            color="bg-green-600" :variant="variantB"/>
        <div>
          <p class="text-[#111827] font-semibold">
            {{ item.name }}
          </p>
          <p class="text-[#88888A] font-medium">{{ item.email }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
