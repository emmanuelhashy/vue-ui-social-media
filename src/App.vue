<script>
import PaginationComponent from "./components/pagination/PaginationComponent.vue";

export default {
  name: "app-component",
  components: { PaginationComponent },
  data() {
    return {
      pageSize: 2000,
      currentPage: 1,
      limit: 6,
    };
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = Number(page);
    },
  },
};
</script>

<template>
  <main
    class="px-[28px] flex justify-center items-center h-screen bg-white sm:px-[48px]"
  >
    <PaginationComponent
      :total-items="pageSize"
      :current-page="currentPage"
      :per-page="limit"
      @page-changed="handlePageChange"
      :go-button="false"
      styled="simple"
    />
  </main>
</template>

<style scoped></style>
