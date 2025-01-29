import { getResultPerQuestion } from "./chartbar.utils";
import { INDEX_FIRST_QUESTION } from "./constants/constants";

const parseXY = (xyContent) => {
    const lines = xyContent.split('\n');
    const rows = [];
    for (const raw of lines) {
        const cells = raw.split(',');

        if(cells[0] !== "") {
            cells[1] = cells[1].replace('\r', '')
            rows.push(cells)
        }
    }
    return rows;
}

const parseCSV = ( csvContent ) => {
    const lines = csvContent.split( '\n' );
    const rows = [];
    for ( const raw of lines ) {
        const cells = raw.split( '"' );
        const newCell = []
        for ( const index in cells ) {
            if ( cells[ index ] !== ',' && cells[ index ] !== '' ) {
                if ( cells[ index ] !== '""' ) {
                    newCell.push( cells[ index ].replace( '"', '' ).replace( '"', '' ) );
                }
            }
        }
        if ( newCell.length > 0 ) {
            rows.push( newCell )
        }
    }
    return rows;
}

const getColumnData = ( index, formattedCSV ) => {
    const columnData = [];
    for ( let rowIndex = 0; rowIndex < formattedCSV.length; rowIndex++ ) {
        if ( rowIndex > 0 ) {
            columnData.push( formattedCSV[ rowIndex ][ index ] );
        }
    }
    return columnData;
}

const getRawData = ( index, formattedCSV ) => {
    return formattedCSV[ index ]
}

const getCellData = ( row, col, formattedCSV ) => {
    return formattedCSV[ row ][ col ]
}


const getColumnIndexByQuestionID = ( questionID, formattedCSV ) => {
    for ( let colIndex = 0; colIndex < formattedCSV[ 0 ].length; colIndex++ ) {
        if ( formattedCSV[ 0 ][ colIndex ] === questionID ) { 
            return colIndex;
        }
    }
    return -1;
}

const getResponseByID = ( questionID, formattedCSV ) => {
    const columnIndex = getColumnIndexByQuestionID( questionID, formattedCSV );
    if ( columnIndex === -1 ) {
        return [];
    }
    const column = getColumnData( columnIndex, formattedCSV );
    return getResultPerQuestion(column);
}

const getQuestionIDByCategory = ( category, formattedCSV ) => {
    const questionIdArray = []
    for ( let colIndex = 0; colIndex < formattedCSV[ 0 ].length; colIndex++ ) {
        if ( formattedCSV[ 0 ][ colIndex ].includes( category ) ) { 
            questionIdArray.push( formattedCSV[ 0 ][ colIndex ] );
        }
    }
    return questionIdArray;
}

const getAllCategory = ( formattedCSV ) => {
    const categoryArray = []
    for ( let colIndex = INDEX_FIRST_QUESTION; colIndex < formattedCSV[ 0 ].length; colIndex++ ) {
        const category = formattedCSV[ 0 ][ colIndex ].replace(/[0-9]|T_R|A5|E[4-5]|_inversé/gi,"");
        if ( !categoryArray.includes(category) && category !== formattedCSV[ 0 ][ colIndex ]) { 
            categoryArray.push( category );
        }
    }
    return categoryArray;
}

const getAllMeans = ( formattedCSV ) => {
    const meansArray = []
    for ( let colIndex = INDEX_FIRST_QUESTION; colIndex < formattedCSV[ 0 ].length; colIndex++ ) {
        const mean = formattedCSV[ 0 ][ colIndex ].replace(/[0-9]|T_R|A5|E[4-5]|_inversé/gi,"");
        if ( !meansArray.includes(mean) && mean === formattedCSV[ 0 ][ colIndex ]) { 
            meansArray.push( mean );
        }
    }
    return meansArray;
}
export { 
    parseCSV,
    getRawData,
    getColumnData,
    getCellData,
    getColumnIndexByQuestionID,
    getResponseByID,
    getQuestionIDByCategory as getIndexResponseByCategory,
    getAllCategory,
    getAllMeans,
    parseXY
};
