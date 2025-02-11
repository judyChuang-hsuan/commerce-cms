import { Button, Layout } from 'antd'
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

type HeaderProps = {
	collapse: boolean
	setCollapse: (collapse: boolean) => void
}

const { Header: AntHeader } = Layout

function Header({ collapse, setCollapse }: HeaderProps) {
	const navigate = useNavigate()
	const handleLogout = () => {
		navigate('/')
	}
	return (
		<Layout style={{ flex: 'none' }} className={'shadow-md'}>
			<AntHeader style={{ padding: 0, background: '#fff' }} className={'flex justify-between'}>
				<Button
					type="text"
					icon={collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={() => setCollapse(!collapse)}
					style={{
						fontSize: '16px',
						width: 64,
						height: 64,
					}}
				/>
				<div className={'flex gap-2 pr-4'}>
					<div>{'超級管理員'}</div>
					<div className={'cursor-pointer'} onClick={handleLogout}>
						<LogoutOutlined />
					</div>
				</div>
			</AntHeader>
		</Layout>
	)
}

export { Header }
