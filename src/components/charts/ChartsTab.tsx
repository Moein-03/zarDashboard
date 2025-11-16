"use client"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { goodsType } from "@/lib/Types";
import { useState, useEffect } from "react";
import { useGoods_prices, useTrade_volume, useAnalyst_scores } from "@/store/chartsStore";
import { Loader } from "lucide-react";
import { Card } from "../ui/card";
import PricesLineChart from "./PricesLineChart";
import VolumeAreaChart from "./VolumeAreaChart";
import ScoresRadarChart from "./ScoresRadarChart";
import Motion from "@/lib/Motion";

export const ChartsTab = ({ goodsData }: { goodsData: goodsType[] }) => {
     const [goodsContentId, setGoodsContentId] = useState<string>(goodsData[0].goodsId);
     const [goodsContentName, setGoodsContentName] = useState<string>(goodsData[0].goodsName);
     const { goods_pricesState, goods_pricesLoading, GetGoods_pricesFunc } = useGoods_prices();
     const { trade_volumeState, trade_volumeLoading, GetTrade_volumeFunc } = useTrade_volume();
     const { analyst_scoresState, analyst_scoresLoading, GetAnalyst_scoresFunc } = useAnalyst_scores();


     const changeContent = (goodsId: string, goodsName: string) => {
          setGoodsContentId(goodsId);
          setGoodsContentName(goodsName);
     }

     useEffect(() => {
          if (goodsContentId) {
               GetGoods_pricesFunc(goodsContentId);
               GetTrade_volumeFunc(goodsContentId);
               GetAnalyst_scoresFunc(goodsContentId);
          }
     }, [goodsContentId]);

     return (
          <Tabs value={goodsContentName} onValueChange={value => {
               const selectedGoods = goodsData.find(goods => goods.goodsName === value);
               if (selectedGoods) {
                    changeContent(selectedGoods.goodsId, value);
               }
          }} dir="rtl">
               <TabsList className="bg-chart-axis dark:bg-chart-grid">
                    {goodsData.map((goods: goodsType) => (
                         <TabsTrigger className="border-border border-[1.4px] active:border-[2px] mx-1 text-background dark:text-background" value={goods.goodsName} key={goods.goodsId}>{goods.goodsName}</TabsTrigger>
                    ))}
               </TabsList>
               <TabsContent value={goodsContentName} forceMount={true} className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-2">
                    {goods_pricesLoading ? (<Card className="border-[1.7px] justify-center items-center"><Loader className="text-secondary dark:text-foreground"/></Card>) : (<Motion index={3}><PricesLineChart goods_pricesState={goods_pricesState} goodsContentName={goodsContentName}/></Motion>)}
                    {trade_volumeLoading ? (<Card className="border-[1.7px] justify-center items-center"><Loader className="text-secondary dark:text-foreground"/></Card>) : (<Motion index={4}><VolumeAreaChart trade_volumeState={trade_volumeState} goodsContentName={goodsContentName}/></Motion>)}
                    {analyst_scoresLoading ? (<Card className="border-[1.7px] justify-center items-center"><Loader className="text-secondary dark:text-foreground"/></Card>) : (<Motion index={5}><ScoresRadarChart analyst_scoresState={analyst_scoresState} goodsContentName={goodsContentName}/></Motion>)}
               </TabsContent>
          </Tabs>
     )
}