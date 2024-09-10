function customRender(reactElement ,container){
  /*
  const domEelment = document.createElement
  (reactElement.type)
  domEelment.innerHTML = reactEelement.Children
  domEelment.setAttribute('href', reactEelement.props.href)
  domEelment.setAttribute('target', reactEelement.props.target)

  container.appendChild(domEelment)
  */

  const domElement =document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.Children 
  for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute(prop , reactElement.props[prop])
  }
  container.appendChild(domElement)
}



const reactEelement ={
  type:'a',
  props:{
    href:'https://google.com',
    target: '-blank'
  },
  Children:"click me to visit google"
}

const mainContainer = document.querySelector('#root');

customRender(reactEelement, mainContainer);

