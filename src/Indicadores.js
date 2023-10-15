import React, { useState } from 'react';

import Chart from './Chart';
import './Indicadores.css'

export default function Indicadores(){

    const [stockData] = useState({
        currentValue: "R$ 4,37",
        variation: "13,37 %",
        min52Weeks: "R$ 3,36",
        minMonth: "R$ 4,21",
        max52Weeks: "R$ 4,63",
        maxMonth: "R$ 4,43",
        valuation12m: "29,08 %",
        currentMonth: "0,68 %",
      });

      return (
        <div className="container">
         < Chart />
          <div className="stock-data">
            <div className="stock-data-header">
            </div>
            <div className="stock-data-body">
              <h2 className="stock-data-row">
                <div className="stock-data-label">Valor atual</div>
                <div className="stock-data-value">{stockData.currentValue}</div>
              </h2>
              <h2 className="stock-data-row">
                <div className="stock-data-label">Variação</div>
                <div className="stock-data-value">{stockData.variation}</div>
              </h2>
              <h2 className="stock-data-row">
                <div className="stock-data-label">Mín 52 semanas</div>
                <div className="stock-data-value">{stockData.min52Weeks}</div>
              </h2>
              </div>
            <div className="stock-data-body">
              <h2 className="stock-data-row">
                <div className="stock-data-label">Mín mês</div>
                <div className="stock-data-value">{stockData.minMonth}</div>
              </h2>
              <h2 className="stock-data-row">
                <div className="stock-data-label">Máx 52 semanas</div>
                <div className="stock-data-value">{stockData.max52Weeks}</div>
              </h2>
              <h2 className="stock-data-row">
                <div className="stock-data-label">Máx mês</div>
                <div className="stock-data-value">{stockData.maxMonth}</div>
              </h2>
              </div>
              <div className="stock-data-body">
              <h2 className="stock-data-row">
                <div className="stock-data-label">Valorização 12M</div>
                <div className="stock-data-value">{stockData.valuation12m}</div>
              </h2>
              <h2 className="stock-data-row">
                <div className="stock-data-label">Mês atual</div>
                <div className="stock-data-value">{stockData.currentMonth}</div>
              </h2>
            </div>
          </div>  
        </div>
        
)
}