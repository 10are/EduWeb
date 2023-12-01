"use strict";(globalThis.webpackChunkcms=globalThis.webpackChunkcms||[]).push([[2458],{2458:($,m,s)=>{s.r(m),s.d(m,{default:()=>b});var e=s(74081),D=s(51926),_=s(73354),u=s(27875),E=s(74758),y=s(48102),A=s(93415),T=s(10701),x=s(32370),L=s(23298),p=s(74577),R=s(5627),S=s(78955),i=s(15530),j=s(59082),C=s(71563),I=s(61020),r=s(40464),t=s(45857),k=s(10124),o=s(47853);const U=[{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,t.g)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,t.g)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}],f=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),W=o.Ry().shape({email_confirmation_redirection:o.nK().when("email_confirmation",{is:!0,then:o.Z_().matches(f).required(),otherwise:o.Z_().nullable()}),email_reset_password:o.Z_(i.I0.string).matches(f,i.I0.regex).nullable()}),b=()=>(0,e.jsx)(i.O4,{permissions:t.P.readAdvancedSettings,children:(0,e.jsx)(B,{})}),B=()=>{const{formatMessage:d}=(0,I.Z)(),l=(0,i.lm)(),{lockApp:K,unlockApp:M}=(0,i.o1)(),{notifyStatus:F}=(0,D.G)(),z=(0,r.useQueryClient)(),{get:w,put:N}=(0,i.kY)(),{formatAPIError:Z}=(0,i.So)();(0,i.go)();const{isLoading:H,allowedActions:{canUpdate:h}}=(0,i.ss)({update:t.P.updateAdvancedSettings}),{isLoading:Q,data:v}=(0,r.useQuery)(["users-permissions","advanced"],async()=>{const{data:n}=await w("/users-permissions/advanced");return n},{onSuccess(){F(d({id:(0,t.g)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){l({type:"warning",message:{id:(0,t.g)("notification.error"),defaultMessage:"An error occured"}})}}),G=H||Q,P=(0,r.useMutation)(n=>N("/users-permissions/advanced",n),{async onSuccess(){await z.invalidateQueries(["users-permissions","advanced"]),l({type:"success",message:{id:(0,t.g)("notification.success.saved"),defaultMessage:"Saved"}}),M()},onError(n){l({type:"warning",message:Z(n)}),M()},refetchActive:!0}),{isLoading:J}=P,V=async n=>{K(),P.mutate({...n,email_confirmation_redirection:n.email_confirmation?n.email_confirmation_redirection:""})};return G?(0,e.jsxs)(_.o,{"aria-busy":"true",children:[(0,e.jsx)(i.SL,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,e.jsx)(u.T,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,e.jsx)(E.D,{children:(0,e.jsx)(i.dO,{})})]}):(0,e.jsxs)(_.o,{"aria-busy":J,children:[(0,e.jsx)(i.SL,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,e.jsx)(C.J9,{onSubmit:V,initialValues:v.settings,validateOnChange:!1,validationSchema:W,enableReinitialize:!0,children:({errors:n,values:g,handleChange:O,isSubmitting:X,dirty:Y})=>(0,e.jsxs)(i.l0,{children:[(0,e.jsx)(u.T,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:(0,e.jsx)(y.z,{loading:X,type:"submit",disabled:h?!Y:!h,startIcon:(0,e.jsx)(j.Z,{}),size:"S",children:d({id:"global.save",defaultMessage:"Save"})})}),(0,e.jsx)(E.D,{children:(0,e.jsx)(A.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(T.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(x.Z,{variant:"delta",as:"h2",children:d({id:"global.settings",defaultMessage:"Settings"})}),(0,e.jsxs)(L.r,{gap:6,children:[(0,e.jsx)(p.P,{col:6,s:12,children:(0,e.jsx)(R.P,{label:d({id:(0,t.g)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:g.default_role,hint:d({id:(0,t.g)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:a=>O({target:{name:"default_role",value:a}}),children:v.roles.map(a=>(0,e.jsx)(S.W,{value:a.type,children:a.name},a.type))})}),U.map(a=>{let c=g[a.name];return c||(c=a.type==="bool"?!1:""),(0,e.jsx)(p.P,{...a.size,children:(0,e.jsx)(i.jm,{...a,value:c,error:n[a.name],disabled:a.name==="email_confirmation_redirection"&&g.email_confirmation===!1,onChange:O})},a.name)})]})]})})})]})})]})}}}]);
