import { f as bind_props, c as pop, p as push, e as ensure_array_like, h as head } from "../../../chunks/index.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function PortfolioCard($$payload, $$props) {
  push();
  let portfolio = $$props["portfolio"];
  $$payload.out += `<div class="column is-half-tablet is-one-third-desktop"><div class="card"><div class="card-image"><figure class="image is-16by9"><img${attr("src", portfolio.image)}${attr("alt", `${portfolio.title} image`)}></figure></div> <div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img${attr("src", portfolio.icon)}${attr("alt", `${portfolio.icon} icon`)}></figure></div> <div class="media-content"><p class="title is-4">${escape_html(portfolio.title)}</p> <p class="subtitle is-6">${escape_html(portfolio.subTitle)}</p></div></div> <div class="content"><p>${escape_html(portfolio.description)}</p></div></div> <footer class="card-footer">`;
  if (portfolio.buttonLabel && portfolio.url) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", portfolio.url)} target="_blank" class="card-footer-item"><i class="fas fa-link"></i>  ${escape_html(portfolio.buttonLabel)}</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></footer></div></div>`;
  bind_props($$props, { portfolio });
  pop();
}
function _page($$payload, $$props) {
  let title, description, author, portfolios;
  let data = $$props["data"];
  ({ title, description, author, portfolios } = data);
  const each_array = ensure_array_like(portfolios);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", description)}> <meta name="author"${attr("content", author)}>`;
  });
  $$payload.out += `<div id="wallpaper" class="wallpaper svelte-rbfs5v" data-image="images/city.jpg"></div> <div class="container"><div class="columns is-multiline"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let portfolio = each_array[$$index];
    PortfolioCard($$payload, { portfolio });
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { data });
}
export {
  _page as default
};
