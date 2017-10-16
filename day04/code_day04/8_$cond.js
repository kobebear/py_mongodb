db.scores.aggregate(
  {$project:{sid:1,LV:{
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
  }}}
)