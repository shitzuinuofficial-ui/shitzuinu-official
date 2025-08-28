// ticker.js
const tickerContainer = document.getElementById("coingecko-ticker");

async function fetchTopCoins() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    const coins = await response.json();

    // Clear existing content
    tickerContainer.innerHTML = "";

    // Create <span> for each coin
    coins.forEach((coin) => {
      const span = document.createElement("span");
      span.textContent = `${coin.name} $${coin.current_price.toLocaleString()}`;
      tickerContainer.appendChild(span);
    });
  } catch (error) {
    console.error("Error fetching CoinGecko data:", error);
    tickerContainer.innerHTML = "<span>Unable to load crypto data</span>";
  }
}

// Initial fetch
fetchTopCoins();

// Refresh every 5 minutes
setInterval(fetchTopCoins, 300000);