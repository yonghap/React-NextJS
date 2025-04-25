'use client';

import "@/styles/reset.css";
import * as common from "@/styles/common.css";
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ko">
		<body>
		<div className={common.wrap}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</div>
		</body>
		</html>
	);
}