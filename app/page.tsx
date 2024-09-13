import { AlertDemoComponent } from "@/components/alert-demo";
import { CalendarDemo } from "@/components/calendar-demo";
import { ProductTableComponent } from "@/components/product-table";
import ProfileForm from "@/components/profile-form";
import SearchInput from "@/components/SearchInput";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Eye, Terminal } from "lucide-react";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col gap-2 justify-center items-center py-10">
			<form role="search">
				<SearchInput />
			</form>

			<Button>Default</Button>
			<Button size="sm">Small</Button>
			<Button size="lg">Large</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="link">Link</Button>
			<Button size="icon" className="rounded-full">
				<Eye />
			</Button>

			<Accordion
				type="single"
				collapsible
				className="w-full max-w-md p-4 border rounded-lg shadow-md">
				<AccordionItem value="item-1">
					<AccordionTrigger>Is it accessible?</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>Is it responsive?</AccordionTrigger>
					<AccordionContent>
						Yes. It is responsive by default.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>Is it customizable?</AccordionTrigger>
					<AccordionContent>
						Yes. It is customizable with CSS variables.
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Alert>
				<Terminal className="h-4 w-4" />
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>
					You can add components and dependencies to your app using
					the cli.
				</AlertDescription>
			</Alert>

			<AlertDemoComponent />

			<CalendarDemo />

			<ProfileForm />

			<ProductTableComponent />
		</main>
	);
}
