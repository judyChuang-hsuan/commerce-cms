import { BrowserRouter } from 'react-router-dom'
import { App as AntdApp, ConfigProvider } from 'antd'
import { ReactNode } from 'react'
import { hookInstances } from '@/constant'
import zhTW from 'antd/lib/locale/zh_TW'
import { Routes } from '@/app/routes.tsx'

function App() {
	return (
		<BrowserRouter>
			<AntdProvider>
				<Routes />
			</AntdProvider>
		</BrowserRouter>
	)
}

function AntdProvider({ children }: { children: ReactNode }) {
	return (
		<ConfigProvider locale={zhTW}>
			<AntdApp>
				<AntdChildren>{children}</AntdChildren>
			</AntdApp>
		</ConfigProvider>
	)
}

function AntdChildren({ children }: { children: ReactNode }) {
	const antdAppUtils = AntdApp.useApp()

	hookInstances.message = antdAppUtils.message
	hookInstances.modal = antdAppUtils.modal
	hookInstances.notification = antdAppUtils.notification
	return children
}

export { App }
