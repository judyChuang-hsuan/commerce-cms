import { hookInstances, ResetErrorBoundary } from '@/constant'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

type ErrorPageProps = {
	code:
		| 404 //not found找不到頁面
		| 500 //internal server error頁面錯誤
}

function BaseError(props: ErrorPageProps) {
	const navigate = useNavigate()
	const { error, resetErrorBoundary, code } = props as Partial<{
		didCatch: boolean
		error: any
		resetErrorBoundary: ResetErrorBoundary
	}> &
		ErrorPageProps

	if (resetErrorBoundary != null) {
		hookInstances.resetErrorBoundary = resetErrorBoundary
	}

	return (
		<div className="w-full min-h-screen flex-center">
			<Result
				status={code}
				title={code}
				subTitle={error ? error.message : '發生不可預期的錯誤'}
				extra={
					<Button type="primary" onClick={() => navigate('/member')}>
						返回
					</Button>
				}
			/>
		</div>
	)
}

export { BaseError }
