function map(){
   //this->��ǰ�ĵ�
   emit("subtotal",this.a+this.b);    
}
function reduce(key,emits){
   return emits.reduce((prev,val)=>prev+val);
}
db.nums.mapReduce(map,reduce,{out:"total"});
db.total.find();