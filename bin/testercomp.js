
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
        var instance = this;
        var appInitialized = this.appInitialized;
        if(!appInitialized){
            this.vueArea = new Vue({
                el: this.shadowRoot.querySelector(`#vueArea`),
                data: {

                },
                methods: {

                }
            })
        }
    }

    appInitialized(boolean){
        this.appInitialized = boolean;
    }
}

customElements.define(`wc-testercomp`, testercomp);

export {testercomp}