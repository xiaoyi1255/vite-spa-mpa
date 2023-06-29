// import OfferList from './../pages/Advertiser/OfferList/index.vue';
import { createApp, defineAsyncComponent } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = defineAsyncComponent(() => import('../pages/index/index.vue'));

// admin/zt_offer/zt_offer_channel
const routes = [
  {
    path: '/home',
    component: Home
  },

]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

router.beforeEach(async (to, from) => {
})
export {
  router,
}