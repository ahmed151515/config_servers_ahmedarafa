import{a as d}from"./chunk-CX73OO7W.js";import"./chunk-MXQJHEDE.js";import{a as u}from"./chunk-QPOBV5UM.js";import"./chunk-OWNJBPSF.js";import{Fa as c,L as s,X as n,_a as l,da as r,fb as m,ha as a,ma as p,ua as f}from"./chunk-OD32AHD5.js";import"./chunk-4UQR44R5.js";var j=(()=>{let e=class e{constructor(i,t){this.route=i,this.profileService=t,this.destroyRef=n(a)}ngOnInit(){this.profileService.get(this.route.parent?.snapshot.params.username).pipe(m(this.destroyRef)).subscribe({next:i=>{this.profile=i,this.favoritesConfig={type:"all",filters:{favorited:this.profile.username}}}})}};e.\u0275fac=function(t){return new(t||e)(r(l),r(u))},e.\u0275cmp=s({type:e,selectors:[["app-profile-favorites"]],standalone:!0,features:[c],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(t,v){t&1&&f(0,"app-article-list",0),t&2&&p("limit",10)("config",v.favoritesConfig)},dependencies:[d],encapsulation:2});let o=e;return o})();export{j as default};
