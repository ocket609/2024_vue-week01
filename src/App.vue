<template>
  <table>
    <thead>
      <tr>
        <th scope="col">品項</th>
        <th scope="col">描述</th>
        <th scope="col">價格</th>
        <th scope="col">庫存</th>
      </tr>
    </thead>
    <tbody v-for="(item, index) in drinkData" :key="item.title">
      <tr>
        <td>{{ item.title }}</td>
        <td>
          <small>{{ item.description }}</small>
        </td>
        <td>{{ item.price }}</td>
        <td>
          <button type="button" @click="reduceNum(item)">-</button>
          {{ item.num }}
          <button type="button" @click="addNum(item)">+</button>
        </td>
        <td>
          <button type="button" @click="updateTitle(tempData, index)">修改</button>
          <!--<input type="text" v-model="item.title" />-->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

// 把資料抽出來，由資料驅動畫面
const drinkData = ref([
  {
    id: 1,
    title: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    num: 20
  },
  {
    id: 2,
    title: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
    num: 18
  },
  {
    id: 3,
    title: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
    num: 34
  },
  {
    id: 4,
    title: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
    num: 10
  },
  {
    id: 5,
    title: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    num: 25
  },
  {
    id: 6,
    title: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
    num: 20
  },
  {
    id: 7,
    title: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
    num: 18
  },
  {
    id: 8,
    title: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
    num: 20
  }
])
// 目前完成LV1
const reduceNum = (item) => {
  if (item.num > 0) {
    item.num--
  }
  return
}
const addNum = (item) => {
  item.num++
}
// 目前完成LV2
/*const tempEdit = ref([])
const updateTitle = (item) => {}*/
</script>

<style scoped></style>
