<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    :width="width"
    :height="height"
    viewBox="0 0 226 226"
    style="fill: #000000"
  >
    <g
      fill="none"
      fill-rule="nonzero"
      stroke="none"
      stroke-width="1"
      stroke-linecap="butt"
      stroke-linejoin="miter"
      stroke-miterlimit="10"
      stroke-dasharray=""
      stroke-dashoffset="0"
      font-family="none"
      font-weight="none"
      font-size="none"
      text-anchor="none"
      style="mix-blend-mode: normal"
    >
      <path d="M0,226v-226h226v226z" fill="none"></path>
      <g :fill="color">
        <path
          d="M113,21.1875c-50.62302,0 -91.8125,41.18952 -91.8125,91.8125c0,50.62298 41.18948,91.8125 91.8125,91.8125c50.62302,0 91.8125,-41.18952 91.8125,-91.8125c0,-50.62298 -41.18948,-91.8125 -91.8125,-91.8125zM113,35.3125c42.98931,0 77.6875,34.69822 77.6875,77.6875c0,42.98928 -34.69819,77.6875 -77.6875,77.6875c-42.98931,0 -77.6875,-34.69822 -77.6875,-77.6875c0,-42.98928 34.69819,-77.6875 77.6875,-77.6875zM77.6875,56.5c-3.90051,0 -7.0625,3.16199 -7.0625,7.0625c0,3.90051 3.16199,7.0625 7.0625,7.0625c3.90051,0 7.0625,-3.16199 7.0625,-7.0625c0,-3.90051 -3.16199,-7.0625 -7.0625,-7.0625zM70.625,77.6875v77.6875h14.125v-77.6875zM98.875,77.6875v7.0625v70.625h31.78125c21.36814,0 38.84375,-17.47561 38.84375,-38.84375c0,-21.36814 -17.47561,-38.84375 -38.84375,-38.84375zM113,91.8125h17.65625c13.73249,0 24.71875,10.98626 24.71875,24.71875c0,13.73249 -10.98626,24.71875 -24.71875,24.71875h-17.65625z"
        ></path>
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: '#000000',
  },
}); 
</script>