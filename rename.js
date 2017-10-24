let domelements = document.getElementsByTagName('*');
for (var i = 0; i < domelements.length; i++){
    let elements = domelements[i];

    for (var j = 0; j <elements.childNodes.length; j++){
        let node = elements.childNodes[j];
        
        if(node.nodeType === 3){
            let text = node.nodeValue;

            let replaceWithThis = text.replace(/Instagram/gi, "Snapchat Clone");
    
            if (replaceWithThis !== text){
                elements.replaceChild(document.createTextNode(replaceWithThis),node);
            }
           
        }
    }
        

}
