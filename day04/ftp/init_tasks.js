db.tasks.drop();
for(var i=0,arr=[];i<100000;i++){
    arr.push({
	taskId:i,
	state:Math.random()<0.3?"READY":
	        Math.random()<0.5?"RUNNING":"DONE",
	dept:"dept"+parseInt(Math.random()*20+1)
    });
}
db.tasks.insert(arr);
