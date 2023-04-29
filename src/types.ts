
export type MarketType = {
    "id": string,
    "name": string,
    "ask_unit": string,
    "bid_unit": string,
    "min_ask": number,
    "min_bid": number,
    "maker_fee": number,
    "taker_fee": number
}

export type CurrencyType = {
    "id": string,
    "symbol": string,
    "type": string,
    "min_deposit_amount": number,
    "withdraw_min_amount": number,
    "precision": number
}

export type fiatType = {
    "id": 3,
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