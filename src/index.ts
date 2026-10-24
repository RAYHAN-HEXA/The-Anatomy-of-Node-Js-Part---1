import { createServer } from "node:http";
import sendResponsee from "./utilities/utilities";
import { orderRoute } from "./routes/order.route";

const server = createServer((req,res)=>{
  const url = req.url?? "/";
  if(url === "/"){

sendResponsee(res,{message:"wellcoome to bengladesh"},200)
return
 
  }
  if(url.startsWith("/order")){
     orderRoute(req,res)
     return
  }

  res.writeHead(404,{"content-Type":"application/json"});
  res.end(JSON.stringify({messgae :"Not Found "}))
}


)
server.listen(3000,()=>{
    console.log("server running at port 3000")
})