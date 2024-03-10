const a = [1, 2, 3, 4, 5, 6, 7];

function linearSearch(element, array) {
    for (const data of array) {
        if (data === element) {
            return 1;
        }
    }
    return -1;
}

// should be sorted at first
function binarySearch(element,array){

    if(array.length==1){
        if(array[0]==element){
            return 1
        }
        return -1
    }

    let start=array[Math.floor(array.length/2)]<=element?Math.floor(array.length/2):0
    let end=(start==0)?Math.floor(array.length/2):array.length
    console.log(start,end,Math.floor(array.length/2))
    


   return binarySearch(element,array.slice(start,end))


}

function binarySearchV2(element,array,start,end){
    console.log(start,end,Math.floor(array.length/2))

    if(start<end){
        let start=array[Math.floor(array.length/2)]<=element?Math.floor(array.length/2):0
        let end=(start==0)?Math.floor(array.length/2):array.length
        
        if(array[start]==element || array[end]==element){
            return 1
        }

       return binarySearch(element,array,start,end)
    
    }
    return -1
    

    

}

function binarySearchV3(element,array,start,end){

    if(array.length==1){
        if(array[0]==element){
            return 1
        }
        return -1
    }

    start=array[Math.floor(array.length/2)]<=element?Math.floor(array.length/2):0
    end=(start==0)?Math.floor(array.length/2):array.length
  

   return binarySearch(element,array,start,end)


}


console.log(linearSearch(3, a)); // Example usage with element 3 in the array 'a'

// for(let i=0;i<7;i++){
//  console.log(binarySearchV2(i,a,0,a.length));

// }

console.log(binarySearchV2(20,a,0,a.length))
console.log(binarySearch(20,a))
console.log(binarySearchV3(20,a,0,a.length))
