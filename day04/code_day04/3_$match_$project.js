db.emps.aggregate(
  {$match:{"address.city":{$gte:"city020",$lte:"city030"}}},
  {$project:{city:"$address.city"}}
);