const fs = require('fs');


module.exports = class Parser{

  constructor(nom){
  this.nom=nom;
    }


    lire(file){

    var content;
    var data = fs.readFileSync(file.nom);
    content = data.toString('utf8');

    //    return data we will use
    console.log(content);
    return content;
    }


    jsonifydata(header,datal){

                                          
    var entries = []; 
    //get keys in header
    var keys = header.split(";");
     
     for(var i=0;i<datal.length-1;i++){
     	var entry =[];
 
     	//get values of each rows 
        var values = datal[i].split(';');

        for(var j=0;j<values.length;j++){
      	    var item ={};

      	    //item as (key,value)
      	    item = this.objectify(keys[j],values[j]);

      	    /*return data of each rows as multiple 
      	    of item that contains (key,value) like (id,1)*/
      	    entry.push(item);
           }

    entries.push(entry);
       }

    var jsondata = JSON.stringify(entries);
    return jsondata;
   }

     //alternative to have a couple of key value item like ("id", 1)
    objectify(key,value){
   	  return {
      [key]: value
       }
    }

    /*the main function split data in two parts after read function call (function lire),
    part one for header and another for the real data return json data after call of 
    jsonifydata */
    parseFile(file) {

    var content = this.lire(file);

    var lines = content.split(/\r?\n/);

    //string that contains keys
    var header = lines[0];

    //array containing data separate with ";"
    var dataLines = lines.slice(1);

    // data = dataLines.map(this.parser);

     var data = this.jsonifydata(header,dataLines);

     console.log(data);

       }

}
