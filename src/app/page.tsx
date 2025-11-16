import { AppWindowIcon, CodeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { GetGoods } from "@/lib/Actions";
import { TwoCharts } from "@/components/charts/TwoCharts"
import { ChartsTab } from "@/components/charts/ChartsTab";

export default async function Home() {
  
  const goodsData = await GetGoods();

  return (
    <main className="w-[99.8vw] md:w-[98.8vw] min-h-[88.1vh] pt-[17vh] pb-10 z-2">
      <div className="flex justify-center w-full flex-col gap-6">
        <Tabs className="px-7 md:px-10" defaultValue="charts" dir="rtl">
          <TabsList className="bg-chart-axis dark:bg-chart-grid">
            <TabsTrigger className="border-border border-[1.4px] active:border-[2px] mx-1 text-background dark:text-background" value="charts">نمودار ها</TabsTrigger>
            <TabsTrigger className="border-border border-[1.4px] active:border-[2px] mx-1 text-background dark:text-background" value="posts">پست ها</TabsTrigger>
            <TabsTrigger className="border-border border-[1.4px] active:border-[2px] mx-1 text-background dark:text-background" value="goods">کالا ها</TabsTrigger>
          </TabsList>
          <TabsContent value="charts">
            <Card className="border-[5px] dark:border-[1.7px] bg-primary text-background dark:text-secondary-foreground">
              <CardHeader>
                <CardTitle className="font-thin">نمودار ها</CardTitle>
                <CardDescription className="text-background dark:text-card-foreground">
                  در این بخش نمودارهای هر کالا نمایش داده شده است.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="flex flex-col gap-4">
                  <TwoCharts goodsData={goodsData}/>
                  <ChartsTab goodsData={goodsData}/>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="posts">
            <Card className="border-[1.7px] bg-primary text-background dark:text-secondary-foreground">
              <CardHeader>
                <CardTitle className="font-thin">پست ها</CardTitle>
                <CardDescription className="text-background dark:text-card-foreground">
                  آخرین پست های تحلیلی
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="flex flex-col gap-2">
                  
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="goods">
            <Card className="border-[1.7px] bg-primary text-background dark:text-secondary-foreground">
              <CardHeader>
                <CardTitle className="font-thin">کالا ها</CardTitle>
                <CardDescription className="text-background dark:text-card-foreground">
                  Change your password here. After saving, you&apos;ll be logged
                  out.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-current">Current password</Label>
                  
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">New password</Label>
                  
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
