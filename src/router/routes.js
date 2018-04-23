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
/*-------------------------------------门票管理----------------------------------------------*/
import TicketTheme from '@/components/ticket/ticketTheme' //门票主题hotelImageType
import TicketToExamine from '@/components/ticket/TicketToExamine' //景点审核
import TicketToExamineShowHomePage from '@/components/ticket/TicketToExamineShowHomePage'//审核景点是否展示在首页
import TicketHomePageBigPicture from '@/components/ticket/TicketHomePageBigPicture'//首页展示大图
import TicketHomePageSmallPicture from '@/components/ticket/TicketHomePageSmallPicture'//首页展示小图

/*-------------------------------------酒店管理----------------------------------------------*/
import HotelImageType from '@/components/hotel/HotelImageType' //酒店图片类型主题
import HotelRecommendType from '@/components/hotel/HotelRecommendType' //酒店图片类型主题
import HotelThemeCategory from '@/components/hotel/HotelThemeCategory' //酒店主题类别
import HotelCityRecommendType from '@/components/hotel/HotelCityRecommendType' //酒店城市推荐类型
import HotelFacilitiesType from '@/components/hotel/HotelFacilitiesType' //酒店设施类型
import HotelFacilities from '@/components/hotel/HotelFacilities' //酒店设施
import HotelRoomFacilitiesType from '@/components/hotel/HotelRoomFacilitiesType' //酒店房间设施类型
/*-------------------------------------广告管理----------------------------------------------*/
//广告类型
import AdType from '@/components/Advertisements/AdType'
//广告收费方式
import AdChargeWay from '@/components/Advertisements/AdChargeWay'
//广告位置
import AdPosition from '@/components/Advertisements/AdPosition'
//广告申请
import AdApply from '@/components/Advertisements/AdApply'
//广告类型收费方式
import AdTypeChargeMode from '@/components/Advertisements/AdTypeChargeMode'

/*-------------------------------------美食管理----------------------------------------------*/
import FoodRecommendStoreType from '@/components/food/FoodRecommendStoreType' //美食推荐店铺管理
import FoodAttributeListType from '@/components/food/FoodAttributeListType' //美食属性表管理
import FoodReviewStoreInformation from '@/components/food/FoodReviewStoreInformation'  //美食审核店面信息
import FoodHomePagePicture from '@/components/food/FoodHomePagePicture'//首页展示图片

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
      /*-------------------------------------广告管理----------------------------------------------*/
      //广告类型收费方式
      {
        path: 'adTypeChargeMode',
        components: {
          default: Home,
          User: AdTypeChargeMode
        },
        name: 'AdTypeChargeMode'
      },
      //广告申请
      {
        path: 'adApply',
        components: {
          default: Home,
          User: AdApply
        },
        name: 'AdApply'
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
      //广告收费方式
      {
        path: 'adChargeWay',
        components: {
          default: Home,
          User: AdChargeWay
        },
        name: 'AdChargeWay'
      },
      //广告位置
      {
        path: 'adPosition',
        components: {
          default: Home,
          User: AdPosition
        },
        name: 'AdPosition'
      },
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
      {
        path: 'ticketToExamine',
        components: {
          default: Home,
          User: TicketToExamine
        },
        name: 'TicketToExamine'
      },
      {
        path: 'ticketToExamineShowHomePage',
        components: {
          default: Home,
          User: TicketToExamineShowHomePage
        },
        name: 'TicketToExamineShowHomePage'
      },
      {
        path: 'ticketHomePageBigPicture',
        components: {
          default: Home,
          User: TicketHomePageBigPicture
        },
        name: 'TicketHomePageBigPicture',
      },
      {
        path: 'ticketHomePageSmallPicture',
        components: {
          default: Home,
          User: TicketHomePageSmallPicture
        },
        name: 'TicketHomePageSmallPicture',
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
      //酒店房间设施类型
      {
        path: 'hotelRoomFacilitiesType',
        components: {
          default: Home,
          User: HotelRoomFacilitiesType
        },
        name: 'HotelRoomFacilitiesType'
      },
      //酒店推荐类型
      {
        path: 'hotelRecommendType',
        components: {
          default: Home,
          User: HotelRecommendType
        },
        name: 'HotelRecommendType'
      },
      //酒店设施类型
      {
        path: 'hotelFacilitiesType',
        components: {
          default: Home,
          User: HotelFacilitiesType
        },
        name: 'HotelFacilitiesType'
      },
      //酒店设施
      {
        path: 'hotelFacilities',
        components: {
          default: Home,
          User: HotelFacilities
        },
        name: 'HotelFacilities'
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
      /*-------------------------------------美食管理----------------------------------------------*/
      //美食推荐店铺
      {
        path: 'FoodRecommendStoreType',
        components: {
          default: Home,
          User: FoodRecommendStoreType
        },
        name: 'FoodRecommendStoreType'
      },
      //属性
      {
        path: 'FoodAttributeListType',
        components: {
          default: Home,
          User: FoodAttributeListType
        },
        name: 'FoodAttributeListType'
      },
      //审核店面
      {
        path: 'FoodReviewStoreInformation',
        components: {
          default: Home,
          User: FoodReviewStoreInformation
        },
        name: 'FoodReviewStoreInformation'
      },
      //首页展示图片
      {
        path:'foodHomePagePicture',
        components: {
          default: Home,
          User: FoodHomePagePicture
        },
        name: 'FoodHomePagePicture'
      }
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: {name: 'Login'}
  },
]
