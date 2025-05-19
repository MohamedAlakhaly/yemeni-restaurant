import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Chart,
  ChartArea,
  ChartAxisX,
  ChartAxisY,
  ChartContainer,
  ChartDot,
  ChartGrid,
  ChartLine,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { ArrowDown, ArrowUp, BadgeEuro, Hamburger, Hand, MoreHorizontal, NotepadText, Users } from "lucide-react";
import CustomCardForAdminPanel from "@/components/card/CustomCardForAdminPanel";
import { Arrow } from "@radix-ui/react-dropdown-menu";

export default function AdminPanel() {
  // Sample data for the line chart
  const data = [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 50 },
    { month: "Mar", value: 40 },
    { month: "Apr", value: 45 },
    { month: "May", value: 30 },
    { month: "Jun", value: 35 },
    { month: "Jul", value: 60 },
    { month: "Aug", value: 40 },
    { month: "Sep", value: 45 },
    { month: "Oct", value: 40 },
    { month: "Nov", value: 40 },
    { month: "Dec", value: 30 }
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center border-b px-6">
          <SidebarTrigger />
          <h1 className="mx-4 text-xl font-semibold">Hello, Admin</h1>
          <Hand color="orange" />
        </header>
        <main className="p-6">
          {/* //! Metric Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">

            {/* //? Customers Card */}
            <CustomCardForAdminPanel
              cardTitle="Customers"
              cardIcon={Users}
              cardContent="1,456"
              cardSubContent="+6.5% Since last week"
              cardPrimaryColor={'bg-blue-900'}
              cardSubContentColor={'text-green-500'}
              cardSubTitleIcon={ArrowUp}
            />

            {/* //? Revenue Card */}
            <CustomCardForAdminPanel
              cardTitle="Revenue"
              cardIcon={BadgeEuro}
              cardContent="$3,345"
              cardSubContent="-0.10% Since last week"
              cardPrimaryColor={'bg-green-900'}
              cardSubContentColor={'text-red-500'}
              cardSubTitleIcon={ArrowDown}
            />
          
            {/* //? Conversion Rate Card */}
            <CustomCardForAdminPanel
              cardTitle="Today/Orders"
              cardIcon={Hamburger}
              cardContent="25"
              cardSubContent="Up to yesterday"
              cardPrimaryColor={'bg-yellow-900'}
              cardSubContentColor={'text-green-500'}
              cardSubTitleIcon={ArrowUp}
            />

            {/* //? Invoices Card */}
            <CustomCardForAdminPanel
              cardTitle="Invoices"
              cardIcon={NotepadText}
              cardContent="1,135"
              cardSubContent="+1.5% Since last week"
              cardPrimaryColor={'bg-red-900'}
              cardSubContentColor={'text-green-500'}
              cardSubTitleIcon={ArrowUp}
            />
            
          </div>

          {/* //? Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Invoice Statistics Chart */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base">Invoice Statistics</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="relative h-60 w-60">
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-3xl font-bold">1,135</div>
                    <div className="text-sm text-muted-foreground">
                      Invoices
                    </div>
                  </div>
                  <svg
                    viewBox="0 0 100 100"
                    className="h-full w-full -rotate-90"
                  >
                    {/* Blue segment - 60% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#4263EB"
                      strokeWidth="20"
                      strokeDasharray={`${0.6 * 251.2} ${251.2}`}
                      strokeDashoffset="0"
                    />
                    {/* Dark blue segment - 27.4% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#1E2A3A"
                      strokeWidth="20"
                      strokeDasharray={`${0.274 * 251.2} ${251.2}`}
                      strokeDashoffset={`${-0.6 * 251.2}`}
                    />
                    {/* Light blue segment - 12.6% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#E2E8F0"
                      strokeWidth="20"
                      strokeDasharray={`${0.126 * 251.2} ${251.2}`}
                      strokeDashoffset={`${-(0.6 + 0.274) * 251.2}`}
                    />
                  </svg>
                </div>
              </CardContent>
              <div className="px-6 pb-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-[#4263EB]" />
                    <span className="text-sm font-medium">Total Paid</span>
                  </div>
                  <div className="text-xl font-bold mt-1">234</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-[#1E2A3A]" />
                    <span className="text-sm font-medium">Total Overdue</span>
                  </div>
                  <div className="text-xl font-bold mt-1">514</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-[#E2E8F0]" />
                    <span className="text-sm font-medium">Total Unpaid</span>
                  </div>
                  <div className="text-xl font-bold mt-1">345</div>
                </div>
              </div>
            </Card>

            {/* Sales Analytics Chart */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base">Sales Analytics</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="pt-4">
                <Chart
                  height={300}
                  series={[
                    {
                      name: "Sales",
                      data: data.map(item => item.value)
                    }
                  ]}
                  categories={data.map(item => item.month)}
                >
                  <ChartContainer>
                    <ChartGrid />
                    <ChartAxisX />
                    <ChartAxisY />
                    <ChartLine strokeWidth={3} smooth color="#4263EB" />
                    <ChartArea color="#4263EB" opacity={0.1} />
                    {data.map((item, index) =>
                      <ChartDot
                        key={index}
                        x={index}
                        y={item.value}
                        color="#4263EB"
                        size={6}
                      />
                    )}
                    <ChartTooltip>
                      {({ series, seriesIndex, dataPointIndex }) =>
                        <ChartTooltipContent>
                          <div className="bg-[#1E2A3A] text-white px-3 py-2 rounded-md">
                            <div className="text-xs">
                              {data[dataPointIndex].month}
                            </div>
                            <div className="text-sm font-bold">
                              ${series[seriesIndex][dataPointIndex]}
                            </div>
                          </div>
                        </ChartTooltipContent>}
                    </ChartTooltip>
                  </ChartContainer>
                </Chart>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
