db.movies.ensureIndex({content:"text"});
db.movies.find({$text:{$search:"day"}})
db.movies.find({$text:{$search:"enemy"}})
db.movies.dropIndex("content_text")
//db.movies.ensureIndex({title:"text",content:"text"});
db.movies.ensureIndex({"$**":"text"})
db.movies.find({$text:{$search:"king"}})

db.movies.find({$text:{$search:'"enemy"'}})
db.movies.find({$text:{$search:'"enemies"'}})
db.movies.find({$text:{$search:'every day'}})
db.movies.find({$text:{$search:'"every day"'}})
db.movies.find({$text:{$search:'day -every'}})
