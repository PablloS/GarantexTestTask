import './App.css'
import MarketList from './components/markets/marketList'
import Header from './components/header/header'
import {Route, Routes} from 'react-router-dom'
import CurrencyList from './components/currency/currencyList'
import FiatList from './components/fiat/fiatList'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<MarketList/>}/>
        <Route path='/currency' element={<CurrencyList/>}/>
        <Route path='/fiat' element={<FiatList/>}/>
      </Routes>
    </div>
  )
}

export default App
