class Stock {


    constructor(symbol, exchange, open, high, low, close, bid, ask, trade_date) {

        this.symbol = symbol;
        this.exchange = exchange;
        this.open = open;
        this.high = high;
        this.low = low;
        this.close = close;
        this.ask = ask;
        this.trade_date = trade_date;
    }
}

let stock1 = new WebSocket("ATL", "hh", 22, 52, 20, 35, 33, 36, 22 / 08 / 22);

export default Stock;