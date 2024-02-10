const getKeys = function () {
  
   return Object.keys(this)

}

let student = {
  name:"",
}

Object.prototype.getKeys = getKeys;
