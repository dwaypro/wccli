
import TesterCompHTML from "./TesterComp.html"
import TesterCompCSS from "./TesterComp.css"

class TesterComp extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: `open`
        });

        const template = document.createElement(`template`);
        template.innerHTML = `<style>${TesterCompCSS}</style>${TesterCompHTML}`

        shadowRoot.appendChild(template.content.cloneNode(true));
    }


    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
    }
}

customElements.define(`wc-TesterComp`, TesterComp);

export {TesterComp}