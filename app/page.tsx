import SearchInput from "@/components/SearchInput";
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
		</main>
	);
}
