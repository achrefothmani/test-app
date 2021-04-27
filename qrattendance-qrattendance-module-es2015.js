(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qrattendance-qrattendance-module"],{

/***/ "./src/app/qrattendance/qrattendance-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/qrattendance/qrattendance-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: QrattendancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrattendancePageRoutingModule", function() { return QrattendancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _qrattendance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qrattendance.page */ "./src/app/qrattendance/qrattendance.page.ts");




const routes = [
    {
        path: '',
        component: _qrattendance_page__WEBPACK_IMPORTED_MODULE_3__["QrattendancePage"]
    }
];
let QrattendancePageRoutingModule = class QrattendancePageRoutingModule {
};
QrattendancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QrattendancePageRoutingModule);



/***/ }),

/***/ "./src/app/qrattendance/qrattendance.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/qrattendance/qrattendance.module.ts ***!
  \*****************************************************/
/*! exports provided: QrattendancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrattendancePageModule", function() { return QrattendancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _qrattendance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qrattendance-routing.module */ "./src/app/qrattendance/qrattendance-routing.module.ts");
/* harmony import */ var _qrattendance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qrattendance.page */ "./src/app/qrattendance/qrattendance.page.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/__ivy_ngcc__/fesm2015/ngx-qrcode2.js");








let QrattendancePageModule = class QrattendancePageModule {
};
QrattendancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _qrattendance_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrattendancePageRoutingModule"], ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"]
        ],
        declarations: [_qrattendance_page__WEBPACK_IMPORTED_MODULE_6__["QrattendancePage"]]
    })
], QrattendancePageModule);



/***/ })

}]);
//# sourceMappingURL=qrattendance-qrattendance-module-es2015.js.map