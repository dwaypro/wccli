function newComponentSchematic(componentClassName, options){
    var cssInterpolator = "${" + componentClassName + "CSS}"
    var htmlInterpolator = "${" + componentClassName + "HTML}"
    var innerHTMLSTRING = `'<style>${cssInterpolator}</style>${htmlInterpolator}'`;
    
    const className = componentClassName[0].toLowerCase() + componentClassName.slice(1);

    return `
import ${componentClassName}HTML from "./componentClassName.html";
import ${componentClassName}CSS from "./componentClassName.css";
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










