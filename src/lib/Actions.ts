"use cache"

const usersApi = "https://my-json-server.typicode.com/Moein-03/zarDashboard-usersToGoods-api/users";
const postsApi = "https://my-json-server.typicode.com/Moein-03/zarDashboard-usersToGoods-api/posts";
const commentsApi = "https://my-json-server.typicode.com/Moein-03/zarDashboard-usersToGoods-api/comments";
const goodsApi = "https://my-json-server.typicode.com/Moein-03/zarDashboard-usersToGoods-api/goods";
// اکشن های post و put و patch و delete نوشته شود برای ریپوزیتوی مربوط به users و goods
export const GetUsers = async () => {
     try {
          const res = await fetch(usersApi, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetUser_ById = async (userId: string) => {
     try {
          const res = await fetch(`${usersApi}?userId=${userId}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetPosts = async () => {
     try {
          const res = await fetch(postsApi, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetPost_BySearch = async (searchQuery: string) => {
     try {
          const res = await fetch(`${postsApi}?postTitle_like=${searchQuery}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetPost_ById = async (postId: string) => {
     try {
          const res = await fetch(`${postsApi}?postId=${postId}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetPosts_ByUserId = async (userId_fk: string) => {
     try {
          const res = await fetch(`${postsApi}?userId_fk=${userId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const Getcomments_ByPostId = async (postId_fk: string) => {
     try {
          const res = await fetch(`${commentsApi}?postId_fk=${postId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const Getcomments_ByUserId = async (userId_fk: string) => {
     try {
          const res = await fetch(`${commentsApi}?userId_fk=${userId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetGoods = async () => {
     try {
          const res = await fetch(goodsApi, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetGoods_ById = async (goodsId: string) => {
     try {
          const res = await fetch(`${goodsApi}?goodsId=${goodsId}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

const goods_pricesApi = "https://my-json-server.typicode.com/Moein-03/zarDashboard-pricesToScores-api/goods_prices";
const price_comparisonApi = "https://my-json-server.typicode.com/Moein-03/zarDashboard-pricesToScores-api/price_comparison";
const market_shareApi = "https://my-json-server.typicode.com/Moein-03/zarDashboard-pricesToScores-api/market_share";
const trade_volumeApi = "https://my-json-server.typicode.com/Moein-03/zarDashboard-pricesToScores-api/trade_volume";
const analyst_scoresApi = "https://my-json-server.typicode.com/Moein-03/zarDashboard-pricesToScores-api/analyst_scores";

export const GetGoods_prices = async (goodsId_fk: string) => {
     try {
          const res = await fetch(`${goods_pricesApi}?goodsId_fk=${goodsId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetGoods_prices_ById = async (goods_priceId: string ,goodsId_fk: string) => {
     try {
          const res = await fetch(`${goods_pricesApi}?goods_priceId=${goods_priceId}&goodsId_fk=${goodsId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const Get_All_Price_comparison = async () => {
     try {
          const res = await fetch(price_comparisonApi, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetPrice_comparison = async (goodsId_fk: string) => {
     try {
          const res = await fetch(`${price_comparisonApi}?goodsId_fk=${goodsId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetPrice_comparison_ById = async (price_comparisonId: string ,goodsId_fk: string) => {
     try {
          const res = await fetch(`${price_comparisonApi}?price_comparisonId=${price_comparisonId}&goodsId_fk=${goodsId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const Get_All_Market_share = async () => {
     try {
          const res = await fetch(market_shareApi, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetMarket_share = async (goodsId_fk: string) => {
     try {
          const res = await fetch(`${market_shareApi}?goodsId_fk=${goodsId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetMarket_share_ById = async (market_shareId: string ,goodsId_fk: string) => {
     try {
          const res = await fetch(`${market_shareApi}?market_shareId=${market_shareId}&goodsId_fk=${goodsId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetTrade_volume = async (goodsId_fk: string) => {
     try {
          const res = await fetch(`${trade_volumeApi}?goodsId_fk=${goodsId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetTrade_volume_ById = async (trade_volumeId: string ,goodsId_fk: string) => {
     try {
          const res = await fetch(`${trade_volumeApi}?trade_volumeId=${trade_volumeId}&goodsId_fk=${goodsId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetAnalyst_scores = async (goodsId_fk: string) => {
     try {
          const res = await fetch(`${analyst_scoresApi}?goodsId_fk=${goodsId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}

export const GetAnalyst_scores_ById = async (analyst_scoreId: string ,goodsId_fk: string) => {
     try {
          const res = await fetch(`${analyst_scoresApi}?analyst_scoreId=${analyst_scoreId}&goodsId_fk=${goodsId_fk}`, {
               method: 'GET',
               headers: { 'Content-Type': 'application/json' },
          });
          return res.json();
     } catch (err) {
          console.log(`${err}`);
     }
}