function newComponentSchematic(componentClassName, options){
    var cssInterpolator = "${" + componentClassName + "CSS}"
    var htmlInterpolator = "${" + componentClassName + "HTML}"
    var innerHTMLSTRING = `'<style>${cssInterpolator}</style>${htmlInterpolator}'`;


    return `
import ${componentClassName}HTML from "./${componentClassName}.html"
import ${componentClassName}CSS from "./${componentClassName}.css"

class ${componentClassName} extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        });

        const template = document.createElement('template');
        template.innerHTML = ${innerHTMLSTRING}

        shadowRoot.appendChild(template.content.cloneNode(true));
    }


    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
            var appInitialized = this.appInitialized;
            if(!appInitialized){
                var instance = this;
                this.setAppInitialized(true);
               
            }
        }
    
        setAppInitialized(boolean){
            this.appInitialized = boolean;
        }
}

customElements.define('wc-${componentClassName}', ${componentClassName});

export {${componentClassName}}`    
}

module.exports={
    newComponentSchematic:newComponentSchematic
}
            