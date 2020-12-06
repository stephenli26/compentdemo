<template>
  <div class="home">
    <ValidateData :cust-name='custName' :phone="phone"/>
    <demo-component></demo-component>
  </div>
</template>

<script>
// @ is an alias to /src
import ValidateData from '../components/ValidateData.vue'
// import { computed,toRefs} from 'vue';
export default {
  data(){
    return {
      custName: "请输入用户名",
      phone: "请输入手机号",
      color: '#ff0000'
    } 
  },
  name: 'Home',
  components: {
    ValidateData
  },
  computed: {
      // 计算属性的 getter
      reversedMessage: function () {
      }
  },
  methods: {
    reversedMessageMethod: function () {
      this.custName= "请输入用户名"
      this.phone= "请输入手机号"
    },
    headleChangeColor () {
        console.log('颜色改变')
    }
  }

}
</script>
