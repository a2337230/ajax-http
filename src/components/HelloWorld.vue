<template>
  <div class="hello">
    <ul class="shopping-container">
      <li v-for="item in shopData" :key="item.goods_id">
        <img :src="item.thumb_url" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import { hotShop } from './../http/index.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      shopData: []
    }
  },
  mounted () {
    this._getShop()
  },
  methods: {
    async _getShop () {
      let params = {
        page: 1,
        size: 60
      }
      let result = await hotShop(params)
      this.shopData = result.goods_list
      console.log(this.shopData)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  justify-content: center;
}
.shopping-container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
.shopping-container li {
  margin: 0 10px 10px 0;
}
</style>
