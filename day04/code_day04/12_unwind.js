db.weixin.aggregate(
  {$unwind:"$comments"},
  {$group:{_id:"$comments.uname",count:{$sum:1}}},
  {$sort:{count:-1}}
);