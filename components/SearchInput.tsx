import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {
	placeholder?: string;
};

const SearchInput: React.FC<Props> = ({ placeholder }) => {
	return (
		<div className="border rounded-lg flex justify-between items-center">
			<Input
				type="text"
				placeholder={placeholder || "Search"}
				className="border-none"
			/>

			<Button variant="ghost" size="icon">
				<Search />
				<span className="sr-only">Search Button</span>
			</Button>
		</div>
	);
};

export default SearchInput;
