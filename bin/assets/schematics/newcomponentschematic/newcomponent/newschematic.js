function newComponentSchematic(componentClassName, options){
    var cssInterpolator = "${" + componentClassName + "CSS}"
    var htmlInterpolator = "${" + componentClassName + "HTML}"
    var innerHTMLSTRING = `'<style>${cssInterpolator}</style>${htmlInterpolator}'`;
    const className = componentClassName[0].toUpperCase() + componentClassName.slice(1);

    return `
import ${componentClassName}HTML from "./${componentClassName}.html"
import ${componentClassName}CSS from "./${componentClassName}.css"

class ${className} extends HTMLElement {

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

customElements.define('wc-${componentClassName}', ${className});

export {${className}}`    
}

module.exports={
    newComponentSchematic:newComponentSchematic
}
            