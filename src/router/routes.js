/**
 * Created by leibo on 18/2/6.
 */
//登录
const Login = resolve => require.ensure([], () => resolve(require('@/components/admin/Login')));
// import Login from '@/components/admin/Login'
//Home
const Home = resolve => require.ensure([], () => resolve(require('@/components/Home/newHome')));
//import Home from '@/components/Home/newHome'//理应注释的
//商家信息
const AdminBusinessInformation = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminBusinessInformation')));
//import AdminBusinessInformation from '@/components/admin/AdminBusinessInformation'
//供应商信息
const AdminSupplier = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminSupplier')));
 //import AdminSupplier from '@/components/admin/AdminSupplier'
 //系统菜单
 const AdminSystemMenu = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminSystemMenu')));
 // import AdminSystemMenu from '@/components/admin/AdminSystemMenu'
 //查询线路菜单
 const AdminProductMenu = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminProductMenu')));
 // import AdminProductMenu from '@/components/admin/AdminProductMenu'
 //供应商产品审核
 const AdminProductAudit = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminProductAudit')));
 //import AdminProductAudit from '@/components/admin/AdminProductAudit'
 //代理商审核
 const AdminAgents = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminAgents')));
//import AdminAgents from '@/components/admin/AdminAgents'
//供应商利润
const AdminVendorProfit = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminVendorProfit')));
//import AdminVendorProfit from '@/components/admin/AdminVendorProfit'
//代理商利润
const AdminAgentsProfit = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminAgentsProfit')));
//import AdminAgentsProfit from '@/components/admin/AdminAgentsProfit'
//惠乐游收益
const AdminHuileyouReturn = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminHuileyouReturn')));
//import AdminHuileyouReturn from '@/components/admin/AdminHuileyouReturn'
//积分权重
const AdminIntegralWeight = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminIntegralWeight')));
//import AdminIntegralWeight from '@/components/admin/AdminIntegralWeight'
//积分权重
const AdminIntegralType = resolve => require.ensure([], () => resolve(require('@/components/admin/AdminIntegralType')));
//import AdminIntegralType from '@/components/admin/AdminIntegralType'
/*-------------------------------------门票管理----------------------------------------------*/
//
const TicketTheme = resolve => require.ensure([], () => resolve(require('@/components/ticket/ticketTheme')));
// import TicketTheme from '@/components/ticket/ticketTheme' //门票主题hotelImageType
const TicketToExamine = resolve => require.ensure([], () => resolve(require('@/components/ticket/TicketToExamine')));
// import TicketToExamine from '@/components/ticket/TicketToExamine' //景点审核
const TicketToExamineShowHomePage = resolve => require.ensure([], () => resolve(require('@/components/ticket/TicketToExamineShowHomePage')));
// import TicketToExamineShowHomePage from '@/components/ticket/TicketToExamineShowHomePage'//审核景点是否展示在首页
const TicketHomePageBigPicture = resolve => require.ensure([], () => resolve(require('@/components/ticket/TicketHomePageBigPicture')));
// import TicketHomePageBigPicture from '@/components/ticket/TicketHomePageBigPicture'//首页展示大图
const TicketHomePageSmallPicture = resolve => require.ensure([], () => resolve(require('@/components/ticket/TicketHomePageSmallPicture')));
// import TicketHomePageSmallPicture from '@/components/ticket/TicketHomePageSmallPicture'//首页展示小图

