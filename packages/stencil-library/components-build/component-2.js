import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const Component2$1 = /*@__PURE__*/ proxyCustomElement(class Component2 extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return h("div", { key: '75ba642af7f09b20015cb01510e660f70cb94c2a' }, "I'm component 2");
    }
}, [1, "component-2"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["component-2"];
    components.forEach(tagName => { switch (tagName) {
        case "component-2":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Component2$1);
            }
            break;
    } });
}

const Component2 = Component2$1;
const defineCustomElement = defineCustomElement$1;

export { Component2, defineCustomElement };

//# sourceMappingURL=component-2.js.map