"use strict";
(self["webpackChunkcars"] = self["webpackChunkcars"] || []).push([["main"],{

/***/ 8062:
/*!**************************!*\
  !*** ./src/Model/Car.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Car": () => (/* binding */ Car)
/* harmony export */ });
class Car {}

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _results_page_results_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results-page/results-page.component */ 2504);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ 6392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'search',
  component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent
}, {
  path: 'results',
  component: _results_page_results_page_component__WEBPACK_IMPORTED_MODULE_1__.ResultsPageComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'cars';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  consts: [[1, "app", 2, "height", "80px"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _generic_pipe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic-pipe.pipe */ 7536);
/* harmony import */ var _car_card_car_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./car-card/car-card.component */ 4305);
/* harmony import */ var _nock_out_nock_out_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nock-out/nock-out.component */ 6266);
/* harmony import */ var _two_cars_comparing_two_cars_comparing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./two-cars-comparing/two-cars-comparing.component */ 3861);
/* harmony import */ var _car_home_card_car_home_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./car-home-card/car-home-card.component */ 446);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ 6392);
/* harmony import */ var _car_info_car_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./car-info/car-info.component */ 2853);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _data_service_data_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-service/data-service.component */ 6124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _comparing_car_card_comparing_car_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comparing-car-card/comparing-car-card.component */ 2096);
/* harmony import */ var _results_page_results_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./results-page/results-page.component */ 2504);
/* harmony import */ var _results_car_card_results_car_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./results-car-card/results-car-card.component */ 4523);
/* harmony import */ var _result_card_result_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./result-card/result-card.component */ 7171);
/* harmony import */ var _comparing_graph_comparing_graph_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comparing-graph/comparing-graph.component */ 7025);
/* harmony import */ var _car_info_v2_car_info_v2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./car-info-v2/car-info-v2.component */ 6503);
/* harmony import */ var _parameter_card_parameter_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parameter-card/parameter-card.component */ 683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);


























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _generic_pipe_pipe__WEBPACK_IMPORTED_MODULE_3__.GenericPipePipe, _car_card_car_card_component__WEBPACK_IMPORTED_MODULE_4__.CarCardComponent, _nock_out_nock_out_component__WEBPACK_IMPORTED_MODULE_5__.NockOutComponent, _two_cars_comparing_two_cars_comparing_component__WEBPACK_IMPORTED_MODULE_6__.TwoCarsComparingComponent, _car_home_card_car_home_card_component__WEBPACK_IMPORTED_MODULE_7__.CarHomeCardComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_8__.SearchComponent, _car_info_car_info_component__WEBPACK_IMPORTED_MODULE_9__.CarInfoComponent, _data_service_data_service_component__WEBPACK_IMPORTED_MODULE_10__.DataServiceComponent, _comparing_car_card_comparing_car_card_component__WEBPACK_IMPORTED_MODULE_11__.ComparingCarCardComponent, _results_page_results_page_component__WEBPACK_IMPORTED_MODULE_12__.ResultsPageComponent, _results_car_card_results_car_card_component__WEBPACK_IMPORTED_MODULE_13__.ResultsCarCardComponent, _result_card_result_card_component__WEBPACK_IMPORTED_MODULE_14__.ResultCardComponent, _comparing_graph_comparing_graph_component__WEBPACK_IMPORTED_MODULE_15__.ComparingGraphComponent, _car_info_v2_car_info_v2_component__WEBPACK_IMPORTED_MODULE_16__.CarInfoV2Component, _parameter_card_parameter_card_component__WEBPACK_IMPORTED_MODULE_17__.ParameterCardComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule]
  });
})();

/***/ }),

/***/ 4305:
/*!************************************************!*\
  !*** ./src/app/car-card/car-card.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarCardComponent": () => (/* binding */ CarCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function CarCardComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.car.Rank);
  }
}
class CarCardComponent {
  constructor() {}
  ngOnInit() {}
}
CarCardComponent.ɵfac = function CarCardComponent_Factory(t) {
  return new (t || CarCardComponent)();
};
CarCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CarCardComponent,
  selectors: [["app-car-card"]],
  inputs: {
    car: "car"
  },
  decls: 7,
  vars: 5,
  consts: [[2, "font-weight", "bold"], [2, "font-weight", "bold", "margin-bottom", "0"], ["class", "star", "src", "assets/star.png", 3, "alt", 4, "ngIf"], ["alt", "", 3, "src"], ["src", "assets/star.png", 1, "star", 3, "alt"]],
  template: function CarCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarCardComponent_img_5_Template, 1, 1, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.car.model, " ", ctx.car.subModel, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.car.Rank, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.car.Rank);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.car.ImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["img[_ngcontent-%COMP%]{\r\n    width: 140px;\r\n    float: right;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]{\r\n    height: 16px;\r\n    width: auto;\r\n    margin-left: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FyLWNhcmQvY2FyLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zdGFye1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 446:
/*!**********************************************************!*\
  !*** ./src/app/car-home-card/car-home-card.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarHomeCardComponent": () => (/* binding */ CarHomeCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CarHomeCardComponent {
  constructor() {}
  ngOnInit() {}
}
CarHomeCardComponent.ɵfac = function CarHomeCardComponent_Factory(t) {
  return new (t || CarHomeCardComponent)();
};
CarHomeCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CarHomeCardComponent,
  selectors: [["app-car-home-card"]],
  inputs: {
    car: "car"
  },
  decls: 13,
  vars: 5,
  consts: [[1, "homeCar"], ["alt", "", 1, "carLogo", 3, "src"], [1, "boldText"], [1, "text", "cardText"], ["alt", "", 1, "carImage", 3, "src"]],
  template: function CarHomeCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1)(2, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br")(12, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.car.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.car.company);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.car.model);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.car.year);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.car.ImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
  },
  styles: [".cardText[_ngcontent-%COMP%]{\r\n    font-family: system-ui;\r\n    font-size: large;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FyLWhvbWUtY2FyZC9jYXItaG9tZS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRUZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6503:
/*!******************************************************!*\
  !*** ./src/app/car-info-v2/car-info-v2.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarInfoV2Component": () => (/* binding */ CarInfoV2Component)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_Model_Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Model/Car */ 8062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service_data_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-service/data-service.component */ 6124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _parameter_card_parameter_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameter-card/parameter-card.component */ 683);









function CarInfoV2Component_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \u05DE\u05D5\u05E9\u05D1\u05D9\u05DD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-parameter-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 30)(10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u05DB\u05DC\u05DC\u05D9");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u05DE\u05E9\u05E4\u05D7\u05EA\u05D9");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-parameter-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 25)(19, "div", 35)(20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " \u05D1\u05D8\u05D9\u05D7\u05D5\u05EA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "app-parameter-card", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.car.seatsNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parameterName", "\u05D6\u05DE\u05DF \u05D8\u05E2\u05D9\u05E0\u05D4")("imagePath", "assets/charging.png")("value", ctx_r0.car.chargingSpeed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parameterName", "\u05D8\u05D5\u05D5\u05D7 \u05E0\u05E1\u05D9\u05E2\u05D4 \u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9")("imagePath", "assets/road.png")("value", ctx_r0.car.batteryRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.car.safetyRank, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parameterName", "0-100 \u05E7\u05DE\u05E9")("imagePath", "assets/acceleration.png")("value", ctx_r0.car.zeroToHundred);
  }
}
class CarInfoV2Component {
  constructor(data, dialogRef, dataService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.dataService = dataService;
    this.car = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
    this.tesla = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
    this.focus = 'general';
  }
  ngOnInit() {
    this.car = this.data.injectedCar;
    // this.tesla.logo = 'assets/Branding/tesla.png'
    // this.tesla.model = 'Model 3'
    // this.tesla.subModel ='Dual Motor'
    // this.tesla.year = 2023
    // this.tesla.company = 'Tesla'
    // this.tesla.seatsNumber=5
    // this.tesla.category ='משפחתי'
    // this.tesla.safetyRank = 8
    // this.tesla.batteryRange = 320
    // this.tesla.orderLink = 'https://www.tesla.com/model3'
    // this.tesla.price = 320000
    // this.tesla.ImagePath = 'assets/cars/tesla_m s 23.png'
    // this.tesla.chargingSpeed = 50
    // this.tesla.zeroToHundred = 3.3
    // this.tesla.Rank = '4.5'
    // this.car = this.tesla
  }

