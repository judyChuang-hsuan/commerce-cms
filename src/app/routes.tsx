import {
	Navigate,
	Route,
	Routes as ReactRoutes,
	useLocation,
	useNavigate,
} from 'react-router-dom'
import { lazy, useEffect } from 'react'
import { hookInstances } from '@/constant'
import RouteWrapper from '@/component/route/route-wrapper.tsx'

const Error404 = lazy(() => import('@/component/page/404.tsx'))
const LoginPage = lazy(() => import('@/pages/login'))
const MemberPage = lazy(() => import('@/pages/member'))

function Routes() {
	const location = useLocation()
	hookInstances.navigate = useNavigate()

	useEffect(() => {
		if (hookInstances.resetErrorBoundary) {
			hookInstances.resetErrorBoundary()
			hookInstances.resetErrorBoundary = null
		}
	}, [location])

	return (
		<ReactRoutes>
			<Route path="/" element={<Navigate to="/login" replace />} />
			<Route path="/login" element={<RouteWrapper component={LoginPage} path={'/login'} />} />
			<Route
				path="/member"
				element={<RouteWrapper component={MemberPage} path={'/member'} />}
			/>
			<Route path="*" element={<Error404 />} />
		</ReactRoutes>
	)
}

export { Routes }
