import { h as head, d as slot } from "../../../chunks/index.js";
import { a as attr } from "../../../chunks/attributes.js";
const bootstrapScript = "/_app/immutable/assets/bootstrap.bundle.min.DwhfF1z7.js";
function _layout($$payload, $$props) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>MoneyPulse</title>`;
    $$payload2.out += `<meta name="description" content="Financial Checkup App"> <meta name="author" content="Jeffry Hermanto"> <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&amp;display=swap" rel="stylesheet"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"><\/script> <script${attr("src", bootstrapScript)}><\/script>`;
  });
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