  closeDialog() {
    this.dialogRef.close();
  }
  chooseCar() {
    this.dataService.chooseCarEvent(this.car);
  }
  getFocus() {
    return this.focus;
  }
  setFocus(focus) {
    this.focus = focus;
  }
  gotoVendor() {
    window.open(this.car.orderLink);
  }
}
CarInfoV2Component.ɵfac = function CarInfoV2Component_Factory(t) {
  return new (t || CarInfoV2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_data_service_data_service_component__WEBPACK_IMPORTED_MODULE_1__.DataServiceComponent));
};
CarInfoV2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CarInfoV2Component,
  selectors: [["app-car-info-v2"]],
  decls: 37,
  vars: 11,
  consts: [[2, "overflow-y", "scroll"], ["dir", "rtl"], [2, "margin", "8px"], ["mat-button", "", "mat-dialog-close", "", 1, "close-button", 2, "min-width", "23px"], ["mat-dialog-title", "", 2, "display", "flex"], [2, "width", "33%"], [2, "width", "66%"], [1, "background", 2, "width", "33%", "height", "100%", "position", "absolute"], [2, "float", "left"], [1, "carImage", 2, "width", "auto !important", 3, "src", "alt"], [1, "flexContainer", 2, "flex-direction", "row", "margin-top", "30px"], [2, "width", "50%", "height", "50px"], [1, "priceText"], [1, "bottomText"], ["mat-dialog-close", "", 2, "width", "25%", "height", "50px", 3, "click"], [2, "display", "flex", "justify-content", "center"], ["src", "assets/compareButton.png", "alt", "", 2, "width", "66px", "margin", "auto"], [2, "width", "25%", "height", "50px", "justify-content", "center"], [2, "display", "flex"], ["src", "assets/buylogo.png", "alt", "", 1, "buyLogo"], [1, "bottomText", 3, "click"], [1, "buttonsContainer", "flexContainer", 2, "flex-direction", "row", "justify-content", "space-around", "margin-bottom", "30px"], [3, "ngClass", "click"], ["class", "flexContainer", "style", "flex-direction: row;", 4, "ngIf"], [1, "flexContainer", 2, "flex-direction", "row"], [2, "width", "33%", "height", "280px"], [1, "seatsNumber"], [2, "text-align", "center", "font-family", "sans-serif", "margin-top", "5px", "font-size", "small"], [1, "bottomText", "parameters"], ["parameterUnits", "\u05D3\u05E7'", 3, "parameterName", "imagePath", "value"], [1, "bottomText", 2, "width", "33%", "font-size", "larger", "margin-top", "6px", "height", "280px"], [2, "font-weight", "bold", "text-decoration", "underline"], [2, "font-weight", "bold"], [2, "font-size", "small", "margin-top", "10px"], ["parameterUnits", "\u05E7\"\u05DE", 3, "parameterName", "imagePath", "value"], [1, "seatsNumber", 2, "background", "#3a5fb7"], ["parameterUnits", "'\u05E9\u05E0\u05D9\u05D5\u05EA'", 3, "parameterName", "imagePath", "value"]],
  template: function CarInfoV2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "X");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 4)(6, "div", 5)(7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u05DE\u05D7\u05D9\u05E8\u05D5\u05DF \u05DE\u05E9\u05D5\u05E2\u05E8*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CarInfoV2Component_Template_div_click_19_listener() {
        return ctx.chooseCar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u05D4\u05D5\u05E1\u05E3 \u05DC\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 17)(25, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CarInfoV2Component_Template_div_click_27_listener() {
        return ctx.gotoVendor();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u05DC\u05D9\u05D1\u05D5\u05D0\u05DF");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 21)(30, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CarInfoV2Component_Template_div_click_30_listener() {
        return ctx.setFocus("general");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " \u05DB\u05DC\u05DC\u05D9 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CarInfoV2Component_Template_div_click_32_listener() {
        return ctx.setFocus("tech");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " \u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D5\u05EA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CarInfoV2Component_Template_div_click_34_listener() {
        return ctx.setFocus("votes");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " \u05D1\u05D9\u05E7\u05D5\u05E8\u05D5\u05EA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, CarInfoV2Component_div_36_Template, 26, 11, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate4"]("", ctx.car.company, "\u00A0", ctx.car.model, "\u00A0", ctx.car.subModel, "\u00A0", ctx.car.year, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.car.ImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", ctx.car.Rank);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20AA ", ctx.car.price, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.getFocus() === "general" ? "focus" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.getFocus() === "tech" ? "focus" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.getFocus() === "votes" ? "focus" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.focus === "general");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Dir, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _parameter_card_parameter_card_component__WEBPACK_IMPORTED_MODULE_2__.ParameterCardComponent],
  styles: [".background[_ngcontent-%COMP%]{\r\n    left: 0;\r\n    clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);\r\n    background-image: linear-gradient(-45deg, #f0f0f0 33%, #8bead4);\r\n    border-radius: 0 40px 10px 0;\r\n}\r\n.priceText[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    border-radius: 27px;\r\n    padding: 7px;\r\n    margin: 14px 16px 2px;\r\n    color: white;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: larger;\r\n}\r\n\r\n.bottomText[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: small;\r\n    margin-top: 5px;\r\n}\r\n\r\n\r\n.buttonsContainer[_ngcontent-%COMP%] {\r\n    background-color: #f0f0f0a5;\r\n    border: 1px solid rgb(164 164 164 / 27%);\r\n    border-radius: 24px;\r\n    padding: 11px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: larger;\r\n    margin-top: 66px;\r\n    width: 90%;\r\n}\r\n\r\n.focus[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    border-radius: 10px;\r\n    height: 4px;\r\n    padding: 0px 20px 0px 20px;\r\n    box-shadow: 0 25px 0 0 #000;\r\n    text-align: center;\r\n}\r\n\r\n.innerText[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 40px;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.carImage[_ngcontent-%COMP%] {\r\n    margin: unset;\r\n    height: 100px;\r\n}\r\n\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    height: 9px;\r\n    display: block;\r\n    background-color: #d7d7d7;;\r\n    border: none;\r\n    margin: 30px;\r\n    border-radius: 6px;\r\n}\r\n\r\n\r\n.app-comparing-graph[_ngcontent-%COMP%]{\r\n    margin: 30px 30px;\r\n}\r\n\r\n\r\n.seatsNumber[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: black;\r\n    background: #8bead4;\r\n    width: 25px;\r\n    margin: auto;\r\n    border-radius: 9px;\r\n    margin-top: 16px;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n    padding: 11px;\r\n}\r\n\r\n.buyLogo[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    height: 32px;\r\n    padding: 12px;\r\n    border-radius: 16px;\r\n    margin: auto;\r\n}\r\n\r\n.parameters[_ngcontent-%COMP%]{\r\n    margin-top: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FyLWluZm8tdjIvY2FyLWluZm8tdjIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE9BQU87SUFDUCxtREFBbUQ7SUFDbkQsK0RBQStEO0lBQy9ELDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksMkJBQTJCO0lBQzNCLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgbGVmdDogMDtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDgwJSAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmMGYwZjAgMzMlLCAjOGJlYWQ0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNDBweCAxMHB4IDA7XHJcbn1cclxuLnByaWNlVGV4dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjdweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIG1hcmdpbjogMTRweCAxNnB4IDJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi5ib3R0b21UZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbnNDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMGE1O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2NCAxNjQgMTY0IC8gMjclKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIG1hcmdpbi10b3A6IDY2cHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMjVweCAwIDAgIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlubmVyVGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNhckltYWdlIHtcclxuICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5cclxuaHJ7XHJcbiAgICBoZWlnaHQ6IDlweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNzs7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcblxyXG4uYXBwLWNvbXBhcmluZy1ncmFwaHtcclxuICAgIG1hcmdpbjogMzBweCAzMHB4O1xyXG59XHJcblxyXG5cclxuLnNlYXRzTnVtYmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogIzhiZWFkNDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG59XHJcblxyXG4uYnV5TG9nb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5wYXJhbWV0ZXJze1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2853:
/*!************************************************!*\
  !*** ./src/app/car-info/car-info.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarInfoComponent": () => (/* binding */ CarInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_Model_Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Model/Car */ 8062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service_data_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-service/data-service.component */ 6124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);








function CarInfoComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.car.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function CarInfoComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u05D3\u05D9\u05E8\u05D5\u05D2:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx_r1.car.Rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.car.Rank);
  }
}
class CarInfoComponent {
  constructor(data, dialogRef, dataService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.dataService = dataService;
    this.car = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
  }
  ngOnInit() {
    this.car = this.data.injectedCar;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  chooseCar() {
    this.dataService.chooseCarEvent(this.car);
  }
}
CarInfoComponent.ɵfac = function CarInfoComponent_Factory(t) {
  return new (t || CarInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_service_data_service_component__WEBPACK_IMPORTED_MODULE_1__.DataServiceComponent));
};
CarInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CarInfoComponent,
  selectors: [["app-car-info"]],
  decls: 39,
  vars: 11,
  consts: [["dir", "rtl"], [2, "margin", "8px"], ["mat-button", "", "mat-dialog-close", "", 1, "close-button", 2, "min-width", "23px"], ["mat-dialog-title", ""], ["class", "star", "style", "height: 30px;", 3, "src", 4, "ngIf"], ["dir", "ltr", 1, "flexContainer", 2, "width", "70%"], [1, "carImage", 3, "src", "alt"], [4, "ngIf"], [1, "flexContainer", "downCompareBar"], ["mat-dialog-close", "", 1, "infoComparButton", 3, "click"], [1, "star", 2, "height", "30px", 3, "src"], ["src", "assets/star.png", 1, "star", 3, "alt"]],
  template: function CarInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "X");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CarInfoComponent_img_5_Template, 1, 1, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "mat-dialog-content", 0)(14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u05E9\u05E0\u05D4: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CarInfoComponent_p_18_Template, 5, 2, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u05E9\u05E0\u05D4:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u05D8\u05D5\u05D5\u05D7 \u05E1\u05D5\u05DC\u05DC\u05D4:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " \u05E7\"\u05DE");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u05DE\u05D7\u05D9\u05E8:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u05DC\u05D0\u05EA\u05E8 \u05D4\u05D7\u05D1\u05E8\u05D4:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-dialog-actions", 8)(37, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarInfoComponent_Template_button_click_37_listener() {
        return ctx.chooseCar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\u05D4\u05D5\u05E1\u05E3 \u05DC\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.car.logo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.car.company);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0", ctx.car.model, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.car.ImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx.car.Rank);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.car.year, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.car.Rank);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.car.year);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.car.batteryRange);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.car.price);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.car.orderLink);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Dir, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton],
  styles: [".infoComparButton[_ngcontent-%COMP%] {\r\n    padding: 7px;\r\n    color: white;\r\n    background-color: black;\r\n    font-size: initial;\r\n    float: left;\r\n}\r\n\r\n.downCompareBar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n\r\n.img[_ngcontent-%COMP%]{\r\n    width: 140px;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]{\r\n    height: 16px;\r\n    width: auto;\r\n    margin-left: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FyLWluZm8vY2FyLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvQ29tcGFyQnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5kb3duQ29tcGFyZUJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltZ3tcclxuICAgIHdpZHRoOiAxNDBweDtcclxufVxyXG5cclxuLnN0YXJ7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2096:
/*!********************************************************************!*\
  !*** ./src/app/comparing-car-card/comparing-car-card.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparingCarCardComponent": () => (/* binding */ ComparingCarCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ComparingCarCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.car.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.car.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.car.ImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ComparingCarCardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E8\u05DB\u05D1 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class ComparingCarCardComponent {}
ComparingCarCardComponent.ɵfac = function ComparingCarCardComponent_Factory(t) {
  return new (t || ComparingCarCardComponent)();
};
ComparingCarCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ComparingCarCardComponent,
  selectors: [["app-comparing-car-card"]],
  inputs: {
    car: "car"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "searchCarCard greebBackground", 4, "ngIf"], ["class", "searchCarCard emptyCard", 4, "ngIf"], [1, "searchCarCard", "greebBackground"], [1, "carImage", 3, "src"], [1, "searchCarCard", "emptyCard"]],
  template: function ComparingCarCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComparingCarCardComponent_div_0_Template, 6, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComparingCarCardComponent_div_1_Template, 3, 0, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.car);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.car);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["p[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    max-height: 50px;\r\n    position: relative;\r\n    top: -15px;\r\n    right: 60px;\r\n}\r\n\r\n.searchCarCard[_ngcontent-%COMP%]{\r\n    border-radius: 15%;\r\n    height: 28%;\r\n    margin: 12px 15px 0 15px;\r\n}\r\n\r\n.greebBackground[_ngcontent-%COMP%]{\r\n    background-image: linear-gradient(77deg, #f0f0f0 33%, #8bead4);\r\n    box-shadow: 2px 1px 7px #8bead4;\r\n}\r\n\r\n.emptyCard[_ngcontent-%COMP%]{\r\n    background-color: #f0f0f0;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcGFyaW5nLWNhci1jYXJkL2NvbXBhcmluZy1jYXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw4REFBOEQ7SUFDOUQsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTVweDtcclxuICAgIHJpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoQ2FyQ2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICAgIGhlaWdodDogMjglO1xyXG4gICAgbWFyZ2luOiAxMnB4IDE1cHggMCAxNXB4O1xyXG59XHJcblxyXG4uZ3JlZWJCYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDc3ZGVnLCAjZjBmMGYwIDMzJSwgIzhiZWFkNCk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMXB4IDdweCAjOGJlYWQ0O1xyXG59XHJcblxyXG4uZW1wdHlDYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7025:
/*!**************************************************************!*\
  !*** ./src/app/comparing-graph/comparing-graph.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparingGraphComponent": () => (/* binding */ ComparingGraphComponent)
