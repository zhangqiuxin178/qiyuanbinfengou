import { Lazyload, ImgPreview, Loading, InfiniteLoad, Swipe, SwipeItem, Tab, Tabs, Navbar, Icon, PullRefresh } from 'wot-design'

const UIComponents = [Lazyload, ImgPreview, Loading, InfiniteLoad, Swipe, SwipeItem, Tab, Tabs, Navbar, Icon, PullRefresh]


const WotUIPlugin = {};

WotUIPlugin.install = function (Vue) {

    UIComponents.forEach(Component => {

        Vue.use(Component)

    })

}

export default WotUIPlugin