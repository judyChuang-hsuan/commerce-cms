import { RouteProps } from 'react-router-dom'
import { ComponentType } from 'react'
import { FC } from 'react'
import { Layout } from '@/component/layout'
import { RouteGuard } from '@/component/route/guard.tsx'

type RouteWrapperProps = RouteProps & {
	component: ComponentType<any>
}
const RouteWrapper: FC<RouteWrapperProps> = ({ component: Component, ...rest }) => {
	console.log(rest, 'rest')
	return (
		<RouteGuard>
			{rest.path === '/login' ? (
				<Component />
			) : (
				<Layout>
					<Component />
				</Layout>
			)}
		</RouteGuard>
	)
}

export default RouteWrapper
