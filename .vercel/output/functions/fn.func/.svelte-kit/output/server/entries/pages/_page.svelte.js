import { e as ensure_array_like, h as head, f as bind_props } from "../../chunks/index.js";
import { a as attr, t as to_class } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
const cv = "/_app/immutable/assets/CV_Jeffry_Hermanto.rw09hOD6.pdf";
const jeffry = "/_app/immutable/assets/jeffry.DxIeMxwL.jpg";
function _page($$payload, $$props) {
  let title, description, author;
  let data = $$props["data"];
  const social = [
    {
      url: "https://github.com/jeffryhermanto",
      icon: "github"
    },
    {
      url: "https://www.linkedin.com/in/jeffryhermanto",
      icon: "linkedin"
    },
    {
      url: "https://instagram.com/jeffryhermanto",
      icon: "instagram"
    },
    {
      url: "https://twitter.com/jeffryhermanto",
      icon: "twitter"
    }
  ];
  ({ title, description, author } = data);
  const each_array = ensure_array_like(social);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", description)}> <meta name="author"${attr("content", author)}>`;
  });
  $$payload.out += `<div class="wallpaper svelte-1dr3238"></div> <div class="content"><aside class="side"><figure class="picture svelte-1dr3238"><div class="picture-shadow"></div> <img class="picture-image"${attr("src", jeffry)} alt="Portrait of Jeffry Hermanto" width="320" height="320"></figure></aside> <main class="about"><h1 class="name">Hi, I'm ${escape_html(author)}</h1> <p class="job">Software Engineer</p> <hr class="hr"> <div class="description"><p class="summary">${escape_html(description)}</p></div> <div class="contact"><a class="button" href="mailto:jeffryhermanto@gmail.com">Get in touch</a></div> <ul class="social"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<li><a${attr("href", item.url)} target="_blank"><i${attr("class", to_class(`fab fa-${item.icon}`, "svelte-1dr3238"))}></i></a></li>`;
  }
  $$payload.out += `<!--]--></ul> <p class="portfolio"><a href="portfolio" target="_blank"><i class="fas fa-folder-open"></i>  Portfolio</a></p> <p class="cv"><a${attr("href", cv)} target="_blank"><i class="fa fa-download mr-2"></i>  CV</a></p></main></div>`;
  bind_props($$props, { data });
}
export {
  _page as default
};
