const domelements = document.getElementsByTagName('*');

for (let i = 0; i < domelements.length; i++){
    let elements = domelements[i];

    for (let j = 0; j <elements.childNodes.length; j++){
        const node = elements.childNodes[j];
        
        if(node.nodeType === 3){
            const text = node.nodeValue;

            const replaceWithThis = text.replace(/Instagram/gi, "Snapchat Clone");
    
            if (replaceWithThis !== text){
                elements.replaceChild(document.createTextNode(replaceWithThis), node);
            }
        }
    }      
}
