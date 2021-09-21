function newComponentSchematic(componentClassName, options){
    var cssInterpolator = "${" + componentClassName + "CSS}"
    var htmlInterpolator = "${" + componentClassName + "HTML}"
    var innerHTMLSTRING = `'<style>${cssInterpolator}</style>${htmlInterpolator}'`;
    
    const className = componentClassName[0].toLowerCase() + componentClassName.slice(1);

    return `
import ${componentClassName}HTML from "./componentClassName.html";
import ${componentClassName}CSS from "./componentClassName.css";
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
  * @param {*} componentClassName 
  * @param {*} options 
  * @returns 
  */
 
Vue.component(wc-${className}, {
    store,
    template: ${innerHTMLSTRING},
    filters: {
        
    },
    data: function() {
    
    },
    computed: Vuex.mapState({
        
    }),
    methods: {
        
    },
    watch: {
        
    },
    components: {
        
    },
    mounted: function() {
    
    },
});

`    
}

module.exports={
    newComponentSchematic:newComponentSchematic
}










