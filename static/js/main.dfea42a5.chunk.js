(this["webpackJsonpyoutube-react"]=this["webpackJsonpyoutube-react"]||[]).push([[0],{170:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(52),i=n.n(a),s=n(23),o=n(24),u=n(27),d=n(26),l=n(10),b="REQUEST",j="SUCCESS",h="FAILURE";function p(e){if(!e)throw new Error("cannot create request type with base = '' or base = null");return[b,j,h].reduce((function(t,n){return t[n]="".concat(e,"_").concat(n),t}),{})}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(l.a)({type:e},t)}var f="YOUTUBE_LIBRARY_LOADED",O=v.bind(null,f),m={libraryLoaded:!1},x=function(e){return e.api.libraryLoaded},y=n(241),g=n(76),k=(n(170),n(40)),w=n(17),C=n(1),I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldBeHighlighted",value:function(){var e=this.props.location.pathname;return console.log("pathname = ",e),"/"===this.props.path?e===this.props.path:e.includes(this.props.path)}},{key:"render",value:function(){var e=this.shouldBeHighlighted()?"highlight-item":null;return Object(C.jsx)(k.b,{to:{pathname:this.props.path},children:Object(C.jsx)(y.a.Item,{className:["sidebar-item",e].join(" "),children:Object(C.jsxs)("div",{className:"sidebar-item-alignment-container",children:[Object(C.jsx)("span",{children:Object(C.jsx)(g.a,{size:"large",name:this.props.icon})}),Object(C.jsx)("span",{children:this.props.label})]})})})}}]),n}(c.a.Component),N=Object(w.f)(I),T=n(235),L=(n(176),n(177),function(e){var t=e.title?e.title.toUpperCase():"";return Object(C.jsx)(y.a.Item,{children:Object(C.jsx)(y.a.Header,{className:"side-bar-header",children:t})})}),P=n(151),V=(n(178),function(e){var t=null,n=e.broadcasting,r=e.amountNewVideos;return n?t=Object(C.jsx)(g.a,{name:"signal"}):r&&(t=Object(C.jsx)("span",{className:"new-videos-count",children:r})),Object(C.jsx)(y.a.Item,{children:Object(C.jsxs)("div",{className:"subscription",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(P.a,{src:"http://via.placeholder.com/28x28",avatar:!0}),Object(C.jsx)("span",{children:e.label})]}),t]})})}),S=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(L,{title:"Subscriptions"}),Object(C.jsx)(V,{label:"MusicChannel",broadcasting:!0}),Object(C.jsx)(V,{label:"Coursera",amountNewVideos:4}),Object(C.jsx)(V,{label:"TEDx Talks",amountNewVideos:2}),Object(C.jsx)(V,{label:"Stanford iOS",amountNewVideos:11}),Object(C.jsx)(V,{label:"Udacity",amountNewVideos:3}),Object(C.jsx)(T.a,{})]})},R=(n(181),function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"footer-block",children:[Object(C.jsx)("div",{children:"About Press Copyright"}),Object(C.jsx)("div",{children:"Creators Advertise"}),Object(C.jsx)("div",{children:"Developers +MyTube"}),Object(C.jsx)("div",{children:"Legal"})]}),Object(C.jsxs)("div",{className:"footer-block",children:[Object(C.jsx)("div",{children:"Terms Privacy"}),Object(C.jsx)("div",{children:"Policy & Safety"}),Object(C.jsx)("div",{children:"Test new features"})]}),Object(C.jsx)("div",{className:"footer-block",children:Object(C.jsx)("div",{children:"All prices include VAT"})}),Object(C.jsx)("div",{className:"footer-block",children:Object(C.jsx)("div",{children:"\xa9 Productioncoder.com - A Youtube clone for educational purposes under fair use."})})]})}),D=function(){return Object(C.jsxs)(y.a,{borderless:!0,vertical:!0,stackable:!0,fixed:"left",className:"side-nav",children:[Object(C.jsx)(N,{path:"/",label:"Home",icon:"home"}),Object(C.jsx)(N,{path:"/feed/trending",label:"Trending",icon:"fire"}),Object(C.jsx)(N,{label:"Followers",icon:"spy"}),Object(C.jsx)(T.a,{}),Object(C.jsx)(L,{title:"Library"}),Object(C.jsx)(N,{label:"History",icon:"history"}),Object(C.jsx)(N,{label:"Watch later",icon:"clock"}),Object(C.jsx)(N,{label:"Liked videos",icon:"thumbs up"}),Object(C.jsx)(T.a,{}),Object(C.jsx)(S,{}),Object(C.jsx)(L,{title:"More from Youtube"}),Object(C.jsx)(N,{label:"Movies and Shows",icon:"film"}),Object(C.jsx)(T.a,{}),Object(C.jsx)(N,{label:"Report history",icon:"flag"}),Object(C.jsx)(N,{label:"Help",icon:"help circle"}),Object(C.jsx)(N,{label:"Send feedback",icon:"comment"}),Object(C.jsx)(T.a,{}),Object(C.jsx)(R,{})]})},E=(n(182),n(183),n(184),n(240)),A=n(147),M=["K","M","B","T"];function F(e){for(var t=M.some((function(t,n){var r=Math.pow(1e3,n+1);return e>r&&e<r+10*r}))?1:0,n=M.length-1;n>=0;n--){var r=Math.pow(1e3,n+1);if(e>=r)return(e/r).toFixed(t)+M[n]}return e.toString()}var U=["years","months","days","hours","minutes","seconds"],_="\\d+(?:[\\.,]\\d{0,3})?",q="(".concat(_,"Y)?(").concat(_,"M)?(").concat(_,"D)?"),B="T(".concat(_,"H)?(").concat(_,"M)?(").concat(_,"S)?"),z=new RegExp("P(?:".concat(q,"(?:").concat(B,"))"));function G(e){if(!e||""===e)return"";var t=e.match(z).slice(1).reduce((function(e,t,n){return e[U[n]]=parseFloat(t)||0,e}),{}),n=t.days,r=t.hours,c=t.minutes,a=t.seconds,i=a.toString(),s=c.toString(),o=24*n+r;return a<10&&(i=a.toString().padStart(2,"0")),c<10&&0!==r&&(s=c.toString().padStart(2,"0")),o?[o,s,i].join(":"):[s,i].join(":")}E.a.locale(A);var H=new E.a("en-US"),Q=function(e){var t=e.video;if(!t)return Object(C.jsx)("div",{});var n=G(t.contentDetails?t.contentDetails.duration:null),r=function(e){var t=new Date(e.snippet.publishedAt),n=e.statistics?e.statistics.viewCount:null;if(n){var r=F(n);return"".concat(r," views \u2022 ").concat(H.format(t))}return""}(t),c=e.horizontal?"horizontal":null,a=e.expanded?"expanded":null,i=e.expanded?t.snippet.description:null;return Object(C.jsx)(k.b,{to:{pathname:e.pathname,search:e.search},children:Object(C.jsxs)("div",{className:["video-preview",c,a].join(" "),children:[Object(C.jsxs)("div",{className:"image-container",children:[Object(C.jsx)(P.a,{src:t.snippet.thumbnails.medium.url}),Object(C.jsx)("div",{className:"time-label",children:Object(C.jsx)("span",{children:n})})]}),Object(C.jsxs)("div",{className:"video-info",children:[Object(C.jsx)("div",{className:["semi-bold","show-max-two-lines",a].join(" "),children:t.snippet.title}),Object(C.jsxs)("div",{className:"video-preview-metadata-container",children:[Object(C.jsx)("div",{className:"channel-title",children:t.snippet.channelTitle}),Object(C.jsx)("div",{className:"view-and-time",children:r}),Object(C.jsx)("div",{className:"show-max-two-lines",children:i})]})]})]})})},Y=(n(185),function(e){return Object(C.jsx)("div",{className:"video-grid-header",children:Object(C.jsx)("span",{className:"title",children:e.title})})}),W=function(e){if(!e.videos||!e.videos.length)return Object(C.jsx)("div",{});var t=e.videos.map((function(e){return Object(C.jsx)(Q,{video:e,pathname:"/watch",search:"?v=".concat(e.id)},e.id)})),n=e.hideDivider?null:Object(C.jsx)(T.a,{});return Object(C.jsxs)("div",{className:"video-section",children:[Object(C.jsx)(Y,{title:e.title}),Object(C.jsx)("div",{className:"video-grid",children:t}),n]})},J=(n(186),n(95)),K=n(53),X=p("MOST_POPULAR"),Z={request:function(e,t,n){return v(X[b],{amount:e,loadDescription:t,nextPageToken:n})},success:function(e){return v(X[j],{response:e})},failure:function(e){return v(X[h],{response:e})}},$=p("VIDEO_CATEGORIES"),ee={request:function(){return v($[b])},success:function(e){return v($[j],{response:e})},failure:function(e){return v($[h],{response:e})}},te=p("MOST_POPULAR_BY_CATEGORY"),ne=function(e){return v(te[b],{categories:e})},re=function(e,t){return v(te[j],{response:e,categories:t})},ce=function(e){return v(te[h],e)},ae=n(39),ie=p("WATCH_DETAILS"),se=function(e,t){return v(ie[b],{videoId:e,channelId:t})},oe=function(e,t){return v(ie[j],{response:e,videoId:t})},ue=function(e){return v(ie[h],{response:e})},de=p("VIDEO_DETAILS"),le=function(e){return v(de[j],{response:e})},be=function(e){return v(de[h],{response:e})},je="youtube#videoListResponse",he="youtube#searchListResponse",pe="youtube#channelListResponse",ve=function(e,t){return e&&e.search?new URLSearchParams(e.search).get(t):null},fe={byId:{},mostPopular:{},categories:{},byCategory:{},related:{}};function Oe(e,t){var n=e.filter((function(e){return e.result.kind===je})).reduce((function(e,t){var n=t.result.items?t.result.items[0]:null;return n?(e[n.id]=n,e):e}),{});return Object(l.a)(Object(l.a)({},t),{},{byId:Object(l.a)(Object(l.a)({},t.byId),n)})}function me(e,t){var n=e.find((function(e){return e.result.kind===je})).result.items[0],r=function(e){var t=e.find((function(e){return e.result.kind===he})).result,n=t.pageInfo,r=t.items,c=t.nextPageToken,a=r.map((function(e){return e.id.videoId}));return{totalResults:n.totalResults,nextPageToken:c,items:a}}(e);return Object(l.a)(Object(l.a)({},t),{},{byId:Object(l.a)(Object(l.a)({},t.byId),{},Object(K.a)({},n.id,n)),related:Object(l.a)(Object(l.a)({},t.related),{},Object(K.a)({},n.id,r))})}function xe(e,t,n){var r={},c={};return e.forEach((function(e,n){if(400!==e.status){var a=t[n],i=function(e){var t=e.items,n={},r={totalResults:e.pageInfo.totalResults,nextPageToken:e.nextPageToken,items:[]};return t.forEach((function(e){n[e.id]=e;var t=r.items;t&&t?t.push(e.id):r.items=[e.id]})),{byId:n,byCategory:r}}(e.result),s=i.byId,o=i.byCategory;r=Object(l.a)(Object(l.a)({},r),s),c[a]=o}})),Object(l.a)(Object(l.a)({},n),{},{byId:Object(l.a)(Object(l.a)({},n.byId),r),byCategory:Object(l.a)(Object(l.a)({},n.byCategory),c)})}function ye(e,t){var n=e.items.reduce((function(e,t){return e[t.id]=t.snippet.title,e}),{});return Object(l.a)(Object(l.a)({},t),{},{categories:n})}function ge(e,t){var n=e.items.reduce((function(e,t){return e[t.id]=t,e}),{}),r=Object.keys(n);e.hasOwnProperty("prevPageToken")&&t.mostPopular&&(r=[].concat(Object(J.a)(t.mostPopular.items),Object(J.a)(r)));var c={totalResults:e.pageInfo.totalResults,nextPageToken:e.nextPageToken,items:r};return Object(l.a)(Object(l.a)({},t),{},{mostPopular:c,byId:Object(l.a)(Object(l.a)({},t.byId),n)})}var ke=Object(ae.a)((function(e){return e.videos.byId}),(function(e){return e.videos.mostPopular}),(function(e,t){return t&&t.items?t.items.map((function(t){return e[t]})):[]})),we=Object(ae.a)((function(e){return e.videos.categories}),(function(e){return Object.keys(e||{})})),Ce=Object(ae.a)((function(e){return e.videos.byCategory}),(function(e){return e.videos.byId}),(function(e){return e.videos.categories}),(function(e,t,n){return Object.keys(e||{}).reduce((function(r,c){var a=e[c].items;return r[n[c]]=a.map((function(e){return t[e]})),r}),{})})),Ie=Object(ae.a)((function(e){return e.videos.categories}),(function(e){return 0!==Object.keys(e||{}).length})),Ne=Object(ae.a)((function(e){return e.videos.byCategory}),(function(e){return Object.keys(e||{}).length})),Te=function(e,t){return e.videos.byId[t]},Le=Object(ae.a)((function(e,t){var n=e.videos.related[t];return n?n.items:[]}),(function(e){return e.videos.byId}),(function(e,t){return e?e.map((function(e){return t[e]})).filter((function(e){return e})):[]})),Pe=function(e,t,n){var r=ve(t,n),c=e.videos.byId[r];return c?c.snippet.channelId:null},Ve=Object(ae.a)(Te,(function(e){return e?e.statistics.commentCount:0})),Se=function(e){return e.videos.mostPopular},Re=Object(ae.a)(Se,(function(e){return e.nextPageToken})),De=Object(ae.a)([Se],(function(e){return(e.items?e.items.length:0)===e.totalResults})),Ee=n(29),Ae=n(149),Me=n(236),Fe=(n(187),function(e){return Object(C.jsxs)(C.Fragment,{children:[e.children,Object(C.jsx)(Ae.a,{onEnter:e.bottomReachedCallback,children:Object(C.jsx)("div",{className:"loader-container",children:Object(C.jsx)(Me.a,{active:e.showLoader,inline:"centered"})})})]})}),Ue=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"getVideoGridsForCategories",value:function(){var e=this,t=Object.keys(this.props.videosByCategory||{});return t.map((function(n,r){var c=e.props.videosByCategory[n],a=r===t.length-1;return Object(C.jsx)(W,{title:n,videos:c,hideDivider:a},n)}))}},{key:"getTrendingVideos",value:function(){return this.props.mostPopularVideos.slice(0,12)}},{key:"render",value:function(){var e=this.getTrendingVideos(),t=this.getVideoGridsForCategories();return Object(C.jsx)("div",{className:"home-content",children:Object(C.jsx)("div",{className:"responsive-video-grid-container",children:Object(C.jsxs)(Fe,{bottomReachedCallback:this.props.bottomReachedCallback,showLoader:this.props.showLoader,children:[Object(C.jsx)(W,{title:"Trending",videos:e}),t]})})})}}]),n}(c.a.Component);var _e=Object(Ee.b)((function(e){return{videosByCategory:Ce(e),mostPopularVideos:ke(e)}}),null)(Ue),qe=n(20),Be=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).bottomReachedCallback=function(){r.props.videoCategoriesLoaded&&r.fetchVideosByCategory()},r.state={categoryIndex:0},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.youtubeLibraryLoaded&&this.fetchCategoriesAndMostPopularVideos()}},{key:"componentDidUpdate",value:function(e){this.props.youtubeLibraryLoaded!==e.youtubeLibraryLoaded?this.fetchCategoriesAndMostPopularVideos():this.props.videoCategories!==e.videoCategories&&this.fetchVideosByCategory()}},{key:"fetchCategoriesAndMostPopularVideos",value:function(){this.props.fetchMostPopularVideos(),this.props.fetchVideoCategories()}},{key:"fetchVideosByCategory",value:function(){var e=this.state.categoryIndex,t=this.props.videoCategories.slice(e,e+3);this.props.fetchMostPopularVideosByCategory(t),this.setState((function(e){return{categoryIndex:e.categoryIndex+3}}))}},{key:"shouldShowLoader",value:function(){return!(!this.props.videoCategoriesLoaded||!this.props.videosByCategoryLoaded)&&this.state.categoryIndex<this.props.videoCategories.length}},{key:"render",value:function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(D,{}),Object(C.jsx)(_e,{bottomReachedCallback:this.bottomReachedCallback,showLoader:this.shouldShowLoader()})]})}}]),n}(c.a.Component);var ze=Object(Ee.b)((function(e){return{youtubeLibraryLoaded:x(e),videoCategories:we(e),videoCategoriesLoaded:Ie(e),videosByCategoryLoaded:Ne(e)}}),(function(e){var t=Z.request,n=ee.request,r=ne;return Object(qe.b)({fetchMostPopularVideos:t,fetchVideoCategories:n,fetchMostPopularVideosByCategory:r},e)}))(Be),Ge=(n(188),n(239)),He=n(237),Qe=(n(189),n.p+"static/media/logo.840cfd4e.jpg"),Ye=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).onInputChange=function(e){r.setState({query:e.target.value})},r.onSubmit=function(){var e=encodeURI(r.state.query);r.props.history.push("/results?search_query=".concat(e))},r.state={query:""},r}return Object(o.a)(n,[{key:"render",value:function(){return Object(C.jsxs)(y.a,{borderless:!0,className:"top-menu",fixed:"top",children:[Object(C.jsx)(y.a.Item,{header:!0,className:"logo",children:Object(C.jsx)(k.b,{to:"/",children:Object(C.jsx)(P.a,{src:Qe,size:"tiny"})})}),Object(C.jsxs)(y.a.Menu,{className:"nav-container",children:[Object(C.jsx)(y.a.Item,{className:"search-input",children:Object(C.jsx)(Ge.a,{onSubmit:this.onSubmit,children:Object(C.jsx)(Ge.a.Field,{children:Object(C.jsx)(He.a,{placeholder:"Search",size:"small",action:"Go",value:this.state.query,onChange:this.onInputChange})})})}),Object(C.jsxs)(y.a.Menu,{className:"icons-container",position:"right",children:[Object(C.jsx)(y.a.Item,{children:Object(C.jsx)(g.a,{className:"header-icon",name:"video camera",size:"large"})}),Object(C.jsx)(y.a.Item,{children:Object(C.jsx)(g.a,{className:"header-icon",name:"grid layout",size:"large"})}),Object(C.jsx)(y.a.Item,{children:Object(C.jsx)(g.a,{className:"header-icon",name:"chat",size:"large"})}),Object(C.jsx)(y.a.Item,{children:Object(C.jsx)(g.a,{className:"header-icon",name:"alarm",size:"large"})}),Object(C.jsx)(y.a.Item,{name:"avatar",children:Object(C.jsx)(P.a,{src:"https://via.placeholder.com/80x80",avatar:!0})})]})]})]})}}]),n}(c.a.Component),We=Object(w.f)(Ye),Je=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(c.a.Component),Ke=Object(w.f)(Je),Xe=function(e){return Object(C.jsx)(Ke,{children:Object(C.jsxs)("div",{className:"app-layout",children:[Object(C.jsx)(We,{}),e.children]})})},Ze=(n(190),n(243)),$e=(n(191),function(e){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"next-up-container",children:[Object(C.jsx)("h4",{children:"Up next"}),Object(C.jsxs)("div",{className:"up-next-toggle",children:[Object(C.jsx)("span",{children:"Autoplay"}),Object(C.jsx)(Ze.a,{toggle:!0,defaultChecked:!0})]})]}),Object(C.jsx)(Q,{horizontal:!0,video:e.video,pathname:"/watch",search:"?v=".concat(e.video.id)}),Object(C.jsx)(T.a,{})]})}),et=function(e){if(!e.videos||!e.videos.length)return Object(C.jsx)("div",{className:"related-videos"});var t=e.videos[0],n=e.videos.slice(1).map((function(e){return Object(C.jsx)(Q,{horizontal:!0,video:e,pathname:"/watch",search:"?v=".concat(e.id)},e.id)}));return Object(C.jsxs)("div",{className:"related-videos",children:[Object(C.jsx)($e,{video:t}),n]})},tt=(n(192),function(e){if(!e.id)return null;var t="".concat("https://www.youtube.com/embed/").concat(e.id);return Object(C.jsx)("div",{className:"video-container",children:Object(C.jsx)("div",{className:"video",children:Object(C.jsx)("iframe",{className:"video-player",src:t,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"})})})}),nt=n(131),rt=(n(193),n(218)),ct=n(150),at=n.n(ct),it=function(e){var t=Object(r.useState)(!0),n=Object(nt.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)("collapsed"),s=Object(nt.a)(i,2),o=s[0],u=s[1],d=Object(r.useState)("Show More"),l=Object(nt.a)(d,2),b=l[0],j=l[1];if(Object(r.useEffect)((function(){c?(u("collapsed"),j("Show More")):(u("expanded"),j("Show Less"))}),[c]),!e.video||!e.channel)return Object(C.jsx)("div",{children:" Ooops! "});var h,p=function(){var t=e.video.snippet?e.video.snippet.description:null;return t?t.split("\n").map((function(e,t){return Object(C.jsx)("p",{children:Object(C.jsx)(at.a,{children:e})},t)})):null}(),v=(h=e.video.snippet.publishedAt)?new Date(Date.parse(h)).toDateString():"",f=function(){var t=e.channel,n=F(Number(t.statistics.subscriberCount));return"Subscribe ".concat(n)}(),O=e.channel.snippet.thumbnails.medium.url,m=e.channel.snippet.title;return Object(C.jsxs)("div",{className:"video-info-box",children:[Object(C.jsx)(P.a,{className:"channel-image",src:O,circular:!0}),Object(C.jsxs)("div",{className:"video-info",children:[Object(C.jsx)("div",{className:"channel-name",children:m}),Object(C.jsx)("div",{className:"video-publication-date",children:v})]}),Object(C.jsx)(rt.a,{color:"youtube",className:"subscribe",children:f}),Object(C.jsxs)("div",{className:"video-description",children:[Object(C.jsx)("div",{className:o,children:p}),Object(C.jsx)(rt.a,{compact:!0,onClick:function(){a((function(e){return!e}))},children:b})]})]})},st=(n(206),n(207),n(242)),ot=function(e){var t=null,n=0!==e.likeCount?e.likeCount:null,r=null;if(e.likeCount&&e.dislikeCount){var c=parseFloat(e.likeCount),a=parseFloat(e.dislikeCount),i=c/(c+a)*100;n=F(c),r=F(a),t=Object(C.jsx)(st.a,{percent:i,size:"tiny"})}return Object(C.jsxs)("div",{className:"rating",children:[Object(C.jsxs)("div",{className:"thumbs-up",children:[Object(C.jsx)(g.a,{name:"thumbs outline up"}),Object(C.jsx)("span",{children:n})]}),Object(C.jsxs)("div",{className:"thumbs-down",children:[Object(C.jsx)(g.a,{name:"thumbs outline down"}),Object(C.jsx)("span",{children:r})]}),t]})},ut=function(e){if(!e.video||!e.video.statistics)return Object(C.jsx)("div",{});var t=Number(e.video.statistics.viewCount).toLocaleString();return Object(C.jsxs)("div",{className:"video-metadata",children:[Object(C.jsx)("h3",{children:e.video.snippet.title}),Object(C.jsxs)("div",{className:"video-stats",children:[Object(C.jsxs)("span",{children:[t," views"]}),Object(C.jsxs)("div",{className:"video-actions",children:[Object(C.jsx)(ot,{likeCount:e.video.statistics.likeCount,dislikeCount:e.video.statistics.dislikeCount}),Object(C.jsxs)(rt.a,{basic:!0,icon:!0,labelPosition:"left",children:[Object(C.jsx)(g.a,{name:"share"}),"Share"]}),Object(C.jsx)(rt.a,{basic:!0,icon:!0,children:Object(C.jsx)(g.a,{name:"add circle"})}),Object(C.jsx)(rt.a,{basic:!0,icon:!0,children:Object(C.jsx)(g.a,{name:"ellipsis horizontal"})})]})]}),Object(C.jsx)(T.a,{})]})},dt=(n(208),n(238)),lt=function(){return Object(C.jsxs)("div",{className:"add-comment",children:[Object(C.jsx)(P.a,{className:"user-image",src:"http://via.placeholder.com/48x48",circular:!0}),Object(C.jsx)(Ge.a,{children:Object(C.jsx)(Ge.a.TextArea,{control:dt.a,autoHeight:!0,placeholder:"Add a public comment"})})]})},bt=(n(209),function(e){if(!e.comment)return Object(C.jsx)("div",{children:"No comment"});var t=e.comment.snippet.topLevelComment,n=t.snippet,r=n.authorProfileImageUrl,c=n.authorDisplayName,a=n.textOriginal,i=t.snippet.likeCount;return Object(C.jsxs)("div",{className:"comment",children:[Object(C.jsx)(P.a,{className:"user-image",src:r,circular:!0}),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"user-name",children:c}),Object(C.jsx)("span",{children:a}),Object(C.jsxs)("div",{className:"comment-actions",children:[Object(C.jsx)(ot,{likeCount:i}),Object(C.jsx)(rt.a,{size:"mini",compact:!0,children:"REPLY"})]})]})]})}),jt=(n(210),n(211),function(e){return Object(C.jsxs)("div",{className:"comments-header",children:[Object(C.jsxs)("h4",{children:[e.amountComments," Comments"]}),Object(C.jsxs)(rt.a,{basic:!0,compact:!0,icon:!0,labelPosition:"left",children:[Object(C.jsx)(g.a,{name:"align left"}),"Sort by"]})]})}),ht=function(e){if(!e.comments)return Object(C.jsx)("div",{children:"There is no comments data"});var t=e.comments.map((function(e){return Object(C.jsx)(bt,{comment:e},e.id)}));return Object(C.jsxs)("div",{className:"comments-container",children:[Object(C.jsx)(jt,{amountComments:e.amountComments}),Object(C.jsx)(lt,{},"add-comment"),t]})},pt=(n(212),{byId:{}});function vt(e,t){var n=e.find((function(e){return e.result.kind===pe})),r={};if(n&&n.result.items){var c=n.result.items[0];r[c.id]=c}return Object(l.a)(Object(l.a)({},t),{},{byId:Object(l.a)(Object(l.a)({},t.byId),r)})}function ft(e,t){var n=e.find((function(e){return e.result.kind===pe})),r={};if(n&&n.result.items){var c=n.result.items[0];r=Object(K.a)({},c.id,c)}return Object(l.a)(Object(l.a)({},t),{},{byId:Object(l.a)(Object(l.a)({},t.byId),r)})}var Ot=function(e,t){return t?e.channels.byId[t]:null},mt=p("COMMENT_THREAD"),xt={request:function(e,t){return v(mt[b],{videoId:e,nextPageToken:t})},success:function(e,t){return v(mt[j],{response:e,videoId:t})},failure:function(e){return v(mt[h],{response:e})}},yt={byVideo:{},byId:{}};function gt(e,t,n){return kt(e.find((function(e){return"youtube#commentThreadListResponse"===e.result.kind})).result,t,n)}function kt(e,t,n){if(!e)return n;var r=e.items.reduce((function(e,t){return e[t.id]=t,e}),{}),c=n.byVideo[t]?n.byVideo[t].ids:[],a=[].concat(Object(J.a)(c),Object(J.a)(Object.keys(r))),i={nextPageToken:e.nextPageToken,ids:a};return Object(l.a)(Object(l.a)({},n),{},{byId:Object(l.a)(Object(l.a)({},n.byId),r),byVideo:Object(l.a)(Object(l.a)({},n.byVideo),{},Object(K.a)({},t,i))})}var wt=Object(ae.a)((function(e,t){var n=e.comments.byVideo[t];return n?n.ids:[]}),(function(e){return e.comments.byId}),(function(e,t){return e.map((function(e){return t[e]}))})),Ct=Object(ae.a)((function(e,t){var n=ve(t,"v");return e.comments.byVideo[n]}),(function(e){return e?e.nextPageToken:null}));var It=Object(Ee.b)((function(e,t){return{video:Te(e,t.videoId),relatedVideos:Le(e,t.videoId),channel:Ot(e,t.channelId),comments:wt(e,t.videoId),amountComments:Ve(e,t.videoId)}}),null)((function(e){if(!e.videoId)return Object(C.jsx)("div",{});return Object(C.jsx)(Fe,{bottomReachedCallback:e.bottomReachedCallback,showLoader:function(){return!!e.nextPageToken},children:Object(C.jsxs)("div",{className:"watch-grid",children:[Object(C.jsx)(tt,{className:"video",id:e.videoId})," ",Object(C.jsx)(ut,{className:"metadata",video:e.video}),Object(C.jsx)(it,{className:"video-info-box",video:e.video,channel:e.channel}),Object(C.jsx)(ht,{className:"comments",comments:e.comments,amountComments:e.amountComments}),Object(C.jsx)(et,{className:"related-videos",videos:e.relatedVideos})]})})})),Nt=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).fetchMoreComments=function(){e.props.nextPageToken&&e.props.fetchCommentThread(e.getVideoId(),e.props.nextPageToken)},e}return Object(o.a)(n,[{key:"getVideoId",value:function(){return ve(this.props.location,"v")}},{key:"componentDidMount",value:function(){this.props.youtubeLibraryLoaded&&this.fetchWatchContent()}},{key:"componentDidUpdate",value:function(e){this.props.youtubeLibraryLoaded!==e.youtubeLibraryLoaded&&this.fetchWatchContent()}},{key:"fetchWatchContent",value:function(){var e=this.getVideoId();e||this.props.history.push("/"),this.props.fetchWatchDetails(e,this.props.channelId)}},{key:"render",value:function(){var e=this.getVideoId();return Object(C.jsx)(It,{videoId:e,channelId:this.props.channelId,bottomReachedCallback:this.fetchMoreComments,nextPageToken:this.props.nextPageToken})}}]),n}(c.a.Component);var Tt=Object(w.f)(Object(Ee.b)((function(e,t){return{youtubeLibraryLoaded:x(e),channelId:Pe(e,t.location,"v"),nextPageToken:Ct(e,t.location)}}),(function(e){var t=se,n=xt.request;return Object(qe.b)({fetchWatchDetails:t,fetchCommentThread:n},e)}))(Nt)),Lt=(n(213),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.getVideoPreviews();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(D,{}),Object(C.jsx)("div",{className:"video-list",children:Object(C.jsx)(Fe,{bottomReachedCallback:this.props.bottomReachedCallback,showLoader:this.props.showLoader,children:e})})]})}},{key:"getVideoPreviews",value:function(){return this.props.videos&&this.props.videos.length&&this.props.videos[0].snippet.description?this.props.videos.map((function(e){return Object(C.jsx)(Q,{horizontal:!0,expanded:!0,video:e,pathname:"/watch",search:"?v="+e.id},e.is)})):null}}]),n}(c.a.Component)),Pt=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).fetchMoreVideos=function(){var t=e.props.nextPageToken;e.props.youtubeLibraryLoaded&&t&&e.props.fetchMostPopularVideos(12,!0,t)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchTrendingVideos()}},{key:"componentDidUpdate",value:function(e){e.youtubeLibraryLoaded!==this.props.youtubeLibraryLoaded&&this.fetchTrendingVideos()}},{key:"fetchTrendingVideos",value:function(){this.props.youtubeLibraryLoaded&&this.props.fetchMostPopularVideos(20,!0)}},{key:"render",value:function(){var e=this.shouldShowLoader();return Object(C.jsx)(Lt,{bottomReachedCallback:this.fetchMoreVideos,showLoader:e,videos:this.props.videos})}},{key:"shouldShowLoader",value:function(){return!this.props.allMostPopularVideosLoaded}}]),n}(c.a.Component);var Vt=Object(Ee.b)((function(e){return{videos:ke(e),youtubeLibraryLoaded:x(e),allMostPopularVideosLoaded:De(e),nextPageToken:Re(e)}}),(function(e){var t=Z.request;return Object(qe.b)({fetchMostPopularVideos:t},e)}))(Pt),St=(n(214),p("SEARCH_FOR_VIDEOS")),Rt={request:function(e,t,n){return v(St[b],{searchQuery:e,nextPageToken:t,amount:n})},success:function(e,t){return v(St[j],{response:e,searchQuery:t})},failure:function(e,t){return v(St[h],{response:e,searchQuery:t})}};function Dt(e,t,n){var r=e.items.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{id:e.id.videoId})}));n.query===t&&(r=(n.results||[]).concat(r));return{totalResults:e.pageInfo.totalResults,nextPageToken:e.nextPageToken,query:t,results:r}}var Et=function(e){return e.search.results},At=function(e){return e.search.nextPageToken},Mt=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).bottomReachedCallback=function(){e.props.nextPageToken&&e.props.searchForVideos(e.getSearchQuery(),e.props.nextPageToken,25)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getSearchQuery()||this.props.history.push("/"),this.searchForVideos()}},{key:"componentDidUpdate",value:function(e){e.youtubeApiLoaded!==this.props.youtubeApiLoaded&&this.searchForVideos()}},{key:"render",value:function(){return Object(C.jsx)(Lt,{bottomReachedCallback:this.bottomReachedCallback,showLoader:!0,videos:this.props.searchResults})}},{key:"getSearchQuery",value:function(){return ve(this.props.location,"search_query")}},{key:"searchForVideos",value:function(){var e=this.getSearchQuery();this.props.youtubeApiLoaded&&this.props.searchForVideos(e)}}]),n}(c.a.Component);var Ft=Object(w.f)(Object(Ee.b)((function(e,t){return{youtubeApiLoaded:x(e),searchResults:Et(e,t.location.search),nextPageToken:At(e,t.location.search)}}),(function(e){var t=Rt.request;return Object(qe.b)({searchForVideos:t},e)}))(Mt));var Ut=Object(w.f)(Object(Ee.b)(null,(function(e){return Object(qe.b)({youtubeLibraryLoaded:O},e)}))((function(e){Object(r.useEffect)((function(){t()}),[]);var t=function(){var t=document.createElement("script");t.src="https://apis.google.com/js/client.js",t.onload=function(){window.gapi.load("client",(function(){window.gapi.client.setApiKey("AIzaSyDvJ3Nhu8K5DgP7e10jCJjDBjw2cVnGPgk"),window.gapi.client.load("youtube","v3",(function(){e.youtubeLibraryLoaded()}))}))},document.body.appendChild(t)};return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(Xe,{children:Object(C.jsxs)(w.c,{children:[Object(C.jsx)(w.a,{path:"/feed/trending",component:Vt}),Object(C.jsx)(w.a,{path:"/results",render:function(){return Object(C.jsx)(Ft,{},e.location.key)}}),Object(C.jsx)(w.a,{path:"/watch",render:function(){return Object(C.jsx)(Tt,{},e.location.key)}}),Object(C.jsx)(w.a,{path:"/",component:ze})]})})})}))),_t=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,244)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},qt=(n(215),Object(qe.c)({api:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{libraryLoaded:!0};default:return e}},videos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X[j]:return ge(t.response,e);case $[j]:return ye(t.response,e);case te[j]:return xe(t.response,t.categories,e);case ie[j]:return me(t.response,e);case de[j]:return Oe(t.response,e);default:return e}},channels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie[j]:return vt(t.response,e);case de[j]:return ft(t.response,e);default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case mt[j]:return kt(t.response,t.videoId,e);case ie[j]:return gt(t.response,t.videoId,e);default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case St[j]:return Dt(t.response,t.searchQuery,e);case St[b]:return t.nextPageToken?e:{};default:return e}}})),Bt=n(152),zt=n(16),Gt=n.n(zt),Ht=n(12);function Qt(e){return Kt("GET","/youtube/v3/channels",{part:"snippet,statistics",id:e,fields:"kind,items(id,snippet(description,thumbnails/medium,title),statistics/subscriberCount)"},null)}function Yt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return Kt("GET","/youtube/v3/search",{part:"snippet",type:"video",maxResults:t,relatedToVideoId:e},null)}function Wt(e){return Kt("GET","/youtube/v3/videos",{part:"snippet, statistics, contentDetails",id:e,fields:"kind,items(contentDetails/duration,id,snippet(channelId,channelTitle,description,publishedAt,thumbnails/medium,title),statistics)"},null)}function Jt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c="nextPageToken,prevPageToken,items(contentDetails/duration,id,snippet(channelId,channelTitle,publishedAt,thumbnails/medium,title),statistics/viewCount),pageInfo(totalResults)";return t&&(c+=",items/snippet/description"),Kt("GET","/youtube/v3/videos",{part:"snippet,statistics,contentDetails",chart:"mostPopular",maxResults:e,regionCode:"US",pageToken:n,fields:c,videoCategoryId:r},null)}function Kt(e,t,n,r){var c;if(n=function(e){for(var t in e)e[t]&&"undefined"!==e[t]||delete e[t];return e}(n),r){var a=function(e){var t={},n=e;for(var r in e){var c=e[r];if(r&&"[]"===r.substr(-2,2)){var a=r.replace("[]","");c&&(n[a]=c.split(",")),delete n[r]}}for(var i in n)if(n.hasOwnProperty(i)&&n[i])for(var s=i.split("."),o=t,u=0;u<s.length;u++){var d=s[u];u===s.length-1?o[d]=n[i]:o=o[d]=o[d]||{}}return t}(r);c=window.gapi.client.request({body:a,method:e,path:t,params:n})}else c=window.gapi.client.request({method:e,path:t,params:n});return c}function Xt(e,t){return Kt("GET","/youtube/v3/commentThreads",{part:"id,snippet",pageToken:t,videoId:e},null)}function Zt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;return Kt("GET","/youtube/v3/search",{part:"id,snippet",q:e,type:"video",pageToken:t,maxResults:n},null)}var $t=Gt.a.mark(tn),en=Gt.a.mark(nn);function tn(e,t){var n;return Gt.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Xt.bind(null,e,t),r.next=3,Tn(n,xt,e);case 3:case"end":return r.stop()}}),$t)}function nn(){var e,t,n;return Gt.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,Object(Ht.e)(mt[b]);case 3:return e=r.sent,t=e.videoId,n=e.nextPageToken,r.next=8,Object(Ht.c)(tn,t,n);case 8:r.next=0;break;case 10:case"end":return r.stop()}}),en)}var rn=Gt.a.mark(an),cn=Gt.a.mark(sn);function an(){var e,t,n,r;return Gt.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=3,Object(Ht.e)(St[b]);case 3:return e=c.sent,t=e.searchQuery,n=e.amount,r=e.nextPageToken,c.next=9,Object(Ht.c)(sn,t,r,n);case 9:c.next=0;break;case 11:case"end":return c.stop()}}),rn)}function sn(e,t,n){var r;return Gt.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r=Zt.bind(null,e,t,n),c.next=3,Tn(r,Rt,e);case 3:case"end":return c.stop()}}),cn)}var on=Gt.a.mark(jn),un=Gt.a.mark(hn),dn=Gt.a.mark(vn),ln=Gt.a.mark(fn),bn=Gt.a.mark(On);function jn(){var e,t,n,r;return Gt.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=3,Object(Ht.e)(X[b]);case 3:return e=c.sent,t=e.amount,n=e.loadDescription,r=e.nextPageToken,c.next=9,Object(Ht.c)(hn,t,n,r);case 9:c.next=0;break;case 11:case"end":return c.stop()}}),on)}function hn(e,t,n){var r;return Gt.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r=Jt.bind(null,e,t,n),c.next=3,Tn(r,Z);case 3:case"end":return c.stop()}}),un)}var pn=Tn.bind(null,(function(){return Kt("GET","/youtube/v3/videoCategories",{part:"snippet",regionCode:"US"},null)}),ee);function vn(){return Gt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ht.f)($[b],pn);case 2:case"end":return e.stop()}}),dn)}function fn(){var e,t;return Gt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(Ht.e)(te[b]);case 3:return e=n.sent,t=e.categories,n.next=7,Object(Ht.c)(On,t);case 7:n.next=0;break;case 9:case"end":return n.stop()}}),ln)}function On(e){var t,n;return Gt.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.map((function(e){var t=Ln(Jt,12,!1,null,e);return Object(Ht.b)(t)})),r.prev=1,r.next=4,Object(Ht.a)(t);case 4:return n=r.sent,r.next=7,Object(Ht.d)(re(n,e));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(Ht.d)(ce(r.t0));case 13:case"end":return r.stop()}}),bn,null,[[1,9]])}var mn=Gt.a.mark(gn),xn=Gt.a.mark(kn),yn=Gt.a.mark(wn);function gn(){var e,t,n;return Gt.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,Object(Ht.e)(ie[b]);case 3:return e=r.sent,t=e.videoId,n=e.channelId,r.next=8,Object(Ht.c)(kn,t,n);case 8:r.next=0;break;case 10:case"end":return r.stop()}}),mn)}function kn(e,t){var n,r;return Gt.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=[Wt.bind(null,e),Yt.bind(null,e),Xt.bind(null,e)],t&&n.push(Qt.bind(null,t)),c.prev=2,c.next=5,Object(Ht.a)(n.map((function(e){return Object(Ht.b)(e)})));case 5:return r=c.sent,c.next=8,Object(Ht.d)(oe(r,e));case 8:return c.next=10,Object(Ht.b)(wn,r,null===t);case 10:c.next=16;break;case 12:return c.prev=12,c.t0=c.catch(2),c.next=16,Object(Ht.d)(ue(c.t0));case 16:case 17:case"end":return c.stop()}}),xn,null,[[2,12]])}function wn(e,t){var n,r,c,a,i,s;return Gt.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=e.find((function(e){return e.result.kind===he})),r=n.result.items.map((function(e){return e.id.videoId})),c=r.map((function(e){return Wt.bind(null,e)})),t&&(a=e.find((function(e){return e.result.kind===je})),(i=a.result.items)&&i.length&&c.push(Qt.bind(null,i[0].snippet.channelId))),o.prev=4,o.next=7,Object(Ht.a)(c.map((function(e){return Object(Ht.b)(e)})));case 7:return s=o.sent,o.next=10,Object(Ht.d)(le(s));case 10:o.next=16;break;case 12:return o.prev=12,o.t0=o.catch(4),o.next=16,Object(Ht.d)(be(o.t0));case 16:case"end":return o.stop()}}),yn,null,[[4,12]])}var Cn=Gt.a.mark(Nn),In=Gt.a.mark(Tn);function Nn(){return Gt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ht.a)([Object(Ht.c)(jn),Object(Ht.c)(vn),Object(Ht.c)(fn),Object(Ht.c)(gn),Object(Ht.c)(nn),Object(Ht.c)(an)]);case 2:case"end":return e.stop()}}),Cn)}function Tn(e,t){var n,r,c,a,i=arguments;return Gt.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:for(n=i.length,r=new Array(n>2?n-2:0),c=2;c<n;c++)r[c-2]=i[c];return s.prev=1,s.next=4,Object(Ht.b)(e);case 4:return a=s.sent,s.next=7,Object(Ht.d)(t.success.apply(t,[a.result].concat(r)));case 7:s.next=13;break;case 9:return s.prev=9,s.t0=s.catch(1),s.next=13,Object(Ht.d)(t.failure.apply(t,[s.t0].concat(r)));case 13:case"end":return s.stop()}}),In,null,[[1,9]])}function Ln(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){var t=function(e){return e};return e.apply(void 0,n).then(t,t)}}var Pn=function(){var e=Object(Bt.a)(),t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||qe.d,n=Object(qe.e)(qt,t(Object(qe.a)(e)));return e.run(Nn),n}();i.a.render(Object(C.jsx)(Ee.a,{store:Pn,children:Object(C.jsx)(k.a,{children:Object(C.jsx)(Ut,{})})}),document.getElementById("root")),_t()}},[[217,1,2]]]);
//# sourceMappingURL=main.dfea42a5.chunk.js.map