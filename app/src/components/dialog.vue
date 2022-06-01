<template>
  <!-- Trigger/Open The Modal -->
  <button class="dialog__button" v-on:click="open_dialog">{{ caption }}</button>

  <!-- The Modal -->
  <div id="dialog" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" v-on:click="close_dialog">&times;</span>
      <p style="text-align: left; color: var(--third-color)">
        <pre style="overflow: auto">{{ content }}</pre>  
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

defineProps({
  caption: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
});

var modal: HTMLElement | null = null;

onMounted(() => {
  modal = document.getElementById("dialog");
});

function open_dialog() {
  if (modal !== null) {
    modal.style.display = "block";
  }
}

function close_dialog() {
  if (modal !== null) {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    close_dialog();
  }
};
</script>

<style scoped>
.dialog__button {
  background-color: transparent;
  color: var(--second-color);
  border: none;
  text-decoration: none;
  display: inline-block;
  font-size: var(--font-size-small);
  margin: 0;
  padding: 0;
}
.dialog__button:hover {
  cursor: pointer;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: var(--z-fixed); /* Sit on top */
  left: 0;
  top: 0;
  width: 100vw; /* Full width */
  height: 100vh; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: rgba(27, 27, 27, 1);
  margin: 15% auto; /* 15% from the top and centered */
  padding: 10px;
  border: 1px solid var(--second-color);
  width: 90vw; /* Could be more or less, depending on screen size */
}
@media screen and (min-width: 768px) {
  .modal-content {
    width: 55vw;
  }
}
.close {
  color: var(--second-color);
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: var(--fourth-color);
  text-decoration: none;
  cursor: pointer;
}
</style>