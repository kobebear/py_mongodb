for(var i=0,arr=[];i<10;i++){
  arr[i]={
    a:parseInt(Math.random()*9+1),
    b:parseInt(Math.random()*9+1)
  }
}
db.nums.insert(arr);



