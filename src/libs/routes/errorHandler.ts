export default function errorHandler(req,res,next){
console.log(" Error in handlling request");
res.send("Error in handling in request");
}