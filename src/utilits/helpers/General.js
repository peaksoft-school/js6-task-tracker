export const LocalStorage = {
   saveData(key, value) {
      return localStorage.setItem(key, JSON.stringify(value))
   },
   getData(key) {
      console.log(key)
      return JSON.parse(localStorage.getItem(key))
   },
   clearData() {
      return localStorage.clear()
   },
   removeData(key) {
      return localStorage.removeItem(key)
   },
}
