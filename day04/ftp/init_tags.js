var kword="JavaScript,mongodb,nodejs,HTML5,PHP";
for(var i=1,arr=[];i<=30;i++){
  var kwds=kword.split(",");
  i%2==0&&(kwds.reverse());
  var starti=parseInt(Math.random()*kwds.length);
  var max=kwds.length-starti;
  var n=parseInt(Math.random()*max+1);
  kwds.splice(starti,n);
  var d=parseInt(Math.random()*10+1);
  arr[i]={title:"post"+i,date:"2016/5/"+d,tags:kwds};
}
for(var i=1,arr=[];i<=30;i++){
  var kwds=kword.split(",");
  i%2==0&&(kwds.reverse());
  var starti=parseInt(Math.random()*kwds.length);
  var max=kwds.length-starti;
  var n=parseInt(Math.random()*max+1);
  kwds.splice(starti,n);
  var d=parseInt(Math.random()*10+1);
  arr[i]={title:"post"+i,date:"2016/4/"+d,tags:kwds};
}
db.tags.drop();
db.tags.insert(arr);
