import type { RouterLinkProps } from 'vue-router'

export type Breadcrumb = {
	id: string | number
	name: string
	options: RouterLinkProps['to']
}

export type Breadcrumbs = Breadcrumb[]
