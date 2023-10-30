let obj = {
    name:"John",
    age:21,
    fun: function(){
        return "I am function"
    },
    arr:[10,20,30,40]
}

let a ="Key2"
// obj.key = "item";
obj[a]="item 2";
console.log(obj);