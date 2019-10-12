
import testercompHTML from "./testercomp.html"
import testercompCSS from "./testercomp.css"

class testercomp extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: `open`
        });

        const template = document.createElement(`template`);
        template.innerHTML = `<style>${testercompCSS}</style>${testercompHTML}`

        shadowRoot.appendChild(template.content.cloneNode(true));
    }


    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
    }
}

customElements.define(`crd-testercomp`, testercomp);

export {testercomp}