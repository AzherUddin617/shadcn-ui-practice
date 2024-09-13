"use client";

import { addDays, format, setMinutes, startOfMinute } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function CalendarDemo() {
	const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
		from: startOfMinute(new Date()),
		to: startOfMinute(addDays(new Date(), 7)),
	});
	const [startTime, setStartTime] = React.useState({
		hour: "00",
		minute: "00",
	});
	const [endTime, setEndTime] = React.useState({ hour: "23", minute: "59" });

	const handleTimeChange = (
		type: "start" | "end",
		field: "hour" | "minute",
		value: string
	) => {
		const setTime = type === "start" ? setStartTime : setEndTime;
		setTime((prev) => ({ ...prev, [field]: value.padStart(2, "0") }));
	};

	const formatDateRange = () => {
		if (!dateRange?.from) return "Select date range";
		const fromDate = setMinutes(
			setMinutes(new Date(dateRange.from), parseInt(startTime.minute)),
			parseInt(startTime.hour) * 60
		);

		const toDate = dateRange.to
			? setMinutes(
					setMinutes(
						new Date(dateRange.to),
						parseInt(endTime.minute)
					),
					parseInt(endTime.hour) * 60
			  )
			: fromDate;

		if (dateRange.to) {
			return `${format(fromDate, "MMM d, yyyy, h:mm a")} - ${format(
				toDate,
				"MMM d, yyyy, h:mm a"
			)}`;
		} else {
			return format(fromDate, "MMM d, yyyy, h:mm a");
		}
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					id="date"
					variant={"outline"}
					className={cn(
						"min-w-[300px] justify-start text-left font-normal",
						!dateRange && "text-muted-foreground"
					)}>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{formatDateRange()}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<div className="space-y-4 p-4">
					<Calendar
						mode="range"
						selected={dateRange}
						onSelect={setDateRange}
						numberOfMonths={2}
						initialFocus
					/>
					<div className="flex space-x-4">
						<div className="flex-1 space-y-2">
							<Label htmlFor="start-time">Start Time</Label>
							<div className="flex space-x-2">
								<Input
									id="start-hour"
									type="number"
									min="0"
									max="23"
									value={startTime.hour}
									onChange={(e) =>
										handleTimeChange(
											"start",
											"hour",
											e.target.value
										)
									}
									className="w-[60px]"
								/>
								<Input
									id="start-minute"
									type="number"
									min="0"
									max="59"
									value={startTime.minute}
									onChange={(e) =>
										handleTimeChange(
											"start",
											"minute",
											e.target.value
										)
									}
									className="w-[60px]"
								/>
							</div>
						</div>
						<div className="flex-1 space-y-2">
							<Label htmlFor="end-time">End Time</Label>
							<div className="flex space-x-2">
								<Input
									id="end-hour"
									type="number"
									min="0"
									max="23"
									value={endTime.hour}
									onChange={(e) =>
										handleTimeChange(
											"end",
											"hour",
											e.target.value
										)
									}
									className="w-[60px]"
								/>
								<Input
									id="end-minute"
									type="number"
									min="0"
									max="59"
									value={endTime.minute}
									onChange={(e) =>
										handleTimeChange(
											"end",
											"minute",
											e.target.value
										)
									}
									className="w-[60px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
