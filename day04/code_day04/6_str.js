db.products.aggregate(
  {$project:{type:{
      $toUpper:{
        $concat:[
          {$substr:["$pname",6,6]},
          " ",
          "$RAM"
        ]   
      } 
  }}}
);