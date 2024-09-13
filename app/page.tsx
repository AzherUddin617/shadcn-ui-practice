import SearchInput from "@/components/SearchInput";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export default function Home() {
	return (
		<main className="h-screen flex flex-col gap-2 justify-center items-center">
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
		</main>
	);
}
