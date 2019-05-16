import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage';
import RobotBuilder from '../build/RobotBuilder';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';


Vue.use(Router);


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: SidebarStandard,
      }
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild,
      }
    },    
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          name: 'BrowseHeads',
          path: 'heads',
          component: RobotHeads,
        },
        {
          name: 'BrowseArms',
          path: 'arms',
          component: RobotArms,
        }, {
          name: 'BrowseTorsos',
          path: 'toros',
          component: RobotTorsos,
        }, {
          name: 'BrowseBases',
          path: 'bases',
          component: RobotBases,
        }
      ]
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
      beforeEnter: (to, from, next) => {
        const isvalidId = Number.isInteger(Number(to.params.id));
        next(isvalidId);
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart
    }
  ]
})