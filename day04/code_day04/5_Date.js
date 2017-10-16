db.eHealth.aggregate(
  {$project:{month:{$month:"$birth"}}},
  {$match:{month:9}}
)
db.eHealth.aggregate(
  {$project:{age:{
    $subtract:[
       {$year:new Date()},//new Date().getFullYear(),
       {$year:"$birth"}  
    ]    
  }}}  
);