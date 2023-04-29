import { useEffect, useState } from "react";
import { fiatType } from "../../types";
import axios from "axios";
import { accessToken } from "../../constant";
import Fiat from "./fiat";


export default function FiatList() {
    const [fiat, setFiat] = useState<fiatType[]>([])

    useEffect(() => {
        axios.get('https://garantex.io/api/v2/gateway_types?currency=rub', {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }
        })
        .then((response) => {
            setFiat(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    })

    return (
        <div className="list-wrapper">
            {fiat.map((fiat) => (
                <Fiat key={fiat.id} 
                    direction={fiat.direction}
                    currency={fiat.currency}
                    title={fiat.title}
                    description={fiat.description}
                    instructions={fiat.instructions}
                    min_amount={fiat.min_amount}
                    max_amount={fiat.max_amount}
                    rounding={fiat.rounding}
                    fee={fiat.fee}
                    fee_fixed={fiat.fee_fixed}
                    fee_limit={fiat.fee_limit}
                />
            ))}
        </div>
    )
}