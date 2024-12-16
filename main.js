(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n){var r=t.item,o=t.currentUser,i=t.handleCardClick,a=t.handleDeleteCard,u=t.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardId=r._id,this._name=r.name,this._link=r.link,this._likes=r.likes,this._ownerId=r.owner._id,this._cardElement=n,this._handleCardClick=i,this._handleDeleteCard=a,this._handleLikeCard=u,this._currentUser=o}var n,r;return n=e,(r=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._cardElement).content.querySelector("li").cloneNode(!0)}},{key:"updateLikes",value:function(e,t){var n=this;0!==e.length?this._cardLikeCounter.textContent=e.length:this._cardLikeCounter.textContent="0","setLike"===t?this._cardLikeButton.classList.add("photo-card__like-button_active"):this._cardLikeButton.classList.remove("photo-card__like-button_active"),e.some((function(e){return e._id===n._currentUser}))&&this._cardLikeButton.classList.add("photo-card__like-button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._cardLikeButton.addEventListener("click",(function(){e._cardLikeButton.classList.contains("photo-card__like-button_active")?e._handleLikeCard.handleDeleteLike(e._cardId,e._cardItem):e._handleLikeCard.handleSetLike(e._cardId,e._cardItem)})),this._ownerId===this._currentUser&&this._cardDeleteButton.addEventListener("click",(function(){return e._handleDeleteCard(e._cardId,e._cardItem)})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"deleteCard",value:function(){this._cardItem.remove(),this._cardItem=null}},{key:"createCard",value:function(){return this._cardItem=this._getCardTemplate(),this._cardImage=this._cardItem.querySelector(".photo-card__image"),this._cardLikeButton=this._cardItem.querySelector(".photo-card__like-button"),this._cardLikeCounter=this._cardItem.querySelector(".photo-card__like-counter"),this._cardDeleteButton=this._cardItem.querySelector(".photo-card__delete"),this._cardItem.querySelector(".photo-card__title").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._ownerId!==this._currentUser&&this._cardDeleteButton.remove(),this.updateLikes(this._likes,""),this._setEventListeners(),this._cardItem}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupInput=t.inputSelector,this._popupSubmit=t.submitButtonSelector,this._popupSubmitDisabled=t.inactiveButtonClass,this._popupInputTypeError=t.inputErrorClass,this._popupErrorVisible=t.errorClass,this._formToValidate=n,this._submitButton=this._formToValidate.querySelector(this._popupSubmit),this._inputArray=this._formToValidate.querySelectorAll(this._popupInput)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formToValidate.querySelector("#".concat(e.id,"-error"));n.textContent=t,e.classList.add(this._popupInputTypeError),n.classList.add(this._popupErrorVisible)}},{key:"_hideInputError",value:function(e){var t=this._formToValidate.querySelector("#".concat(e.id,"-error"));t.textContent="",e.classList.remove(this._popupInputTypeError),t.classList.remove(this._popupErrorVisible)}},{key:"_validateInput",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"switchSubmitButton",value:function(){0===Array.from(this._inputArray).filter((function(e){return!e.validity.valid})).length?(this._submitButton.disabled=!1,this._submitButton.classList.remove(this._popupSubmitDisabled)):(this._submitButton.disabled=!0,this._submitButton.classList.add(this._popupSubmitDisabled))}},{key:"validateInputs",value:function(){var e=this;this._inputArray.forEach((function(t){e._validateInput(t),e._hideInputError(t)}))}},{key:"_setInputEvtListeners",value:function(){var e=this;this._formToValidate.addEventListener("submit",(function(e){e.preventDefault()})),this._inputArray.forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e.switchSubmitButton()}))}))}},{key:"enableValidation",value:function(){this._setInputEvtListeners(this._formToValidate)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}},{key:"renderElements",value:function(e){var t=this;this._container.innerHTML="",e.forEach((function(e){t._renderer(e)}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEsc=function(e){n._handleEscClose(e)}}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEsc)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e,t){var n,r=t.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitForm=r,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._submitbutton=n._popup.querySelector(".popup__submit"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;f(_(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e.renderLoading(!0),e._handleSubmitForm(e._getInputValues())}))}},{key:"close",value:function(){f(_(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._submitbutton.textContent=e?"Сохранение...":this._submitbutton.dataset.value}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function L(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._caption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.title,n=e.src;this._image.src=n,this._image.alt=t,this._caption.textContent=t,m(g(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function j(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e,t){var n,r=t.handleSubmitDelete;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitDelete=r,n._form=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;O(R(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitDelete(e._idCard,e._card)}))}},{key:"getCard",value:function(e,t){this._clear(),this._idCard=e,this._cardElement=t}},{key:"open",value:function(e){this._card=e,O(R(a.prototype),"open",this).call(this)}},{key:"_clear",value:function(){this._idCard="",this._cardElement=""}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){var n=t.profileTitle,r=t.profileAbout,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._info={title:this._title.textContent,about:this._about.textContent,avatar:this._avatar.src},this._info}},{key:"setUserInfo",value:function(e){this._title.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=t.headers,this._serverURL=t.serverURL,this._handlePromiseReturn=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._serverURL,"/users/me"),{headers:this._headers}).then((function(t){return e._handlePromiseReturn(t)}))}},{key:"sendUserInfo",value:function(e){var t=this;return fetch("".concat(this._serverURL,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._handlePromiseReturn(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._serverURL,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._handlePromiseReturn(e)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._serverURL,"/cards"),{headers:this._headers}).then((function(t){return e._handlePromiseReturn(t)}))}},{key:"sendCard",value:function(e){var t=this;return fetch("".concat(this._serverURL,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._handlePromiseReturn(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._serverURL,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._serverURL,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._handlePromiseReturn(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._serverURL,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._handlePromiseReturn(e)}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({serverURL:"https://mesto.nomoreparties.co/v1/frontend-st-cohort-201",headers:{authorization:"cd3af3c5-8c6d-4897-9fe8-8d59a2f39769","Content-Type":"application/json"}}),V="";Promise.all([U.getUserInfo(),U.getCards()]).then((function(e){V=e[0]._id,console.log("ID пользователя:",V),K.setUserInfo(e[0]),x.renderElements(e[1])})).catch((function(e){console.log(e)}));var x=new a({renderer:function(e){x.addItem(ee(e,V))}},".photo-cards"),A=document.querySelector(".popup_edit_profile "+e.formSelector),F=document.querySelector(".popup_update-avatar "+e.formSelector),N=new o(e,A),H=new o(e,F),J=document.querySelector(".popup_edit_profile"),M=J.querySelector("#profile_name"),z=J.querySelector("#profile_about"),G=document.querySelector(".profile__button"),K=new B({profileTitle:".profile__title",profileAbout:".profile__about",profileAvatar:".profile__avatar"}),Q=new y(".popup_edit_profile",{handleSubmitForm:function(e){U.sendUserInfo(e).then((function(e){K.setUserInfo({name:e.name,about:e.about,avatar:e.avatar}),Q.close()})).catch((function(e){console.log(e)})).finally((function(){Q.renderLoading(!1)}))}});document.querySelector(".profile__edit-avatar-button").addEventListener("click",(function(){W.open(),H.validateInputs(),H.switchSubmitButton()}));var W=new y(".popup_update-avatar",{handleSubmitForm:function(e){U.updateAvatar(e.avatar).then((function(e){K.setUserInfo({avatar:e.avatar,name:e.name,about:e.about}),W.close()})).catch((function(e){console.log(e)})).finally((function(){W.renderLoading(!1)}))}}),X=new o(e,document.querySelector(".popup_new-place "+e.formSelector)),Y=new S(".popup_view_image"),Z=new T(".popup_delete-place",{handleSubmitDelete:function(e,t){U.deleteCard(e).then((function(){t.deleteCard(),Z.close()})).catch((function(e){console.log(e)}))}}),$=document.querySelector(".profile__add-button"),ee=function(e,t){var r=new n({item:e,currentUser:t,handleCardClick:function(){Y.open({title:e.name,src:e.link})},handleDeleteCard:function(e,t){Z.open(r),Z.getCard(e,t)},handleLikeCard:{handleSetLike:function(e){U.setLike(e).then((function(e){r.updateLikes(e.likes,"setLike")})).catch((function(e){console.log(e)}))},handleDeleteLike:function(e){U.deleteLike(e).then((function(e){r.updateLikes(e.likes,"deleteLike")})).catch((function(e){console.log(e)}))}}},"#photo-card");return r.createCard()},te=new y(".popup_new-place",{handleSubmitForm:function(e){U.sendCard(e).then((function(e){x.addNewItem(ee(e,V)),te.close()})).finally((function(){te.renderLoading(!1)}))}});G.addEventListener("click",(function(){var e;e=K.getUserInfo(),M.value=e.title,z.value=e.about,Q.open(),N.validateInputs(),N.switchSubmitButton()})),$.addEventListener("click",(function(){te.open(),X.validateInputs(),X.switchSubmitButton()})),document.addEventListener("DOMContentLoaded",(function(){N.enableValidation(),X.enableValidation(),H.enableValidation(),Y.setEventListeners(),Q.setEventListeners(),Z.setEventListeners(),te.setEventListeners(),W.setEventListeners()}))})();