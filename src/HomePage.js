import React, { useState, useEffect } from "react";
import Header from './header';
import "./HomePage.css";

function HomePage() {
    const url_gainers = ("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=1SGQKQ4ZJEIHVAFZ")

    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        fetch(url_gainers)
            .then((response) => response.json())
            .then((data) => {
                setStockData(data);
            });
    }, [url_gainers]);

    return (
        <div>
            <Header />
            
        </div>
    );
}

export default HomePage;
