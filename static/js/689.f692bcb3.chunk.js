"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[689],{7689:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t,a,o,i,s,d,l,c=r(885),u=r(2791),p=r(168),x=r(2499),f=x.Z.form(t||(t=(0,p.Z)(["\n  margin: 43px auto;\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  border: 1px solid #565b9f;\n  border-radius: 4px;\n  padding: 25px;\n"]))),m=x.Z.input(a||(a=(0,p.Z)(["\n  margin: 11px;\n  padding: 5px;\n  border-color: #565b9f;\n  border-style: solid;\n  border-radius: 4px;\n  color: #565b9f;\n  font: 0.8em 'Fira Sans', serif;\n\n  &:focus {\n    outline: none !important;\n    border-color: #565b9f;\n    box-shadow: 0 0 10px #565b9f;\n    color: #565b9f;\n    font: 0.8em 'Fira Sans', serif;\n  }\n"]))),b=x.Z.label(o||(o=(0,p.Z)(["\n  font-size: 26px;\n  color: #565b9f;\n"]))),h=x.Z.button(i||(i=(0,p.Z)(["\n  color: white;\n  background-color: #565b9f;\n  margin: auto;\n  width: 190px;\n  padding: 5px 20px;\n  border: 4px;\n  border-color: #eddeff;\n  border-style: double;\n  border-radius: 25px;\n  font: 1.2em 'Fira Sans', serif;\n"]))),g=r(5984),Z=r(6140),j=r(4659),w=r(8820),v=r(184);function C(){var n=(0,j.wY)().data,e=(0,j.Tn)(),r=(0,c.Z)(e,1)[0],t=(0,u.useState)(""),a=(0,c.Z)(t,2),o=a[0],i=a[1],s=(0,u.useState)(""),d=(0,c.Z)(s,2),l=d[0],p=d[1],x=function(n){var e=n.currentTarget,r=e.name,t=e.value;switch(r){case"name":i(t);break;case"number":p(t);break;default:return}};return(0,v.jsxs)(f,{autoComplete:"off",onSubmit:function(e){e.preventDefault();var t={id:(0,g.x0)(),name:o,number:l};if(n.some((function(n){return n.name.toLowerCase()===o.toLowerCase()})))return Z.ZP.error("".concat(o," is already in contacts!"));Z.ZP.success("".concat(o," is added!")),r(t),i(""),p("")},children:[(0,v.jsx)(b,{htmlFor:"name",children:"Name"}),(0,v.jsx)(m,{type:"text",value:o,id:"name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:x}),(0,v.jsx)(b,{htmlFor:"number",children:"Number"}),(0,v.jsx)(m,{type:"tel",value:l,name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:x}),(0,v.jsxs)(h,{type:"submit",children:["Add contact",(0,v.jsx)(w.Zev,{width:"20px",height:"20px"})]})]})}var y,F,k=x.Z.ul(s||(s=(0,p.Z)(["\n  list-style: none;\n    display: flex;\n  flex-wrap: wrap;\n}\n"]))),S=x.Z.li(d||(d=(0,p.Z)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nheight: 20px;\nwidth: 300px;\n\npadding: 15px 5px;\nborder: 1px solid #565b9f;\nborder-radius: 4px;\n\ntext-align: center;\n\nmargin-left: 15px;\nmargin-top: 15px;"]))),z=x.Z.button(l||(l=(0,p.Z)(["\npadding: 5px 6px 1px 6px;\nmargin-right: 35px;\n"]))),A=r(828),L=function(n){var e=n.contacts,r=(0,j.Nt)(),t=(0,c.Z)(r,2),a=t[0],o=t[1].isLoading;return(0,v.jsx)(v.Fragment,{children:e.length>0?(0,v.jsx)(k,{children:e.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,v.jsxs)(S,{children:[(0,v.jsxs)("p",{children:[r,": ",t]}),(0,v.jsx)(z,{type:"button",disabled:o,onClick:function(){return a(e)},children:(0,v.jsx)(A.sQZ,{width:"20px",height:"20px",fill:"#CD5C5C"})})]},e)}))}):(0,v.jsx)("p",{children:"No contacts..."})})},N=x.Z.label(y||(y=(0,p.Z)(["\nfont-size: 26px;\ncolor: #565b9f;\nmargin-right: 8px;\n"]))),_=x.Z.input(F||(F=(0,p.Z)(["\n  margin: 11px;\n  padding: 4px;\n  border-color: #565b9f;\n  border-style: solid;\n  border-radius: 4px;\n  color: cadetblue;\n  font:  0.8em 'Fira Sans', serif;\n\n  &:focus {\n    outline: none !important;\n    border-color: #565b9f;\n    box-shadow: 0 0 10px #565b9f;\n    color: cadetblue;\n    font:  0.8em 'Fira Sans', serif;\n  }\n"]))),P=function(n){var e=n.value,r=n.onChange;return(0,v.jsxs)("form",{autoComplete:"off",children:[(0,v.jsx)(N,{htmlFor:"filter",children:"Find contact by name"}),(0,v.jsx)(_,{name:"filter",value:e,onChange:r,type:"text",id:"filter"})]})};function q(){var n=(0,u.useState)(""),e=(0,c.Z)(n,2),r=e[0],t=e[1],a=(0,j.wY)().data;return(0,v.jsxs)("div",{children:[(0,v.jsx)(C,{}),(0,v.jsx)(Z.x7,{}),(0,v.jsx)(P,{value:r,onChange:function(n){t(n.target.value)}}),a?(0,v.jsx)(L,{contacts:function(){var n=r.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(n)}))}()}):(0,v.jsx)("p",{children:" loading "})]})}}}]);
//# sourceMappingURL=689.f692bcb3.chunk.js.map