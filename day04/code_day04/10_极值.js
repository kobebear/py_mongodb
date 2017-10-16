db.scores.aggregate(
  {$group:{
    _id:"$cls",
    max:{$max:"$score"},
    min:{$min:"$score"},    
  }}
);
db.tasks.aggregate(
  {$sort:{taskId:1}},
  {$group:{
    _id:"$dept",
    lastTaskId:{$last:"$taskId"}    
  }}  
)