/* harmony export */ });
/* harmony import */ var src_Model_Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Model/Car */ 8062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function ComparingGraphComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.cars[0].company, " ", ctx_r0.cars[0].model, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.values[0], " ", ctx_r0.paramName, " ");
  }
}
function ComparingGraphComponent_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ComparingGraphComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 13)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ComparingGraphComponent_div_3_div_4_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1.cars[0].company, " ", ctx_r1.cars[0].model, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.bigIsGood && ctx_r1.values[0] > ctx_r1.values[1] || !ctx_r1.bigIsGood && ctx_r1.values[0] < ctx_r1.values[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1.values[0], " ", ctx_r1.paramName, " ");
  }
}
function ComparingGraphComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r2.cars[1].company, " ", ctx_r2.cars[1].model, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r2.values[1], " ", ctx_r2.paramName, " ");
  }
}
function ComparingGraphComponent_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ComparingGraphComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 13)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ComparingGraphComponent_div_15_div_4_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r3.cars[1].company, " ", ctx_r3.cars[1].model, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.bigIsGood && ctx_r3.values[1] > ctx_r3.values[0] || !ctx_r3.bigIsGood && ctx_r3.values[1] < ctx_r3.values[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r3.values[1], " ", ctx_r3.paramName, " ");
  }
}
const _c0 = function (a0) {
  return {
    "bottom": a0
  };
};
const _c1 = function () {
  return {};
};
class ComparingGraphComponent {
  constructor() {
    this.cars = [];
    this.paramName = '';
    this.bottomText = '';
    this.values = [];
    this.bigIsGood = true;
    this.tesla = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
    this.ev6 = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
  }
  ngOnInit() {
    // this.tesla.logo = 'assets/Branding/tesla.png'
    // this.tesla.model = 'Model 3'
    // this.tesla.subModel ='Dual Motor'
    // this.tesla.year = 2023
    // this.tesla.company = 'Tesla'
    // this.tesla.batteryRange = 320
    // this.tesla.orderLink = 'https://www.tesla.com/model3'
    // this.tesla.price = 320000
    // this.tesla.ImagePath = 'assets/cars/tesla_m s 23.png'
    // this.tesla.chargingSpeed = 50
    // this.ev6.chargingSpeed = 30
    // this.ev6.logo = 'assets/Branding/kia.png'
    // this.ev6.model = 'EV6'
    // this.ev6.subModel ='Sport Edition'
    // this.ev6.year = 2023
    // this.ev6.company = 'KIA'
    // this.tesla.Rank = '4.5'
    // this.ev6.batteryRange = 400
    // this.ev6.ImagePath = 'assets/cars/kia ev6 23.png'
    // this.cars[0] = this.tesla
    // this.cars[1] = this.ev6
    // console.log(JSON.stringify(this.cars)+JSON.stringify(this.paramName)+JSON.stringify(this.values))
  }
}
ComparingGraphComponent.ɵfac = function ComparingGraphComponent_Factory(t) {
  return new (t || ComparingGraphComponent)();
};
ComparingGraphComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComparingGraphComponent,
  selectors: [["app-comparing-graph"]],
  inputs: {
    cars: "cars",
    paramName: "paramName",
    bottomText: "bottomText",
    values: "values",
    bigIsGood: "bigIsGood"
  },
  decls: 16,
  vars: 13,
  consts: [[1, "flexContainer", 2, "flex-direction", "row"], [2, "width", "33%"], ["class", "innerText", "style", "margin-top: 100px;", 4, "ngIf"], [2, "position", "static", "width", "33%", "display", "flex", "justify-content", "center", "z-index", "100"], ["src", "assets/abstractCar.png", "alt", "", 1, "carImage", 2, "left", "0", 3, "ngStyle"], ["src", "assets/abstractCar.png", "alt", "", 1, "carImage", 2, "right", "0", 3, "ngStyle"], [2, "width", "33%", "position", "absolute"], [2, "display", "flex", "flex-direction", "column", "align-items", "center", "margin-top", "30px"], ["src", "assets/finishLine.png", "alt", "", 2, "width", "62%"], ["src", "assets/finishLineShadow.png", "alt", "", 2, "width", "62%", "height", "11vh"], [1, "innerText"], [1, "innerText", 2, "margin-top", "100px"], [2, "font-size", "larger", "padding", "10px"], [2, "margin", "auto", "height", "max-content"], ["style", "display: flex;justify-content: center;", 4, "ngIf"], [2, "display", "flex", "justify-content", "center"], [1, "greenFocus"]],
  template: function ComparingGraphComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ComparingGraphComponent_div_2_Template, 5, 4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ComparingGraphComponent_div_3_Template, 7, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4)(6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8)(10, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ComparingGraphComponent_div_14_Template, 5, 4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ComparingGraphComponent_div_15_Template, 7, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bigIsGood && ctx.values[1] > ctx.values[0] || !ctx.bigIsGood && ctx.values[1] < ctx.values[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.bigIsGood && ctx.values[1] > ctx.values[0] || !ctx.bigIsGood && ctx.values[1] < ctx.values[0]));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.values[0] && ctx.values[1] ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, (ctx.bigIsGood ? "" : "-") + ctx.values[0] / (ctx.values[0] + ctx.values[1]) * 50 + "px") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.values[0] && ctx.values[1] ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, (ctx.bigIsGood ? "" : "-") + ctx.values[1] / (ctx.values[0] + ctx.values[1]) * 50 + "px") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bottomText);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.bigIsGood && ctx.values[1] > ctx.values[0] || !ctx.bigIsGood && ctx.values[1] < ctx.values[0]));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bigIsGood && ctx.values[1] > ctx.values[0] || !ctx.bigIsGood && ctx.values[1] < ctx.values[0]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
  styles: [".innerText[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.carImage[_ngcontent-%COMP%] {\r\n    margin: unset;\r\n    height: 100px;\r\n}\r\n\r\n.greenFocus[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    height: 4px;\r\n    box-shadow: 0 4px 0 0 #8bead4;\r\n    border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcGFyaW5nLWdyYXBoL2NvbXBhcmluZy1ncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lclRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNhckltYWdlIHtcclxuICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uZ3JlZW5Gb2N1cyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAwIDAgIzhiZWFkNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6124:
/*!********************************************************!*\
  !*** ./src/app/data-service/data-service.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataServiceComponent": () => (/* binding */ DataServiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class DataServiceComponent {
  constructor() {
    this.emmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.carEmmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.comparingArray = [];
  }
  emitEvent(event) {
    this.emmiter.emit(event);
  }
  chooseCarEvent(car) {
    this.carEmmiter.emit(car);
  }
}
DataServiceComponent.ɵfac = function DataServiceComponent_Factory(t) {
  return new (t || DataServiceComponent)();
};
DataServiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataServiceComponent,
  selectors: [["app-data-service"]],
  outputs: {
    emmiter: "emmiter",
    carEmmiter: "carEmmiter"
  },
  decls: 2,
  vars: 0,
  template: function DataServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "data-service works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
DataServiceComponent.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DataServiceComponent,
  factory: DataServiceComponent.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7536:
/*!**************************************!*\
  !*** ./src/app/generic-pipe.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericPipePipe": () => (/* binding */ GenericPipePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GenericPipePipe {
  transform(list, textSearch, fieldName) {
    let results = [];
    if (textSearch === '') {
      return list;
    } else {
      list.forEach(obj => {
        if (obj[fieldName]?.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())) {
          results.push(obj);
        }
      });
    }
    return results;
  }
}
GenericPipePipe.ɵfac = function GenericPipePipe_Factory(t) {
  return new (t || GenericPipePipe)();
};
GenericPipePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "genericPipe",
  type: GenericPipePipe,
  pure: true
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var src_Model_Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Model/Car */ 8062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service_data_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-service/data-service.component */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);
/* harmony import */ var _two_cars_comparing_two_cars_comparing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../two-cars-comparing/two-cars-comparing.component */ 3861);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/search.component */ 6392);










