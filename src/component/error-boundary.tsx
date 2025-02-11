import { ReactNode } from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import { BaseError } from './page/error.tsx'

class ErrorBoundary {
	static Route({ children }: { children: ReactNode }) {
		return (
			<ReactErrorBoundary fallbackRender={() => BaseError({ code: 500 })}>
				{children}
			</ReactErrorBoundary>
		)
	}
}

export { ErrorBoundary }
