"use client";

import { useEffect, useRef, useState } from "react";

interface PriceData {
  [key: string]: string;
}

const product_ids = [
  "BTC-USD",
  "ETH-USD",
  "USDT-USD",
  "BNB-USD",
  "SOL-USD",
  "ADA-USD",
  "XRP-USD",
  "DOGE-USD",
  "AVAX-USD",
  "DOT-USD",
];

export const useTokenPrices = () => {
  const [prices, setPrices] = useState<PriceData>({});
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const connect = () => {
      ws.current = new WebSocket(
        process.env.NEXT_PUBLIC_COINBASE_WS_URL as string
      );

      ws.current.onopen = () => {
        const subscribeMessage = {
          type: "subscribe",
          product_ids: product_ids,
          channels: ["ticker"],
        };
        ws.current?.send(JSON.stringify(subscribeMessage));
      };

      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "ticker" && data.price) {
          setPrices((prevPrices) => ({
            ...prevPrices,
            [data.product_id]: data.price,
          }));
        }
      };

      ws.current.onerror = (error) => {
        // error message
      };

      // auto-reconnect
      ws.current.onclose = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          connect();
        }, 5000);
      };
    };

    // initial connection
    connect();

    // clean up function
    return () => {
      clearTimeout(timeoutId);
      if (ws.current) {
        ws.current.onclose = null;
        ws.current.close();
      }
    };
  }, []);

  return prices;
};