function HomeComponent_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HomeComponent_input_2_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.searchText = $event);
    })("click", function HomeComponent_input_2_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.changeCarsView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.searchText);
  }
}
const _c0 = function () {
  return {
    "height": "100vh"
  };
};
const _c1 = function () {
  return {
    "height": "0",
    "margin": "0"
  };
};
function HomeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "app-search", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function HomeComponent_div_3_Template_app_search_close_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.changeCarsView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", !ctx_r1.carsView ? "hidden" : "visible")("ngStyle", ctx_r1.carsView ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c1));
  }
}
function HomeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div")(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u05E0\u05D5\u05E7\u05D0\u05D0\u05D5\u05D8 \u05D9\u05D5\u05DE\u05D9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 12)(5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u05DC\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function HomeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-two-cars-comparing");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u05D4\u05EA\u05D0\u05D9\u05DE\u05D5 \u05DC\u05D9 \u05E8\u05DB\u05D1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 15)(7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u05E2\u05DC \u05D7\u05E9\u05DE\u05DC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 15)(12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u05D4\u05D7\u05D3\u05E9\u05D9\u05DD");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_6_Template_div_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.changeCarsView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\u05D7\u05D9\u05E4\u05D5\u05E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
class HomeComponent {
  constructor(data, route, dialog) {
    this.data = data;
    this.route = route;
    this.dialog = dialog;
    this.cars = [];
    this.searchText = '';
    this.carsView = false;
  }
  ngOnInit() {
    let car = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
    car.batteryRange = 100;
    car.company = 'Tesla';
    car.ImagePath = 'assets/tesla-model-s-2017.jpg';
    car.model = 'S';
    car.orderLink = 'Link';
    car.price = 250000;
    car.Rank = '4.5';
    for (let index = 0; index < 25; index++) {
      this.cars.push(car);
    }
    this.route.queryParams.subscribe(params => {
      if (params.search) {
        this.changeCarsView();
      }
    });
    // this.dialog.open(CarInfoV2Component)
  }

  changeCarsView() {
    this.carsView = !this.carsView;
    console.log('cars view ' + this.carsView);
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_data_service_data_service_component__WEBPACK_IMPORTED_MODULE_1__.DataServiceComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 7,
  vars: 6,
  consts: [["dir", "rtl", 1, "flexContainer", "visible", 3, "ngClass"], ["src", "assets/logo.png", "alt", "", 1, "logo"], ["class", "logo input", "type", "text", "placeholder", "\u05D7\u05E4\u05E9/\u05D9 \u05E8\u05DB\u05D1", 3, "ngModel", "ngModelChange", "click", 4, "ngIf"], ["style", "background-image: linear-gradient(1deg,#f0f0f0 14%, #8bead4);\nmargin-top: -86px;", 4, "ngIf"], ["dir", "rtl", "class", "flexContainer", "style", "flex-direction: row;justify-content: space-evenly;", 4, "ngIf"], [4, "ngIf"], ["dir", "rtl", "class", "flexContainer", "style", "flex-direction: row;margin-top: 30px;", 4, "ngIf"], ["type", "text", "placeholder", "\u05D7\u05E4\u05E9/\u05D9 \u05E8\u05DB\u05D1", 1, "logo", "input", 3, "ngModel", "ngModelChange", "click"], [2, "background-image", "linear-gradient(1deg,#f0f0f0 14%, #8bead4)", "margin-top", "-86px"], [1, "searchPopUp", 3, "ngClass", "ngStyle", "close"], ["dir", "rtl", 1, "flexContainer", 2, "flex-direction", "row", "justify-content", "space-evenly"], [1, "boldText", 2, "padding-left", "74px"], [2, "padding-right", "50px"], [1, "boldText", "homeButton"], ["dir", "rtl", 1, "flexContainer", 2, "flex-direction", "row", "margin-top", "30px"], [2, "width", "25%", "flex-direction", "column"], [1, "flexContainer"], ["src", "assets/carIcon_line.png", "alt", "", 1, "icon"], [1, "innerText"], ["src", "assets/thunderbolt.png", "alt", "", 1, "icon"], ["src", "assets/new_cars.png", "alt", "", 1, "icon"], [2, "width", "25%", "flex-direction", "column", 3, "click"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HomeComponent_input_2_Template, 1, 1, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 2, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 7, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 21, 0, "div", 6);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.carsView ? "hidden" : "visible");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.carsView);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.carsView);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.carsView);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.carsView);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.carsView);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Dir, _two_cars_comparing_two_cars_comparing_component__WEBPACK_IMPORTED_MODULE_2__.TwoCarsComparingComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent],
  styles: [".icon[_ngcontent-%COMP%]{\r\n    width: 55%;\r\n    margin: auto;\r\n    border-radius: 100%;\r\n    border: 1px solid black\r\n}\r\n\r\n.innerText[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n    font-size: smaller;\r\n    margin-top: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbntcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2tcclxufVxyXG5cclxuLmlubmVyVGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6266:
/*!************************************************!*\
  !*** ./src/app/nock-out/nock-out.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NockOutComponent": () => (/* binding */ NockOutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NockOutComponent {
  constructor() {}
  ngOnInit() {}
}
NockOutComponent.ɵfac = function NockOutComponent_Factory(t) {
  return new (t || NockOutComponent)();
};
NockOutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NockOutComponent,
  selectors: [["app-nock-out"]],
  decls: 2,
  vars: 0,
  template: function NockOutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nock-out works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 683:
/*!************************************************************!*\
  !*** ./src/app/parameter-card/parameter-card.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParameterCardComponent": () => (/* binding */ ParameterCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ParameterCardComponent {
  constructor() {
    this.parameterName = '';
    this.parameterUnits = '';
    this.imagePath = '';
  }
}
ParameterCardComponent.ɵfac = function ParameterCardComponent_Factory(t) {
  return new (t || ParameterCardComponent)();
};
ParameterCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ParameterCardComponent,
  selectors: [["app-parameter-card"]],
  inputs: {
    value: "value",
    parameterName: "parameterName",
    parameterUnits: "parameterUnits",
    imagePath: "imagePath"
  },
  decls: 8,
  vars: 4,
  consts: [["alt", "", 2, "width", "80%", 3, "src"]],
  template: function ParameterCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p")(1, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.parameterUnits, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.parameterName);
    }
  },
  styles: ["p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFyYW1ldGVyLWNhcmQvcGFyYW1ldGVyLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7171:
/*!******************************************************!*\
  !*** ./src/app/result-card/result-card.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultCardComponent": () => (/* binding */ ResultCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ResultCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u05E0\u05E7'\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.car == null ? null : ctx_r0.car.company, " ", ctx_r0.car == null ? null : ctx_r0.car.model, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.totalRank, " ");
  }
}
function ResultCardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u05E0\u05E7'\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.car == null ? null : ctx_r1.car.company, " ", ctx_r1.car == null ? null : ctx_r1.car.model, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.totalRank, " ");
  }
}
class ResultCardComponent {}
ResultCardComponent.ɵfac = function ResultCardComponent_Factory(t) {
  return new (t || ResultCardComponent)();
};
ResultCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ResultCardComponent,
  selectors: [["app-result-card"]],
  inputs: {
    winner: "winner",
    car: "car",
    totalRank: "totalRank"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "innerText", "style", "margin-top: 100px;", 4, "ngIf"], [1, "innerText", 2, "margin-top", "100px"], [2, "font-size", "larger", "padding", "10px"], [2, "margin", "auto", "height", "max-content"], [1, "innerText"], [2, "display", "flex", "justify-content", "center"], [1, "greenFocus"]],
  template: function ResultCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResultCardComponent_div_0_Template, 6, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultCardComponent_div_1_Template, 9, 3, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.winner);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.winner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".focus[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    border-radius: 10px;\r\n    height: 4px;\r\n    padding: 0px 20px 0px 20px;\r\n    box-shadow: 0 25px 0 0 #000;\r\n    text-align: center;\r\n}\r\n.greenFocus[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    height: 4px;\r\n    box-shadow: 0 4px 0 0 #8bead4;\r\n    border-radius: 5px;\r\n}\r\n.innerText[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 40px;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdWx0LWNhcmQvcmVzdWx0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5mb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAyNXB4IDAgMCAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ncmVlbkZvY3VzIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDAgMCAjOGJlYWQ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5pbm5lclRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4523:
