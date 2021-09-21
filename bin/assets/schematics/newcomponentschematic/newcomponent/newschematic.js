function newComponentSchematic(componentClassName, options){
    var cssInterpolator = "${" + componentClassName + "CSS}"
    var htmlInterpolator = "${" + componentClassName + "HTML}"
    var innerHTMLSTRING = `'<style>${cssInterpolator}</style>${htmlInterpolator}'`;
    const className = componentClassName[0].toUpperCase() + componentClassName.slice(1);

    return `
import ${componentClassName}HTML from "./${componentClassName}.html"
import ${componentClassName}CSS from "./${componentClassName}.css"

/*
 *	Property of: PetroleumRx, Inc. - 424 East Southern Avenue, Suite 101 Tempe, Arizona 85282
 *	
 *	PROPRITARY RIGHTS NOTICE: All rights reserved. No part of this material may be reproduced
 *	or transmitted in any form or by any means, electronic, mechanical or otherwise, including
 *	photocopying and recording or in connection with any information storage or retrieval,
 *	without the permission in writing.
 *	
 *	Copyright - @2017 All rights reserved
 *	
 *	Author:	
 *	
 *	Purpose: 
 *
 *  Last Changed:
 *	
 */

 /**
  * 
  * @returns 
  */

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
            