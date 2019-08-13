import * as mongoose from 'mongoose';
import seedData from './seedData';
const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);


class Database {

    open(mongoUri) {
        console.log(mongoUri);
        mongoose.connect(mongoUri, { useNewUrlParser: true }, (err) => {
            if (err) {
                console.log('error is >>>>>', err);
            }

           console.log('successfully connected');
          seedData();
          // playwithmongo();

        });
    }


}


// function playwithmongo() {
//     const silence = new Kitten({ name: 'devansh sharma pankaj ' });


//     silence.save().then((res) => {
//         console.log('save successfully data', res);
//         Kitten.find({}, (err, response) => {
//             console.log(err, response);
//         }).then((res) => {
//            console.log(" have fun bro ");
//         }).catch((err) => {
//             console.log(err);
//         });

//     });

    //     silence.save((err,res)=>{
    //    if(!err){
    //     Kitten.find({},(err,response)=>{
    //         console.log(err,response);
    //             });
    //    }
    //     });

    //     Kitten.find({},(err,response)=>{
    // console.log(err,response);
    //     });
//}


export default Database;