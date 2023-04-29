import { useEffect, useState } from "react"
import { MarketType } from "../../types"
import axios from "axios"
import Market from "./market"

export default function MarketList() {

    const [markets, setMatkets] = useState<MarketType[]>([])

    useEffect(() => {
        axios.get('https://garantex.io/api/v2/markets')
            .then((response) => {
                setMatkets(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    })


    return (
        <div className="list-wrapper">
            {markets.map((market) => (
                <Market key={market.id} 
                    name={market.name}
                    min_ask={market.min_ask}
                    min_bid={market.min_bid}
                    maker_fee={market.maker_fee}
                    taker_fee={market.taker_fee}
                />
            ))}
        </div>
    )
}

