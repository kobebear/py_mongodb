db.scores.aggregate(
  {$group:{
    _id:"$cls",
    max:{$max:"$score"},
    min:{$min:"$score"},    
  }},
  {$sort:{max:-1}}
);
db.tasks.aggregate(
  {$group:{
    _id:{dept:"$dept",state:"$state"},
    count:{$sum:1}    
  }},
  {$sort:{
    "_id.dept":1,
    "_id.state":1,   
  }},
  {$skip:10},
  {$limit:10}
);