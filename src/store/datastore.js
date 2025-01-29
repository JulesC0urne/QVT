         import { defineStore } from 'pinia'
import { parseCSV } from '../utils/parser.utils'
import { INDEX_FIRST_QUESTION } from '@/utils/constants/constants'
import { getResultPerQuestion } from '@/utils/chartbar.utils'

export const useDataStore = defineStore('data', {
    state: () => ({ 
        CSVdata: [],
        stockIds : [],
        CSVDatabis : [],
    }),
    getters: {
        getCSVDatabis: (state) => {
            return state.CSVDatabis
        },
        getCSVData: (state) => state.CSVdata,
        getstockIds: (state) => state.stockIds,
        getColumnData: (state) => {
            return (index) => {
                const columnData = [];
                for ( let rowIndex = 0; rowIndex < state.CSVdata.length; rowIndex++ ) {
                    if ( rowIndex > 0 ) {
                        columnData.push( state.CSVdata[ rowIndex ][ index ] );
                    }
                }
                return columnData;
            }
        },
        getRawData: (state) => {
            return (index) => {
                return state.getCSVData[ index ];
            }
        },
        getCellData: (state) => {
            return (row,col) => {
                return state.CSVdata[ row ][ col ];
            }
        },
        getColumnIndexByQuestionID: (state) => {
            return (questionID) => {
                for ( let colIndex = 0; colIndex < state.getCSVData[ 0 ].length; colIndex++ ) {
                    if ( state.getCSVData[ 0 ][ colIndex ] === questionID ) { 
                        return colIndex;
                    }
                }
                return -1;
            }
        },
        getResponseByID: (state) => {
            return (questionID) => {
                const columnIndex = state.getColumnIndexByQuestionID( questionID, state.getCSVData );
                if ( columnIndex === -1 ) {
                    return [];
                }
                const column = state.getColumnData( columnIndex, state.getCSVData );
                return getResultPerQuestion(column);
            }
        },
        getQuestionIDByCategory: (state) => {
            return (category) => {
                const questionIdArray = []
                for ( let colIndex = 0; colIndex < state.getCSVData[ 0 ].length; colIndex++ ) {
                    if ( state.getCSVData[ 0 ][ colIndex ].includes( category ) ) { 
                        questionIdArray.push( state.getCSVData[ 0 ][ colIndex ] );
                    }
                }
                return questionIdArray;
            }
        },
        getAllCategory: (state) => {
            return () => {
                const categoryArray = []
                for ( let colIndex = INDEX_FIRST_QUESTION; colIndex < state.getCSVData[ 0 ].length; colIndex++ ) {
                    const category = state.getCSVData[ 0 ][ colIndex ].replace(/[0-9]|T_R/g,"");
                    if ( !categoryArray.includes(category) && category !== state.getCSVData[ 0 ][ colIndex ]) { 
                        categoryArray.push( category );
                    }
                }
                return categoryArray;
            }
        },
        getAllMeans: (state) => {
            return () => {
                const meansArray = []
                for ( let colIndex = INDEX_FIRST_QUESTION; colIndex < state.getCSVData[ 0 ].length; colIndex++ ) {
                    const mean = state.getCSVData[ 0 ][ colIndex ].replace(/[0-9]|T_R/g,"");
                    if ( !meansArray.includes(mean) && mean === state.getCSVData[ 0 ][ colIndex ]) { 
                        meansArray.push( mean );
                    }
                }
                return meansArray;
            }
        },
    },
    actions: {
        setCSVDataBis(data) {
            this.CSVDatabis = data
        },
        setUpData(newDataa) {
            this.CSVdata = newDataa;
        },
        addIdinList(id) {
            this.stockIds.push(id);
        },
        initStore(data){
            this.setUpData(parseCSV(data))
        }
    },
})
