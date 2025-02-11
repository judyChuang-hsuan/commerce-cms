import { Fragment, ReactNode, useState } from 'react'
import { Header } from '@/component/layout/header.tsx'
import { Sidebar } from '@/component/layout/sidebar.tsx'

function Layout({ children }: { children: ReactNode }) {
	const [collapse, setCollapse] = useState(false)
	return (
		<div className={'w-full min-h-screen flex'}>
			<Sidebar collapse={collapse} />
			<div className={'relative z-0 flex-1 flex flex-col'}>
				<Header collapse={collapse} setCollapse={setCollapse} />
				<MainContent>{children}</MainContent>
			</div>
		</div>
	)
}

function MainContent({ children }: { children: ReactNode }) {
	return (
		<div className={'flex-1 flex flex-col px-24 py-12'}>
			<Fragment>{children}</Fragment>
		</div>
	)
}

export { Layout }
