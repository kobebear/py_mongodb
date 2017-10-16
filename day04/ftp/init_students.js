db.students.drop();
for(var i=0,students=[];i<100;i++){
  students[i]={
    uname: "s"+(100+i+"").slice(1), 
    eng:parseInt(Math.random()*(95-85+1)+85), 
    chs:parseInt(Math.random()*(95-85+1)+85), 
    math:parseInt(Math.random()*(95-85+1)+85) 
  }
}
db.students.insert(students);
