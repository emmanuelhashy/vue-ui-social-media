<template>
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.407 7.80514C-0.0376004 7.47763 -0.1326 6.85163 0.1949 6.40694C0.4493 6.06153 0.703701 5.7332 0.926901 5.4472C1.3724 4.8764 1.9857 4.1118 2.6521 3.3444C3.3141 2.5819 4.0482 1.7936 4.7334 1.1881C5.0749 0.8864 5.4279 0.6089 5.7721 0.4014C6.0888 0.2105 6.524 6.53594e-07 7.0001 6.11972e-07C7.4762 5.7035e-07 7.9115 0.2105 8.2282 0.4014C8.5724 0.6089 8.9253 0.8864 9.2668 1.1881C9.95209 1.7936 10.6861 2.5819 11.3482 3.3444C12.0145 4.1118 12.6278 4.8764 13.0734 5.4472C13.2965 5.7332 13.551 6.06153 13.8054 6.40693C14.1329 6.85163 14.0379 7.47763 13.5932 7.80514C13.4144 7.9368 13.2064 8.00017 13.0002 8L7.0001 8L1.0001 8C0.793899 8.00017 0.5858 7.9368 0.407 7.80514Z"
      :fill="color" />
  </svg>
</template>
<script>
export default {
  props: {
    color: String
  },
}
</script>
<style>
/* .style-chooser .vs__search::placeholder, */
.style-chooser .vs__dropdown-toggle {
  border-radius: 13px;
  border-top-right-radius: 13px;
  border-top-left-radius: 13px;
  height: 3rem;
}

.style-chooser .vs__dropdown-menu {
  border-radius: 13px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}

.pos {
  /* background: white; */
  /* border: none; */
  border-radius: 13px;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}
</style>