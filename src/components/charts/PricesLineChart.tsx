"use Client"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { goods_pricesType } from "@/lib/Types";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Line, LineChart, CartesianGrid, XAxis } from "recharts";
import { useState, useEffect } from "react";

interface lineChartDataType {
     date: string
     closePrice: number
}

const chartConfig = {
     closePrice: {
          label: "قیمت بسته شده",
          color: "var(--chart-1)",
     }
} satisfies ChartConfig

const PricesLineChart = ({ goods_pricesState, goodsContentName }: { goods_pricesState: goods_pricesType[], goodsContentName: string }) => {
     const [lineChartData, setLineChartData] = useState<lineChartDataType[]>([]);

     useEffect(() => {
          if (goods_pricesState.length > 0) {
               const formatted = goods_pricesState.map(goods_price => ({
                    date: goods_price.date,
                    closePrice: goods_price.closePrice,
               }));
               setLineChartData(formatted);
          }
     }, [goods_pricesState]);


     return (
          <Card className="border-[1.7px] h-full">
               <CardHeader>
                    <CardTitle className="font-thin">نمودار روند قیمت در سه روز گذشته به تومان</CardTitle>
               </CardHeader>
               <CardContent className="mt-4">
                    <ChartContainer config={chartConfig}>
                         <LineChart
                              accessibilityLayer
                              data={lineChartData}
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
                                   content={<ChartTooltipContent indicator="dot" className="w-10 text-[0.6rem] h-13"/>}
                              />
                              <Line
                                   dataKey="closePrice"
                                   type="linear"
                                   fill="var(--chart-1)"
                                   fillOpacity={0.7}
                                   stroke="var(--chart-1)"
                              />
                         </LineChart>
                    </ChartContainer>
               </CardContent>
          </Card>
     )
}

export default PricesLineChart