"use strict";(self["webpackChunkVietFarm"]=self["webpackChunkVietFarm"]||[]).push([[817],{6790:function(t,l,n){n.d(l,{Z:function(){return c}});var e=n(3396),a=n(7139);const u={class:"sub-heading"};function r(t,l,n,r,o,d){return(0,e.wg)(),(0,e.iD)("div",u,[(0,e._)("h2",null,(0,a.zw)(n.heading),1),(0,e._)("p",null,(0,a.zw)(n.subHeading),1)])}var o={name:"SubHeader",props:{heading:String,subHeading:String}},d=n(89);const i=(0,d.Z)(o,[["render",r],["__scopeId","data-v-1da2b643"]]);var c=i},5202:function(t,l,n){n.r(l),n.d(l,{default:function(){return B}});var e=n(3396),a=n(7139),u=n(9242),r=n.p+"img/empty-cart.4f67d684.svg";const o=t=>((0,e.dD)("data-v-df813da8"),t=t(),(0,e.Cn)(),t),d={class:"cart-section"},i={class:"container"},c={key:0},s={class:"cart-details"},_=o((()=>(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("td",null,"Xóa"),(0,e._)("td",null,"Ảnh"),(0,e._)("td",null,"Sản phẩm"),(0,e._)("td",null,"Giá"),(0,e._)("td",null,"Số lượng"),(0,e._)("td",null,"Đơn giá")])],-1))),p=["onClick"],m=o((()=>(0,e._)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},null,-1))),h=o((()=>(0,e._)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"},null,-1))),g=[m,h],v=["src","alt"],w=["onUpdate:modelValue","onInput"],b={class:"checkout-section"},f={class:"coupon"},y=o((()=>(0,e._)("h3",null,"Apply Coupon",-1))),k=o((()=>(0,e._)("input",{type:"text",placeholder:"Enter coupon code"},null,-1))),C={class:"checkout"},z=o((()=>(0,e._)("h3",null,"Cart Details",-1))),D=o((()=>(0,e._)("td",null,"Cart Total",-1))),S=o((()=>(0,e._)("tr",null,[(0,e._)("td",null,"Shipping Fee"),(0,e._)("td",null,"Free")],-1))),H=o((()=>(0,e._)("td",null,[(0,e._)("strong",null,"Total")],-1))),P={key:1,class:"no-cart"},W=o((()=>(0,e._)("div",{class:"no-cart-text"},[(0,e._)("img",{src:r,alt:"empty-cart"}),(0,e._)("h3",null,"Your cart is empty!"),(0,e._)("p",null,"Browse our shop and discover our latest products.")],-1)));function q(t,l,n,r,o,m){const h=(0,e.up)("main-header"),q=(0,e.up)("sub-header"),Z=(0,e.up)("action-button"),x=(0,e.up)("router-link"),A=(0,e.up)("main-footer");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(h),(0,e.Wm)(q,{heading:"#cart",subHeading:"Add your coupon code and save up to 70% on all purchases!"}),(0,e._)("section",d,[(0,e._)("div",i,[t.cart.length?((0,e.wg)(),(0,e.iD)("section",c,[(0,e._)("div",s,[(0,e._)("table",null,[_,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.cart,((t,l)=>((0,e.wg)(),(0,e.iD)("tr",{key:l},[(0,e._)("td",null,[((0,e.wg)(),(0,e.iD)("svg",{onClick:t=>m.deleteItem(l),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle delete-btn",viewBox:"0 0 16 16"},g,8,p))]),(0,e._)("td",null,[(0,e._)("img",{src:t.images[0],alt:t.brand,class:"img"},null,8,v)]),(0,e._)("td",null,(0,a.zw)(t.name),1),(0,e._)("td",null,(0,a.zw)(m.formattedPrice(t.price,t.currency)),1),(0,e._)("td",null,[(0,e.wy)((0,e._)("input",{type:"number","onUpdate:modelValue":l=>t.quantity=l,placeholder:"QTY",min:"1",max:"10",onInput:l=>m.updateTotalPrice(t)},null,40,w),[[u.nr,t.quantity]])]),(0,e._)("td",null,(0,a.zw)(m.formattedPrice(t.quantity*t.price,t.currency)),1)])))),128))])])]),(0,e._)("div",b,[(0,e._)("div",f,[y,(0,e._)("form",null,[k,(0,e.Wm)(Z,{btnvalue:"Apply"})])]),(0,e._)("div",C,[z,(0,e._)("table",null,[(0,e._)("thead",null,[(0,e._)("tr",null,[D,(0,e._)("td",null,(0,a.zw)(m.formattedPrice(t.subtotal)),1)])]),(0,e._)("tbody",null,[S,(0,e._)("tr",null,[H,(0,e._)("td",null,[(0,e._)("strong",null,(0,a.zw)(m.formattedPrice(t.subtotal)),1)])])])]),(0,e.Wm)(x,{to:"/checkout"},{default:(0,e.w5)((()=>[(0,e.Wm)(Z,{btnvalue:"Proceed to Checkout"})])),_:1})])])])):((0,e.wg)(),(0,e.iD)("div",P,[W,(0,e.Wm)(x,{to:"/shop"},{default:(0,e.w5)((()=>[(0,e.Wm)(Z,{btnvalue:"Start Shopping"})])),_:1})]))])]),(0,e.Wm)(A)],64)}var Z=n(6790),x=n(664),A=n(5076),I=n(6917),V=n(65),F=n(2361),T=n.n(F),L={components:{SubHeader:Z.Z,ActionButton:x.Z,MainHeader:A.Z,MainFooter:I.Z},name:"CartView",data(){return{total:0}},methods:{...(0,V.nv)(["delete_item","update_quantity"]),deleteItem(t){this.delete_item(t)},updateTotalPrice(t){this.update_quantity(t),this.cart.forEach((t=>{this.total+=t.quantity*t.price}))}},computed:{...(0,V.rn)(["cart"]),...(0,V.Se)(["subtotal"]),formattedPrice(){return(t,l)=>void 0!=l?T()(t).format("0,0")+" "+l:T()(t).format("0,0")+" VND"}},mounted(){this.cart.forEach((t=>{this.total+=t.quantity*t.price}))}},M=n(89);const Y=(0,M.Z)(L,[["render",q],["__scopeId","data-v-df813da8"]]);var B=Y}}]);
//# sourceMappingURL=817.2c9189a9.js.map