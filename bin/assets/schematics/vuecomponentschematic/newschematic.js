function newComponentSchematic(componentClassName, options){
    var cssInterpolator = "${" + componentClassName + "CSS}"
    var htmlInterpolator = "${" + componentClassName + "HTML}"
    var innerHTMLSTRING = `'<style>${cssInterpolator}</style>${htmlInterpolator}'`;

    return `
import ${componentClassName}HTML from "./componentClassName.html";
import ${componentClassName}CSS from "./componentClassName.css";
Vue.component(wc-${componentClassName.toLowerCase()}, {
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










