//your JS code here. If required.
let item = document.getElementById("level")
let num = 0

while(item.parentNode!==null){
    

    item=item.parentNode
    num++;
}
alert(`The level of the element is: ${num}`)