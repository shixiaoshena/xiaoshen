var arr=[1,2,3,4,3,4,3,5,5,6,4,1,1]
function unique(arr){
    let arr1=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr.indexOf(arr[i])===-1){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(unique(arr));