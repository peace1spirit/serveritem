const axios=require('axios')

class FacebookFeed{
  
    static showFeed(req,res){
        axios({
            method: 'GET',
            url: `https://graph.facebook.com/v3.2/10156015789458547/feed?format=json&access_token=${process.env.token}`
        })
        .then(results=>{
            res.status(200).json({
                msg: 'List of Feeds',
                data: results.data
            })
        })
        .catch(error =>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
        })
    }
    

}

module.exports=FacebookFeed;