/*-------------------------------------酒店管理----------------------------------------------*/
const HotelImageType = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelImageType')));
// import HotelImageType from '@/components/hotel/HotelImageType' //酒店图片类型主题
const HotelRecommendType = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelRecommendType')));
// import HotelRecommendType from '@/components/hotel/HotelRecommendType' //酒店图片类型主题
const HotelThemeCategory = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelThemeCategory')));
// import HotelThemeCategory from '@/components/hotel/HotelThemeCategory' //酒店主题类别
const HotelCityRecommendType = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelCityRecommendType')));
// import HotelCityRecommendType from '@/components/hotel/HotelCityRecommendType' //酒店城市推荐类型
const HotelFacilitiesType = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelFacilitiesType')));
// import HotelFacilitiesType from '@/components/hotel/HotelFacilitiesType' //酒店设施类型
const HotelFacilities = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelFacilities')));
// import HotelFacilities from '@/components/hotel/HotelFacilities' //酒店设施
const HotelRoomFacilitiesType = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelRoomFacilitiesType')));
// import HotelRoomFacilitiesType from '@/components/hotel/HotelRoomFacilitiesType' //酒店房间设施类型
const HotelIconGallery = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelIconGallery')));
// import HotelIconGallery from '@/components/hotel/HotelIconGallery' //酒店图标库
const HotelRoomFacilities = resolve => require.ensure([], () => resolve(require('@/components/hotel/HotelRoomFacilities')));
// import HotelRoomFacilities from '@/components/hotel/HotelRoomFacilities' //酒店房间设施
/*-------------------------------------广告管理----------------------------------------------*/
//广告类型
const AdType = resolve => require.ensure([], () => resolve(require('@/components/Advertisements/AdType')));
//import AdType from '@/components/Advertisements/AdType'
//广告收费方式
const AdChargeWay = resolve => require.ensure([], () => resolve(require('@/components/Advertisements/AdChargeWay')));
//import AdChargeWay from '@/components/Advertisements/AdChargeWay'
//广告位置
const AdPosition = resolve => require.ensure([], () => resolve(require('@/components/Advertisements/AdPosition')));
//import AdPosition from '@/components/Advertisements/AdPosition'
//广告申请
const AdApply = resolve => require.ensure([], () => resolve(require('@/components/Advertisements/AdApply')));
//import AdApply from '@/components/Advertisements/AdApply'
//广告类型收费方式
const AdTypeChargeMode = resolve => require.ensure([], () => resolve(require('@/components/Advertisements/AdTypeChargeMode')));
//import AdTypeChargeMode from '@/components/Advertisements/AdTypeChargeMode'

//上传App
const UploadApp = resolve => require.ensure([], () => resolve(require('@/components/App/UploadApp')));
//import UploadApp from '@/components/App/UploadApp'
/*-------------------------------------美食管理----------------------------------------------*/
const FoodRecommendStoreType = resolve => require.ensure([], () => resolve(require('@/components/food/FoodRecommendStoreType')));
// import FoodRecommendStoreType from '@/components/food/FoodRecommendStoreType' //美食推荐店铺管理
const FoodAttributeListType = resolve => require.ensure([], () => resolve(require('@/components/food/FoodAttributeListType')));
// import FoodAttributeListType from '@/components/food/FoodAttributeListType' //美食属性表管理
const FoodReviewStoreInformation = resolve => require.ensure([], () => resolve(require('@/components/food/FoodReviewStoreInformation')));
// import FoodReviewStoreInformation from '@/components/food/FoodReviewStoreInformation'  //美食审核店面信息
const FoodHomePagePicture = resolve => require.ensure([], () => resolve(require('@/components/food/FoodHomePagePicture')));
// import FoodHomePagePicture from '@/components/food/FoodHomePagePicture'//首页展示图片


// /*-------------------------------------租车管理----------------------------------------------*/
const CarRent = resolve => require.ensure([], () => resolve(require('@/components/car/CarRent')));
// import CarRent from '@/components/car/CarRent'//汽车管理
const CarProperties = resolve => require.ensure([], () => resolve(require('@/components/car/CarProperties')));
// import CarProperties from '@/components/car/CarProperties'//汽车属性
const CarCityLandmarks = resolve => require.ensure([], () => resolve(require('@/components/car/CarCityLandmarks')));
// import CarCityLandmarks from '@/components/car/CarCityLandmarks'//汽车城市地标

