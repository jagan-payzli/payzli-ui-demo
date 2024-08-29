"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[878],{"./src/stories/InputFields/TextInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisabledInput:()=>DisabledInput,EmailInput:()=>EmailInput,InputWithErrorMessage:()=>InputWithErrorMessage,InputWithHintText:()=>InputWithHintText,InputWithMaxLength:()=>InputWithMaxLength,InputWithSection:()=>InputWithSection,InputWithSectionCopy:()=>InputWithSectionCopy,ReadOnlyInput:()=>ReadOnlyInput,TextInput:()=>TextInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextInput_stories});var main=__webpack_require__("./src/main.ts"),react=__webpack_require__("./node_modules/react/index.js"),IconBase=__webpack_require__("./node_modules/@phosphor-icons/react/dist/lib/IconBase.mjs");const t=new Map([["bold",react.createElement(react.Fragment,null,react.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"}))],["duotone",react.createElement(react.Fragment,null,react.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),react.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["fill",react.createElement(react.Fragment,null,react.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["light",react.createElement(react.Fragment,null,react.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"}))],["regular",react.createElement(react.Fragment,null,react.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["thin",react.createElement(react.Fragment,null,react.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"}))]]);var i=Object.defineProperty,l=Object.defineProperties,f=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(o,e,m)=>e in o?i(o,e,{enumerable:!0,configurable:!0,writable:!0,value:m}):o[e]=m;const w=(0,react.forwardRef)(((o,e)=>react.createElement(IconBase.A,((o,e)=>l(o,f(e)))(((o,e)=>{for(var m in e||(e={}))n.call(e,m)&&p(o,m,e[m]);if(r)for(var m of r(e))s.call(e,m)&&p(o,m,e[m]);return o})({ref:e},o),{weights:t}))));w.displayName="EnvelopeSimple";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInput_stories={title:"payzli-ui/Components/InputFields/TextInput",component:main.FO,name:"InputField",tags:["autodocs","test"],parameters:{layout:"centered"},argTypes:{type:{control:{type:"inline-radio"},options:["text","email"],defaultValue:{summary:"text"},description:"Specifies the type of input field."},id:{control:{type:"text"},description:"Unique identifier for the input field."},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},onChange:{action:"onChange",description:"Callback function triggered when the input value changes.",table:{type:{summary:"(e: React.ChangeEvent<HTMLInputElement>) => void"}}},className:{control:{type:"text"}},required:{control:{type:"boolean"},defaultValue:{summary:!1}},formSubmitted:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Indicates if the form containing the input field has been submitted."},name:{control:{type:"text"},description:"Name attribute for the input field. this is used as identifier for the input field."},label:{control:{type:"text"},description:"Label text for the input field."},tooltip:{control:{type:"text"}},errorMessage:{control:{type:"text"},description:"Custom Error message for input field from parent."},formClass:{control:{type:"text"},description:"CSS class for the form element containing the input."},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},leftIcon:{control:{type:"select"},options:["search","email","React.ReactNode"],description:"Icon to display on the left side of the input field."},onBlur:{action:"onBlur",description:"Callback function triggered when the input loses focus.",table:{type:{summary:"(e: React.FocusEvent<HTMLInputElement>) => void"}}},disableAutoFill:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Disables the browser's autofill feature for the input field."},fieldType:{control:{type:"inline-radio"},options:["url"],description:"Specifies the type of input field, e.g., 'url'."},autoFocus:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Automatically focuses the input field when the component mounts."},readOnly:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Indicates whether the input field is read-only."},disableValidation:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Disables validation for the input field."},imputMode:{control:{type:"select"},options:["text","search","email","tel","url","none","numeric","decimal"],defaultValue:{summary:"text"},description:"Hint for the type of input mode to use on virtual keyboards."},pattern:{control:{type:"text"},description:"Regular expression pattern that the input field's value must match."},minLength:{control:{type:"number"},description:"Minimum length of the input field's value."},maxLength:{control:{type:"number"},description:"Maximum length of the input field's value."},showMaxLength:{control:{type:"boolean"},description:"Shows the maximum length as a counter on the input field."},hintText:{control:{type:"text"},description:"Additional hint text displayed below the input field."},UiLanguage:{control:{type:"text"},description:"Specifies the UI language for the input field. used in transformPhrase method"},sectionType:{control:{type:"inline-radio"},options:["left","right","both"],description:"Determines the section type for the input field."},sectionLeftIcon:{control:{type:"object"},description:"Icon component to display on the left section of the input field."},sectionRightIcon:{control:{type:"object"},description:"Icon component to display on the right section of the input field."},transformPhrase:{description:"transformPhrase method to transform few row texts with the help of UI language",table:{type:{summary:"(phrase: string, UiLanguage: string, {}: options) => string"}}}}},Template=args=>{const[value,setValue]=(0,react.useState)(args.value);return(0,jsx_runtime.jsx)(main.FO,{...args,value,onChange:event=>{setValue(event.target.value)}})},TextInput=Template.bind({});TextInput.args={type:"text",id:"text-input",name:"text-input",label:"Text Input",required:!1,formSubmitted:!0,tooltip:"This is a tooltip",placeholder:"Enter text here"};const EmailInput=Template.bind({});EmailInput.args={type:"email",id:"email-input",name:"email-input",label:"Email Input",required:!0,formSubmitted:!1,tooltip:"This is a tooltip",leftIcon:(0,jsx_runtime.jsx)(w,{className:"icon-color"}),placeholder:"Ex: example@gmail.com"};const DisabledInput=Template.bind({});DisabledInput.args={type:"text",id:"disabled-input",name:"disabled-input",label:"Disabled Input",required:!1,formSubmitted:!1,tooltip:"This is a tooltip",placeholder:"Enter text here",disabled:!0};const ReadOnlyInput=Template.bind({});ReadOnlyInput.args={type:"text",id:"readonly-input",name:"readonly-input",label:"Read-only Input",required:!1,formSubmitted:!1,tooltip:"This is a tooltip",placeholder:"Enter text here",readOnly:!0};const InputWithSection=Template.bind({});InputWithSection.args={type:"text",id:"input-with-section",name:"input-with-section",label:"Input with Section",required:!1,formSubmitted:!1,tooltip:"This is a tooltip",placeholder:"Enter text here",sectionType:"left",fieldType:"url",sectionLeftIcon:(0,jsx_runtime.jsx)("span",{className:"px-2",children:"https://"})};const InputWithSectionCopy=Template.bind({});InputWithSectionCopy.args={type:"text",id:"input-with-section",name:"input-with-section",label:"Input with Section",required:!1,formSubmitted:!1,placeholder:"Enter text here",sectionType:"both",fieldType:"url",sectionLeftIcon:(0,jsx_runtime.jsx)("span",{className:"px-2",children:"https://"}),sectionRightIcon:(0,jsx_runtime.jsx)("span",{className:"px-2",children:"Copy"})};const InputWithMaxLength=Template.bind({});InputWithMaxLength.args={type:"text",id:"input-with-maxlength",name:"input-with-maxlength",label:"Input with Max Length",required:!1,formSubmitted:!1,tooltip:"This is a tooltip",placeholder:"Enter text here",maxLength:10,showMaxLength:!0};const InputWithHintText=Template.bind({});InputWithHintText.args={type:"text",id:"input-with-hinttext",name:"input-with-hinttext",label:"Input with Hint Text",required:!1,formSubmitted:!1,tooltip:"This is a tooltip",placeholder:"Enter text here",hintText:"This is a hint text"};const InputWithErrorMessage=Template.bind({});InputWithErrorMessage.args={type:"text",id:"input-with-errormessage",name:"input-with-errormessage",label:"Input with Error Message",required:!1,formSubmitted:!1,tooltip:"This is a tooltip",placeholder:"Enter text here",errorMessage:"This is an error message"};const __namedExportsOrder=["TextInput","EmailInput","DisabledInput","ReadOnlyInput","InputWithSection","InputWithSectionCopy","InputWithMaxLength","InputWithHintText","InputWithErrorMessage"];TextInput.parameters={...TextInput.parameters,docs:{...TextInput.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <InputField {...args} value={value} onChange={handleChange} />;\n}",...TextInput.parameters?.docs?.source}}},EmailInput.parameters={...EmailInput.parameters,docs:{...EmailInput.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <InputField {...args} value={value} onChange={handleChange} />;\n}",...EmailInput.parameters?.docs?.source}}},DisabledInput.parameters={...DisabledInput.parameters,docs:{...DisabledInput.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <InputField {...args} value={value} onChange={handleChange} />;\n}",...DisabledInput.parameters?.docs?.source}}},ReadOnlyInput.parameters={...ReadOnlyInput.parameters,docs:{...ReadOnlyInput.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <InputField {...args} value={value} onChange={handleChange} />;\n}",...ReadOnlyInput.parameters?.docs?.source}}},InputWithSection.parameters={...InputWithSection.parameters,docs:{...InputWithSection.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <InputField {...args} value={value} onChange={handleChange} />;\n}",...InputWithSection.parameters?.docs?.source}}},InputWithSectionCopy.parameters={...InputWithSectionCopy.parameters,docs:{...InputWithSectionCopy.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <InputField {...args} value={value} onChange={handleChange} />;\n}",...InputWithSectionCopy.parameters?.docs?.source}}},InputWithMaxLength.parameters={...InputWithMaxLength.parameters,docs:{...InputWithMaxLength.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <InputField {...args} value={value} onChange={handleChange} />;\n}",...InputWithMaxLength.parameters?.docs?.source}}},InputWithHintText.parameters={...InputWithHintText.parameters,docs:{...InputWithHintText.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <InputField {...args} value={value} onChange={handleChange} />;\n}",...InputWithHintText.parameters?.docs?.source}}},InputWithErrorMessage.parameters={...InputWithErrorMessage.parameters,docs:{...InputWithErrorMessage.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <InputField {...args} value={value} onChange={handleChange} />;\n}",...InputWithErrorMessage.parameters?.docs?.source}}}},"./src/main.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>_components__WEBPACK_IMPORTED_MODULE_0__.$n,BI:()=>_components__WEBPACK_IMPORTED_MODULE_0__.BI,E$:()=>_components__WEBPACK_IMPORTED_MODULE_0__.E$,FO:()=>_components__WEBPACK_IMPORTED_MODULE_0__.FO,J$:()=>_components__WEBPACK_IMPORTED_MODULE_0__.J$,K0:()=>_components__WEBPACK_IMPORTED_MODULE_0__.K0,N:()=>_components__WEBPACK_IMPORTED_MODULE_0__.N,Pw:()=>_components__WEBPACK_IMPORTED_MODULE_0__.Pw,Q7:()=>_components__WEBPACK_IMPORTED_MODULE_0__.Q7,TM:()=>_components__WEBPACK_IMPORTED_MODULE_0__.TM,VV:()=>_components__WEBPACK_IMPORTED_MODULE_0__.VV,Z7:()=>_components__WEBPACK_IMPORTED_MODULE_0__.Z7,Zp:()=>_components__WEBPACK_IMPORTED_MODULE_0__.Zp,eu:()=>_components__WEBPACK_IMPORTED_MODULE_0__.eu,nD:()=>_components__WEBPACK_IMPORTED_MODULE_0__.nD,o5:()=>_components__WEBPACK_IMPORTED_MODULE_0__.o5,oz:()=>_components__WEBPACK_IMPORTED_MODULE_0__.oz,tU:()=>_components__WEBPACK_IMPORTED_MODULE_0__.tU,yL:()=>_components__WEBPACK_IMPORTED_MODULE_0__.yL});var _components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/index.ts")}}]);