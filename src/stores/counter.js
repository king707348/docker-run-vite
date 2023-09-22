import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const baseUrl = 'https://fakestoreapi.com/products'
  const clothInfo = ref()
  const getClothingType = ref([])
  const setClothingType = ref()

  const getData = async () => {
    try {
      const data = await axios.get(baseUrl)
      clothInfo.value = data.data
    } catch (err) {
      console.log(err)
    }
    clothInfo.value.forEach(ele => getClothingType.value.push(ele.category))
    setClothingType.value = [...new Set(getClothingType.value)]

    console.log(clothInfo.value)
    console.table(setClothingType.value)
  }

  
  getData()
  return { clothInfo, setClothingType, getData}
})
