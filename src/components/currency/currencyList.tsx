import {useState, useEffect} from 'react'
import { CurrencyType } from '../../types'
import axios from 'axios'
import Currency from './currency'


export default function CurrencyList() {

    const [currency, setCurrency] = useState<CurrencyType[]>([])

    useEffect(() => {
        axios.get('https://garantex.io/api/v2/currencies')
            .then((response) => {
                setCurrency(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    })


    return (
        <div className="list-wrapper">
            {currency.map((currency) => (
                <Currency key={currency.id} 
                    id={currency.id}
                    symbol={currency.symbol}
                    type={currency.type}
                    min_deposit_amount={currency.min_deposit_amount}
                    withdraw_min_amount={currency.withdraw_min_amount}
                    precision={currency.precision}
                />
            ))}
        </div>
    )
}