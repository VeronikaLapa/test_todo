<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
            <button class="close" @click="$emit('close')"><img src="../assets/cross.svg" /></button>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalDialog"
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  backdrop-filter: blur(2px);
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 300px;
  height: 210px;
  margin: 0px auto;
  padding: 20px 40px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.close {
  display: inline-block;
  width: 19px;
  height: 19px;
  border: none;
  border-radius: 4px;
  background-color: rgba(49,75,153);
  padding: 0;
  margin-left: auto;
  cursor: pointer;
}
.close > img {
  width: 6px;
  height: 6px;
  position: relative;
}
.modal-header {
  display: flex;
  font-weight: bold;
  font-size: 18px;
}
.modal-footer {
  display: flex;
}
</style>
