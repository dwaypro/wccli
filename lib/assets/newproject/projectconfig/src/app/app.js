import appHTML from "./app.html";
import appCSS from "./app.css";
class App extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        });

        const template = document.createElement('template');
        template.innerHTML = `
        <style>
            ${appCSS}
        </style>
            ${appHTML}                      
        `
        shadowRoot.appendChild(template.content.cloneNode(true));
    }


    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
        var appInitialized = this.appInitialized;

        if(!appInitialized){
            this.setAppInitialized(true);

        }
    }

    appInitialized(boolean){
        this.appInitialized = boolean;
    }
}

customElements.define('new-app', App);

export {App}
            
        