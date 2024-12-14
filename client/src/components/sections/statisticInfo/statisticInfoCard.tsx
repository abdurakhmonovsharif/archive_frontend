import {AnimatedCounter} from "./AnimatedCounter.tsx";
import {Card} from "antd";

interface StatisticInfoCardProps {
    count: number,
    label: string,
}

export const StatisticInfoCard = ({count, label}: StatisticInfoCardProps) => {
    return <Card className="relative overflow-hidden p-1">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-archive_primary"/>
        <div className="space-y-3">
            <p className="xl:text-4xl text-2xl font-bold text-gray-900 tracking-tight">
                <AnimatedCounter value={count}/>
            </p>
            <div className="space-y-1">
                <h2 className="xl:text-2xl text-xl font-semibold text-gray-800">
                    {label}
                </h2>
            </div>
        </div>
    </Card>
}