"use client"

import { useEffect, useState } from "react";
import { usePrice_comparison, useMarket_share } from "@/store/chartsStore"
import { Loader } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
     ChartConfig,
     ChartContainer,
     ChartTooltip,
     ChartTooltipContent,
     ChartLegend
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, Pie, PieChart, Cell, LabelList } from "recharts";
import { goodsType } from "@/lib/Types";
import Motion from "@/lib/Motion";

const barChartConfig = {
     zaferan: {
          label: "زعفران",
          color: "var(--chart-1)",
     },
     pesteh: {
          label: "پسته",
          color: "var(--chart-2)",
     },
} satisfies ChartConfig

const PieChartConfig = {
     Iran: {
          label: "ایران",
          color: "var(--chart-3)",
     },
     MiddleEaset: {
          label: "خاورمیانه",
          color: "var(--chart-4)",
     },
     Asia: {
          label: "آسیا",
          color: "var(--chart-5)",
     },
     Europe: {
          label: "اروپا",
          color: "var(--chart-6)",
     }
} satisfies ChartConfig

interface BarChartRow {
     period: string;
     [goodsName: string]: string | number;
}

/* interface PieChartRow {
     market: string;
     [goodsName: string]: string | number;
} */

export const TwoCharts = ({ goodsData }: { goodsData: goodsType[] }) => {
     const { price_comparisonState, price_comparisonLoading, Get_All_Price_comparisonFunc } = usePrice_comparison();
     const { market_shareState, market_shareLoading, Get_All_Market_shareFunc } = useMarket_share();
     const [barChartData, setBarChartData] = useState<BarChartRow[]>([]);
     const [pieChartData, setPieChartData] = useState<{ name: string, value: number }[]>([]);

     useEffect(() => {
          Get_All_Price_comparisonFunc();
          Get_All_Market_shareFunc();
     }, []);

     useEffect(() => {
          if (price_comparisonState.length > 0 && goodsData.length > 0) {
               const grouped = price_comparisonState.reduce<BarChartRow[]>((acc, cur) => {
                    const goods = goodsData.find(g => g.goodsId === cur.goodsId_fk);
                    if (!goods) return acc;

                    const existing = acc.find(item => item.period === cur.period);
                    if (existing) {
                         existing[goods.goodsName] = cur.avgPrice;
                    } else {
                         acc.push({ period: cur.period, [goods.goodsName]: cur.avgPrice });
                    }
                    return acc;
               }, []);

               setBarChartData(grouped);
          }
     }, [price_comparisonState, goodsData]);

     useEffect(() => {
          if (market_shareState.length > 0 && goodsData.length > 0) {
               const grouped = market_shareState.reduce<Record<string, number>>((acc, cur) => {
                    acc[cur.market] = (acc[cur.market] || 0) + cur.sharePercent;
                    return acc;
               }, {});

               const formatted = Object.entries(grouped).map(([market, data]) => ({
                    name: market,
                    value: data
               }));

               setPieChartData(formatted);
          }
     }, [market_shareState, goodsData]);

     return (
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-2">{
               price_comparisonLoading ? (<Card className="border-[1.7px] justify-center items-center"><Loader className="text-secondary dark:text-foreground"/></Card>) : (
                    <Motion index={1}>
                         <Card className="border-[1.7px]">
                              <CardHeader>
                                   <CardTitle className="font-thin">تغییرات قیمت هر مثقال کالا بین کالاهای مختلف به تومان</CardTitle>
                              </CardHeader>
                              <CardContent>
                                   <ChartContainer config={barChartConfig} className="h-[200px] lg:h-[310px] w-full aspect-square mx-auto">
                                        <BarChart accessibilityLayer data={barChartData}>
                                             <CartesianGrid vertical={false} />
                                             <XAxis dataKey="period" tickLine={true} tickMargin={10} axisLine={true}/>
                                             <ChartTooltip cursor={true} content={<ChartTooltipContent indicator="dashed"  />} />
                                             {Object.keys(barChartData[0] || {}).filter(k => k !== "period").map((key, i) => (
                                                  <Bar key={key} dataKey={key} fill={`var(--chart-${i + 1})`} radius={4}/>
                                             ))}
                                        </BarChart>
                                   </ChartContainer>     
                              </CardContent>
                         </Card>
                    </Motion>
               )
          }{
               market_shareLoading ? (<Card className="border-[1.7px] justify-center items-center"><Loader className="text-secondary dark:text-foreground"/></Card>) : (
                    <Motion index={2}>
                         <Card className="border-[1.7px] h-full">
                              <CardHeader>
                                   <CardTitle className="font-thin">درصد سهم هر منطقه در کل بازار</CardTitle>
                              </CardHeader>
                              <CardContent className="mt-[-30px]">
                                   <ChartContainer config={PieChartConfig} className="min-h-[300px] lg:h-[310px] w-full aspect-square mx-auto">
                                        <PieChart>
                                             <ChartTooltip
                                                  content={<ChartTooltipContent nameKey="value" hideLabel />}
                                             />
                                             <Pie
                                                  data={pieChartData}
                                                  dataKey="value"
                                                  nameKey="name"
                                                  cx="50%"
                                                  cy="50%"
                                                  outerRadius="90%"
                                                  labelLine={false}
                                             >
                                                  {pieChartData.map((entry, index) => (
                                                       <Cell key={`cell-${index}`} fill={`var(--chart-${index + 3})`}/>
                                                  ))}
                                             </Pie>
                                             <ChartLegend
                                                  content={() => (
                                                       <ul className="flex flex-wrap justify-center gap-4 mt-2 md:mt-2 mb-[1px] md:mb-[-20px]">
                                                            {pieChartData.map((entry, index) => (
                                                                 <li
                                                                      key={entry.name}
                                                                      className="flex items-center gap-2 text-sm text-muted-foreground"
                                                                 >
                                                                      <span
                                                                           className="inline-block w-3 h-3 rounded-full"
                                                                           style={{ backgroundColor: `var(--chart-${index + 3})` }}
                                                                      />
                                                                      <span className="font-medium text-foreground dark:text-card-foreground">
                                                                           {entry.name}: %{(entry.value).toFixed(1)}
                                                                      </span>
                                                                 </li>
                                                            ))}
                                                       </ul>
                                                  )}
                                             />
                                        </PieChart>
                                   </ChartContainer>
                              </CardContent>
                         </Card>
                    </Motion>
               )
          }</div>
     )
}