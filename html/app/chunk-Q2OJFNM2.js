import{N as o,X as a,da as s,ea as c,eb as d,fb as u,ha as h,ja as f}from"./chunk-OD32AHD5.js";var V=(()=>{let i=class i{constructor(e,t,n){this.templateRef=e,this.userService=t,this.viewContainer=n,this.destroyRef=a(h),this.condition=!1,this.hasView=!1}ngOnInit(){this.userService.isAuthenticated.pipe(u(this.destroyRef)).subscribe(e=>{let t=e&&this.condition,n=!e&&!this.condition;(t||n)&&!this.hasView?(this.viewContainer.createEmbeddedView(this.templateRef),this.hasView=!0):this.hasView&&(this.viewContainer.clear(),this.hasView=!1)})}set ifAuthenticated(e){this.condition=e}};i.\u0275fac=function(t){return new(t||i)(s(c),s(d),s(f))},i.\u0275dir=o({type:i,selectors:[["","ifAuthenticated",""]],inputs:{ifAuthenticated:"ifAuthenticated"},standalone:!0});let r=i;return r})();export{V as a};
