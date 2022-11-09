import {
    Button,
    Skeleton,
    InfiniteScroll,
    Drawer,
    Icon,
    Loading
} from 'element-ui'

const elementUi = [
    Button,
    Skeleton,
    InfiniteScroll,
    Drawer,
    Icon,
    Loading
]

export default {
    install(Vue) {
        elementUi.forEach(element => {
            Vue.use(element)
        })
    }
}