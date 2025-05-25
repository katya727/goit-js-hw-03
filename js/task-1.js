function slugify(title) {
    return title
        .toLowerCase()
        .trim()
        .split(' ')
        .filter(word => word)
        .join('-');
}

console.log ( slugify ( "Масиви для початківців" )); 
console.log ( slugify ( " Англійська для розробника" ));
console.log ( slugify( "Десять секретів JavaScript" )); 
console.log ( slugify( " Як -стати-ЮНІОР-розробником-за-ДВА-ТИЖНІ" )); 
