import{K as j,m as v,j as e,$ as h}from"./app-D5eSghW4.js";import{T as i,I as m}from"./TextInput-FZ47hBCW.js";import{I as n}from"./InputLabel-DrBZu9Sm.js";import{P as g}from"./PrimaryButton-txQq_tcB.js";import{z as N}from"./transition-D3geLPTC.js";function k({mustVerifyEmail:o,status:u,className:c=""}){const{user:s}=j().props,{data:a,setData:r,patch:d,errors:l,processing:x,recentlySuccessful:f}=v({firstname:s.profile_firstname,lastname:s.profile_lastname,tel:s.tel,email:s.email}),p=t=>{t.preventDefault(),d(route("profile.update"))};return e.jsxs("section",{className:c,children:[e.jsxs("header",{children:[e.jsxs("h2",{className:"text-lg font-medium text-gray-50",children:["Informations de profil ",e.jsx("br",{})]}),e.jsx("br",{}),e.jsx("p",{className:"mt-1 text-sm text-gray-100",children:"Mettez à jour vos informations de profil."})]}),e.jsxs("form",{onSubmit:p,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"firstname",value:"Prénom"}),e.jsx(i,{id:"firstname",className:"mt-1 block w-full",value:a.firstname,onChange:t=>r("firstname",t.target.value),required:!0,isFocused:!0,autoComplete:"firstname"}),e.jsx(m,{className:"mt-2",message:l.firstname})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"lastname",value:"Nom"}),e.jsx(i,{id:"lastname",className:"mt-1 block w-full",value:a.lastname,onChange:t=>r("lastname",t.target.value),required:!0,autoComplete:"lastname"}),e.jsx(m,{className:"mt-2",message:l.lastname})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"tel",value:"Téléphone"}),e.jsx(i,{id:"tel",className:"mt-1 block w-full",value:a.tel,onChange:t=>r("tel",t.target.value),required:!0,autoComplete:"tel"}),e.jsx(m,{className:"mt-2",message:l.tel})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"email",value:"Email"}),e.jsx(i,{id:"email",type:"email",className:"mt-1 block w-full",value:a.email,onChange:t=>r("email",t.target.value),required:!0,autoComplete:"username"}),e.jsx(m,{className:"mt-2",message:l.email})]}),o&&s.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"mt-2 text-sm text-gray-800",children:["Votre adresse email n'est pas vérifié.",e.jsx(h,{href:route("verification.send"),method:"post",as:"button",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Appuyez ici pour renvoyer le mail de vérification."})]}),u==="verification-link-sent"&&e.jsx("div",{className:"mt-2 text-sm font-medium text-green-600",children:"Un nouveau lien de vérification a été envoyué à votre adresse mail."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{disabled:x,children:"Enregistrer"}),e.jsx(N,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Enregistré."})})]})]})]})}export{k as default};
