import { e as escape_html } from "./escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function to_class(value, hash, directives) {
  var classname = value == null ? "" : "" + value;
  {
    classname = classname ? classname + " " + hash : hash;
  }
  return classname === "" ? null : classname;
}
export {
  attr as a,
  to_class as t
};
