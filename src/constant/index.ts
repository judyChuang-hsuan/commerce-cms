import { MessageInstance } from 'antd/es/message/interface'
import { NotificationInstance } from 'antd/es/notification/interface'
import { HookAPI } from 'antd/es/modal/useModal'
import { NavigateFunction } from 'react-router'

export type ResetErrorBoundary = (...args: any[]) => any

export const hookInstances = {
	navigate: null as NavigateFunction | null,
	message: null as MessageInstance | null,
	modal: null as HookAPI | null,
	notification: null as NotificationInstance | null,
	resetErrorBoundary: null as ResetErrorBoundary | null,
}

export const Breakpoint: Record<string, number> = {
	xxs: 0,
	xs: 320,
	sm: 480,
	smd: 569,
	md: 768,
	lg: 992,
	xl: 1280,
	xxl: 1600,
}

export const breakpoints: number[] = [
	Breakpoint.xs,
	Breakpoint.sm,
	Breakpoint.smd,
	Breakpoint.md,
	Breakpoint.lg,
	Breakpoint.xl,
	Breakpoint.xxl,
] as const
