"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vec4 = exports.vec3 = exports.vec2 = exports.quat2 = exports.quat = exports.mat4 = exports.mat3 = exports.mat2d = exports.mat2 = exports.glMatrix = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

exports.glMatrix = glMatrix;

var mat2 = _interopRequireWildcard(require("./mat2.js"));

exports.mat2 = mat2;

var mat2d = _interopRequireWildcard(require("./mat2d.js"));

exports.mat2d = mat2d;

var mat3 = _interopRequireWildcard(require("./mat3.js"));

exports.mat3 = mat3;

var mat4 = _interopRequireWildcard(require("./mat4.js"));

exports.mat4 = mat4;

var quat = _interopRequireWildcard(require("./quat.js"));

exports.quat = quat;

var quat2 = _interopRequireWildcard(require("./quat2.js"));

exports.quat2 = quat2;

var vec2 = _interopRequireWildcard(require("./vec2.js"));

exports.vec2 = vec2;

var vec3 = _interopRequireWildcard(require("./vec3.js"));

exports.vec3 = vec3;

var vec4 = _interopRequireWildcard(require("./vec4.js"));

exports.vec4 = vec4;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }