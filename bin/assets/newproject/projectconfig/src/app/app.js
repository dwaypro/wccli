class App extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        });

        const template = document.createElement('template');
        template.innerHTML = `
            <div id="header">
                <image></image>
                <h1>WC CLI!</h1>
            </div>
            <div>
                <ul>
                    <li><a>documentation</a></li>
                    <li><a>news</a></li>
                    <li><a>community</a></li>
                </ul>
            </div>
            

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
            
        