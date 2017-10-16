db.scores.drop();
for(var i=0,scores=[];i<100;i++){
  scores[i]={
    sid:"s"+(100+i+"").slice(1),
    score:Math.random()<0.05?null:parseInt(Math.random()*(100-40+1)+40),
    cls:"class"+parseInt(Math.random()*6+1)
  }
}
db.scores.insert(scores);
