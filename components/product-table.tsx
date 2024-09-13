"use client";

import { Button } from "@/components/ui/button";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useState } from "react";

// Mock product data
const products = [
	{
		id: 1,
		name: "Product A",
		price: 19.99,
		quantity: 50,
		sku: "SKU001",
		status: "In Stock",
	},
	{
		id: 2,
		name: "Product B",
		price: 29.99,
		quantity: 30,
		sku: "SKU002",
		status: "Low Stock",
	},
	{
		id: 3,
		name: "Product C",
		price: 39.99,
		quantity: 0,
		sku: "SKU003",
		status: "Out of Stock",
	},
	{
		id: 4,
		name: "Product D",
		price: 49.99,
		quantity: 100,
		sku: "SKU004",
		status: "In Stock",
	},
	{
		id: 5,
		name: "Product E",
		price: 59.99,
		quantity: 20,
		sku: "SKU005",
		status: "Low Stock",
	},
	// Add more products as needed
];

export function ProductTableComponent() {
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 5;
	const totalPages = Math.ceil(products.length / productsPerPage);

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	const handleStatusChange = (productId: number, newStatus: string) => {
		console.log(`Updating status of product ${productId} to ${newStatus}`);
		// Here you would typically update the status in your state or backend
	};

	const handleUpdate = (productId: number) => {
		console.log(`Updating product ${productId}`);
		// Here you would typically handle the update action
	};

	return (
		<div className="space-y-4 w-full max-w-[900px]">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>ID</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Price</TableHead>
						<TableHead>Quantity</TableHead>
						<TableHead>SKU</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{currentProducts.map((product) => (
						<TableRow key={product.id}>
							<TableCell>{product.id}</TableCell>
							<TableCell>{product.name}</TableCell>
							<TableCell>${product.price.toFixed(2)}</TableCell>
							<TableCell>{product.quantity}</TableCell>
							<TableCell>{product.sku}</TableCell>
							<TableCell>
								<Select
									onValueChange={(value) =>
										handleStatusChange(product.id, value)
									}
									defaultValue={product.status}>
									<SelectTrigger className="w-[120px]">
										<SelectValue
											placeholder={product.status}
										/>
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="In Stock">
											In Stock
										</SelectItem>
										<SelectItem value="Low Stock">
											Low Stock
										</SelectItem>
										<SelectItem value="Out of Stock">
											Out of Stock
										</SelectItem>
									</SelectContent>
								</Select>
							</TableCell>
							<TableCell>
								<Button
									onClick={() => handleUpdate(product.id)}>
									Update
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							onClick={() =>
								setCurrentPage((prev) => Math.max(prev - 1, 1))
							}
							className={
								currentPage === 1
									? "pointer-events-none opacity-50"
									: ""
							}
						/>
					</PaginationItem>
					{[...Array(totalPages)].map((_, index) => (
						<PaginationItem key={index}>
							<PaginationLink
								onClick={() => setCurrentPage(index + 1)}
								isActive={currentPage === index + 1}>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					))}
					<PaginationItem>
						<PaginationNext
							onClick={() =>
								setCurrentPage((prev) =>
									Math.min(prev + 1, totalPages)
								)
							}
							className={
								currentPage === totalPages
									? "pointer-events-none opacity-50"
									: ""
							}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}
