# Web_Dev_Project_B6_
A Web App to make buy/sell calls based on open range strategy for the picked stocks
Problem Statement:
Create a Web App to make buy/sell calls based on Open Range strategy for the picked stocks. Pick any stocks and read live data feed through the APIs that are provided.

Trading Strategy
Any stock creates a range in the first 15 minutes of trading in a day. This is calling Opening Range. The highs and lows of this time frame is taken as entry and exit parameters.
Buy when the stock moves above the Opening Range high. 2. Sell when the stock moves below the Opening Range low.
Rules for Buy
•	Buy when the stock price crosses above the opening range
•	Initial Stop loss — Low of the Opening Range.
Rules for Sell
•	Sell when the stock price crosses below the opening range.
•	Initial Stop loss — High of the Opening Range.






The web app has the following file structure.
1. views-To create the webpage hbs template engine has been used.
i)	Stock Market Page( index.hbs) - The main page for the site. 
ii)	Market Close Page (holiday.hbs)-The page appears when market is closed

2. Public folder-This folder contain the static files and media -Styling of webpage done using   
                            bootstrap, flexbox, css , fontawesome.
3.Main.js -The nodejs file to get the access token
4.App.js -The nodejs file to start the web app.
5.Src folder-This folder consists of datab.js which calls the api to get the data and store it in  
                     stock.json file and logic for the orb strategy. 

Steps to start the Web App:-
1.Install node_modules- npm install
  npm install --save-dev nodemon

2.Run the app- nodemon ./app.js or node app.js
In your web browser go to- http://localhost:8001/

3.Press the login-It will redirect to kite login. Enter your credentials
And get the access_token

4.Paste the access_token in the input and press submit

5.A Go will appear press the button to go to http://localhost:8001/index

6.The main index page where stock data appears-http://localhost:8001/index

7.On market close no data will be shown, instead "Market CLose" will be written.
