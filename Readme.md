### Installation and Getting Started
```sh
$ npm i nodemon
$ npm i
$ npm start (server side)

##please get your access-token from facebook 
###create file .env with template:
##token=access-token 
##e.g  token=1234567890


### Using Mongodb 
### List of API  
##### http://localhost:3000/


| Route | HTTP | Description                 |
| ----- | ---- | --------------------------- |
| /feed | GET  | Get Feeds from API Facebook |


#### Input table 


| Route | HTTP | Description                    |
| ----- | ---- | ------------------------------ |
| /     | POST | Input new data Person and Item |

#####  Input
###### Firstname: e.g. Tommy (put in req.body)
###### Lastname: e.g. Bejo (put in req.body)
###### Email: e.g. tommy@mail.com (put in req.body)
###### Item: e.g. Barang2 (put in req.body)
###### Quantity: e.g. 1 (put in req.body)
###### Totalprice: e.g. 20000 (put in req.body)


#####  Input 10 new data for testing 
| Route | HTTP | Description                   |
| ----- | ---- | ----------------------------- |
| /test | GET  | Input 10 new data for testing |

#####  Show Data via HTML ejs
| Route | HTTP | Description               |
| ----- | ---- | ------------------------- |
| /     | GET  | Show data Person and Item |

#####  Show Data via HTML ejs
| Route  | HTTP | Description               |
| ------ | ---- | ------------------------- |
| /pivot | GET  | Show data Person and Item |
