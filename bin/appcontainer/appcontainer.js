
import appcontainerHTML from "./appcontainer.html"
import appcontainerCSS from "./appcontainer.css"

class Appcontainer extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: `open`
        });

        const template = document.createElement(`template`);
        template.innerHTML = `<style>${appcontainerCSS}</style>${appcontainerHTML}`

        shadowRoot.appendChild(template.content.cloneNode(true));
    }


    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
        var appInitialized = this.appInitialized;
        if(!appInitialized){
            this.setAppInitialized(true);
            var instance = this;
            this.vueArea = new Vue({
                el: this.shadowRoot.querySelector(`#vueArea`),
                data: {

                },
                methods: {

                }
            })
        }
    }

    setAppInitialized(boolean){
        this.appInitialized = boolean;
    }
}

customElements.define(`wc-appcontainer`, appcontainer);

export {appcontainer}