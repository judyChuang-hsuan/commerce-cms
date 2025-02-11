import { lazy, ReactNode } from 'react'
import { ErrorBoundary } from '@/component/error-boundary.tsx'

type CommonProps = {
	children: ReactNode
}

const LazyError404 = lazy(() => import('../page/404.tsx'))

function RouteGuard({ children }: CommonProps) {
	const hasPermission = true
	return (
		<ErrorBoundary.Route>{hasPermission ? children : <LazyError404 />}</ErrorBoundary.Route>
	)
}

export { RouteGuard }
