"use client";

import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 0, number: 100 },
  { month: "February", desktop: 50, number: 75 },
  { month: "March", desktop: 44, number: 50 },
  { month: "April", desktop: 80, number: 25 },
  { month: "May", desktop: 95, number: 0 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: " oklch(0.577 0.245 27.325)",
  },
  mobile: {
    label: "Mobile",
    color: " oklch(0.577 0.245 27.325)",
  },
} satisfies ChartConfig;

export function SafeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Analytics </CardTitle>
      </CardHeader>
      <CardContent className=" h-[200px] ">
        <ChartContainer className=" " config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis
              dataKey="number"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={20}
              //   tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 3 months
        </div>
      </CardFooter>
    </Card>
  );
}
