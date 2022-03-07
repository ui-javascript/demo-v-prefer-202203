import Vue from 'vue'
import { useConfirmDialog } from '@vueuse/core'

const {
  isRevealed,
  reveal,
  confirm,
  cancel,
  onReveal,
  onConfirm,
  onCancel,
} = useConfirmDialog()

const App = {
  template: `

<div>
<button @click="reveal">Reveal Modal</button>

<teleport to="body">
  <div v-if="isRevealed" class="modal-bg">
    <div class="modal">
      <h2>Confirm?</h2>
      <button @click="confirm">Yes</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</teleport>

</div>

  `,
  data() {
    return {

    }
  },
  methods: {

  },
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
