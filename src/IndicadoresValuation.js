import React, { useState, useEffect } from "react";
import "./IndicadoresValuation.css";

const StockData = () => {

    //const location = 

    const  symbol  = "AAPL"; // Get symbol from route parameters

    const url = ("https://financialmodelingprep.com/api/v3/income-statement/" + symbol + "?period=annual&apikey=bPAJb60KTSHdoHvVCnzPMYf1r7fFuN78")

    const [stockData, setStockData] = useState([]);
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setStockData(data));
    }, [url]);
    return (
      <div className="container">
        <div className="stock-data">
          <div className="stock-data-header"> 
            <h1>{symbol}</h1>
            <h1>{stockData.map((stock) => (stock.symbol))[0]}</h1>
            <h2>Historical Stock Data</h2>
          </div>
          <div className="stock-data-body">
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Revenue (MM $)</th>
                  <th>Gross Profit (MM $)</th>
                  <th>Gross Profit Ratio</th>
                  <th>Operating Expenses (MM $)</th>
                  <th>Interest Income (MM $)</th>
                  <th>Ebitda - (MM $)</th>
                  <th>Ebitda Ratio</th>
                  <th>Net Income (MM $)</th>
                  <th>EPS</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((stock) => (
                  <tr key={stock.calendarYear}>
                    <td>{stock.calendarYear}</td>
                    <td>{(stock.revenue/1000000).toLocaleString("pt-BR", {minimumFractionDigits: 2,maximumFractionDigits: 2})}</td>
                    <td>{(stock.grossProfit/1000000).toLocaleString("pt-BR", {minimumFractionDigits: 2,maximumFractionDigits: 2})}</td>
                    <td>{(stock.grossProfitRatio*100).toLocaleString("pt-BR", {minimumFractionDigits: 2,maximumFractionDigits: 2})}</td>
                    <td>{(stock.operatingExpenses/1000000).toLocaleString("pt-BR", {minimumFractionDigits: 2,maximumFractionDigits: 2})}</td>                 
                    <td>{(stock.interestIncome/1000000).toLocaleString("pt-BR", {minimumFractionDigits: 2,maximumFractionDigits: 2})}</td>                 
                    <td>{(stock.ebitda/1000000).toLocaleString("pt-BR", {minimumFractionDigits: 2,maximumFractionDigits: 2})}</td>                 
                    <td>{(stock.ebitdaratio*100).toLocaleString("pt-BR", {minimumFractionDigits: 2,maximumFractionDigits: 2})}</td>             
                    <td>{(stock.netIncome/1000000).toLocaleString("pt-BR", {minimumFractionDigits: 2,maximumFractionDigits: 2})}</td>           
                    <td>{(stock.eps).toLocaleString("pt-BR", {minimumFractionDigits: 2,maximumFractionDigits: 2})}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

export default StockData;
