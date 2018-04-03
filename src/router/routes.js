/**
 * Created by leibo on 18/2/6.
 */
//登录
import Login from '@/components/admin/Login'
//Home
import Home from '@/components/Home/Home'
//商家信息
import AdminBusinessInformation from '@/components/admin/AdminBusinessInformation'
//供应商信息
import AdminSupplier from '@/components/admin/AdminSupplier'
//系统菜单
import AdminSystemMenu from '@/components/admin/AdminSystemMenu'
//查询线路菜单
import AdminProductMenu from '@/components/admin/AdminProductMenu'
//供应商产品审核
import AdminProductAudit from '@/components/admin/AdminProductAudit'
//代理商审核
import AdminAgents from '@/components/admin/AdminAgents'
//供应商利润
import AdminVendorProfit from '@/components/admin/AdminVendorProfit'
//代理商利润
import AdminAgentsProfit from '@/components/admin/AdminAgentsProfit'
//惠乐游收益
import AdminHuileyouReturn from '@/components/admin/AdminHuileyouReturn'
//积分权重
import AdminIntegralWeight from '@/components/admin/AdminIntegralWeight'
//积分权重
import AdminIntegralType from '@/components/admin/AdminIntegralType'
//广告类型
import AdType from '@/components/Advertisements/AdType'

/*-------------------------------------门票管理----------------------------------------------*/
import TicketTheme from '@/components/ticket/ticketTheme' //门票主题hotelImageType

/*-------------------------------------酒店管理----------------------------------------------*/
import HotelImageType from '@/components/hotel/HotelImageType' //酒店图片类型主题
import HotelRecommendType from '@/components/hotel/HotelRecommendType' //酒店图片类型主题
import HotelThemeCategory from '@/components/hotel/HotelThemeCategory' //酒店主题类别
import HotelCityRecommendType from '@/components/hotel/HotelCityRecommendType' //酒店城市推荐类型
export default [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      default: Home
    },
    children:[
      /*-------------------------------------门票管理----------------------------------------------*/
      //门票主题
      {
        path: 'ticketTheme',
        components: {
          default: Home,
          User: TicketTheme
        },
        name: 'TicketTheme'
      },

      /*-------------------------------------酒店管理----------------------------------------------*/
      //酒店图片类型
      {
        path: 'hotelImageType',
        components: {
          default: Home,
          User: HotelImageType
        },
        name: 'HotelImageType'
      },
      //酒店推荐类型HotelThemeCategory
      {
        path: 'hotelRecommendType',
        components: {
          default: Home,
          User: HotelRecommendType
        },
        name: 'HotelRecommendType'
      },
      //酒店主题类别
      {
        path: 'hotelThemeCategory',
        components: {
          default: Home,
          User: HotelThemeCategory
        },
        name: 'HotelThemeCategory'
      },
      //酒店主题类别
      {
        path: 'hotelCityRecommendType',
        components: {
          default: Home,
          User: HotelCityRecommendType
        },
        name: 'HotelCityRecommendType'
      },


      //商家信息
      {
        path: 'adminBusinessInformation',
        components: {
          default: Home,
          User: AdminBusinessInformation
        },
        name: 'AdminBusinessInformation'
      },
      //积分权重
      {
        path: 'adminIntegralWeight',
        components: {
          default: Home,
          User: AdminIntegralWeight
        },
        name: 'AdminIntegralWeight'
      },
      //积分类型
      {
        path: 'adminIntegralType',
        components: {
          default: Home,
          User: AdminIntegralType
        },
        name: 'AdminIntegralType'
      },
      //广告类型
      {
        path: 'adType',
        components: {
          default: Home,
          User: AdType
        },
        name: 'AdType'
      },
      //供应商信息审核
      {
        path: 'adminSupplier',
        components: {
          default: Home,
          User: AdminSupplier
        },
        name: 'AdminSupplier'
      },
      //供应商利润
      {
        path: 'adminVendorProfit',
        components: {
          default: Home,
          User: AdminVendorProfit
        },
        name: 'AdminVendorProfit'
      },
      {
        path: 'adminAgentsProfit',
        components: {
          default: Home,
          User: AdminAgentsProfit
        },
        name: 'AdminAgentsProfit'
      },
      //供应商信息审核
      {
        path: 'adminAgents',
        components: {
          default: Home,
          User: AdminAgents
        },
        name: 'AdminAgents'
      },
      //供应商产品审核
      {
        path: 'adminProductAudit',
        components: {
          default: Home,
          User: AdminProductAudit
        },
        name: 'AdminProductAudit'
      },
      //惠乐游收益
      {
        path: 'adminHuileyouReturn',
        components: {
          default: Home,
          User: AdminHuileyouReturn
        },
        name: 'AdminHuileyouReturn'
      },
      //系统菜单
      {
        path: 'adminSystemMenu',
        components: {
          default: Home,
          User: AdminSystemMenu
        },
        name: 'AdminSystemMenu'
      },
      {
        path: 'adminProductMenu',
        components: {
          default: Home,
          User: AdminProductMenu
        },
        name: 'AdminProductMenu'
      },
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: { name: 'Login' }
  },
]