/*-------------------------------------微电影管理----------------------------------------------*/
const MovieReview = resolve => require.ensure([], () => resolve(require('@/components/movie/MovieReview')));
// import MovieReview from '@/components/movie/MovieReview'//汽车属性
const MovieType = resolve => require.ensure([], () => resolve(require('@/components/movie/MovieType')));
// import MovieType from '@/components/movie/MovieType'//汽车城市地标
const demo = resolve => require.ensure([], () => resolve(require('@/components/App/demo')));
// import demo from '@/components/App/demo'//汽车城市地标
const demo1 = resolve => require.ensure([], () => resolve(require('@/components/App/demo1')));
//import demo1 from '@/components/App/demo1'//汽车城市地标
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
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      default: Home
    },
    children:[
      {
        path: 'demo',
        components: {
          default: Home,
          User: demo
        },
        name: 'demo'
      },
      {
        path: 'demo1',
        components: {
          default: Home,
          User: demo1
        },
        name: 'demo1'
      },
      {
        path: 'UploadApp',
        components: {
          default: Home,
          User: UploadApp
        },
        name: 'UploadApp'
      },
      /*-------------------------------------微电影管理----------------------------------------------*/
      {
        path: 'movieReview',
        components: {
          default: Home,
          User: MovieReview
        },
        name: 'MovieReview'
      },
      {
        path: 'movieType',
        components: {
          default: Home,
          User: MovieType
        },
        name: 'MovieType'
      },
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
          // User: AdChargeWay
          User: AdChargeWay
        },
        name: 'AdChargeWay'
      },
      //广告位置
      {
        path: 'adPosition',
        components: {
          default: Home,
          User:AdPosition
        },
        name: 'AdPosition'
      },
      /*-------------------------------------汽车管理----------------------------------------------*/
      {
        path: 'carRent',
        components: {
          default: Home,
          User: CarRent
        },
        name: 'CarRent'
      },
      {
        path: 'carProperties',
        components: {
          default: Home,
          User: CarProperties
        },
        name: 'CarProperties'
      },
      {
        path: 'carCityLandmarks',
        components: {
          default: Home,
          User: CarCityLandmarks
        },
        name: 'CarCityLandmarks'
      },
      /*-------------------------------------门票管理----------------------------------------------*/
      //门票主题
      {
        path: 'ticketTheme',
        components: {
          default:Home,
          User: TicketTheme
        },
        name: 'TicketTheme'
      },
      {
        path: 'ticketToExamine',
        components: {
          default:Home,
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
          User:TicketHomePageSmallPicture
        },
        name: 'TicketHomePageSmallPicture',
      },

      /*-------------------------------------酒店管理----------------------------------------------*/
      //酒店图片类型
      {
        path: 'hotelImageType',
        components: {
          default:Home,
          User:HotelImageType
        },
        name: 'HotelImageType'
      },
      //酒店房间设施类型
      {
        path: 'hotelRoomFacilitiesType',
        components: {
          default: Home,
          User:HotelRoomFacilitiesType
        },
        name: 'HotelRoomFacilitiesType'
      },
      //酒店房间设施
      {
        path: 'hotelRoomFacilities',
        components: {
          default: Home,
          User: HotelRoomFacilities
        },
        name: 'HotelRoomFacilities'
      },
      //酒店图标库
      {
        path: 'hotelIconGallery',
        components: {
          default: Home,
          User: HotelIconGallery
        },
        name: 'HotelIconGallery'
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
          // User: (resolve)=>{require(['@/components/Home/Home'],resolve)}
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
      // //系统菜单
      // {
      //   path: 'adminSystemMenu',
      //   components: {
      //     default: Home,
      //     User:AdminSystemMenu
      //   },
      //   name: 'AdminSystemMenu'
      // },
      // {
      //   path: 'adminProductMenu',
      //   components: {
      //     default: Home,
      //     User: AdminProductMenu
      //   },
      //   name: 'AdminProductMenu'
      // },
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
