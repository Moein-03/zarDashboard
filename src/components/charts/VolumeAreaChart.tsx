"use client"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { trade_volumeType } from "@/lib/Types";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { useState, useEffect } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

interface areaChartDataType {
     date: string
     totalVolume: number
}

const chartConfig = {
     totalVolume: {
          label: "حجم معاملات",
          color: "var(--chart-1)",
     }
} satisfies ChartConfig

const VolumeAreaChart = ({ trade_volumeState, goodsContentName }: { trade_volumeState: trade_volumeType[], goodsContentName: string }) => {
     const [areaChartData, setAreaChartData] = useState<areaChartDataType[]>([]);
     
     useEffect(() => {
          if (trade_volumeState.length > 0) {
               const formatted = trade_volumeState.map(trade_volume => ({
                    date: trade_volume.date,
                    totalVolume: trade_volume.totalVolume,
               }));
               setAreaChartData(formatted);
          }
     }, [trade_volumeState]);

     return (
          <Card className="border-[1.7px] h-full">
               <CardHeader>
                    <CardTitle className="font-thin">روند حجم معاملات در سه روز گذشته</CardTitle>
               </CardHeader>
               <CardContent className="mt-4">
                    <ChartContainer config={chartConfig}>
                         <AreaChart
                              accessibilityLayer
                              data={areaChartData}
                              margin={{
                                   left: 8,
                                   right: 8,
                              }}
                         >
                              <CartesianGrid vertical={false} />
                              <XAxis
                                   dataKey="date"
                                   tickLine={true}
                                   axisLine={true}
                                   tickMargin={8}
                                   tickFormatter={(value) => value.slice(8, 10)}
                              />
                              <ChartTooltip
                                   cursor={true}
                                   content={<ChartTooltipContent indicator="dot" className="w-15 text-[0.64rem]"/>}
                              />
                              <Area
                                   dataKey="totalVolume"
                                   type="linear"
                                   fill="var(--chart-1)"
                                   fillOpacity={0.7}
                                   stroke="var(--chart-1)"
                              />
                         </AreaChart>
                    </ChartContainer>
               </CardContent>
          </Card>
     )
}

export default VolumeAreaChart