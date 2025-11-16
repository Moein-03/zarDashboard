import { create } from 'zustand';
import { goods_pricesType, price_comparisonType, market_shareType, trade_volumeType, analyst_scoresType } from '@/lib/Types';
import { GetGoods_prices, Get_All_Price_comparison, GetPrice_comparison, Get_All_Market_share, GetMarket_share, GetTrade_volume, GetAnalyst_scores } from '@/lib/Actions';

interface useGoods_pricesType {
     goods_pricesState: goods_pricesType[] | [];
     goods_pricesLoading: boolean
     GetGoods_pricesFunc: (goodsId_fk: string) => Promise<void>
}

export const useGoods_prices = create<useGoods_pricesType>(set => ({
     goods_pricesState: [],
     goods_pricesLoading: false,
     GetGoods_pricesFunc: async goodsId_fk => { 
          try {
               set({ goods_pricesLoading: true });
               const data = await GetGoods_prices(goodsId_fk);
               set({ goods_pricesState: data, goods_pricesLoading: false });
          } catch (err) {
               set({ goods_pricesLoading: false });
               throw new Error(`${err}`);
          } finally {
               set({ goods_pricesLoading: false });
          }
     }
}));

interface usePrice_comparisonType {
     price_comparisonState: price_comparisonType[] | [];
     price_comparisonLoading: boolean
     GetPrice_comparisonFunc: (goodsId_fk: string) => Promise<void>
     Get_All_Price_comparisonFunc: () => Promise<void>
}

export const usePrice_comparison = create<usePrice_comparisonType>(set => ({
     price_comparisonState: [],
     price_comparisonLoading: false,
     GetPrice_comparisonFunc: async goodsId_fk => { 
          try {
               set({ price_comparisonLoading: true });
               const data = await GetPrice_comparison(goodsId_fk);
               set({ price_comparisonState: data, price_comparisonLoading: false });
          } catch (err) {
               set({ price_comparisonLoading: false });
               throw new Error(`${err}`);
          } finally {
               set({ price_comparisonLoading: false });
          }
     },
     Get_All_Price_comparisonFunc: async () => { 
          try {
               set({ price_comparisonLoading: true });
               const data = await Get_All_Price_comparison();
               set({ price_comparisonState: data, price_comparisonLoading: false });
          } catch (err) {
               set({ price_comparisonLoading: false });
               throw new Error(`${err}`);
          } finally {
               set({ price_comparisonLoading: false });
          }
     }
}));

interface useMarket_shareType {
     market_shareState: market_shareType[] | [];
     market_shareLoading: boolean
     GetMarket_shareFunc: (goodsId_fk: string) => Promise<void>
     Get_All_Market_shareFunc: () => Promise<void>
}

export const useMarket_share = create<useMarket_shareType>(set => ({
     market_shareState: [],
     market_shareLoading: false,
     GetMarket_shareFunc: async goodsId_fk => { 
          try {
               set({ market_shareLoading: true });
               const data = await GetMarket_share(goodsId_fk);
               set({ market_shareState: data, market_shareLoading: false });
          } catch (err) {
               set({ market_shareLoading: false });
               throw new Error(`${err}`);
          } finally {
               set({ market_shareLoading: false });
          }
     },
     Get_All_Market_shareFunc: async () => { 
          try {
               set({ market_shareLoading: true });
               const data = await Get_All_Market_share();
               set({ market_shareState: data, market_shareLoading: false });
          } catch (err) {
               set({ market_shareLoading: false });
               throw new Error(`${err}`);
          } finally {
               set({ market_shareLoading: false });
          }
     },
}));

interface useTrade_volumeType {
     trade_volumeState: trade_volumeType[] | [];
     trade_volumeLoading: boolean
     GetTrade_volumeFunc: (goodsId_fk: string) => Promise<void>
}

export const useTrade_volume = create<useTrade_volumeType>(set => ({
     trade_volumeState: [],
     trade_volumeLoading: false,
     GetTrade_volumeFunc: async goodsId_fk => { 
          try {
               set({ trade_volumeLoading: true });
               const data = await GetTrade_volume(goodsId_fk);
               set({ trade_volumeState: data, trade_volumeLoading: false });
          } catch (err) {
               set({ trade_volumeLoading: false });
               throw new Error(`${err}`);
          } finally {
               set({ trade_volumeLoading: false });
          }
     }
}));

interface useAnalyst_scoresType {
     analyst_scoresState: analyst_scoresType[] | [];
     analyst_scoresLoading: boolean
     GetAnalyst_scoresFunc: (goodsId_fk: string) => Promise<void>
}

export const useAnalyst_scores = create<useAnalyst_scoresType>(set => ({
     analyst_scoresState: [],
     analyst_scoresLoading: false,
     GetAnalyst_scoresFunc: async goodsId_fk => { 
          try {
               set({ analyst_scoresLoading: true });
               const data = await GetAnalyst_scores(goodsId_fk);
               set({ analyst_scoresState: data, analyst_scoresLoading: false });
          } catch (err) {
               set({ analyst_scoresLoading: false });
               throw new Error(`${err}`);
          } finally {
               set({ analyst_scoresLoading: false });
          }
     }
}));