<template>
  <div class="hello">
    <label class="title-content">姓名手机号校验</label>
    <div class="input name-content">
      <span class="title name-title"> 姓名：</span>
      <input class="value name" type="text" ref="name" :value="custName" @change="inputName()">
    </div>
    <div class="input phone-content">
      <span class="title"> 手机号：</span>
      <input class="value phone" type="text" ref="phone" :value="phone" @change="inputPhone()">
     </div>
  </div>
  
</template>

<script>

export default {
  data() {
      return { 
        show: false,
        tipMessage: ""
      };
  },
  name: 'ValidateData',
  props: {
    'custName': {
        type: String, //指定传入的类型
        //type 也可以是一个自定义构造器函数，使用 instanceof 检测。
        default: "姓名" //这样可以指定默认的值
    },
    'phone': {
        type: String, //指定传入的类型
        //type 也可以是一个自定义构造器函数，使用 instanceof 检测。
        default: "手机号" //这样可以指定默认的值
    }

  },
  methods: {
      inputName: function () {
          if (this.custName && (/[^\u4e00-\u9fa5]/).test(this.$refs.name.value)) {
              this.$toast({message: '只能填写中文字符'})
              this.$refs.name.value = "请输入用户名"
          }
      },
      inputPhone: function () {
          let phone = this.$refs.phone.value;
          let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
          if(phone==''){
              this.$toast({message: '请输入手机号码'})
              this.$refs.phone.value = "请输入手机号"
          }else if(!reg.test(phone)){
              this.$toast({message: '手机格式不正确'})
              this.$refs.phone.value = "请输入手机号"
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.phone-content{ 
    padding-top: 10px;

}

.title-content {
  display: block;
  padding-bottom: 30px;
}

.title {
    font-size: 14px;
    float: left;
    width: 56px;
}

.name-title {
    text-align: left;
}

.input {
    width: 230px;
    margin: 0 auto;
    height: 30px; 
}
</style>
