(self.webpackChunkdev_workspaces=self.webpackChunkdev_workspaces||[]).push([[185],{6840:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),r=n(5444),l=n(9),i=n(410),o=l.ZP.article.withConfig({displayName:"card__CardStyles",componentId:"bufriq-0"})(["position:relative;display:flex;width:100%;justify-content:center;border:1px solid var(--color-grey--light);text-align:center;a{text-decoration:none;&:focus,&:hover{text-decoration:underline;}&::before,&::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;}}h2{margin:0;padding:1rem;}"]);function c(e){var t=e.cardTitle,n=e.cardPath,l=e.cardImage;return a.createElement(o,null,a.createElement(r.Link,{to:n},l&&a.createElement(i.G,{image:l}),t&&a.createElement("h2",null,t)))}},9055:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(7294),r=n(5444),l=n(9),i=l.ZP.nav.withConfig({displayName:"menu__MenuStyles",componentId:"sc-6edeyw-0"})(["display:flex;flex-wrap:wrap;padding-left:1rem;padding-right:1rem;li{list-style:none;}li + li{margin-left:1rem;}.menu-link{padding:0.5rem 1rem;text-decoration:none;display:inline-block;}.menu-link:focus,.menu-link:hover{text-decoration:underline;}.menu-link--active{","}"],(function(e){return e.isPartiallyCurrent&&(0,l.iv)([""])}));function o(){return a.createElement(a.Fragment,null,a.createElement(i,null,a.createElement("li",null,a.createElement(r.Link,{className:"menu-link",activeClassName:"menu-link--active",to:"/workspaces",partiallyActive:!0},"All Workspaces")),a.createElement("li",null,a.createElement(r.Link,{className:"menu-link",activeClassName:"menu-link--active",to:"/add",partiallyActive:!0},"Add Yours"))))}var c=l.ZP.header.withConfig({displayName:"header__HeaderStyles",componentId:"sc-11weedv-0"})(["padding:3rem 0;"]),m=l.ZP.p.withConfig({displayName:"header__Logo",componentId:"sc-11weedv-1"})(["margin:0;display:flex;flex-shrink:0;@media screen and (min-width:768px){font-size:2rem;}a{color:var(--color-black);font-weight:bold;text-decoration:none;&:hover,&:focus{text-decoration:underline;}}"]),d=l.ZP.div.withConfig({displayName:"header__HeaderInnerStyles",componentId:"sc-11weedv-2"})(["display:flex;justify-content:space-between;align-items:center;"]),s=function(e){var t=e.siteTitle;return a.createElement(c,null,a.createElement("div",{className:"layout-contained padding-horizontal"},a.createElement(d,null,a.createElement(m,null,a.createElement(r.Link,{to:"/"},t)),a.createElement(o,null))))},u=l.ZP.footer.withConfig({displayName:"footer__FooterStyles",componentId:"sc-10mywca-0"})(["margin-top:auto;padding:2rem 0;border-top:1px solid var(--color-grey);p{margin-bottom:0;}"]),p=function(){return a.createElement(u,null,a.createElement("div",{className:"layout-contained padding-horizontal"},a.createElement("p",null,"Created by ",a.createElement("a",{href:"https://mark.ie"},"Mark Conroy"))))},f=n(6180),g=l.ZP.div.withConfig({displayName:"layout__LayoutContainerStyles",componentId:"q97wki-0"})(["display:flex;min-height:100vh;flex-direction:column;> *:nth-last-child(2){margin-bottom:4rem;}"]),h=function(e){var t,n=e.children,l=(0,r.useStaticQuery)("3649515864");return a.createElement(a.Fragment,null,a.createElement(f.Z,null),a.createElement(g,null,a.createElement(s,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.createElement("main",null,n),a.createElement(p,null)))}},6850:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),r=(n(5444),n(3751)),l=n(6180),i=n(9055),o=n(9),c=o.ZP.ul.withConfig({displayName:"card-list__CardListContainerStyles",componentId:"sc-7mhoev-0"})(["margin:0;padding:0;list-style:none;@media screen and (min-width:500px){display:flex;flex-wrap:wrap;margin-left:-1rem;margin-right:-1rem;li{display:flex;width:calc(50% - 2rem);margin-left:1rem;margin-right:1rem;}}"]),m=o.ZP.li.withConfig({displayName:"card-list__CardListItemStyles",componentId:"sc-7mhoev-1"})(["margin-bottom:3rem;"]);function d(e){var t=e.children;return a.createElement(c,null,t)}function s(e){var t=e.children,n=e.cardListItemKey;return a.createElement(m,{key:n},t)}var u=n(6840);function p(e){var t=e.data,n=t.workspaces.edges;return a.createElement(a.Fragment,null,a.createElement(l.Z,null),a.createElement(i.Z,null,a.createElement(r.Z,{title:"Developer Workspaces Images and Descriptions",metaImageSource:""+t.site.siteMetadata.siteUrl+n[0].node.frontmatter.image.publicURL}),a.createElement("div",{className:"layout-contained layout-contained--large padding-horizontal"},a.createElement("h1",null,"Workspaces"),a.createElement(d,null,n.map((function(e){return a.createElement(a.Fragment,null,a.createElement(s,{cardListItemKey:"list-item-"+e.node.id},a.createElement(u.Z,{cardImage:e.node.frontmatter.image?e.node.frontmatter.image.childImageSharp.gatsbyImageData:"",cardTitle:e.node.frontmatter?e.node.frontmatter.title:"",cardPath:"/workspaces/"+e.node.id})))}))))))}}}]);
//# sourceMappingURL=component---src-pages-workspaces-js-e1e24ef5ba6586f4b7bf.js.map