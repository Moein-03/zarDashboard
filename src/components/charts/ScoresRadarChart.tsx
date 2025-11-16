import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { analyst_scoresType } from "@/lib/Types"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

const chartConfig = {
     stability: {
          label: "نرخ ثبات",
          color: "var(--chart-1)",
     },
     growthPotential: {
          label: "نرخ ظرفیت رشد",
          color: "var(--chart-1)",
     },
     riskLevel: {
          label: "نرخ ریسک",
          color: "var(--chart-1)",
     },
     recommendationScore: {
          label: "امتیاز پیشنهادی",
          color: "var(--chart-1)",
     }
} satisfies ChartConfig;
const ScoresRadarChart = ({ analyst_scoresState, goodsContentName }: { analyst_scoresState: analyst_scoresType[], goodsContentName:string }) => {

     const fields = ["stability", "growthPotential", "riskLevel", "recommendationScore"] as const;

     const radarChartData = fields.map(field => {
          const total = analyst_scoresState.reduce((sum, item) => sum + item[field], 0);
          const avg = total / analyst_scoresState.length;
          return { fieldName: field, value: avg };
     });

     return (
          <Card className="border-[1.7px]">
               <CardHeader>
                    <CardTitle className="font-thin">میانگین تحلیل عملکرد هر کالا با امتیازدهی چندبعدی</CardTitle>
               </CardHeader>
               <CardContent className="mt-[-35px] mb-[-15px]">
                        <ChartContainer
                              config={chartConfig}
                              className="min-h-[100px] lg:h-[250px] w-full aspect-square mx-auto"
                         >
                              <RadarChart data={radarChartData} startAngle={60} endAngle={410}>
                                   <ChartTooltip
                                        cursor={true}
                                        content={<ChartTooltipContent nameKey="fieldName" hideLabel className="w-20"/>}
                                   />
                                   <PolarGrid gridType="circle"/>
                                   <PolarAngleAxis dataKey="fieldName"
                                        tick={(props) => (
                                             <text
                                                  {...props}
                                                  dy={props.payload.index === 0 ? 1 : props.payload.index === 1 ? 5 : props.payload.index === 2 ? 6 : props.payload.index === 3 ? 3 : 0}
                                                  dx={props.payload.index === 0 ? 15 : props.payload.index === 1 ? 29 : props.payload.index === 2 ? -19 : props.payload.index === 3 ? -31 : 0}
                                                  className="dark:text-card-foreground"
                                                  textAnchor="middle"
                                                  fontSize={10}
                                                  fill="var(--card-foreground)"
                                                  dir="rtl"
                                             >
                                                  {chartConfig[props.payload.value as keyof typeof chartConfig]?.label || props.payload.value}
                                             </text>
                                        )}
                                        
                                   />
                                   <Radar
                                        dataKey="value"
                                        fill="var(--chart-1)"
                                        fillOpacity={0.8}
                                        dot={{
                                             r: 4,
                                             fillOpacity: 1,
                                        }}
                                   />
                              </RadarChart>
                         </ChartContainer>
               </CardContent>
          </Card>
     )
}

export default ScoresRadarChart