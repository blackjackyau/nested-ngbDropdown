function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page/page.component */
    "./src/app/page/page.component.ts");

    var routes = [{
      path: 'page/:name',
      component: _page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["dd"];

    var _c1 = function _c1(a1) {
      return ["/page", a1];
    };

    function AppComponent_ng_template_5_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_5_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.actionClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().node;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, node_r5.link));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r5.label, " ");
      }
    }

    function AppComponent_ng_template_5_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().node;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r5.label, " ");
      }
    }

    function AppComponent_ng_template_5_ul_4_ng_template_1_ng_template_0_Template(rf, ctx) {}

    var _c2 = function _c2(a0) {
      return {
        node: a0
      };
    };

    function AppComponent_ng_template_5_ul_4_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_5_ul_4_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 17);
      }

      if (rf & 2) {
        var child_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, child_r15));
      }
    }

    function AppComponent_ng_template_5_ul_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_5_ul_4_ng_template_1_Template, 1, 4, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().node;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", node_r5.children);
      }
    }

    function AppComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_template_5_a_2_Template, 2, 4, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_template_5_a_3_Template, 2, 1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_template_5_ul_4_Template, 2, 1, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r5 = ctx.node;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "outside");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", node_r5.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", node_r5.children);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", node_r5.children);
      }
    }

    function AppComponent_ng_template_12_ng_template_0_Template(rf, ctx) {}

    function AppComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_12_ng_template_0_Template, 0, 0, "ng-template", 17);
      }

      if (rf & 2) {
        var child_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, child_r18));
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'nested-ngbdropdown';
        this.nestedMenu = {
          root: [{
            label: 'Malaysia',
            children: [{
              label: 'Melaka',
              children: [{
                label: 'Macap',
                link: 'Macap'
              }, {
                label: 'Ayer Keroh',
                link: 'Ayer Keroh'
              }, {
                label: 'Jasin',
                link: 'Jasin'
              }]
            }, {
              label: 'Pulau Penang',
              link: 'Pulau Penang'
            }, {
              label: 'Selangor',
              link: 'Selangor'
            }]
          }, {
            label: 'Singapore',
            children: [{
              label: 'Pulau Ujong',
              link: 'Pulau Ujong'
            }, {
              label: 'Woodland',
              link: 'Woodland'
            }, {
              label: 'Changi',
              link: 'Changi'
            }]
          }, {
            label: 'Thailand',
            children: [{
              label: 'Nakhon Ratchasima',
              link: 'Nakhon Ratchasima'
            }, {
              label: 'Nakhon Sawan',
              link: 'Nakhon Sawan'
            }, {
              label: 'Nakhon Si Thammarat',
              link: 'Nakhon Si Thammarat'
            }]
          }]
        };
      }

      _createClass(AppComponent, [{
        key: "actionClick",
        value: function actionClick() {
          this.dds.forEach(function (dd) {
            dd.close();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dds = _t);
        }
      },
      decls: 15,
      vars: 2,
      consts: [[1, "navbar", "navbar-expand-lg", "fixed-top"], ["href", "#", 1, "navbar-brand"], [1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-left"], ["nodeTemplateRef", ""], ["ngbDropdown", "", 1, "nav-item", "dropdown", 3, "autoClose"], ["dd", "ngbDropdown"], ["href", "javascript:void(0)", "ngbDropdownToggle", "", 1, "nav-link"], ["aria-labelledby", "navbarDropdownMenuLink", "ngbDropdownMenu", "", 1, "dropdown-menu"], ["ngFor", "", 3, "ngForOf"], [1, "main-container"], ["ngbDropdown", "", 1, "dropdown-submenu", 3, "autoClose"], ["class", "dropdown-item", 3, "routerLink", "click", 4, "ngIf"], ["class", "dropdown-item", "ngbDropdownToggle", "", 4, "ngIf"], ["class", "dropdown-menu", "aria-labelledby", "navbarDropdownMenuLink", "ngbDropdownMenu", "", 4, "ngIf"], [1, "dropdown-item", 3, "routerLink", "click"], ["ngbDropdownToggle", "", 1, "dropdown-item"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nested NgbDropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_template_5_Template, 5, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Country ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_ng_template_12_Template, 1, 4, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "outside");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nestedMenu.root);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      styles: ["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background-color: #222;\n}\n[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #999;\n}\n[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%] {\n  width: 300px;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n}\n.dropdown-submenu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown-submenu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\n  top: 0;\n  left: 100%;\n  margin-top: -6px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover:after {\n  text-decoration: underline;\n  transform: rotate(-90deg);\n}\n*[_ngcontent-%COMP%] {\n  transition: margin-left 0.2s ease-in-out;\n}\n.main-container[_ngcontent-%COMP%] {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxiTGFYXFxEb2N1bWVudHNcXFByb2plY3RzXFxuZXN0ZWQtbmdiRHJvcGRvd24vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksc0JBSGtCO0FDRTFCO0FER1E7RUFDSSxXQUFBO0FDRFo7QURJUTtFQUNJLFdBQUE7QUNGWjtBRElZO0VBQ0ksV0FBQTtBQ0ZoQjtBRE9JO0VBQ0ksWUFBQTtBQ0xSO0FET1E7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDTFo7QURPWTtFQUNJLG1CQUFBO0FDTGhCO0FEVVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNSaEI7QURXWTtFQUNJLFNBQUE7QUNUaEI7QURZWTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FDVmhCO0FEZ0JBO0VBQ0ksa0JBQUE7QUNiSjtBRGVBO0VBQ0ksTUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEZUEsMEJBQUE7QUFDQTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7QUNaSjtBRGVBO0VBS0ksd0NBQUE7QUNaSjtBRGVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbjpob3N0IHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi1pdGVtID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZXMge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgICAgICAgLm1lZGlhIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZWRpYS1ib2R5IHtcclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxhc3Qge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24tc3VibWVudSB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4uZHJvcGRvd24tc3VibWVudT4uZHJvcGRvd24tbWVudSB7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MTAwJTtcclxuICAgIG1hcmdpbi10b3A6LTZweDtcclxufVxyXG5cclxuLyogcm90YXRlIGNhcmV0IG9uIGhvdmVyICovXHJcbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyOmFmdGVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxufVxyXG5cclxuKiB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSIsIjpob3N0IC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xufVxuOmhvc3QgLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCAubmF2YmFyIC5uYXYtaXRlbSA+IGEge1xuICBjb2xvcjogIzk5OTtcbn1cbjpob3N0IC5uYXZiYXIgLm5hdi1pdGVtID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgLm1lc3NhZ2VzIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbjpob3N0IC5tZXNzYWdlcyAubWVkaWE6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46aG9zdCAubWVzc2FnZXMgLm1lZGlhLWJvZHkgaDUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCAubWVzc2FnZXMgLm1lZGlhLWJvZHkgLnNtYWxsIHtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYS1ib2R5IC5sYXN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5kcm9wZG93bi1zdWJtZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcGRvd24tc3VibWVudSA+IC5kcm9wZG93bi1tZW51IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtNnB4O1xufVxuXG4vKiByb3RhdGUgY2FyZXQgb24gaG92ZXIgKi9cbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyOmFmdGVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbioge1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDU2cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, {
        dds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['dd']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page/page.component */
    "./src/app/page/page.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _page_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _page_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/page/page.component.ts":
  /*!****************************************!*\
    !*** ./src/app/page/page.component.ts ***!
    \****************************************/

  /*! exports provided: PageComponent */

  /***/
  function srcAppPagePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageComponent", function () {
      return PageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PageComponent_h1_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.name, " Page ");
      }
    }

    var PageComponent =
    /*#__PURE__*/
    function () {
      function PageComponent(route) {
        _classCallCheck(this, PageComponent);

        this.route = route;
      }

      _createClass(PageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            _this.name = params.get('name');
          });
        }
      }]);

      return PageComponent;
    }();

    PageComponent.ɵfac = function PageComponent_Factory(t) {
      return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageComponent,
      selectors: [["app-page"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"]],
      template: function PageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageComponent_h1_0_Template, 2, 1, "h1", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page',
          templateUrl: './page.component.html',
          styleUrls: ['./page.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\bLaX\Documents\Projects\nested-ngbDropdown\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map