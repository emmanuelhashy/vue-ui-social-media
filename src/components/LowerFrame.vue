<script setup lang="ts">
import CustomSelect from "./custom-select/custom-select.vue"

const handleSelect = (param: any) => {
  console.log(`${param.value} is Selected`);
};

const campaignOptions = [{ name: 'Yes', value: true }, { name: 'No', value: false }]
const gender = [{ name: 'Male', value: 'male' }, { name: 'Female', value: 'female' }];
</script>

<template>
  <div class="lower-frame">
    <div class="header">
      <p class="header-text">Template Config</p>
    </div>
    <div class="form">
      <div class="form_fields">
        <div>
          <p class="label">Show Campaign?</p>
          <CustomSelect :options="campaignOptions" @selected="handleSelect" />
        </div>
        <div>
          <p class="label">Choose Gender</p>
          <CustomSelect :options="gender" @selected="handleSelect" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.label {
  font-size: 14px;
}

.preview-btn {
  display: flex;
  margin: 2rem 2rem;
}

.element {
  background-color: #e8e8e8;
  display: flex;
  align-items: center;
  border: 1px solid #b1b1b1;
  margin: 1rem 0;
}

.element:last-child {
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}

.left {
  /* padding: 1rem; */
  padding-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 0.5rem;
  border-right: 1px solid #b1b1b1;
  display: flex;
  flex-direction: column;
}

.right {
  display: flex;
  padding-left: 1rem;
}

.icon-box {
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
}

.bg-red {
  background-color: #fd6003;
}

.bg-orange {
  background-color: #fb8e0b;
}

.form_btns {
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 2.5rem 0; */
}

.btn {
  padding: 8px 30px;
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.form_fields__btns {
  display: flex;
  justify-content: center;
}

.bg-transparent {
  background-color: transparent;
  color: #000000;
}

.header {
  background-color: #531253;
  padding: 10px 20px;
  width: 100%;
  margin-bottom: 1rem;
}

.header-text {
  color: white;
  font-weight: 500;
  font-size: 16px;
}

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

.select {
  width: 100%;
  height: 3rem;
  border-radius: 13px;
  color: #000000;
  border: 1px solid #b1b1b1;
  padding: 0 17px;
  font-size: 14px;
}

.input::placeholder {
  color: #b1b1b1;
}

.form {
  padding: 0 1rem;
}

.form_fields {
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form_btns {
  height: 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2.5rem;
}

.btn {
  padding: 17px 50px;
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>