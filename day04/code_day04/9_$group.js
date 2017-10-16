db.tasks.aggregate(
  {$group:{_id:{dept:"$dept",state:"$state"},count:{$sum:1}}}
);
db.scores.aggregate(
  {$project:{
     cls:1,
     score:{$ifNull:["$score",0]} 
  }},
  {$group:{
    _id:"$cls",
    sum:{$sum:"$score"},count:{$sum:1},avg:{$avg:"$score"}    
  }}  
);
db.scores.aggregate(
  {$project:{cls:1,LV:{
    $cond:[
      {$gte:["$score",90]},"A",
      {
        $cond:[
          {$gte:["$score",80]},"B",
          {
            $cond:[
              {$gte:["$score",60]},"C",
              "D"  
            ]
          }      
        ]    
      }  
    ]    
  }}},
  {$group:{
    _id:{cls:"$cls",LV:"$LV"},
    count:{$sum:1}    
  }}
)