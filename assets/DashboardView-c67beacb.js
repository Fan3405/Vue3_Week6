import{S as n}from"./sweetalert2.all-657cdb30.js";import{_ as m,r as a,o as h,c as p,a as e,b as o,w as i,d as u,k as _,F as f}from"./index-b459b282.js";const{VITE_APP_URL:k}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zxcv123",BASE_URL:"/Vue3_Week6/",MODE:"production",DEV:!1,PROD:!0},V={methods:{logout(){document.cookie=`myToken=; myexpired=${new Date}; `,n.fire({title:"已登出",icon:"success",confirmButtonText:"OK"}),this.$router.push("/login")},checkAdmin(){const r=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=r,r?this.$http.post(`${k}v2/api/user/check`).then(()=>{}).catch(t=>{n.fire({title:t.response.data.message,icon:"error",confirmButtonText:"OK"}),this.$router.push("/login")}):(n.fire({title:"您尚未登入",icon:"error",confirmButtonText:"OK"}),this.$router.push("/login"))}},mounted(){this.checkAdmin()}},$=u("hr",null,null,-1);function x(r,t,T,P,g,c){const s=a("RouterLink"),d=a("RouterView");return h(),p(f,null,[e(" 這是後台頁面 "),o(s,{to:"/admin/adminProducts"},{default:i(()=>[e("後台產品列表")]),_:1}),e(" | "),o(s,{to:"/admin/adminOrders"},{default:i(()=>[e("後台訂單列表")]),_:1}),e(" | "),o(s,{to:"/"},{default:i(()=>[e("回前台首頁")]),_:1}),e(" | "),u("a",{href:"#",onClick:t[0]||(t[0]=_((...l)=>c.logout&&c.logout(...l),["prevent"]))},"登出"),$,o(d)],64)}const R=m(V,[["render",x]]);export{R as default};