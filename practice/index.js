// let arr = [22,33,4,5665,8,845]

// function findgreatestnum(){
//     let highest = arr[0]

//     for(let a=1;a<arr.length-1;a++){
//         if(highest<arr[a]){
//             highest = arr[a]
//         }
//     }
//     return highest
// }

// console.log(findgreatestnum());


// let arr = [22,33,4,5665,8,845]

// function findgreatestnum(){
//     let lowest = arr[0]

//     for(let a=1;a<arr.length-1;a++){
//         if(lowest>arr[a]){
//             lowest = arr[a]
//         }
//     }
//     return lowest
// }

// console.log(findgreatestnum());


// let arr = [11,33,63,56371,73,654]

// function secondhighest(){
//     let highest = arr[0]
//     let second_highest 

//     for(let a = 1;a<arr.length;a++){
//         if(arr[a]>highest){
//              second_highest = highest
//             highest = arr[a]

//         }else if(arr[a]>second_highest && arr[a]!==highest){
//             second_highest = arr[a]
//         }
//     }
//     return highest ,second_highest
// }

// console.log(secondhighest());



// let arr = [11,32,46,82,90,59]

// function secondhighest(){
//      let highest = arr[0]
//      let second_highest

//      for(let a = 1;a<arr.length;a++){
//         if(arr[a]>highest){  
//            second_highest = highest
//            highest = arr[a]
//         }else if(arr[a]>second_highest && arr[a]!==highest){
//             second_highest=arr[a]
//         }
//      }
//      return second_highest,highest
// }

// console.log(secondhighest());

// let arr = [1,2,34,5,67,76,34,555]

// function findgreatestnum(){
//     let highest = arr[0]
//     for(let a = 0;a<arr.length;a++){
//         if(arr[a]>highest){
//             highest = arr[a]
//         }
//     }
//     return highest
// }

// console.log(findgreatestnum());


let arr = [1,2,34,5,67,76,34,555]

function findsecondgreatestnum(){
    let highest = arr[0]
    let second_highest 
    for(let a = 1;a<arr.length;a++){
        if(arr[a]>highest){
           second_highest = highest;
           highest = arr[a]
        }
    }
}


 