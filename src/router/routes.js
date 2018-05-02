/**
 * Created by leibo on 18/2/6.
 */
//登录
// import Login from '@/components/admin/Login'
//Home
import Home from '@/components/Home/Home'//理应注释的
//商家信息
// import AdminBusinessInformation from '@/components/admin/AdminBusinessInformation'
//供应商信息
import AdminSupplier from '@/components/admin/AdminSupplier'
//系统菜单
// import AdminSystemMenu from '@/components/admin/AdminSystemMenu'
//查询线路菜单
// import AdminProductMenu from '@/components/admin/AdminProductMenu'
//供应商产品审核
// import AdminProductAudit from '@/components/admin/AdminProductAudit'
//代理商审核
// import AdminAgents from '@/components/admin/AdminAgents'
//供应商利润
// import AdminVendorProfit from '@/components/admin/AdminVendorProfit'
//代理商利润
// import AdminAgentsProfit from '@/components/admin/AdminAgentsProfit'
//惠乐游收益
// import AdminHuileyouReturn from '@/components/admin/AdminHuileyouReturn'
//积分权重
// import AdminIntegralWeight from '@/components/admin/AdminIntegralWeight'
//积分权重
// import AdminIntegralType from '@/components/admin/AdminIntegralType'
/*-------------------------------------门票管理----------------------------------------------*/
// import TicketTheme from '@/components/ticket/ticketTheme' //门票主题hotelImageType
// import TicketToExamine from '@/components/ticket/TicketToExamine' //景点审核
// import TicketToExamineShowHomePage from '@/components/ticket/TicketToExamineShowHomePage'//审核景点是否展示在首页
// import TicketHomePageBigPicture from '@/components/ticket/TicketHomePageBigPicture'//首页展示大图
// import TicketHomePageSmallPicture from '@/components/ticket/TicketHomePageSmallPicture'//首页展示小图

/*-------------------------------------酒店管理----------------------------------------------*/
// import HotelImageType from '@/components/hotel/HotelImageType' //酒店图片类型主题
// import HotelRecommendType from '@/components/hotel/HotelRecommendType' //酒店图片类型主题
// import HotelThemeCategory from '@/components/hotel/HotelThemeCategory' //酒店主题类别
// import HotelCityRecommendType from '@/components/hotel/HotelCityRecommendType' //酒店城市推荐类型
// import HotelFacilitiesType from '@/components/hotel/HotelFacilitiesType' //酒店设施类型
// import HotelFacilities from '@/components/hotel/HotelFacilities' //酒店设施
// import HotelRoomFacilitiesType from '@/components/hotel/HotelRoomFacilitiesType' //酒店房间设施类型
// import HotelIconGallery from '@/components/hotel/HotelIconGallery' //酒店图标库
// import HotelRoomFacilities from '@/components/hotel/HotelRoomFacilities' //酒店房间设施
/*-------------------------------------广告管理----------------------------------------------*/
//广告类型
// import AdType from '@/components/Advertisements/AdType'
//广告收费方式
// import AdChargeWay from '@/components/Advertisements/AdChargeWay'
//广告位置
// import AdPosition from '@/components/Advertisements/AdPosition'
//广告申请
// import AdApply from '@/components/Advertisements/AdApply'
//广告类型收费方式
// import AdTypeChargeMode from '@/components/Advertisements/AdTypeChargeMode'

//上传App
// import UploadApp from '@/components/App/UploadApp'
/*-------------------------------------美食管理----------------------------------------------*/
// import FoodRecommendStoreType from '@/components/food/FoodRecommendStoreType' //美食推荐店铺管理
// import FoodAttributeListType from '@/components/food/FoodAttributeListType' //美食属性表管理
// import FoodReviewStoreInformation from '@/components/food/FoodReviewStoreInformation'  //美食审核店面信息
// import FoodHomePagePicture from '@/components/food/FoodHomePagePicture'//首页展示图片


