//这个文件是项目的接口请求函数
//给每个接口发请求，我们都把它封装成一个函数，到时需要请求拿数据的时候，就去调用对应的接口函数就完了
// import Ajax from '@/ajax/Ajax'
import Ajax from '../ajax/Ajax'
import mockAjax from "@/ajax/mockAjax"
import Axios from 'axios'
// 请求获取三级分类列表数据
//get  /api/product/getBaseCategoryList   参数： 无

export const reqCategoryList = () => Ajax ({
    method:'GET',
    url:'/product/getBaseCategoryList'
})


//使用mock的接口去请求 banner数据  get请求   /banner
export const reqBannerList = () => mockAjax.get('/banner')
export const reqFloorList = () => mockAjax.get('/floor')

//请求search的商品搜索列表数据
// post  /api/list   data  //data如果是空的对象代表没有搜索条件，会返回所有的商品信息
export const reqGoodsList = (searchParams) => Ajax.post('/list',searchParams)

//请求商品详情数据

// /api/item/{ skuId }  get 

export const reqGoodsDetailInfo = (skuId) => Ajax.get(`/item/${ skuId }`)

//请求添加购物车  /api/cart/addTocart/{ skId }/{ skuNum } post

export const reqAddOrUpdateShopCart = (skuId,skuNum) => Ajax.post(`/cart/addToCart/${ skuId }/${ skuNum }`)

//请求购物车列表数据 /api/cart/cartList get

export const reqShopCartList = () => Ajax.get('/cart/cartList')

//请求修改购物车选中状态 /api/cart/checkCart/{skuID}/{isChecked} get
export const reqUpdateIsChecked = (skuID, isChecked) => Ajax.get(`/cart/checkCart/${skuID}/${isChecked}`)

//请求删除购物车商品 /api/cart/deleteCart/{skuId}  delete
export const reqDeleteCart = (skuId) => Ajax.delete(`/cart/deleteCart/${skuId}`)

//请求注册 /api/user/passport/register  post

export const reqRegister = (userInfo) => Ajax.post('/user/passport/register',userInfo)

//请求登陆 /api/user/passport/login   post
export const reqLogin = (userInfo) => Ajax.post('/user/passport/login',userInfo)

//请求退出登陆  /api/user/passport/logout  get
export const reqLogout = () =>Ajax.get('/user/passport/logout')












//第一个是post参数 第二个是data参数


// Axios({
//     url:'/user/passport/register',
//     method:post,
//     data:userInfo,
//     params:{query参数}
// })