/*!****************************************************************!*\
  !*** ./src/app/results-car-card/results-car-card.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsCarCardComponent": () => (/* binding */ ResultsCarCardComponent)
/* harmony export */ });
/* harmony import */ var src_Model_Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Model/Car */ 8062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ResultsCarCardComponent {
  constructor() {
    this.car = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
  }
}
ResultsCarCardComponent.ɵfac = function ResultsCarCardComponent_Factory(t) {
  return new (t || ResultsCarCardComponent)();
};
ResultsCarCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ResultsCarCardComponent,
  selectors: [["app-results-car-card"]],
  inputs: {
    car: "car"
  },
  decls: 9,
  vars: 4,
  consts: [[1, "background"], [1, "data", 2, "position", "absolute"], [2, "font-weight", "bold"], ["alt", "", 3, "src"]],
  template: function ResultsCarCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.car.company);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.car.model);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.car.year);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.car.ImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    }
  },
  styles: ["img[_ngcontent-%COMP%]{\r\n    width: 140px;\r\n    float: right;\r\n}\r\n\r\n.star[_ngcontent-%COMP%]{\r\n    height: 16px;\r\n    width: auto;\r\n    margin-left: 5px;\r\n}\r\n\r\n.background[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 30%;\r\n    height: 20%;\r\n    border-radius:  0 0  0 5px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdWx0cy1jYXItY2FyZC9yZXN1bHRzLWNhci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uc3RhcntcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmJhY2tncm91bmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAgMCAwICAwIDVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2504:
/*!********************************************************!*\
  !*** ./src/app/results-page/results-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsPageComponent": () => (/* binding */ ResultsPageComponent)
