import { HtmrOptions } from "htmr";

export const htmrOptions: HtmrOptions = {
    preserveAttributes: ["style", "href"],
    dangerouslySetChildren: ["style", "li", "ul", "a", "b", "ol", "br"],
};
