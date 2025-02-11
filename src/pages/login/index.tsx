import { Button, Form, Input, message } from 'antd'
import { useCallback, useEffect, useRef, useState } from 'react'
import Captcha from 'react-captcha-code'
import { useNavigate } from 'react-router-dom'

type FormType = {
	username: string
	password: string
	captcha: string
}

interface canvasRefProps {
	refresh: () => void
}

function LoginPage() {
	const [form] = Form.useForm<FormType>()
	const [loading, setLoading] = useState(false)
	const [captcha, setCaptcha] = useState('')
	const navigate = useNavigate()
	const captchaRef = useRef<canvasRefProps>(null)

	const handleRefreshCaptcha = () => {
		if (captchaRef.current) {
			captchaRef.current.refresh()
		}
	}

	const handleChangeCaptcha = useCallback((captcha: string) => {
		setCaptcha(captcha)
	}, [])

	const onFinish = (values: FormType) => {
		setLoading(true)
		//沒api暫時使用死的
		if (
			values.username === 'admin' &&
			values.password === 'AAA5245AAA' &&
			values.captcha === captcha
		) {
			void message.success('登入成功')
			navigate('/member')
		} else {
			void message.error('登入失敗')
			handleRefreshCaptcha()
		}
		setLoading(false)
	}

	useEffect(() => {
		form.setFields([
			{
				name: 'username',
				value: 'admin',
			},
			{
				name: 'password',
				value: 'AAA5245AAA',
			},
		])
	}, [])
	return (
		<div className={'w-full min-h-screen flex-center flex-col gap-2 relative bg-light-gray'}>
			<div className={'bg-white w-120 h-14 shadow-xl rounded-lg flex-center text-xl font-bold'}>
				後台系統
			</div>
			<div
				className={'bg-white w-120 h-100 max-w-full flex relative shadow-xl rounded-lg px-2'}
			>
				<Form
					form={form}
					className={'w-full flex-center flex-col'}
					name="login"
					autoComplete="off"
					onFinish={onFinish}
				>
					<Form.Item<FormType>
						className={'w-full'}
						label="username"
						name="username"
						rules={[{ required: true, message: '請輸入帳號' }]}
					>
						<Input placeholder={'請輸入帳號'} />
					</Form.Item>
					<Form.Item<FormType>
						className={'w-full'}
						label="password"
						name="password"
						rules={[{ required: true, message: '請輸入密碼' }]}
					>
						<Input.Password placeholder={'請輸入密碼'} />
					</Form.Item>
					<div className={'w-full flex flex-col items-center'}>
						<Form.Item<FormType>
							className={'w-full'}
							label="captcha"
							name="captcha"
							rules={[{ required: true, message: '請輸入驗證碼' }]}
						>
							<Input placeholder={'請輸入驗證碼'} />
						</Form.Item>
						<Captcha
							className={'h-12 cursor-pointer mb-6'}
							ref={captchaRef}
							charNum={4}
							onChange={handleChangeCaptcha}
						/>
					</div>
					<Button
						htmlType="submit"
						loading={loading}
						className={'w-full h-10 bg-primary color-white'}
					>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	)
}

export default LoginPage
