class BoilerPlate extends HTMLElement {

        constructor() {
            super();
    
            const shadowRoot = this.attachShadow({
                mode: 'open'
            });
    
            const template = document.createElement('template');
            template.innerHTML = `
            `
    
            shadowRoot.appendChild(template.content.cloneNode(true));
        }
    
    
        attributeChangedCallback(name, oldValue, newValue) {
    
        }
    
        connectedCallback() {
    
        }
    
    }
    
    customElements.define('prx-boiler-plate', BoilerPlate);
    
export {BoilerPlate}
    
