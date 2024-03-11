function linearSearch(element, array) {
    for (const data of array) {
        if (data === element) {
            return 1;
        }
    }
    return -1;
}

// array should be sorted
function binarySearch(element,array){

    if(array.length==1){
        if(array[0]==element){
            return 1
        }
        return -1
    }

    let start=array[Math.floor(array.length/2)]<=element?Math.floor(array.length/2):0
    let end=(start==0)?Math.floor(array.length/2):array.length

    


   return binarySearch(element,array.slice(start,end))
}

function binarySearchV2(element,array,start,end){


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



// Use module.exports to export the functions
module.exports = {
    linearSearch,
    binarySearch,
    binarySearchV2,
    binarySearchV3
};