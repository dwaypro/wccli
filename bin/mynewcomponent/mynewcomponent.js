
import mynewcomponentHTML from "./mynewcomponent.html"
import mynewcomponentCSS from "./mynewcomponent.css"
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
  * @param {*}  
  *   
  * @returns 
  */
 
class Mynewcomponent extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: `open`
        });

        const template = document.createElement(`template`);
        template.innerHTML = `<style>${mynewcomponentCSS}</style>${mynewcomponentHTML}`

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

customElements.define(`wc-mynewcomponent`, Mynewcomponent);

export {Mynewcomponent}