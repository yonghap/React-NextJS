'use client';

import './globals.css';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ko">
		<body>
			<di>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</di>
		</body>
		</html>
	);
}