type aType = number | string | object | boolean;

function addNumberOrStringa(a: aType, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}

//loi khi running
//loi khi compile
console.log(">>> check: ", addNumberOrStringa("a", "Hiệu"));