/* harmony export */ });
/* harmony import */ var src_Model_Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Model/Car */ 8062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service_data_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-service/data-service.component */ 6124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);
/* harmony import */ var _results_car_card_results_car_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../results-car-card/results-car-card.component */ 4523);
/* harmony import */ var _result_card_result_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../result-card/result-card.component */ 7171);
/* harmony import */ var _comparing_graph_comparing_graph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comparing-graph/comparing-graph.component */ 7025);









const _c0 = function () {
  return [""];
};
const _c1 = function () {
  return {
    search: true
  };
};
const _c2 = function (a0) {
  return {
    "bottom": a0
  };
};
const _c3 = function () {
  return {};
};
const _c4 = function (a0, a1) {
  return [a0, a1];
};
class ResultsPageComponent {
  constructor(data) {
    this.data = data;
    this.cars = [];
    this.winnerIndex = 1;
    this.looserIndex = 0;
    this.winningParameters = 7;
    this.focus = 'general';
    this.totalRank = [7.5, 5.2];
    this.tesla = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
    this.ev6 = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
  }
  ngOnInit() {
    this.cars = this.data.comparingArray;
    this.calculateWinner();
    // console.log(this.cars)
    // this.tesla.logo = 'assets/Branding/tesla.png'
    // this.tesla.model = 'Model 3'
    // this.tesla.subModel ='Dual Motor'
    // this.tesla.year = 2023
    // this.tesla.company = 'Tesla'
    // this.tesla.batteryRange = 320
    // this.tesla.orderLink = 'https://www.tesla.com/model3'
    // this.tesla.price = 320000
    // this.tesla.ImagePath = 'assets/cars/tesla_m s 23.png'
    // this.ev6.logo = 'assets/Branding/kia.png'
    // this.ev6.model = 'EV6'
    // this.ev6.subModel ='Sport Edition'
    // this.ev6.year = 2023
    // this.ev6.company = 'KIA'
    // this.tesla.Rank = '4.5'
    // this.ev6.batteryRange = 400
    // this.ev6.ImagePath = 'assets/cars/kia ev6 23.png'
    // this.cars[0] = this.tesla
    // this.cars[1] = this.ev6
  }

  calculateWinner() {}
  getFocus() {
    return this.focus;
  }
  setFocus(focus) {
    this.focus = focus;
  }
}
ResultsPageComponent.ɵfac = function ResultsPageComponent_Factory(t) {
  return new (t || ResultsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_data_service_data_service_component__WEBPACK_IMPORTED_MODULE_1__.DataServiceComponent));
};
ResultsPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ResultsPageComponent,
  selectors: [["app-results-page"]],
  decls: 42,
  vars: 44,
  consts: [["dir", "rtl"], [1, "flexContainer", 2, "flex-direction", "row", "justify-content", "space-between"], [1, "boldText", 3, "routerLink", "queryParams"], [1, "boldText", 2, "font-size", "x-large", "padding-left", "50px"], [1, "flexContainer", 2, "flex-direction", "row", "justify-content", "space-between", "margin-top", "15px"], [1, "winner", 2, "width", "50%", "height", "30vh"], ["dir", "ltr", 1, "resultsCard", 3, "car"], [1, "looser", 2, "width", "50%", "height", "30vh"], ["dir", "rtl", 1, "resultsCard", 3, "car"], [1, "buttonsContainer", "flexContainer", 2, "flex-direction", "row", "justify-content", "space-around"], [3, "ngClass", "click"], ["id", "general", "dir", "rtl"], [1, "flexContainer", 2, "flex-direction", "row"], [2, "width", "33%"], [3, "car", "totalRank", "winner"], [2, "position", "static", "width", "33%", "display", "flex", "justify-content", "center", "z-index", "100"], ["src", "assets/abstractCar.png", "alt", "", 1, "carImage", 2, "left", "0", 3, "ngStyle"], ["src", "assets/abstractCar.png", "alt", "", 1, "carImage", 2, "right", "0", 3, "ngStyle"], [2, "width", "33%", "position", "absolute"], [2, "display", "flex", "flex-direction", "column", "align-items", "center", "margin-top", "30px"], ["src", "assets/finishLine.png", "alt", "", 2, "width", "62%"], ["src", "assets/finishLineShadow.png", "alt", "", 2, "width", "62%", "height", "11vh"], [1, "innerText"], [3, "bigIsGood", "cars", "paramName", "bottomText", "values"]],
  template: function ResultsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u00A0\u05D7\u05D6\u05E8\u05D4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u05E0\u05D5\u05E7\u05D0\u05D0\u05D5\u05D8");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-results-car-card", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-results-car-card", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9)(13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResultsPageComponent_Template_div_click_13_listener() {
        return ctx.setFocus("general");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " \u05DB\u05DC\u05DC\u05D9 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResultsPageComponent_Template_div_click_15_listener() {
        return ctx.setFocus("tech");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " \u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D5\u05EA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResultsPageComponent_Template_div_click_17_listener() {
        return ctx.setFocus("votes");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " \u05D4\u05E6\u05D1\u05E2\u05D5\u05EA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "app-result-card", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "img", 16)(25, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 18)(27, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "img", 20)(29, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4 \u05DB\u05DC\u05DC\u05D9\u05EA");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "app-result-card", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "hr")(39, "app-comparing-graph", 23)(40, "hr")(41, "app-comparing-graph", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](30, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](31, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("car", ctx.cars[1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("car", ctx.cars[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getFocus() === "general" ? "focus" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getFocus() === "tech" ? "focus" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getFocus() === "votes" ? "focus" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("car", ctx.cars[0])("totalRank", ctx.totalRank[0])("winner", ctx.winnerIndex === 0 ? true : false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx.totalRank[0] && ctx.totalRank[1] ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](32, _c2, ctx.totalRank[0] - ctx.totalRank[1] * 5 + "px") : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](34, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx.totalRank[0] && ctx.totalRank[1] ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](35, _c2, ctx.totalRank[1] - ctx.totalRank[0] * 5 + "px") : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](37, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("car", ctx.cars[1])("totalRank", ctx.totalRank[1])("winner", ctx.winnerIndex === 1 ? true : false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate4"](" ", ctx.cars[ctx.looserIndex].company, " ", ctx.cars[ctx.looserIndex].model, " \u05E2\u05D3\u05D9\u05E4\u05D4 \u05E2\u05DC ", ctx.cars[ctx.winnerIndex].company, " ", ctx.cars[ctx.winnerIndex].model, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" \u05D1 ", ctx.winningParameters, " \u05E4\u05E8\u05DE\u05D8\u05E8\u05D9\u05DD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bigIsGood", true)("cars", ctx.cars)("paramName", "\u05E7\u05DE")("bottomText", "\u05D8\u05D5\u05D5\u05D7 \u05E1\u05D5\u05DC\u05DC\u05D4")("values", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](38, _c4, ctx.cars[0].batteryRange, ctx.cars[1].batteryRange));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bigIsGood", false)("cars", ctx.cars)("paramName", "\u05D3\u05E7\u05D5\u05EA")("bottomText", "\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D8\u05E2\u05D9\u05E0\u05D4")("values", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](41, _c4, ctx.cars[0].chargingSpeed, ctx.cars[1].chargingSpeed));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Dir, _results_car_card_results_car_card_component__WEBPACK_IMPORTED_MODULE_2__.ResultsCarCardComponent, _result_card_result_card_component__WEBPACK_IMPORTED_MODULE_3__.ResultCardComponent, _comparing_graph_comparing_graph_component__WEBPACK_IMPORTED_MODULE_4__.ComparingGraphComponent],
  styles: [".buttonsContainer[_ngcontent-%COMP%] {\r\n    background-color: #f0f0f0a5;\r\n    border: 1px solid rgb(164, 164, 164);\r\n    border-radius: 24px;\r\n    padding: 11px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: larger;\r\n}\r\n\r\n.focus[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    border-radius: 10px;\r\n    height: 4px;\r\n    padding: 0px 20px 0px 20px;\r\n    box-shadow: 0 25px 0 0 #000;\r\n    text-align: center;\r\n}\r\n\r\n.innerText[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 40px;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.carImage[_ngcontent-%COMP%] {\r\n    margin: unset;\r\n    height: 100px;\r\n}\r\n\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    height: 9px;\r\n    display: block;\r\n    background-color: #d7d7d7;;\r\n    border: none;\r\n    margin: 30px;\r\n    border-radius: 6px;\r\n}\r\n\r\n\r\n.app-comparing-graph[_ngcontent-%COMP%]{\r\n    margin: 30px 30px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdWx0cy1wYWdlL3Jlc3VsdHMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjBhNTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjQsIDE2NCwgMTY0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDI1cHggMCAwICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbm5lclRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jYXJJbWFnZSB7XHJcbiAgICBtYXJnaW46IHVuc2V0O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuXHJcbmhye1xyXG4gICAgaGVpZ2h0OiA5cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2Q3ZDc7O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG5cclxuLmFwcC1jb21wYXJpbmctZ3JhcGh7XHJcbiAgICBtYXJnaW46IDMwcHggMzBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6392:
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_Model_Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Model/Car */ 8062);
/* harmony import */ var _car_info_v2_car_info_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../car-info-v2/car-info-v2.component */ 6503);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _data_service_data_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-service/data-service.component */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _car_card_car_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../car-card/car-card.component */ 4305);
/* harmony import */ var _comparing_car_card_comparing_car_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comparing-car-card/comparing-car-card.component */ 2096);













