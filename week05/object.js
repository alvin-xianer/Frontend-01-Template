let set = new Set();
let objects = [
  eval,
  isFinite,
  isNaN,
  parseFloat,
  parseInt,
  decodeURI,
  decodeURIComponent,
  encodeURI,
  encodeURIComponent,
  Object,
  Function,
  Boolean,
  Symbol,
  Error,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError,
  Number,
  BigInt,
  Math,
  Date,
  String,
  RegExp,
  Array,
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  BigInt64Array,
  BigUint64Array,
  Map,
  Set,
  WeakMap,
  WeakSet,
  ArrayBuffer,
  SharedArrayBuffer,
  Atomics,
  DataView,
  JSON,
  Promise,
  Reflect,
  Proxy,
];
objects.forEach((o) => set.add(o));
for (var i = 0; i < objects.length; i++) {
  var j = objects[i];
  for (var p of Object.getOwnPropertyNames(j)) {
    console.log(p);
    var a = Object.getOwnPropertyDescriptor(j, p);
    console.log("==", a);
    // a.get && console.log(a.get);
    // a.set && console.log(a.set);
    if (
      (a.value !== "null" && typeof a.value === "object") ||
      typeof a.value === "function"
    ) {
      if (!set.has(a.value)) {
        set.add(a.value);
      }
    }
    if (a.get && !set.has(a.get)) {
      set.add(a.get);
    }
    if (a.set && !set.has(a.set)) {
      set.add(a.set);
    }
  }
}
console.log(set.size);
