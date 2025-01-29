const getResultPerQuestion = ( column ) => {
    const sum = [ 0, 0, 0, 0, 0 ];
    for ( const cell of column ) {
        sum[ parseInt( cell ) - 1 ]++
    }
    return sum
}

const convertToJson = ( data, title ) => {
    const json = [];
    for ( let index = 0; index < data.length; index++ ) {
        const object = {};
        object[ title ] = ( index + 1 ).toString();
        object[ "nb of reponses" ] = data[ index ];
        json.push( object );
    }
    return json
}

export { getResultPerQuestion, convertToJson };