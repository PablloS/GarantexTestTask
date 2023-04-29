
interface ICurrencyProps {
    "id": string,
    "symbol": string,
    "type": string,
    "min_deposit_amount": number,
    "withdraw_min_amount": number,
    "precision": number
}

export default function Currency(currencyData : ICurrencyProps) {
    return(
        <div className="currency-card card">
            <h3 className="card-header">{currencyData.id}</h3>
            <div className="card-data">
                <p><b>symbol:</b> {currencyData.symbol}</p>
                <p><b>type:</b> {currencyData.type}</p>
                <p><b>min_deposit_amount:</b> {currencyData.min_deposit_amount}</p>
                <p><b>withdraw_min_amount:</b> {currencyData.withdraw_min_amount}</p>
                <p><b>precision:</b> {currencyData.precision}</p>
            </div>
        </div>
    )
}