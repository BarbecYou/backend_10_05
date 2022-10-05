"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_nev, _User_eletkor;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(nev, eletkor) {
        _User_nev.set(this, void 0);
        _User_eletkor.set(this, void 0);
        __classPrivateFieldSet(this, _User_nev, nev, "f");
        __classPrivateFieldSet(this, _User_eletkor, eletkor, "f");
    }
    kiir() {
        console.log(__classPrivateFieldGet(this, _User_nev, "f"), __classPrivateFieldGet(this, _User_eletkor, "f"));
    }
}
exports.User = User;
_User_nev = new WeakMap(), _User_eletkor = new WeakMap();
