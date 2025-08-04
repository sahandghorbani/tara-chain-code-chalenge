# Crypto Dashboard - Real-Time Price Tracker

This is a responsive web application built with Next.js that displays real-time cryptocurrency prices and includes advanced wallet integration features. The UI is designed to be a pixel-perfect implementation of the provided Figma design.

## Core Features

- **Responsive UI**: The application is fully responsive, featuring a hero section and a detailed token list that adapts to all screen sizes.
- **Real-Time Price Updates**: Connects to the Coinbase WebSocket API to stream live price data for 10 selected cryptocurrencies, ensuring the displayed prices are always up-to-date. The connection automatically attempts to reconnect if it's interrupted.
- **Detailed Token Data**: Fetches comprehensive market data from the CoinGecko REST API, including market cap, volume, 24-hour price change, and historical data for sparkline charts.
- **Dynamic Sparkline Charts**: Each token in the list displays a unique 7-day price history chart, rendered using ApexCharts. The chart's color dynamically changes to green or red based on the 24-hour price performance.
- **Advanced Wallet Integration**:
  - Uses `wagmi` to connect to users' Web3 wallets (e.g., MetaMask).
  - Displays the user's current BNB balance on the Binance Smart Chain (BSC).
  - Includes a feature to prompt the user to sign a message to verify their address.

## Tech Stack

- **Framework**: Next.js (with App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: React Query (`@tanstack/react-query`) for REST API calls.
- **Real-Time Data**: Native WebSocket API for live price streaming.
- **Charting**: ApexCharts
- **Web3/Wallet**: `wagmi`

## Getting Started

### 1. Prerequisites

- Node.js (v18 or later)
- A package manager (npm, yarn, or pnpm)
- A Web3 wallet browser extension, such as [MetaMask](https://metamask.io/).

### 2. Environment Setup

This project requires an API key from a node provider for a reliable connection to the blockchain to fetch wallet balances.

1.  **Get an Alchemy API Key**:

    - Go to [Alchemy.com](https://www.alchemy.com) and create a free account.
    - Create a new app for the **BNB Smart Chain** on the **BNB Mainnet**.
    - From your app's dashboard, copy the **HTTPS** API Key URL.

2.  **Create an Environment File**:
    - In the root directory of the project, create a file named `.env.local`.
    - Add your Alchemy URL to this file:
      ```
      NEXT_PUBLIC_ALCHEMY_RPC_URL=[https://bsc-mainnet.g.alchemy.com/v2/your-api-key-here](https://bsc-mainnet.g.alchemy.com/v2/your-api-key-here)
      ```

### 3. Installation and Running the Server

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
