function customRender(reactElement, container){

    //Basic approach
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)


    // using forin to create new attributes as required
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
      if (prop === 'children') 
        continue;  //if children is given in props, it avoids it iteration 
      domElement.setAttribute(prop, reactElement.props[prop]) //allows unlimited attributes to create in reactELement obj.
    }
    container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children:'Click to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)