import About from '~/Pages/About'
import Adminhome from '~/Pages/PagesAdmin/AdminHome'
import BrandTable from '~/Pages/PagesAdmin/BrandTable'
import Cart from '~/Pages/Cart'
import CategoryTable from '~/Pages/PagesAdmin/CategoryTable'
import CreateBrand from '~/Pages/PagesAdmin/CreateBrand'
import CreateCategory from '~/Pages/PagesAdmin/CreateCategory'
import CreateProduct from '~/Pages/PagesAdmin/CreateProduct'
import Home from '~/Pages/Home' 
import Login from '~/Pages/Login'
import Signin from '~/Pages/Login/Signin'
import Singup from '~/Pages/Login/Singup'
import Product from '~/Pages/Product'
import ProductDetail from '~/Pages/ProductDetail'
import ProductTable from '~/Pages/PagesAdmin/ProductTable'
import UpdateProduct from '~/Pages/PagesAdmin/UpdateProduct'
import UserTable from '~/Pages/PagesAdmin/UserTable'
// import NullLayout from '~/components/Layout/NullLayout'

export const publicRoutes = [
    { path: '/', component: Home},
    { path: '/product', component: Product},
    { path: '/cart', component: Cart},
    { path: '/about', component: About},
    { path: '/detail', component: ProductDetail},
    { path: '/login', component: Login, children : [
        { path: 'signin', component: Signin },
        { path: 'signup', component: Singup }
    ]},
    // { path: '/signin', component: SignIn, layout: NullLayout}
]

export const adminRoutes = [
    { path: '/adminhome', component: Adminhome},
    { path: '/createproduct', component: CreateProduct},
    { path: '/producttable', component: ProductTable},
    { path: '/usertable', component: UserTable},
    { path: '/updateproduct', component: UpdateProduct},
    { path: '/createbrand', component: CreateBrand},
    { path: '/brandtable', component: BrandTable},
    { path: '/categorytable', component: CategoryTable},
    { path: '/createcategory', component: CreateCategory},
]