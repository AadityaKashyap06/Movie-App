

      const http=require('http')
         let fs=require('fs')
        let server=http.createServer((req,res)=>{
                if(req.url=="/"){
                    res.end("This is homepage of my proj")
                }else if(req.url=="/comments"){
                    res.end("this is comment sectionn")
                }else if(req.url=="/user"){
                    res.end("these are  users")
                }else if(req.url=="/kart"){
                    res.end("Hello World")
                }else if(req.url=="/home"){
                    res.write("Hey Adi");
                    res.write("Welcome");
                    res.write("have some tea");
                    res.end(`bbyeee`);//end of resposnse 
                }else if(req.url=="/data"){
                     fs.readFile("./data.json",{encoding:"utf-8"},(err,data)=>{
                        if(err){
                            res.end("Somethig wrong happened")
                        }else{
                            res.end(data);
                        }
                     })
                }else if(req.url=="/letter"){
                    fs.readFile("./letter.txt",{encoding:"utf-8"},(err,data)=>{
                        if(err){
                            res.end("Somethig wrong happened")
                        }else{
                            res.end(data);
                        }
                     })
                }else if(req.url=="/html"){
                       //write code here
                       fs.readFile("./form.html", { encoding: "utf-8" }, (err, data) => {
                        if (err) {
                            res.end("Something wrong happened");
                        } else {
                            res.end(data);
                        }
                    });
                }
                else{
                    res.end(" 404 Not Found");
                }
        });
         server.listen(8080,()=>{
               console.log("Server is running on poert 8080");
         });
        