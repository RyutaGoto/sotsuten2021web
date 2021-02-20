export { default as Card } from '../../components/Card.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as MobileHeader } from '../../components/MobileHeader.vue'
export { default as Record } from '../../components/Record.vue'
export { default as Research } from '../../components/Research.vue'
export { default as Title } from '../../components/Title.vue'

export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/Card" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyMobileHeader = import('../../components/MobileHeader.vue' /* webpackChunkName: "components/MobileHeader" */).then(c => c.default || c)
export const LazyRecord = import('../../components/Record.vue' /* webpackChunkName: "components/Record" */).then(c => c.default || c)
export const LazyResearch = import('../../components/Research.vue' /* webpackChunkName: "components/Research" */).then(c => c.default || c)
export const LazyTitle = import('../../components/Title.vue' /* webpackChunkName: "components/Title" */).then(c => c.default || c)
