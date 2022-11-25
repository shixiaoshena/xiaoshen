const climbStairs =(n)=>{
    const path=[]
    path[1]=1
    path[2]=2
    for(let i=3;i<=n;i++){
        path[i]=path[i-1]+path[i-2]
    }
}