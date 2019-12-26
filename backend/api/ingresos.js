const router       = require("express").Router();
const mongo        = require("./../mongo");
const { ObjectId } = require("mongodb");


//mac 5dcdb6032b9c508a5bd44194
//pc  5dcbff9a55dd5a2a500214a2

router.post("/new", async (req, res) => {
             console.log(req.body);
             let { db, conection } = await mongo();
             try {
                  await db.collection("ingresos").insertOne(req.body);
                  res.status(200).send({ error: false });
                 } 
             catch (err) {
                  console.log(err);
                  res.status(400).send({ error: true });
             } 
             conection.close();
});

router.get("/get", async (req, res) => {
            let { db, conection } = await mongo();
            try {
                 let data = await db.collection("ingresos").find().toArray();
                 res.status(200).send(data);
            } catch (err) {
                 console.log(err);
                 res.status(400).send({ error: true });
            }
            conection.close();

});



router.put("/total", async (req, res) => {
            console.log(req.body);
            
            let { db, conection } = await mongo();
            try {
                 await db.collection("ingresos").findOneAndUpdate(
                                                                  { _id: ObjectId(req.body.id) },
                                                                  { $set: { total: req.body.total, horaSalida:req.body.horasalida} }
                                                                 );
                                                                 res.status(200).send({ error: false });  
                   
            } 
            catch (err) {
                 console.log(err);
                 res.status(400).send({ error: true });
            }
            conection.close();
});


router.put("/update", async (req, res) => {
         
           let { db, conection } = await mongo();
           let  id = req.body._id
           delete  req.body._id
           try {
               await db.collection("ingresos").findOneAndUpdate({_id: ObjectId(id)},{$set:req.body})
               res.status(200).send({ error: false });
           }  
           catch (err) {
               console.log(err);
               res.status(400).send({ error: true });
           }
           conection.close()
})
module.exports = router;
