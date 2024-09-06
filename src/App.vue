<script>
import Upload from "./components/upload/upload.vue"
export default {
  name: "app-component",
  components: { Upload },
  data() {
    return {
      bannerUrl: ""
    };
  },
  methods: {
   getImgURL(val) {
  this.bannerUrl = val
}
  },
};
</script>

<template>
  <main class="px-[28px] flex justify-center space-x-3 items-center h-screen bg-white sm:px-[48px]">
    <div class="text-left border space-y-3 py-4 px-8 w-[30rem] rounded-md border-[#EEEFF2]">
      <p class="font-bold text-base">File Upload Component</p>
      <div class="space-y-2">
          <p class="label">Banner Image</p>
          <div class="input">
            <Upload :callbackFunc="getImgURL" />
          </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.input {
  width: 100%;
  height: 3rem;
  border-radius: 13px;
  color: #000000;
  border: 1px solid #b1b1b1;
  padding-left: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
</style>