export default [



  //青旅酒店
/*  {
    path: '/hotelQingLv/:id',
    name: 'HotelQingLv',
    component: (resolve) => require(['@/components/Hotel/HotelQingLv'], resolve)
  },*/


  {
    path: '/',
    name: 'Login',
    component: (resolve) => require(['@/components/admin/Login'], resolve)
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      default: (resolve)=>{require(['@/components/Home/Home'],resolve)}
    },
    children:[
      {
        path: 'UploadApp',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/App/UploadApp'],resolve)}
        },
        name: 'UploadApp'
      },
      /*-------------------------------------广告管理----------------------------------------------*/
      //广告类型收费方式
      {
        path: 'adTypeChargeMode',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/Advertisements/AdTypeChargeMode'],resolve)}
        },
        name: 'AdTypeChargeMode'
      },
      //广告申请
      {
        path: 'adApply',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/Advertisements/AdApply'],resolve)}
        },
        name: 'AdApply'
      },
      //广告类型
      {
        path: 'adType',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/Advertisements/AdType'],resolve)}
        },
        name: 'AdType'
      },
      //广告收费方式
      {
        path: 'adChargeWay',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          // User: AdChargeWay
          User: (resolve)=>{require(['@/components/Advertisements/AdChargeWay'],resolve)}
        },
        name: 'AdChargeWay'
      },
      //广告位置
      {
        path: 'adPosition',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/Advertisements/AdPosition'],resolve)}
        },
        name: 'AdPosition'
      },
      /*-------------------------------------门票管理----------------------------------------------*/
      //门票主题
      {
        path: 'ticketTheme',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/ticket/ticketTheme'],resolve)}
        },
        name: 'TicketTheme'
      },
      {
        path: 'ticketToExamine',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/ticket/TicketToExamine'],resolve)}
        },
        name: 'TicketToExamine'
      },
      {
        path: 'ticketToExamineShowHomePage',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/ticket/TicketToExamineShowHomePage'],resolve)}
        },
        name: 'TicketToExamineShowHomePage'
      },
      {
        path: 'ticketHomePageBigPicture',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/ticket/TicketHomePageBigPicture'],resolve)}
        },
        name: 'TicketHomePageBigPicture',
      },
      {
        path: 'ticketHomePageSmallPicture',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/ticket/TicketHomePageSmallPicture'],resolve)}
        },
        name: 'TicketHomePageSmallPicture',
      },

      /*-------------------------------------酒店管理----------------------------------------------*/
      //酒店图片类型
      {
        path: 'hotelImageType',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/hotel/HotelImageType'],resolve)}
        },
        name: 'HotelImageType'
      },
      //酒店房间设施类型
      {
        path: 'hotelRoomFacilitiesType',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/hotel/HotelRoomFacilitiesType'],resolve)}
        },
        name: 'HotelRoomFacilitiesType'
      },
      //酒店房间设施
      {
        path: 'hotelRoomFacilities',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/hotel/HotelRoomFacilities'],resolve)}
        },
        name: 'HotelRoomFacilities'
      },
      //酒店图标库
      {
        path: 'hotelIconGallery',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/hotel/HotelIconGallery'],resolve)}
        },
        name: 'HotelIconGallery'
      },
      //酒店推荐类型
      {
        path: 'hotelRecommendType',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/hotel/HotelRecommendType'],resolve)}
        },
        name: 'HotelRecommendType'
      },
      //酒店设施类型
      {
        path: 'hotelFacilitiesType',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/hotel/HotelFacilitiesType'],resolve)}
        },
        name: 'HotelFacilitiesType'
      },
      //酒店设施
      {
        path: 'hotelFacilities',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/hotel/HotelFacilities'],resolve)}
        },
        name: 'HotelFacilities'
      },
      //酒店主题类别
      {
        path: 'hotelThemeCategory',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/hotel/HotelThemeCategory'],resolve)}
        },
        name: 'HotelThemeCategory'
      },
      //酒店主题类别
      {
        path: 'hotelCityRecommendType',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/hotel/HotelCityRecommendType'],resolve)}
        },
        name: 'HotelCityRecommendType'
      },


      //商家信息
      {
        path: 'adminBusinessInformation',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/admin/AdminBusinessInformation'],resolve)}
        },
        name: 'AdminBusinessInformation'
      },
      //积分权重
      {
        path: 'adminIntegralWeight',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/admin/AdminIntegralWeight'],resolve)}
        },
        name: 'AdminIntegralWeight'
      },
      //积分类型
      {
        path: 'adminIntegralType',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/admin/AdminIntegralType'],resolve)}
        },
        name: 'AdminIntegralType'
      },
      //供应商信息审核
      {
        path: 'adminSupplier',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: AdminSupplier
          // User: (resolve)=>{require(['@/components/Home/Home'],resolve)}
        },
        name: 'AdminSupplier'
      },
      //供应商利润
      {
        path: 'adminVendorProfit',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/admin/AdminVendorProfit'],resolve)}
        },
        name: 'AdminVendorProfit'
      },
      {
        path: 'adminAgentsProfit',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/admin/AdminAgentsProfit'],resolve)}
        },
        name: 'AdminAgentsProfit'
      },
      //供应商信息审核
      {
        path: 'adminAgents',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/admin/AdminAgents'],resolve)}
        },
        name: 'AdminAgents'
      },
      //供应商产品审核
      {
        path: 'adminProductAudit',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/admin/AdminProductAudit'],resolve)}
        },
        name: 'AdminProductAudit'
      },
      //惠乐游收益
      {
        path: 'adminHuileyouReturn',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/admin/AdminHuileyouReturn'],resolve)}
        },
        name: 'AdminHuileyouReturn'
      },
      //系统菜单
      {
        path: 'adminSystemMenu',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/admin/AdminSystemMenu'],resolve)}
        },
        name: 'AdminSystemMenu'
      },
      {
        path: 'adminProductMenu',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/admin/AdminProductMenu'],resolve)}
        },
        name: 'AdminProductMenu'
      },
      /*-------------------------------------美食管理----------------------------------------------*/
      //美食推荐店铺
      {
        path: 'FoodRecommendStoreType',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/food/FoodRecommendStoreType'],resolve)}
        },
        name: 'FoodRecommendStoreType'
      },
      //属性
      {
        path: 'FoodAttributeListType',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/food/FoodAttributeListType'],resolve)}
        },
        name: 'FoodAttributeListType'
      },
      //审核店面
      {
        path: 'FoodReviewStoreInformation',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/food/FoodReviewStoreInformation'],resolve)}
        },
        name: 'FoodReviewStoreInformation'
      },
      //首页展示图片
      {
        path:'foodHomePagePicture',
        components: {
          default: (resolve)=>{require(['@/components/Home/Home'],resolve)},
          User: (resolve)=>{require(['@/components/food/FoodHomePagePicture'],resolve)}
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
