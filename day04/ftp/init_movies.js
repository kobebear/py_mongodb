use mean_test;

db.movies.drop();
db.movies.insert([
	{title:"Titanic",content:"I'm king of the world!",year:1997},
	{title:"The Godfather",content:"Keep your friends close, but your enemies closer",year:1972},
	{title:"Gone With The Wind",content:"After all, tomorrow is another day!",year:1939},
	{title:"Forrest Gump",content:"Miracles happen every day",year:1994},
	{title:"The Lion King",content:"This is my kingdom. If I don't fight for it, who will?",year:1994},
	{title:"Titanic",content:"To make each day count",year:1997}
]);

