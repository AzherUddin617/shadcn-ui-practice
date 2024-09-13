"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { useState } from "react";

export function AlertDemoComponent() {
	const [showAlert, setShowAlert] = useState(false);

	const handleShowAlert = () => {
		setShowAlert(true);
		// Hide the alert after 3 seconds
		setTimeout(() => setShowAlert(false), 3000);
	};

	return (
		<div className="relative h-20">
			<Button onClick={handleShowAlert} className="absolute top-4 left-4">
				Show Alert
			</Button>
			{showAlert && (
				<div className="fixed bottom-4 right-4 z-50 max-w-sm">
					<Alert>
						<Terminal className="h-4 w-4" />
						<AlertTitle>Heads up!</AlertTitle>
						<AlertDescription>
							You can add components to your app using the cli.
						</AlertDescription>
					</Alert>
				</div>
			)}
		</div>
	);
}
