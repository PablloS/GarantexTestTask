
interface IFiatProps {
    "direction": string,
    "currency": string,
    "title": string,
    "description": string,
    "instructions": string,
    "min_amount": number,
    "max_amount": number,
    "rounding": number,
    "fee": number,
    "fee_fixed": number,
    "fee_limit": number
}

export default function Fiat(fiatData : IFiatProps) {
    return(
        <div className="fiat-card card">
            <h3 className="card-header">{fiatData.title}</h3>
            <div className="card-data fiat-card-data">
                <p><b>direction:</b> {fiatData.direction}</p>
                <p><b>currency:</b> {fiatData.currency}</p>
                <p><b>description:</b> {fiatData.description}</p>
                <p><b>instructions:</b> {fiatData.instructions}</p>
                <p><b>min_amount:</b> {fiatData.min_amount}</p>
                <p><b>max_amount:</b> {fiatData.max_amount}</p>
                <p><b>rounding:</b> {fiatData.rounding}</p>
                <p><b>fee:</b> {fiatData.fee}</p>
                <p><b>fee_fixed:</b> {fiatData.fee_fixed}</p>
                <p><b>fee_limit:</b> {fiatData.fee_limit}</p>
            </div>
            
        </div>
    )
}