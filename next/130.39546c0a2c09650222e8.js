(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{"+XZ6":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiAutoFocusModule",(function(){return k}));var o=n("An66"),a=n("3kIJ"),u=n("1VvW"),i=n("SVIu"),c=n("l4xa"),l=n("Qq0t"),s=n("dvRg"),p=n("kZht"),r=n("OZlg"),d=n("e0eB"),m=n("iyc4"),f=n("zV1d"),b=n("GdrL"),g=n("71sB"),h=n("oW5P");function x(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-input",2),p["\u0275\u0275listener"]("ngModelChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().model=t})),p["\u0275\u0275text"](1," Focusable tui-input\n"),p["\u0275\u0275elementEnd"]()}if(2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("ngModel",e.model)}}let C=(()=>{class e{constructor(){this.showInput=!1,this.model="Focused after its appearance"}onClick(){this.showInput=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-auto-focus-example-1"]],decls:3,vars:1,consts:[["tuiButton","","type","button",1,"tui-space_bottom-5",3,"click"],["tuiAutoFocus","",3,"ngModel","ngModelChange",4,"ngIf"],["tuiAutoFocus","",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"button",0),p["\u0275\u0275listener"]("click",(function(){return t.onClick()})),p["\u0275\u0275text"](1," Show input\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](2,x,2,1,"tui-input",1)),2&e&&(p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",t.showInput))},directives:[f.a,o.t,b.a,g.a,h.a,a.NgControlStatus,a.NgModel],encapsulation:2,changeDetection:0}),e})();var w=n("u8jZ");const A=["header",$localize`:␟f9edaaf6c41c9cded402e1e3a7d560f335226273␟2512553398889197442:AutoFocus`],S=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var T;T=$localize`:␟4fd9ee3925d4f6cd90b8857aa8c26c7226380f1e␟6813366651971663120:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiAutoFocus${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to focus HTML-element right after its appearance. It works also with focusable Taiga UI components `;const E=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function M(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,T),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](4,E),p["\u0275\u0275element"](5,"tui-auto-focus-example-1"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example1)}}var v,y;function F(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",4),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,v),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,y),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleHtml)}}v=$localize`:␟6eb38541c615c02bbbaa2361faeb207881234045␟1923648485573346644: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAutoFocus${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our directive `,y=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let I=(()=>{class e{constructor(){this.exampleModule="import {TuiAutoFocusModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiAutoFocusModule,\n    ],\n...\n",this.exampleHtml='\x3c!-- Usual HTML element --\x3e\n<div tuiAutoFocus tabindex="0"></div>\n\n\x3c!-- Or focusable component of Taiga UI --\x3e\n<tui-input tuiAutoFocus [(ngModel)]="model">\n    Input\n</tui-input>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-auto-focus-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAutoFocusExample1 {\n    showInput = false;\n    model = 'Focused after its appearance';\n\n    onClick() {\n        this.showInput = true;\n    }\n}\n",HTML:'<button tuiButton type="button" class="tui-space_bottom-5" (click)="onClick()">\n    Show input\n</button>\n<tui-input *ngIf="showInput" tuiAutoFocus [(ngModel)]="model">\n    Focusable tui-input\n</tui-input>\n'}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-auto-focus"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,A),p["\u0275\u0275template"](2,M,6,1,"ng-template",1),p["\u0275\u0275template"](3,F,10,2,"ng-template",2),p["\u0275\u0275i18nAttributes"](4,S),p["\u0275\u0275elementEnd"]())},directives:[r.a,d.a,m.a,C,w.a],encapsulation:2,changeDetection:0}),e})(),k=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.FormsModule,s.ab,c.W,l.W,i.i,u.f.forChild(Object(i.p)(I))]]}),e})()}}]);