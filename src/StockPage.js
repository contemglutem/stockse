
import './ChartApp.css';
import Indicadores from './Indicadores';
import IndicadoresValuation from './IndicadoresValuation'
import Header from './header';

function StockApp() {
  return (
    <div className="ChartApp">
      
      < Header />

      <div className="chart">
        <div>
          <Indicadores />
          <IndicadoresValuation />
        </div>
        
      </div>
    </div>

  );
}

export default StockApp;
