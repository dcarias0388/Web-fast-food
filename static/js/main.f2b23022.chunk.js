(this["webpackJsonpfast-food"]=this["webpackJsonpfast-food"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(19),r=a.n(n),i=a(15),l=a(27),o=(a(75),a.p+"static/media/Carrusel1.5f056dd3.jpg"),j=a.p+"static/media/Carrusel2.d06e6e07.jpg",d=a.p+"static/media/Carrusel3.d22326b4.jpg",b=a.p+"static/media/Carrusel4.7fc857b5.jpg",h=a.p+"static/media/Carrusel5.a05d5381.jpg",u=a(1);var O=function(){return Object(u.jsx)("div",{className:"Carrusel",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100 imgCarrusel",src:o,alt:"First plate"})}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100 imgCarrusel",src:j,alt:"Second plate"})}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100 imgCarrusel",src:d,alt:"Third plate"})}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100 imgCarrusel",src:b,alt:"Fourth plate"})}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100 imgCarrusel",src:h,alt:"Five plate"})})]})})},m=a(12),x=a(24),p=(a(77),a(107)),f=a(108),g=a(109),N=a(112),v=a(110),C=a(111),y=a(22),E=a(3),S="ADD_TO_CART",R="DELETE_FROM_CART",k="TOTAL_PRICE",T="OPEN_COLLAPSE",w="STORE_ALL",q="SENDING_REQUEST",A="REQUEST_DATA",F="REQUEST_ERROR",D="SEARCH_TABLET",L="CHARACTER_RESULTS",P="ADD_ORDEN",_=function(e){return function(t){t({type:R,payload:e})}},M=function(e,t){return function(a){a(function(e){return{type:S,payload:e}}(Object(E.a)(Object(E.a)({},e),{},{qty:t})))}},I=function(){return function(e){e({type:k})}},B=function(){return function(e){e({type:T})}},G=function(){return function(e){return e({type:q,payload:{loading:!0}}),fetch("json/tablets.json").then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(t){e(function(e){return{type:A,payload:{list:e,loading:!1}}}(t))})).catch((function(t){e(function(e){return{type:F,payload:{error:e,loading:!1}}}(t))}))}},H=a(28),z=a.n(H),U=a(66),Q=a(39),W=(a(80),a(23)),K=a.n(W);var V=Object(i.b)((function(e){return{shoppingCart:e.cartReducer.shoppingCart,total:e.cartReducer.total,open:e.cartReducer.open}}),{deleteFromCart:_,totalAcc:I,openCollapse:B})((function(e){var t=e.shoppingCart,a=e.deleteFromCart,n=e.totalAcc,r=e.total,i=e.openCollapse;return Object(c.useEffect)((function(){n()}),[n,t]),Object(u.jsxs)("div",{id:"example-collapse-text",className:"Contenedor",children:[t&&t.length?t.map((function(e){return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)("div",{className:"imagen",children:Object(u.jsx)("img",{src:e.imagen,className:"img-cart",alt:"Tablet Ordenado"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"tabName",style:{fontWeight:"bolder"},children:e.principal}),Object(u.jsxs)("p",{className:"tabQty",style:{fontWeight:"bolder"},children:["Cantidad: ",Object(u.jsx)("span",{children:e.qty})]}),Object(u.jsxs)("p",{className:"tabTotal",style:{fontWeight:"bolder"},children:["Subtotal: ",Object(u.jsx)("span",{children:e.qty*e.precio}),Object(u.jsx)(y.b,{})]}),Object(u.jsx)("button",{className:"botonElim",onClick:function(){return a(e.id)},children:Object(u.jsx)(Q.a,{style:{width:"20px",height:"20px"}})})]})]},e.id)})):"",Object(u.jsx)("div",{className:"lineaizq"}),Object(u.jsx)("div",{className:"lineader"}),Object(u.jsx)("div",{children:Object(u.jsx)("p",{className:"total",style:{fontWeight:"bolder"},children:"Total a Pagar:"})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{className:"totalPrice",style:{fontWeight:"bolder"},children:[r,Object(u.jsx)(y.b,{})]}),Object(u.jsx)(x.b,{className:"btn btn-success botonPage",to:"/pagar",onClick:function(e){return function(e){0===r?(e.preventDefault(),K.a.fire({text:"El carrito esta vac\xedo, selecciona los tablets.",icon:"warning",showConfirmButton:!1,timer:2e3})):i()}(e)},children:"Pagar"})]})]})})),J=a.p+"static/media/icon.0d4acf1e.png",X=Object(i.b)((function(e,t){return{section:t.section,list:e.tabletReducer.list,shoppingCart:e.cartReducer.shoppingCart,open:e.cartReducer.open,tabletSearch:e.tabletReducer.tabletSearch}}),{openCollapse:B,updateSearch:function(e){return function(t){t({type:D,payload:e})}},resultsSearch:function(e){return function(t){t({type:L,payload:e})}}})((function(e){var t=e.shoppingCart,a=e.openCollapse,n=e.open,r=e.updateSearch,i=e.tabletSearch,l=e.resultsSearch,o=e.list,j=Object(c.useState)(!1),d=Object(m.a)(j,2),b=d[0],h=d[1],O=function(){return t.reduce((function(e,t){return e+t.qty}),0)};return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)(p.a,{className:"navBar",dark:!0,expand:"lg",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)(f.a,{href:"/fast-food/",className:"me-0 w-50 textVar",children:["Fast Food ",Object(u.jsx)("img",{src:J,className:"iconVar",alt:"icon"})," ","Restaurant"]}),Object(u.jsx)(g.a,{onClick:function(){h(!b)},className:"ms-auto"}),Object(u.jsxs)(N.a,{isOpen:b,navbar:!0,children:[Object(u.jsxs)(v.a,{className:"ms-auto",navbar:!0,children:[Object(u.jsx)(C.a,{children:Object(u.jsx)(x.c,{className:"nav-link",to:"/",activeClassName:"active",children:"Inicio"})}),Object(u.jsx)(C.a,{children:Object(u.jsx)(x.c,{className:"nav-link",to:"/tablets",children:"Tablets"})}),Object(u.jsx)(C.a,{children:Object(u.jsx)(x.c,{className:"nav-link",to:"/contact",children:"Contacto"})}),Object(u.jsx)(C.a,{children:Object(u.jsxs)("button",{className:"Cart nav-link me-2",type:"button","aria-controls":"example-collapse-text","aria-expanded":n,onClick:a,children:[Object(u.jsx)(y.a,{}),Object(u.jsx)("div",{className:"cart-amount ".concat(0===O()?"hide":""),children:Object(u.jsx)("span",{children:0===O()?"":O()})})]})})]}),Object(u.jsxs)("form",{className:"d-flex",children:[Object(u.jsx)("input",{className:"form-control me-1",type:"text",name:"search",value:i,placeholder:"Buscar","aria-label":"Search",onChange:function(e){r(e.target.value)}}),Object(u.jsx)(x.c,{className:"btn btn-outline-warning",to:"/search",onClick:function(e){return function(e){if(""===i)return e.preventDefault(),z()({text:"Seleccione un criterio de b\xfasqueda.",icon:"warning",buttons:!1,timer:2e3});var t=new U.a(o,{keys:["tablet","entrante","principal","postre","liquido"],threshold:.1}).search(i),a=t?t.map((function(e){return e.item})):[];l(a)}(e)},children:"Buscar"})]})]})]})}),Object(u.jsx)(N.a,{isOpen:n,className:"Colapse",children:Object(u.jsx)(V,{})})]})}));a(33);var Y=Object(i.b)((function(e){return{}}),{})((function(e){var t=e.data,a=e.addToCart,s=Object(c.useState)(0),n=Object(m.a)(s,2),r=n[0],i=n[1];return Object(u.jsxs)("div",{className:"card",style:{maxHeight:"80vh"},children:[Object(u.jsx)("img",{src:t.imagen,className:"card-img-top",alt:"Men\xfa Dirigido"}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("p",{className:"card-text",children:t.entrante}),Object(u.jsx)("p",{className:"card-text platprinc",children:t.principal}),Object(u.jsx)("p",{className:"card-text",children:t.postre}),Object(u.jsx)("p",{className:"card-text",children:t.liquido}),Object(u.jsxs)("p",{className:"Precio",children:[t.precio," ",Object(u.jsx)(y.b,{})," "]}),Object(u.jsxs)("div",{className:"btn-grouper",children:[Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("button",{className:"btn btn-warning",type:"button",onClick:function(){r>0&&i(r-1)},children:"-"}),Object(u.jsx)("input",{type:"text",className:"Quantity",value:r,onChange:function(e){var t=e.target;i(t)}}),Object(u.jsx)("button",{className:"btn btn-warning strong",type:"button",onClick:function(){return i(r+1)},children:"+"})]}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{className:"btn btn-dark mt-3",type:"button",onClick:function(){a(t,r),i(0)},children:[Object(u.jsx)(y.a,{})," Agregar Orden"]})})]})]})]})})),Z=(a(99),a(47)),$=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],s=t[1];return Object(u.jsx)("div",{className:"main-footer",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"footerGeneral",children:[Object(u.jsxs)("div",{className:"footerInfo",children:[Object(u.jsxs)("div",{className:"easyInfo left",children:[Object(u.jsxs)("h6",{className:"section-block",children:["Lunes-S\xe1bado",Object(u.jsx)("span",{className:"heading-span",children:"11AM-11PM"})]}),Object(u.jsxs)("h6",{className:"section-block",children:["Domingo",Object(u.jsx)("span",{className:"heading-span",children:"11AM-3PM"})]})]}),Object(u.jsx)("div",{className:"easyInfo right",children:Object(u.jsxs)("h6",{className:"section-block",children:[Object(u.jsx)("a",{className:"phone",href:"tel:42519274",children:"(43) 51-9274"}),Object(u.jsx)("span",{className:"heading-span",children:"Calle 55 #5109-A e/Ave 56 y 58"})]})})]}),Object(u.jsxs)("div",{className:"infoForm",children:[Object(u.jsx)("p",{children:"Si quieres estar al tanto de todas las novedades de nuestro men\xfa y servicios en oferta entonces, reg\xedstrese gratuitamente a nuestra lista de correo a trav\xe9s del siguiente formulario."}),Object(u.jsx)("p",{children:"Subscr\xedbete:"}),Object(u.jsxs)("form",{className:"formEmail",children:[Object(u.jsx)("label",{htmlFor:"input-email",children:"Correo Electronico"}),Object(u.jsx)("input",{id:"input-email",type:"email",name:"email",value:a,placeholder:"Correo Electr\xf3nico",className:"inputEmail",onChange:function(e){s(e.target.value)},required:!0}),Object(u.jsx)("button",{className:"btn btn-outline-warning btnEmail",type:"submit",onClick:function(e){""!==a&&(e.preventDefault(),z()({text:"Se ha subscrito satisfactoriamente.",icon:"success",buttons:!1,timer:2e3}),s(""))},children:"Enviar"})]})]}),Object(u.jsxs)("div",{className:"footerRedes",children:[Object(u.jsxs)("h6",{className:"section-block-redes",children:[Object(u.jsx)("span",{className:"heading-span",children:"SIGUENOS"}),Object(u.jsx)("a",{href:"https://instagram.com",target:"_parent",className:"refIcon",children:Object(u.jsx)("i",{children:Object(u.jsx)(Z.b,{})})}),Object(u.jsx)("a",{href:"https://facebook.com",target:"_parent",className:"refIcon",children:Object(u.jsx)("i",{children:Object(u.jsx)(Z.a,{})})}),Object(u.jsx)("a",{href:"https://twitter.com",target:"_parent",className:"refIcon",children:Object(u.jsx)("i",{children:Object(u.jsx)(Z.c,{})})})]}),Object(u.jsxs)("p",{className:"text-xs-center",children:["\xa9",(new Date).getFullYear()," Fast Food - All Rights Reserved"]})]})]})})})},ee=a(63),te=a.n(ee),ae=(a(100),Object(i.b)((function(e){return{list:e.tabletReducer.list,shoppingCart:e.cartReducer.shoppingCart}}),{fetchData:G,addTablet:M})((function(e){var t=e.list,a=e.fetchData,s=e.addTablet;te.a.init(),Object(c.useEffect)((function(){a()}),[a]);var n=function(e,t){s(e,t),K.a.fire({text:"Se ha a\xf1adido ".concat(t," tablet al pedido."),icon:"success",showConfirmButton:!1,timer:2e3})};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(X,{}),Object(u.jsx)(O,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"sugerencia aos-init aos-animate","data-aos":"zoom-in","data-aos-duration":"1000",children:Object(u.jsxs)("h3",{className:"section-heading",children:["Sugerencias",Object(u.jsx)("em",{children:"del Chef"})]})}),Object(u.jsx)("div",{className:"rowShow",children:Object(u.jsx)("div",{className:"row aos-init aos-animate rowPrincipal","data-aos":"zoom-in","data-aos-duration":"1000",children:t&&t.length?t.map((function(e){return!0===e.sugerencia?Object(u.jsx)("div",{className:"col-md-4 mb-4 mt-4",children:Object(u.jsx)(Y,{data:e,addToCart:n})},e.id):null})):""})})]}),Object(u.jsx)($,{})]})}))),ce=(a(101),a(13)),se=a(17),ne=Object(i.b)((function(e){return{list:e.tabletReducer.list,loading:e.tabletReducer.loading,error:e.tabletReducer.error}}),{addTablet:M,fetchData:G})((function(e){var t=e.list,a=e.loading,s=e.error,n=e.addTablet,r=e.fetchData;Object(c.useEffect)((function(){r()}),[r]);var i=function(e,t){n(e,t),K.a.fire({text:"Se ha a\xf1adido ".concat(t," tablet al pedido."),icon:"success",showConfirmButton:!1,timer:2e3})};return Object(u.jsxs)("div",{className:"listing",children:[Object(u.jsx)(X,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"sugerencia",children:Object(u.jsxs)("h3",{className:"section-heading",children:["Men\xfa",Object(u.jsx)("em",{children:"de Tablet"})]})}),a?"Cargando datos...":"",s?"Recibido error:"+s:"",Object(u.jsxs)(se.a,{className:"divAcordion",flush:!0,children:[Object(u.jsxs)(se.a.Item,{eventKey:"0",children:[Object(u.jsx)(se.a.Header,{children:"Carnes (cerdo, res y carnero)"}),Object(u.jsx)(se.a.Body,{children:Object(u.jsx)("div",{className:"row mt-3",children:t&&t.length?t.map((function(e){return e.tablet.includes("Carne")?Object(u.jsx)("div",{className:"col-md-4 mb-4 mt-4",children:Object(u.jsx)(Y,{data:e,addToCart:i})},e.id):""})):""})})]}),Object(u.jsxs)(se.a.Item,{eventKey:"1",children:[Object(u.jsx)(se.a.Header,{children:"Aves (pollo)"}),Object(u.jsx)(se.a.Body,{children:Object(u.jsx)("div",{className:"row mt-4",children:t&&t.length?t.map((function(e){return e.tablet.includes("Ave")?Object(u.jsx)("div",{className:"col-md-4 mb-4 mt-4",children:Object(u.jsx)(Y,{data:e,addToCart:i})},e.id):""})):""})})]}),Object(u.jsxs)(se.a.Item,{eventKey:"2",children:[Object(u.jsx)(se.a.Header,{children:"Pastas (espaguetis y pizza)"}),Object(u.jsx)(se.a.Body,{children:Object(u.jsx)("div",{className:"row mt-4",children:t&&t.length?t.map((function(e){return e.tablet.includes("Pasta")?Object(u.jsx)("div",{className:"col-md-4 mb-4 mt-4",children:Object(u.jsx)(Y,{data:e,addToCart:i})},e.id):""})):""})})]}),Object(u.jsxs)(se.a.Item,{eventKey:"3",children:[Object(u.jsx)(se.a.Header,{children:"Pescados y Mariscos (langosta y camarones)"}),Object(u.jsx)(se.a.Body,{children:Object(u.jsx)("div",{className:"row mt-4",children:t&&t.length?t.map((function(e){return e.tablet.includes("Marisco")?Object(u.jsx)("div",{className:"col-md-4 mb-4 mt-4",children:Object(u.jsx)(Y,{data:e,addToCart:i})},e.id):""})):""})})]})]})]}),Object(u.jsx)($,{})]})})),re=(a(102),a(8)),ie=a(41),le=a.p+"static/media/Mapa.4402b064.png";var oe=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(X,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"headingContact",children:"Cont\xe1ctenos"}),Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)("div",{className:"form-contact",children:Object(u.jsxs)(re.a,{children:[Object(u.jsxs)(re.a.Group,{className:"mb-2 input-names",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(re.a.Label,{children:"Nombre"}),Object(u.jsx)(re.a.Control,{type:"text",id:"name",className:"input-datos"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(re.a.Label,{children:"Apellidos"}),Object(u.jsx)(re.a.Control,{type:"text",id:"apellidos",className:"input-datos"})]})]}),Object(u.jsxs)(re.a.Group,{className:"mb-2",children:[Object(u.jsx)(re.a.Label,{children:"Email"}),Object(u.jsx)(re.a.Control,{type:"email",id:"name"})]}),Object(u.jsxs)(re.a.Group,{className:"mb-2",children:[Object(u.jsx)(re.a.Label,{children:"Mensaje"}),Object(u.jsx)(re.a.Control,{as:"textarea",row:4})]}),Object(u.jsx)(ie.a,{variant:"primary",type:"submit",className:"enviar-msg",children:"Enviar"})]})}),Object(u.jsx)("div",{className:"map-contact",children:Object(u.jsxs)("div",{className:"section-info",children:[Object(u.jsxs)("h5",{children:["Restaurante ",Object(u.jsx)("b",{children:"Fast Food"})]}),Object(u.jsx)("p",{className:"text-direction",children:"(43) 51-9274"}),Object(u.jsx)("p",{className:"text-direction",children:"Calle 55 #5609-A e/56 y 58"}),Object(u.jsx)("p",{children:"La Juanita, Cienfuegos, Cuba"}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:le,alt:"Mapa Ubicaci\xf3n",className:"map-imagen"})})]})})]})]}),Object(u.jsx)($,{})]})},je=a(64),de=(a(103),a(48)),be=a.p+"static/media/qr-code.1c969dc6.png";var he=Object(i.b)((function(e){return{shoppingCart:e.cartReducer.shoppingCart,total:e.cartReducer.total}}),{deleteFromCart:_,totalAcc:I,addOrden:function(){return function(e){e({type:P})}}})((function(e){var t=e.shoppingCart,a=e.deleteFromCart,n=e.total,r=e.addOrden,i=Object(ce.f)(),l=new Date,o=l.getDate(),j=l.getMonth()+1,d=l.getFullYear();o<10&&(o="0"+o),j<10&&(j="0"+j),l=d+"-"+j+"-"+o;for(var b=[],h=[],O=1;O<13;O++)b.push(O);for(var x=0;x<60;x++)x<10?h.push("0"+x):h.push(x);var p=Object(c.useState)(l),f=Object(m.a)(p,2),g=f[0],v=f[1],C=Object(c.useState)(""),E=Object(m.a)(C,2),S=E[0],R=E[1],k=Object(c.useState)(!1),T=Object(m.a)(k,2),w=T[0],q=T[1],A=Object(c.useState)(""),F=Object(m.a)(A,2),D=F[0],L=F[1],P=Object(c.useState)(!1),_=Object(m.a)(P,2),M=_[0],I=_[1],B=Object(c.useState)(""),G=Object(m.a)(B,2),H=G[0],z=G[1];return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)(X,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{className:"form-header",children:"\xa1Gracias por elegirnos!"}),Object(u.jsx)("p",{className:"form-p",children:"Una vez seleccionado el Men\xfa, le mostramos la Orden generada, asi como los datos que necesita llenar para poder confirmar el pedido y el pago del mismo. Esperamos disfrute de nuestro servicio de Fast Food."}),Object(u.jsx)("div",{className:"formulario",children:Object(u.jsxs)(re.a,{onSubmit:function(e){t&&0!==t.length?!0!==w||"Efectivo"!==H&&"Transferencia"!==H?(K.a.fire({text:"Especifique el m\xe9todo de entrega y de pago.",icon:"warning",showConfirmButton:!1,timer:3e3}),e.preventDefault()):(K.a.fire({text:"Su pedido se ha recibido satisfactoriamente.",icon:"success",showConfirmButton:!1,timer:3e3}),e.preventDefault(),r(),i.push("/tablets")):(K.a.fire({text:"No existen tablets en su orden.",icon:"warning",showConfirmButton:!1,timer:3e3}),e.preventDefault())},children:[Object(u.jsxs)(re.a.Group,{className:"mb-3",children:[Object(u.jsxs)(re.a.Label,{children:["Nombre y Apellidos",Object(u.jsx)("span",{className:"form-required",children:"*"})]}),Object(u.jsxs)("div",{className:"form-name",children:[Object(u.jsx)(re.a.Control,{type:"text",className:"input-name",placeholder:"Nombre",required:!0}),Object(u.jsx)(re.a.Control,{type:"text",className:"input-lastname",placeholder:"Apellidos"})]})]}),Object(u.jsxs)(re.a.Group,{className:"mb-3",children:[Object(u.jsxs)(re.a.Label,{children:["Email",Object(u.jsx)("span",{className:"form-required",children:"*"})]}),Object(u.jsx)(re.a.Control,{type:"email",className:"input-email",placeholder:"Enter email",required:!0}),Object(u.jsx)(re.a.Text,{className:"text-muted",children:"Nunca compartiremos su correo electr\xf3nico con nadie m\xe1s."})]}),Object(u.jsxs)(re.a.Group,{className:"mb-3",children:[Object(u.jsxs)(re.a.Label,{children:["M\xf3vil",Object(u.jsx)("span",{className:"form-required",children:"*"})]}),Object(u.jsxs)("div",{className:"form-movil",children:[Object(u.jsx)(re.a.Control,{type:"text",className:"input-zona",placeholder:"+53",required:!0}),Object(u.jsx)("span",{className:"input-group-addon",children:"-"}),Object(u.jsx)(re.a.Control,{type:"text",className:"input-movil",required:!0})]})]}),Object(u.jsx)("div",{className:"linea"}),Object(u.jsxs)(re.a.Group,{className:"mb-3",children:[Object(u.jsx)(re.a.Label,{style:{fontWeight:"bold",fontSize:"20px"},children:"Men\xfa"}),Object(u.jsxs)("div",{className:"container-md",children:[Object(u.jsxs)(je.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Tablet"}),Object(u.jsx)("th",{children:"Cantidad"}),Object(u.jsx)("th",{children:"Subtotal"}),Object(u.jsx)("th",{})]})}),t.map((function(e){return Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.tablet}),Object(u.jsx)("td",{children:e.qty}),Object(u.jsx)("td",{children:e.qty*e.precio}),Object(u.jsxs)("td",{className:"text-center",children:[" ",Object(u.jsx)("button",{className:"botonElimOrden",onClick:function(){return a(e.id)},children:Object(u.jsx)(Q.a,{style:{width:"20px",height:"20px"}})})]})]})},e.id)}))]}),Object(u.jsx)("span",{className:"form-total",children:Object(u.jsxs)("b",{children:[Object(u.jsx)("span",{className:"total-text",children:"Total:"}),Object(u.jsxs)("span",{className:"total-price",children:[n," ",Object(u.jsx)(y.b,{})]})]})})]})]}),Object(u.jsx)("div",{className:"linea"}),Object(u.jsxs)(re.a.Group,{className:"mb-3",children:[Object(u.jsxs)(re.a.Label,{children:["\xbfCu\xe1ndo quiere su pedido?",Object(u.jsx)("span",{className:"form-required",children:"*"})]}),Object(u.jsxs)("div",{className:"calendar",children:[Object(u.jsxs)("div",{className:"group-calendar",children:[Object(u.jsx)(re.a.Control,{type:"date",defaultValue:g,className:"input-calendar",min:g,onChange:function(e){v(e.target.value)},required:!0}),Object(u.jsxs)("i",{className:"imgCalendar",children:[Object(u.jsx)(de.a,{})," "]}),Object(u.jsx)(re.a.Text,{className:"text-muted",children:"D\xeda"})]}),Object(u.jsxs)("div",{className:"group-hour",children:[Object(u.jsxs)(re.a.Select,{className:"selectHour",value:S,onChange:function(e){R(e.target.value)},required:!0,children:[Object(u.jsx)("option",{}),b.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))]}),Object(u.jsx)("p",{style:{marginLeft:"10px"},children:":"}),Object(u.jsxs)(re.a.Select,{className:"selectHour",required:!0,children:[Object(u.jsx)("option",{}),h.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))]}),Object(u.jsxs)(re.a.Select,{className:"selectHour",children:[Object(u.jsx)("option",{value:"am",children:"AM"}),Object(u.jsx)("option",{value:"pm",children:"PM"})]}),Object(u.jsx)(re.a.Text,{className:"text-muted text-positH",children:"Hora"}),Object(u.jsx)(re.a.Text,{className:"text-muted text-positM",children:"Minutos"})]})]})]}),Object(u.jsxs)(re.a.Group,{className:"mb-3 selector",children:[Object(u.jsxs)(re.a.Label,{children:["\xbfRecogida o entrega?",Object(u.jsx)("span",{className:"form-required",children:"*"})]}),Object(u.jsxs)("div",{className:"group-check",children:[Object(u.jsx)(re.a.Check,{type:"radio",label:"Recoger",onClick:function(){q(!0),L("recoger")},"aria-controls":"collapse-recoger","aria-expanded":w,name:"chekOrden",id:"chekOrden1"}),Object(u.jsx)("i",{style:{marginLeft:"5px"},children:Object(u.jsx)(de.c,{})})]}),Object(u.jsxs)("div",{className:"group-check",children:[Object(u.jsx)(re.a.Check,{type:"radio",label:"Entregar",onClick:function(){q(!0),L("entregar")},"aria-controls":"collapse-entregar","aria-expanded":w,name:"chekOrden",id:"chekOrden2"}),Object(u.jsx)("i",{style:{marginLeft:"5px"},children:Object(u.jsx)(de.b,{})})]}),Object(u.jsx)(N.a,{isOpen:w,className:"colapse",children:""!==D&&"recoger"===D?Object(u.jsxs)("div",{id:"collapse-recoger",children:[Object(u.jsx)("h3",{children:"\xa1Excelente! Puede recoger su pedido en:"}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"Calle 55 #5609A e/ Avenida 56 y 58, Cienfuegos."})]}):""!==D&&"entregar"===D?Object(u.jsxs)("div",{id:"collapse-entregar",children:[Object(u.jsx)("h3",{children:"\xa1Excelente! Especifique la direcci\xf3n de entrega:"}),Object(u.jsx)(re.a.Control,{as:"textarea",rows:3})]}):""})]}),Object(u.jsx)("div",{className:"linea"}),Object(u.jsxs)(re.a.Group,{className:"mb-3",children:[Object(u.jsxs)(re.a.Label,{children:["M\xe9todo de Pago",Object(u.jsx)("span",{className:"form-required",children:"*"})]}),Object(u.jsxs)("div",{className:"checkPagar",children:[Object(u.jsxs)("div",{onChange:function(e){z(e.target.value)},children:[Object(u.jsx)(re.a.Check,{type:"radio",label:"Efectivo",name:"chekPago",id:"chekPago1",value:"Efectivo",onChange:function(){return I(!1)}}),Object(u.jsx)(re.a.Check,{type:"radio",label:"Transferencia",name:"chekPago",id:"chekPago2",value:"Transferencia",onChange:function(){return I(!0)}})]}),Object(u.jsx)(N.a,{isOpen:M,children:Object(u.jsx)("img",{src:be,alt:"C\xf3digo QR",className:"image-qr"})})]})]}),Object(u.jsx)(ie.a,{variant:"primary",type:"submit",className:"btnAceptar",children:"Enviar"})]})})]})]})}));var ue=Object(i.b)((function(e){return{tabletSearch:e.tabletReducer.tabletSearch,characterResults:e.tabletReducer.characterResults}}),{addTablet:M})((function(e){var t=e.addTablet,a=e.tabletSearch,c=e.characterResults,n=function(e,a){t(e,a),z()({text:"Se ha a\xf1adido ".concat(a," tablet al pedido."),icon:"success",buttons:!1,timer:2e3})};return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)(X,{}),Object(u.jsx)("div",{children:Object(u.jsxs)("h2",{className:"titulo-search",children:["Resultados de la b\xfasqueda: ",a]})}),Object(u.jsx)("div",{className:"container row",children:c&&c.length?c.map((function(e){return Object(u.jsx)(Y,{data:e,addToCart:n},e.id)})):Object(u.jsx)("div",{children:Object(u.jsx)("p",{className:"subtitulo-search",children:"No hubo coincidencias con el criterio de b\xfasqueda especificado."})})}),Object(u.jsx)($,{})]})}));var Oe=Object(i.b)((function(e){return{shoppingCart:e.shoppingCart}}),{})((function(){return Object(u.jsx)("div",{className:"rootPage",children:Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(x.a,{basename:"/fast-food",children:Object(u.jsxs)(ce.c,{children:[Object(u.jsx)(ce.a,{path:"/",exact:!0,component:ae}),Object(u.jsx)(ce.a,{path:"/tablets",component:ne}),Object(u.jsx)(ce.a,{path:"/contact",component:oe}),Object(u.jsx)(ce.a,{path:"/cart",component:V}),Object(u.jsx)(ce.a,{path:"/pagar",component:he}),Object(u.jsx)(ce.a,{path:"/search",component:ue}),Object(u.jsx)(ce.a,{children:"404 Not Found"})]})})})})})),me=a(29),xe={list:[],loading:!1,error:"",tabletSearch:"",characterResults:[]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case w:return Object(E.a)(Object(E.a)({},e),{},{list:c.list,loading:c.loading});case q:return Object(E.a)(Object(E.a)({},e),{},{loading:c.loading});case A:return Object(E.a)(Object(E.a)({},e),{},{list:c.list,loading:c.loading});case F:return Object(E.a)(Object(E.a)({},e),{},{error:c.error,loading:c.loading});case D:return Object(E.a)(Object(E.a)({},e),{},{tabletSearch:c});case L:return console.log("character"+c),Object(E.a)(Object(E.a)({},e),{},{characterResults:c});default:return e}},fe=a(20),ge={shoppingCart:[],total:0,open:!1},Ne=Object(me.b)({tabletReducer:pe,cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case S:var s=Object(fe.a)(e.shoppingCart),n=!0;return s.forEach((function(e){e.id===c.id&&(e.qty+=c.qty,n=!1)})),!0===n&&s.push(c),Object(E.a)(Object(E.a)({},e),{},{shoppingCart:s});case R:return Object(E.a)(Object(E.a)({},e),{},{shoppingCart:e.shoppingCart.filter((function(e){return e.id!==c}))});case k:var r=Object(fe.a)(e.shoppingCart),i=0;return r.forEach((function(e){i+=e.qty*e.precio})),Object(E.a)(Object(E.a)({},e),{},{total:i});case T:var l=e.open;return Object(E.a)(Object(E.a)({},e),{},{open:!l});case P:return Object(E.a)(Object(E.a)({},e),{},{shoppingCart:[]});default:return e}}}),ve=a(65),Ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.c,ye=Object(me.d)(Ne,Ce(Object(me.a)(ve.a)));a(104);r.a.render(Object(u.jsx)(i.a,{store:ye,children:Object(u.jsx)(Oe,{})}),document.getElementById("root"))},33:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){},99:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.f2b23022.chunk.js.map