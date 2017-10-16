db.emps.aggregate(
  {$project:{"address.city":1}},
  {$group:{_id:"$address.city",count:{$sum:1}}},
  {$sort:{count:-1}},
  {$limit:5}
);