
function getData(){

    
const fs=require('fs');


const access_data=JSON.parse(fs.readFileSync('./src/cred.json','utf-8'));
const a_token=access_data.access_token;



var KiteTicker = require("kiteconnect").KiteTicker;
var ticker = new KiteTicker({
	api_key: "6zfi2amoxjco04yo",
	access_token:a_token
});


ticker.connect();
ticker.on("ticks", onTicks);
ticker.on("connect", subscribe);


const companyData = {
    256265: { name: "NIFTY 50" ,
              high:0,
              low:0,
              status:"",
              stoploss:"NULL"
             },

    738561:{name: "RELIANCE",
              high:0,
              low:0,
              status:"",
              stoploss:"NULL"
            },
    779521: { name: "SBIN",
              high:0,
              low:0,
              status:"",
              stoploss:"NULL"
             },
    895745: { name: "TATASTEEL",
              high:0,
              low:0,
              status:"",
              stoploss:"NULL"
             },
    2813441:{name:"RADICO",
              high:0,
              low:0,
              status:"",
              stoploss:"NULL"
            },

    7401729:{name:"ROSSELLIND",
              high:0,
              low:0,
              status:"",
              stoploss:"NULL"
            }

};

var items = [256265,738561, 779521,895745,2813441,7401729];

//data getting in onticks
 
   
var timer=0;

function onTicks(ticks) {


 

    for (let i = 0; i < ticks.length; i++) {
        var instrumentToken = ticks[i].instrument_token;

        var high = ticks[i].ohlc.high;
        var low = ticks[i].ohlc.low;
        var ltp = ticks[i].last_price;

        companyData[instrumentToken].high = high;
        companyData[instrumentToken].low = low;
        companyData[instrumentToken].lastTradePrice = ltp;

        if (ltp > high) {
            // console.log("buy");

            companyData[instrumentToken].status = "buy";
            companyData[instrumentToken].stoploss = low;
        } else if (ltp < low) {
            // console.log("sell");
            companyData[instrumentToken].status = "sell";
            companyData[instrumentToken].stoploss = high;
        } else {
            // console.log("stable");
            companyData[instrumentToken].status = "Hold";
            companyData[instrumentToken].stoploss = "NULL";
        }
        
    }

    data = [
        {
            Nifty: companyData[items[0]],
            Reliance: companyData[items[1]],
            Sbi: companyData[items[2]],
            Tata:companyData[items[3]],
            Radico:companyData[items[4]],
            Rossellind:companyData[items[5]]

        }

    ];

    fs.writeFileSync('./src/stock.json',JSON.stringify(data),'utf-8');

    console.log(data);
  }



   function subscribe() {

	ticker.subscribe(items);
	ticker.setMode(ticker.modeFull, items);
   }

  


}

module.exports=getData;

// getData();







// function onTicks(ticks) 
//   {
	

//    if(timer<=900)
//    timer++;


//     for (let i = 0; i < ticks.length; i++) {


//         var instrumentToken = ticks[i].instrument_token;
      

//         //extraction
//         var ltp=ticks[i].last_price;

//         var h=companyData[instrumentToken].high;
//         var l=companyData[instrumentToken].low ;
 
       
//     //     //substitution
//     companyData[instrumentToken].lastTradePrice = ltp;
        
//          if(timer<=900){

//             if(h==0 && l==0){
            
//                 companyData[instrumentToken].high=ltp;
//                 companyData[instrumentToken].low=ltp;
//                 companyData[instrumentToken].status="Hold";
//                 companyData[instrumentToken].stoploss="NULL";
//             }
//             else if(ltp>h){
//                 companyData[instrumentToken].high=ltp;
//             }
              
//             else if(ltp<l){
//                 companyData[instrumentToken].low=ltp;

//             }
            
//          }

//          else{
            
//               if (ltp > h) {
//                 // console.log("buy");

//                 console.log("Called2");
//                 companyData[instrumentToken].status = "buy";
//                 companyData[instrumentToken].stoploss = l;
//                 }       
//             else if (ltp < l) {
//                 // console.log("sell");
//                 companyData[instrumentToken].status = "sell";
//                 companyData[instrumentToken].stoploss = h;
//             }
//              else {
//                 // console.log("stable");
//                 companyData[instrumentToken].status = "Hold";
//                 companyData[instrumentToken].stoploss = "NULL";
//                 }


//            }
           
//     }

//     data = [
//         {
//             Nifty: companyData[items[0]],
//             Reliance: companyData[items[1]],
//             Sbi: companyData[items[2]],
//             Tata:companyData[items[3]],
//             Radico:companyData[items[4]],
//             Rossellind:companyData[items[5]]

//         }

//     ];

//     fs.writeFileSync('./src/stock.json',JSON.stringify(data),'utf-8');

//     console.log(data);
//   }
