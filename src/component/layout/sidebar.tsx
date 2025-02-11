import { Layout, Menu, type MenuProps } from 'antd'
import { ForkOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

type SidebarProps = {
	collapse: boolean
}

type MenuItem = Required<MenuProps>['items'][number]

function Sidebar({ collapse }: SidebarProps) {
	const navigate = useNavigate()
	const menuItems: MenuItem[] = [
		{
			key: '/member',
			label: '會員管理',
			icon: <UserOutlined />,
		},
		{
			key: '/company-structure',
			label: '企業結構管理',
			icon: <ForkOutlined />,
		},
		{
			key: '/platform',
			label: '平台管理',
			icon: <SettingOutlined />,
			children: [
				{
					key: '/platform/carouselManagement',
					label: '首頁輪播圖管理',
					icon: <UserOutlined />,
				},
			],
		},
	]

	return (
		<Sider trigger={null} collapsed={collapse} collapsible>
			<div>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['/member']}
					items={menuItems}
					onClick={e => navigate(e.key)}
				/>
			</div>
		</Sider>
	)
}

export { Sidebar }
