import { ref,reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const baseUrl = 'https://fakestoreapi.com/products'
  const clothInfo = ref()
  const getClothingType = ref([])
  const setClothingType = ref()
  let clothType = reactive({
    all: 'all',
    male: 'men\'s clothing',
    female: 'women\'s clothing',
    jewelery: 'jewelery',
    electronic: "electronics"
  })

  const getData = async () => {
    try {
      const data = await axios.get(baseUrl)
      clothInfo.value = data.data
      clothInfo.value.forEach(ele => getClothingType.value.push(ele.category))
      setClothingType.value = [...new Set(getClothingType.value)]
    } catch (err) {
      console.error(err)
    }
    console.log(clothInfo.value,clothType)
    console.table(setClothingType.value)
  }
  
  getData()
  return { clothInfo, setClothingType, clothType }
})
