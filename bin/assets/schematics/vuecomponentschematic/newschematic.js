function newComponentSchematic(componentClassName, options){
    var innerHTMLSTRING = `<style>${componentClassName}CSS</style>${componentClassNameHTML}`;

    return `
    import ${componentClassName}HTML from "./${componentClassName}.html"
    import ${componentClassName}CSS from "./${componentClassName}.css"
    
    class ${componentName} extends HTMLElement {

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
        }
    }
    
    customElements.define('prx-${componentClassName}', ${componentClassName});
    
    export {${componentClassName}}`    
}
            
module.exports={
    newComponentSchematic:newComponentSchematic
}
   