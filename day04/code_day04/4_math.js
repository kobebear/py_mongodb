db.movies.aggregate(
  {$project:{years:{
      $subtract:[new Date().getFullYear(),"$year"]
  }}}
)
db.eHealth.aggregate(
  {$project:{clt:{
    $divide:[
       "$weight",
       {
           $divide:[
                {$multiply:["$height","$height"]},
                10000
           ]
       }  
    ]    
  }}} ,
  {$match:{clt:{$gte:25}}}
)//weight/((height*height)/10000)