function SearchComponent_mat_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchComponent_mat_icon_14_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.removeCar(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "remove_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SearchComponent_mat_icon_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchComponent_mat_icon_17_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.removeCar(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "remove_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SearchComponent_div_45_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-car-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchComponent_div_45_div_5_Template_app_car_card_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const car_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.openCarInfoDialog(car_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const car_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("car", car_r9);
  }
}
function SearchComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SearchComponent_div_45_div_5_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const company_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](company_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", company_r7.value);
  }
}
class SearchComponent {
  constructor(dialog, data, router) {
    this.dialog = dialog;
    this.data = data;
    this.router = router;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.searchText = '';
    this.company2Cars = new Map();
    this.shownData = new Map();
    this.tesla = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
    this.ev6 = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
    this.showFilters = false;
    this.comparingCarArr = [];
  }
  ngOnInit() {
    this.tesla.logo = 'assets/Branding/tesla.png';
    this.tesla.model = 'Model 3';
    this.tesla.subModel = 'Dual Motor';
    this.tesla.year = 2023;
    this.tesla.company = 'Tesla';
    this.tesla.batteryRange = 320;
    this.tesla.orderLink = 'https://www.tesla.com/model3';
    this.tesla.price = 320000;
    this.tesla.ImagePath = 'assets/cars/tesla_m s 23.png';
    this.tesla.chargingSpeed = 50;
    this.tesla.seatsNumber = 5;
    this.tesla.zeroToHundred = 3.3;
    this.tesla.Rank = '4.5';
    this.tesla.safetyRank = 8;
    this.ev6.chargingSpeed = 30;
    this.ev6.safetyRank = 7;
    this.ev6.price = 327500;
    this.ev6.orderLink = 'https://kia-israel.co.il/רכב/ev6';
    this.ev6.logo = 'assets/Branding/kia.png';
    this.ev6.model = 'EV6';
    this.ev6.subModel = 'Sport Edition';
    this.ev6.year = 2023;
    this.ev6.company = 'KIA';
    this.ev6.seatsNumber = 5;
    this.ev6.zeroToHundred = 4.2;
    this.ev6.batteryRange = 400;
    this.ev6.ImagePath = 'assets/cars/kia ev6 23.png';
    this.company2Cars.set('KIA', [this.ev6, this.ev6, this.ev6, this.ev6]);
    this.company2Cars.set('Tesla', [this.tesla, this.tesla, this.tesla, this.tesla, this.tesla, this.tesla, this.tesla]);
    this.data.carEmmiter.subscribe(car => {
      console.log('choose car ' + JSON.stringify(car));
      if (this.comparingCarArr.length === 2) {
        this.comparingCarArr[0] = this.comparingCarArr[1];
        this.comparingCarArr[1] = car;
      } else {
        this.comparingCarArr.push(car);
      }
    });
    this.shownData = this.company2Cars;
    this.comparingCarArr = this.data.comparingArray;
  }
  closePopUp() {
    this.close.emit('close');
  }
  changeFiltersView() {
    this.searchText = '';
    this.filter();
    this.showFilters = !this.showFilters;
  }
  openCarInfoDialog(car) {
    this.dialog.open(_car_info_v2_car_info_v2_component__WEBPACK_IMPORTED_MODULE_1__.CarInfoV2Component, {
      disableClose: false,
      data: {
        injectedCar: car
      }
    }).updateSize('100vw', '100%');
  }
  compare() {
    if (this.comparingCarArr.length === 2) {
      this.data.comparingArray = this.comparingCarArr;
      this.router.navigateByUrl('results');
    }
  }
  removeCar(index) {
    this.comparingCarArr.splice(index, 1);
    console.log(this.comparingCarArr);
  }
  filter() {
    let results = new Map();
    this.company2Cars.forEach((cars, company) => {
      let carArray = [];
      cars.forEach(car => {
        if (car.company?.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) || car.model?.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) || String(car.year).toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())) {
          carArray.push(car);
        }
        if (carArray.length !== 0) {
          results.set(company, carArray);
        }
      });
    });
    this.shownData = results;
  }
  filterByCompany(company) {
    this.searchText = company;
    this.filter();
  }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_data_service_data_service_component__WEBPACK_IMPORTED_MODULE_2__.DataServiceComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  outputs: {
    close: "close"
  },
  decls: 51,
  vars: 12,
  consts: [[2, "padding-top", "20px", "height", "84vh"], ["dir", "rtl"], [1, "boldText", 3, "click"], ["dir", "rtl", 1, "searchCarsContainer"], [1, "flexContainer", 2, "flex-direction", "row", "justify-content", "space-evenly", "width", "80%", "height", "50px", "margin-top", "15px"], [2, "width", "70%"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9", 1, "logo", "input", 2, "margin-top", "4px", "width", "80%", 3, "ngModel", "ngModelChange", "keyup"], [2, "width", "30%", "height", "47px"], ["src", "assets/filter.png", 2, "height", "inherit", "margin-top", "4px", "margin-right", "14px", 3, "click"], [1, "flexContainer", 2, "flex-direction", "row", 3, "ngClass"], [1, "textDiv", 3, "ngClass"], [1, "compareContainer"], ["class", "icon", 3, "click", 4, "ngIf"], [3, "car"], ["dir", "rtl", 1, "compareContainer", "visible"], [1, "filters", 3, "ngClass"], [1, "filter", 2, "display", "flex", 3, "click"], ["src", "assets/Branding/tesla.png", "alt", "", 2, "margin", "auto"], ["src", "assets/Branding/hyundai.gif", "alt", "", 2, "margin", "auto"], ["src", "assets/Branding/kia.png", "alt", "", 2, "margin", "auto"], ["src", "assets/Branding/byd.png", "alt", "", 2, "margin", "auto"], [1, "filter", 2, "display", "flex"], [1, "allCarContainer"], [4, "ngFor", "ngForOf"], [1, "flexContainer"], [1, "logo", "homeButton", "compareButton"], [1, "searchButton", 3, "ngClass", "click"], [1, "icon", 3, "click"], [2, "margin-right", "10px"], [1, "flexContainer", "carousel", 2, "overflow-y", "scroll", "height", "30vh"], [1, "searchCarCard", 3, "car", "click"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchComponent_Template_span_click_2_listener() {
        return ctx.closePopUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u05D7\u05D6\u05E8\u05D4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function SearchComponent_Template_input_keyup_7_listener() {
        return ctx.filter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchComponent_Template_img_click_9_listener() {
        return ctx.changeFiltersView();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\u05E0\u05D5\u05EA\u05E8 \u05E2\u05D5\u05D3 \u05E8\u05DB\u05D1 \u05D0\u05D7\u05D3 \u05DC\u05D1\u05D7\u05D9\u05E8\u05D4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SearchComponent_mat_icon_14_Template, 2, 0, "mat-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "app-comparing-car-card", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, SearchComponent_mat_icon_17_Template, 2, 0, "mat-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "app-comparing-car-card", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 15)(20, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_20_listener() {
        return ctx.filterByCompany("Tesla");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_23_listener() {
        return ctx.filterByCompany("Hyundai");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_26_listener() {
        return ctx.filterByCompany("KIA");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_29_listener() {
        return ctx.filterByCompany("BYD");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 21)(33, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 21)(36, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 21)(39, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 21)(42, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, SearchComponent_div_45_Template, 6, 2, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](46, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 24)(48, "div", 25)(49, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_49_listener() {
        return ctx.compare();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "\u05DC\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.comparingCarArr.length === 0 ? "hidden" : "visible");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.comparingCarArr.length > 1 && ctx.comparingCarArr.length < 2 ? "hidden" : "visible");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.comparingCarArr[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("car", ctx.comparingCarArr[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.comparingCarArr[1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("car", ctx.comparingCarArr[1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", !ctx.showFilters ? "hidden" : "visible");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](46, 10, ctx.shownData));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.comparingCarArr.length == 2 ? "enabled" : "disabled");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Dir, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _car_card_car_card_component__WEBPACK_IMPORTED_MODULE_3__.CarCardComponent, _comparing_car_card_comparing_car_card_component__WEBPACK_IMPORTED_MODULE_4__.ComparingCarCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.KeyValuePipe],
  styles: [".filters[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    overflow-x: scroll;\r\n    margin-top: 10px;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n    border: 1px solid black;\r\n    border-radius: 60px;\r\n    height: 70px;\r\n    margin: 5px;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    height: inherit;\r\n    max-width: 70px;\r\n    padding: 0%;\r\n    width: inherit;\r\n    max-height: 70px;\r\n}\r\n\r\n.textDiv[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n    margin: 24px 0 15px 0;\r\n}\r\n\r\n.disabled[_ngcontent-%COMP%] {\r\n    background-color: #d2d2d29e;\r\n}\r\n\r\n.enabled[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    float: left;\r\n    position: relative;\r\n    z-index: 9;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n    display: flex;\r\n}\r\n.filter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 55px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uZmlsdGVyPmltZyB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBtYXgtd2lkdGg6IDcwcHg7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgbWF4LWhlaWdodDogNzBweDtcclxufVxyXG5cclxuLnRleHREaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgMTVweCAwO1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyZDJkMjllO1xyXG59XHJcblxyXG4uZW5hYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG4uZmlsdGVyID4gZGl2IHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZmlsdGVyID4gZGl2ID4gaW1nIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1NXB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3861:
/*!********************************************************************!*\
  !*** ./src/app/two-cars-comparing/two-cars-comparing.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoCarsComparingComponent": () => (/* binding */ TwoCarsComparingComponent)
/* harmony export */ });
/* harmony import */ var src_Model_Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Model/Car */ 8062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);
/* harmony import */ var _car_home_card_car_home_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../car-home-card/car-home-card.component */ 446);




