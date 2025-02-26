import { h as head, d as slot } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script defer src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"><\/script><!---->`;
  });
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
