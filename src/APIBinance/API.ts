let API = "https://api.binance.com/"
let get = () => {
    let data = fetch("https://api.binance.com/api/v3/exchangeInfo?symbol=BNBBTC")
    return data;
}

export default get;