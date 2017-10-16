db.eHealth.drop(); 
for(var i=0,emps=[];i<10000;i++){
	emps[i]={   
	  eid:"e"+(100000+i+"").slice(1),  
    height:parseInt(Math.random()*(195-155+1)+155),   	   	  
    weight:parseInt(Math.random()*(110-40+1)+40), 
    birth:new Date(         
		     parseInt(Math.random()*(1999-1980+1)+1980),         
		     parseInt(Math.random()*(12)),         
		     parseInt(Math.random()*(31)+1)       
	  )
  }; 
} 
db.eHealth.insert(emps);


