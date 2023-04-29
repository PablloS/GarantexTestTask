
interface IMarketProps {
    "name": string,
    "min_ask": number,
    "min_bid": number,
    "maker_fee": number,
    "taker_fee": number
}

export default function Market(marketData : IMarketProps) {
    return(
        <div className="market-card card">
            <h3 className="card-header">{marketData.name}</h3>
            <div className="card-data">
                <p><b>min_ask:</b> {marketData.min_ask}</p>
                <p><b>min_bid:</b> {marketData.min_bid}</p>
                <p><b>maker_fee:</b> {marketData.maker_fee}</p>
                <p><b>taker_fee:</b> {marketData.taker_fee}</p>
            </div>
            
        </div>
    )
}