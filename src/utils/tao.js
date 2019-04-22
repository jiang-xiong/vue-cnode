export const log = function() {
    console.log.apply(console, arguments)
}
var e = function(selector) {
    return document.querySelector(selector)
}
var find = function(element, selector) {
    return element.querySelector(selector)
}
