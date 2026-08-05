//Reverse a string
// let str = "Reverse";
// let str2=''

// for (i = str.length-1; i >= 0; i--){
//     str2+=str[i]
// }
// console.log(str2);

// str2 = str1.split('').reverse().join('');
// console.log(str2)


function reverse(str) {
    if (str === '') {
        return
    }
    else {
        console.log(str);
        return reverse(str.substr(1)) + str[0]
    }
   
}
console.log("Reverse is",reverse('String'))