class TwoCarsComparingComponent {
  constructor() {
    this.tesla = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
    this.ionic = new src_Model_Car__WEBPACK_IMPORTED_MODULE_0__.Car();
  }
  ngOnInit() {
    this.tesla.logo = 'assets/Branding/tesla.png';
    this.tesla.model = 'Dual Motor';
    this.tesla.year = 2023;
    this.tesla.company = 'טסלה מודל 3';
    this.tesla.ImagePath = 'assets/cars/tesla_m s 23.png';
    this.ionic.logo = 'assets/Branding/hyundai.gif';
    this.ionic.model = 'Sport Edition';
    this.ionic.year = 2023;
    this.ionic.company = 'KIA EV6';
    this.ionic.ImagePath = 'assets/cars/kia ev6 23.png';
  }
}
TwoCarsComparingComponent.ɵfac = function TwoCarsComparingComponent_Factory(t) {
  return new (t || TwoCarsComparingComponent)();
};
TwoCarsComparingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TwoCarsComparingComponent,
  selectors: [["app-two-cars-comparing"]],
  decls: 18,
  vars: 2,
  consts: [[1, "flexContainer", "card", "twoCarsContainer", 2, "flex-direction", "row", "margin-top", "16px", "justify-content", "space-evenly"], ["dir", "ltr", 2, "width", "44%", 3, "car"], [1, "spacer"], ["dir", "rtl", 2, "width", "44%", 3, "car"], [1, "shadow"], ["dir", "rtl", 1, "flexContainer", 2, "flex-direction", "row", "justify-content", "space-around", "margin-top", "10px"], [1, "boldText", "thinText"], ["dir", "rtl", 1, "flexContainer", 2, "margin-top", "10px"], [1, "button", 2, "font-size", "16px"]],
  template: function TwoCarsComparingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-car-home-card", 1)(2, "div", 2)(3, "app-car-home-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "2740 \u05E6\u05E4\u05D9\u05D5\u05EA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "| ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "1080 \u05DE\u05D3\u05E8\u05D2\u05D9\u05DD");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "| ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "530 \u05EA\u05D2\u05D5\u05D1\u05D5\u05EA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7)(15, "button", 8)(16, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u05E7\u05D3\u05D9\u05DE\u05D4 \u05DC\u05D4\u05E9\u05D5\u05D5\u05EA!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("car", ctx.ionic);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("car", ctx.tesla);
    }
  },
  dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Dir, _car_home_card_car_home_card_component__WEBPACK_IMPORTED_MODULE_1__.CarHomeCardComponent],
  styles: [".card[_ngcontent-%COMP%]{\r\n    background-image: -webkit-linear-gradient(#aaaaaa,red,45deg);\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: url('button.png') center no-repeat;\r\n    background-size: contain;\r\n    padding: 0px 0px;\r\n    width: 50%;\r\n    margin: auto;\r\n    margin-top: 23px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdHdvLWNhcnMtY29tcGFyaW5nL3R3by1jYXJzLWNvbXBhcmluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhDQUEyRDtJQUMzRCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjYWFhYWFhLHJlZCw0NWRlZyk7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYnV0dG9uLnBuZycpIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIzcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map