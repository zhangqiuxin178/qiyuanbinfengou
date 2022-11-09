import {
    Tab,
    Tabs,
    Button,
    Swipe,
    SwipeItem,
    Lazyload,
    Icon,
    AddressList,
    AddressEdit,
    Toast,
    Checkbox,
    CheckboxGroup,
    Area
} from 'vant'

const vantComponents = [
    Tab,
    Tabs,
    Button,
    Swipe,
    SwipeItem,
    Lazyload,
    Icon,
    AddressList,
    AddressEdit,
    Toast,
    Checkbox,
    CheckboxGroup,
    Area
]

export default {
    install(Vue) {
        vantComponents.forEach(Component => {
            Vue.use(Component)
        })
    }
}