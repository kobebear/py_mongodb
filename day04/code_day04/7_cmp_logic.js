db.scores.aggregate(
  {$project:{pass:{$gte:["$score",60]}}}
)
db.students.aggregate(
  {$project:{isBest:{
    $and:[//$or
      {$gte:["$eng",90]}, 
      {$gte:["$chs",90]}, 
      {$gte:["$math",90]},  
    ]
  }}}  
)