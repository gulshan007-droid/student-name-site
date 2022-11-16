// make a program that if your age is greater than 18 you can drvive


const age=+prompt("please enter your age")
if(age>18){
    alert("you can drive")
}else{
    alert(`you have ${age-18} days left`)
}