// import Vue from 'vue'
import VueConfirmDialog from 'vue-confirm-dialog'

Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

const App = {
  template: `

<div>
  <!-- 这行需要加 -->
  <vue-confirm-dialog></vue-confirm-dialog>

  <el-button type="primary" @click="handleClick">按钮</el-button>

</div>

  `,
  methods: {
    handleClick(){
      this.$confirm(
        {
          message: `Are you sure?`,
          button: {
            no: 'No',
            yes: 'Yes'
          },
          /**
          * Callback Function
          * @param {Boolean} confirm
          */
          callback: confirm => {
            if (confirm) {
              alert("del me")
              // ... do something
            }
          }
        }
      )
    }
  },
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
