const PersonItemModel= require('../models/personitem');

class PersonItemController{

    static addPersonItem(req,res){
        PersonItemModel.create({ 
            Firstname: req.body.Firstname, 
            Lastname: req.body.Lastname,
            Email: req.body.Email,
            Item: req.body.Item,
            Quantity : req.body.Quantity,
            Totalprice :req.body.Totalprice
        })
        .then(result=>{
            res.status(200).json({data:result}) 
        })      
        .catch(err=>{
            res.status(500).json({message:err.message})
            console.log(`Error at addPersonItem, message ${err.message}`)
        })                
    }
    static testdata(req,res){
        var arr = [{ 
            Firstname: "Tommy", 
            Lastname: "Bejo",
            Email: "tommy@mail.com",
            Item: "Barang1",
            Quantity : 3,
            Totalprice : 150000
         },
         { 
            Firstname: "Joko", 
            Lastname: "Widodo",
            Email: "joko@mail.com",
            Item: "Barang2",
            Quantity : 1,
            Totalprice :50000
         },
         { 
            Firstname: "Jusuf", 
            Lastname: "Widodo",
            Email: "jusuf@mail.com",
            Item: "Barang2",
            Quantity : 1,
            Totalprice :50000
         },
         { 
            Firstname: "Tommy", 
            Lastname: "Bejo",
            Email: "tommy@mail.com",
            Item: "Barang2",
            Quantity : 2,
            Totalprice : 150000
         },
         { 
            Firstname: "Eko", 
            Lastname: "Kala",
            Email: "eko@mail.com",
            Item: "Barang1",
            Quantity : 2,
            Totalprice : 150000
         },
         { 
            Firstname: "Eko", 
            Lastname: "Kala",
            Email: "eko@mail.com",
            Item: "Barang2",
            Quantity : 1,
            Totalprice : 150000
         },
         { 
            Firstname: "Robert", 
            Lastname: "Garcia",
            Email: "robert@mail.com",
            Item: "Barang1",
            Quantity : 3,
            Totalprice : 20000
         },
         { 
            Firstname: "Robert", 
            Lastname: "Garcia",
            Email: "robert@mail.com",
            Item: "Barang2",
            Quantity : 1,
            Totalprice : 20000
         },
         { 
            Firstname: "Robert", 
            Lastname: "Garcia",
            Email: "robert@mail.com",
            Item: "Barang3",
            Quantity : 2,
            Totalprice : 50000
         },
         { 
            Firstname: "Eko", 
            Lastname: "Kala",
            Email: "eko@mail.com",
            Item: "Barang3",
            Quantity : 1,
            Totalprice : 150000
         },
        ];
        PersonItemModel.create(arr) 
        .then(result=>{
            res.status(200).json({data:result}) 
        })      
        .catch(err=>{
            res.status(500).json({message:err.message})
            console.log(`Error at testdata, message ${err.message}`)
        })                
    }
    static showPersonAll(req,res){
        PersonItemModel.find({}).sort({ID: 'asc'})
        .then(result=>{
            res.render('tablePerson', { data:result })         
            //res.status(200).json({data:result}) 
        })
        .catch(err=>{
            res.status(500).json({ message: err.message})
        })       
    }
    static showPersonItem(req,res){
        PersonItemModel.aggregate([
            {
                $group: {
                    "_id": {
                        "Email": "$Email",
                        "Firstname": "$Firstname",
                        "Lastname": "$Lastname",
                        "Item": "$Item"
                    },               
                    "Quantity": { $sum: "$Quantity" },
                    "Totalprice":{ $sum: "$Totalprice" },        
                },              
            },
            {$group: {
                    "_id": {
                        "Email": "$_id.Email",
                        "Firstname": "$_id.Firstname",
                        "Lastname": "$_id.Lastname",
                    },                          
                    items: { "$push": { 
                        "Item": "$_id.Item",
                        "Quantity": "$Quantity" ,
                        "Totalprice": "$Totalprice" ,
                    } }
                }
            }
            
        ])
        .then(result=>{
            var tempItems=[]
            for (let i = 0; i < result.length; i++) {
                for (let j = 0; j < result[i].items.length; j++) {
                    if(tempItems.indexOf(result[i].items[j].Item)==-1){
                        tempItems.push(result[i].items[j].Item)
                    }
                }
            }
            for (let i = 0; i < result.length; i++) {
                let tempRow=[]
                for (let k = 0; k < tempItems.length; k++) {
                    let index=-1
                    for (let u = 0; u <  result[i].items.length; u++) {
                        if(tempItems[k]==result[i].items[u].Item){
                            index=u
                            break
                        }                      
                    }
                    if(index==-1){
                        tempRow.push({ Item: tempItems[k] , Quantity: 0 })
                    }else{
                        tempRow.push({ Item: tempItems[k] , Quantity: result[i].items[index].Quantity })
                    }
                }
                result[i].rows=tempRow
            }
            //console.log(tempItems)
            //tempItems.unshift("Full Name", "Email");
            //res.status(200).json({data:result , cols: tempItems })
            res.render('tablePivot', {data:result , cols: tempItems })   
        })
        .catch(err=>{
            res.status(500).json({ message: err.message})
        })            
    }
}

module.exports=PersonItemController;