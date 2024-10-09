// select root div where , we will apped our creted tag 
let root = document.querySelector(".root")
console.log(root);


// react object-way to recive htmltage,creating react tree 
let tagsCreation = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
        className:"root"
    },
    children: "click me to vist google"

}
/// render apped in root || show in frontend
function render(tagsCreation, root) {
    let tag = document.createElement(tagsCreation.type)
    tag.innerHTML = tagsCreation.children
    for (const key in tagsCreation.props) {
        tag.setAttribute(key,tagsCreation.props[key])
    }
   
    root.appendChild(tag)
}
render(tagsCreation, root)

