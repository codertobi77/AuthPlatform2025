import{m as w,j as s,L as f}from"./app-DLgzTWCO.js";import{T as r,I as m}from"./TextInput-C2piIbPP.js";import{I as i}from"./InputLabel-Ch-je4MN.js";import{P as x}from"./PrimaryButton-Cqa0mTdU.js";import{G as j}from"./GuestLayout-CoLwP5rF.js";function b({token:l,email:n}){const{data:e,setData:o,post:d,processing:p,errors:t,reset:c}=w({token:l,email:n,password:"",password_confirmation:""}),u=a=>{a.preventDefault(),d(route("password.store"),{onFinish:()=>c("password","password_confirmation")})};return s.jsxs(j,{children:[s.jsx(f,{title:"Réinitialiser le mot de passe"}),s.jsxs("form",{onSubmit:u,children:[s.jsxs("div",{children:[s.jsx(i,{htmlFor:"email",value:"Email"}),s.jsx(r,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>o("email",a.target.value)}),s.jsx(m,{message:t.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(i,{htmlFor:"password",value:"Mot de passe"}),s.jsx(r,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>o("password",a.target.value)}),s.jsx(m,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(i,{htmlFor:"password_confirmation",value:"Confirmer le mot de passe"}),s.jsx(r,{type:"password",id:"password_confirmation",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>o("password_confirmation",a.target.value)}),s.jsx(m,{message:t.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(x,{className:"ms-4",disabled:p,children:"Réinitialiser le mot de passe"})})]})]})}export{b as default};
