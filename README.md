# Vue2
## Vue 2 basics
Just the basics of Vue.js 2
    el: '#app', //plug the instance in the html object that has the id app

    {{}} expression
!!! Vue is a reactive framework : the data is linked to every instance of that data
    The data instances of sed data will react (update) when the data changes.

    'v-bind'  or ':' directive
        Dynamically binds an HTML attribute to an expression
    
    'v-if' 'v-else' 'v-else-if' directives
        Conditional rendering (adds or removes from the DOM on expression evaluation
    'v-show' 
        Faster because just adds display none instead of removing from the DOM

    'v-for' directive allows us to loop over an array and render data from within it.

    'v-on' or @ which let’s Vue know we’re listening for events