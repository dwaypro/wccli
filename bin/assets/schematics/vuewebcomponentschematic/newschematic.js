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
            var instance = this;
            var appInitialized = this.appInitialized;
            if(!appInitialized){
                this.vueArea = new Vue({
                    el: this.shadowRoot.querySelector('#vueArea'),
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
    
    customElements.define('prx-${componentClassName}', ${componentClassName});
    
    export {${componentClassName}}`    
}
            
            