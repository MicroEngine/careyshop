(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c6df6e0"],{"5ef3":function(t,e,_){"use strict";_.d(e,"a",(function(){return r})),_.d(e,"c",(function(){return n})),_.d(e,"d",(function(){return i})),_.d(e,"e",(function(){return d})),_.d(e,"b",(function(){return l}));var a=_("5530"),o=_("bc07"),s="/v1/payment";function r(t){return Object(o["a"])({url:s,method:"post",data:Object(a["a"])({method:"get.payment.list"},t)})}function n(t){return Object(o["a"])({url:s,method:"post",data:Object(a["a"])({method:"set.payment.item"},t)})}function i(t,e){return Object(o["a"])({url:s,method:"post",data:{method:"set.payment.sort",payment_id:t,sort:e}})}function d(t,e){return Object(o["a"])({url:s,method:"post",data:{method:"set.payment.status",payment_id:t,status:e}})}function l(t){return Object(o["a"])({url:s,method:"post",data:Object(a["a"])({method:"set.payment.finance"},t)})}},"665c":function(t,e,_){},a9bf:function(t,e,_){"use strict";var a=_("665c"),o=_.n(a);o.a},eb80:function(t,e,_){"use strict";_.r(e);var a=function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("cs-container",[t.orderData&&!t.loading?[_("cs-print",{ref:"print",staticClass:"print-main",attrs:{"css-text":[".cs-print {font-size: 12px;}"]}},["order"===t.type?t._l(t.orderData,(function(e,a){return _("div",{key:a,staticClass:"print-order"},[_("table",{staticStyle:{"border-top":"none",padding:"0"}},[_("tr",[_("th",[_("img",{attrs:{src:t.logo||t.$publicPath+"image/print/logo.png",alt:""}})]),_("th",{staticStyle:{width:"280px"},attrs:{valign:"bottom"}},[t._v("买家账号："+t._s(e.get_user.username))])])]),_("table",[_("tr",[_("th",[t._v("订单号："+t._s(e.order_no))]),_("th",{staticStyle:{width:"280px"}},[t._v("创建日期："+t._s(e.create_time))])])]),_("table",[_("colgroup",[_("col",{staticStyle:{width:"10%"}}),_("col",{staticStyle:{width:"35%"}}),_("col",{staticStyle:{width:"25%"}}),_("col",{staticStyle:{width:"10%"},attrs:{span:"3"}})]),_("thead",[_("tr",[_("th",[t._v("序号")]),_("th",[t._v("商品名称")]),_("th",[t._v("规格")]),_("th",[t._v("单价")]),_("th",[t._v("数量")]),_("th",[t._v("小计")])])]),_("colgroup",[_("col",{staticStyle:{width:"10%"}}),_("col",{staticStyle:{width:"35%"}}),_("col",{staticStyle:{width:"25%"}}),_("col",{staticStyle:{width:"10%"},attrs:{span:"3"}})]),_("tbody",{staticStyle:{"border-top":"1px solid #CCC"}},t._l(e.get_order_goods,(function(e,a){return _("tr",{key:a},[_("td",[t._v(t._s(a+1))]),_("td",[t._v(t._s(e.goods_name))]),_("td",[t._v(t._s(e.key_value||"-"))]),_("td",[t._v(t._s(t._f("getNumber")(e.shop_price)))]),_("td",[t._v(t._s(e.qty))]),_("td",[t._v(t._s(t._f("getNumber")(e.shop_price*e.qty)))])])})),0)]),_("table",[_("tbody",[_("tr",[_("td",[t._v("买家备注："+t._s(e.buyer_remark))]),_("td",{staticStyle:{width:"280px"}},[_("ul",[_("li",[t._v("总计："),_("span",[t._v(t._s(t._f("getNumber")(e.goods_amount)))])]),e.delivery_fee?_("li",[t._v("运费："),_("span",[t._v(t._s(t._f("getNumber")(e.delivery_fee)))])]):t._e(),e.invoice_amount?_("li",[t._v("开票："),_("span",[t._v(t._s(t._f("getNumber")(e.invoice_amount)))])]):t._e(),e.adjustment?_("li",[t._v("调整金额："),_("span",[t._v(t._s(t._f("getNumber")(e.adjustment)))])]):t._e(),e.use_money?_("li",[t._v("余额抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_money)))])]):t._e(),e.use_card?_("li",[t._v("购物卡抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_card)))])]):t._e(),e.use_level?_("li",[t._v("会员抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_level)))])]):t._e(),e.use_integral?_("li",[t._v("积分抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_integral)))])]):t._e(),e.use_coupon?_("li",[t._v("优惠劵抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_coupon)))])]):t._e(),e.use_discount?_("li",[t._v("商品折扣抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_discount)))])]):t._e(),e.use_promotion?_("li",[t._v("订单促销抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_promotion)))])]):t._e(),_("li",{staticClass:"cs-pb"},[t._v("应付金额："),_("span",[t._v(t._s(t._f("getNumber")(e.total_amount)))])]),_("li",[t._v("累计优惠："),_("span",[t._v(t._s(t._f("getNumber")(e.goods_amount-e.pay_amount)))])]),_("li",[t._v(t._s(t._f("getPaymentStatus")(e))+"："),_("span",[t._v(t._s(t._f("getNumber")(t._f("getPaymentAmount")(e))))])])])])])])]),_("table",[_("tr",[_("td",[t._v("付款方式："+t._s(t.toPayment[e.payment_code]))])]),_("tr",[_("td",[t._v("收货人姓名："+t._s(e.consignee))])]),_("tr",[_("td",[e.mobile?[t._v(" 收货人手机："+t._s(e.mobile)+" ")]:t._e(),e.tel?[t._v(" 电话："+t._s(e.tel)+" ")]:t._e()],2)]),_("tr",[_("td",[t._v(" 收货地址："+t._s(e.complete_address)+" "),e.zipcode?[t._v(" 邮编："+t._s(e.zipcode)+" ")]:t._e(),e.get_delivery?[t._v(" 配送方式："+t._s(e.get_delivery.alias)+" ")]:t._e()],2)]),e.invoice_type>0?_("tr",[_("td",[t._v(" 发票抬头："+t._s(e.invoice_title)+" "),2===e.invoice_type?[t._v(" 纳税人识别号："+t._s(e.tax_number)+" ")]:t._e()],2)]):t._e()]),_("table",[_("tr",[_("td",[_("img",{attrs:{src:t._f("getBarcode")(e.order_no),alt:""}})]),_("td",{staticStyle:{float:"right"}},[_("img",{attrs:{src:t._f("getQrcode")(e.order_no),alt:""}})])])])])})):t._e(),"out"===t.type?[_("div",{staticClass:"print-order"},[_("table",{staticStyle:{"border-top":"none",padding:"0"}},[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("h1",[t._v(t._s(t.name)+"出库单")])])])]),_("table",[_("colgroup",[_("col",{staticStyle:{width:"38%"}}),_("col",{staticStyle:{width:"23%"}}),_("col",{staticStyle:{width:"12%"},attrs:{span:"2"}}),_("col",{staticStyle:{width:"15%"}})]),_("thead",[_("tr",[_("th",[t._v("商品名称")]),_("th",[t._v("规格")]),_("th",[t._v("数量")]),_("th",[t._v("货号")]),_("th",[t._v("订单号")])])]),_("colgroup",[_("col",{staticStyle:{width:"38%"}}),_("col",{staticStyle:{width:"23%"}}),_("col",{staticStyle:{width:"12%"},attrs:{span:"2"}}),_("col",{staticStyle:{width:"15%"}})]),_("tbody",{staticStyle:{"border-top":"1px solid #CCC"}},t._l(t.outOrder,(function(e,a){return _("tr",{key:a},[_("td",[t._v(t._s(e.goods_name))]),_("td",[t._v(t._s(e.key_value||"-"))]),_("td",[t._v(t._s(e.qty))]),_("td",[t._v(t._s(e.goods_code))]),_("td",t._l(e.order_no,(function(e,a){return _("span",{key:a},[t._v(" "+t._s(e)),_("br")])})),0)])})),0)]),_("table",[_("tr",[_("td",{staticStyle:{"text-align":"right"}},[t._v("出库日期："+t._s(t.getNowTime()))])])])])]:t._e(),"delivery"===t.type?t._l(t.orderData,(function(e,a){return _("div",{key:a,staticClass:"print-order"},[_("table",{staticStyle:{"border-top":"none",padding:"0"}},[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("h1",[t._v(t._s(t.name)+"，感谢您的惠顾")])])])]),_("table",[_("tr",[_("td",[t._v("订单号："+t._s(e.order_no))]),_("td",[t._v("创建日期："+t._s(e.create_time))])]),_("tr",[_("td",[t._v("收货人姓名："+t._s(e.consignee))]),_("td",[e.mobile?[t._v(" 手机："+t._s(e.mobile)+" ")]:t._e(),e.tel?[t._v(" 电话："+t._s(e.tel)+" ")]:t._e()],2)]),_("tr",[_("td",{attrs:{colspan:"2"}},[t._v(" 收货地址："+t._s(e.complete_address)+" "),e.zipcode?[t._v(" 邮编："+t._s(e.zipcode)+" ")]:t._e()],2)]),e.invoice_type>0?_("tr",[_("td",{attrs:{colspan:"2"}},[t._v(" 发票抬头："+t._s(e.invoice_title)+" "),2===e.invoice_type?[t._v(" 纳税人识别号："+t._s(e.tax_number)+" ")]:t._e()],2)]):t._e(),_("tr",[_("td",{attrs:{colspan:"2"}},[t._v("买家备注："+t._s(e.buyer_remark))])])]),_("table",[_("colgroup",[_("col",{staticStyle:{width:"40%"}}),_("col",{staticStyle:{width:"30%"}}),_("col",{staticStyle:{width:"10%"},attrs:{span:"3"}})]),_("thead",[_("tr",[_("th",[t._v("商品名称")]),_("th",[t._v("规格")]),_("th",[t._v("数量")]),_("th",[t._v("金额")]),_("th",[t._v("发货")])])]),_("colgroup",[_("col",{staticStyle:{width:"40%"}}),_("col",{staticStyle:{width:"30%"}}),_("col",{staticStyle:{width:"10%"},attrs:{span:"3"}})]),_("tbody",{staticStyle:{"border-top":"1px solid #CCC"}},t._l(e.get_order_goods,(function(e,a){return _("tr",{key:a},[_("td",[t._v(t._s(e.goods_name))]),_("td",[t._v(t._s(e.key_value||"-"))]),_("td",[t._v(t._s(e.qty))]),_("td",[t._v(t._s(t._f("getNumber")(e.shop_price)))]),_("td",[t._v(t._s(t.statusMap[e.status]))])])})),0)]),_("table",[_("tbody",[_("tr",[_("td"),_("td",{staticStyle:{width:"280px"}},[_("ul",[_("li",[t._v("总计："),_("span",[t._v(t._s(t._f("getNumber")(e.goods_amount)))])]),e.delivery_fee?_("li",[t._v("运费："),_("span",[t._v(t._s(t._f("getNumber")(e.delivery_fee)))])]):t._e(),e.invoice_amount?_("li",[t._v("开票："),_("span",[t._v(t._s(t._f("getNumber")(e.invoice_amount)))])]):t._e(),e.adjustment?_("li",[t._v("调整金额："),_("span",[t._v(t._s(t._f("getNumber")(e.adjustment)))])]):t._e(),e.use_money?_("li",[t._v("余额抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_money)))])]):t._e(),e.use_card?_("li",[t._v("购物卡抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_card)))])]):t._e(),e.use_level?_("li",[t._v("会员抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_level)))])]):t._e(),e.use_integral?_("li",[t._v("积分抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_integral)))])]):t._e(),e.use_coupon?_("li",[t._v("优惠劵抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_coupon)))])]):t._e(),e.use_discount?_("li",[t._v("商品折扣抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_discount)))])]):t._e(),e.use_promotion?_("li",[t._v("订单促销抵扣："),_("span",[t._v("-"+t._s(t._f("getNumber")(e.use_promotion)))])]):t._e(),_("li",{staticClass:"cs-pb"},[t._v("应付金额："),_("span",[t._v(t._s(t._f("getNumber")(e.total_amount)))])]),_("li",[t._v("累计优惠："),_("span",[t._v(t._s(t._f("getNumber")(e.goods_amount-e.pay_amount)))])]),_("li",[t._v(t._s(t._f("getPaymentStatus")(e))),_("span",[t._v(t._s(t._f("getNumber")(t._f("getPaymentAmount")(e))))])])])])])])]),_("table",[_("tr",[_("td",{staticClass:"pre-text"},[t._v(t._s(t.information))])])]),_("table",[_("tr",[_("td",[_("img",{attrs:{src:t._f("getBarcode")(e.order_no),alt:""}})]),_("td",{staticStyle:{float:"right"}},[_("img",{attrs:{src:t._f("getQrcode")(e.order_no),alt:""}})])])])])})):t._e()],2)]:t._e(),_("template",{slot:"footer"},[_("div",{staticStyle:{margin:"-10px 0"}},[_("el-button",{attrs:{type:"primary",size:"small",loading:t.loading},on:{click:function(e){return t.$refs.print.toPrint()}}},[t._v("打印")]),_("el-button",{attrs:{size:"small"},on:{click:t.handleClose}},[t._v("取消")])],1)])],2)},o=[],s=(_("99af"),_("4160"),_("caad"),_("b0c0"),_("d3b7"),_("2532"),_("3ca3"),_("159b"),_("ddb0"),_("b85c")),r=_("5530"),n=_("6e85"),i=_.n(n),d=_("ca00"),l=_("5880"),c=_("3766"),u=_("5ef3"),v={name:"order-admin-print",components:{csPrint:function(){return _.e("chunk-2d238a43").then(_.bind(null,"fff3"))}},computed:{outPrint:function(){var t=this.type,e=this.orderData;return{type:t,orderData:e}}},props:{type:{type:String,required:!1},orderData:{type:Array,required:!1}},data:function(){return{loading:!1,outOrder:{},toPayment:{},logo:"",name:"",information:"",statusMap:{0:"待发货",1:"已发货",2:"已收货",3:"已取消"}}},filters:{getNumber:function(t){return d["a"].getNumber(t)},getBarcode:function(t){return d["a"].getBarcodeUrl(t)},getQrcode:function(t){return d["a"].getQrcodeUrl(t)},getPaymentStatus:function(t){return t.trade_status||t.payment_status?"实付款":"预付款"},getPaymentAmount:function(t){return t.trade_status||t.payment_status?4!==t.trade_status?t.total_amount+t.use_money+t.use_integral+t.use_card:void 0:t.use_money+t.use_integral+t.use_card}},watch:{outPrint:{handler:function(t){"out"===t.type&&(this.outOrder={},this.handleOutOrder())},immediate:!0}},activated:function(){this.orderData||(this.$router.push({name:"index"}),this.handleClose())},mounted:function(){var t=this,e=[Object(c["a"])("system_info",["logo","name","information"])];"order"===this.type&&e.push(Object(u["a"])({is_select:1,exclude_code:[4,5,6]})),this.loading=!0,Promise.all(e).then((function(e){if(e[0])for(var _ in e[0].data)Object.prototype.hasOwnProperty.call(e[0].data,_)&&("logo"!==_?t[_]=e[0].data[_].value:t.logo=d["a"].checkUrl(e[0].data[_].value));e[1]&&e[1].data.forEach((function(e){t.toPayment[e.code]=e.name}))})).finally((function(){t.loading=!1}))},methods:Object(r["a"])(Object(r["a"])({},Object(l["mapActions"])("careyshop/page",["close"])),{},{handleClose:function(){this.close({tagName:this.$route.fullPath})},getNowTime:function(){return i()().format("YYYY-MM-DD HH:mm:ss")},handleOutOrder:function(){var t={};this.orderData.forEach((function(e){var _,a=Object(s["a"])(e.get_order_goods);try{for(a.s();!(_=a.n()).done;){var o=_.value,r="".concat(o.goods_id,"-").concat(o.key_name);Object.prototype.hasOwnProperty.call(t,r)?(t[r].qty+=o.qty,t[r].order_no.includes(o.order_no)||t[r].order_no.push(o.order_no)):t[r]={order_no:[o.order_no],goods_name:o.goods_name,goods_code:o.goods_code,key_value:o.key_value,qty:o.qty}}}catch(n){a.e(n)}finally{a.f()}})),this.outOrder=t}})},p=v,m=(_("a9bf"),_("2877")),y=Object(m["a"])(p,a,o,!1,null,"dcc8c858",null);e["default"]=y.exports}}]);