/////////////// PART 1 : Parsing the dimension and data files //////////////

//______________________ parsing pov.csv _____________________//

const fs = require('fs')
var Document_pov = fs.readFileSync('assets/data/pov.csv').toString().split('\r\n')
var Columns_pov = "Dimensions;Code;Ordre;numEtude;Items"  
/*specifing the header because it's not written correctly in the file (it starts with 11 Dimensions; Code; ect..)*/

Document_pov.shift()
Columns_pov = Columns_pov.split(';')
var Json_pov = []

for (var i = 0; i < Document_pov.length; i++) {
    var Data_pov = {}
    var Element_pov = Document_pov[i].split(';')
    for (var j = 0; j < Element_pov.length; j++) {
        Data_pov[Columns_pov[j]] = Element_pov[j]
    }
    Json_pov.push(Data_pov)
}

//the POV  data should be further formatted to remove empty strings

const povcsv = [];  //array of objects that will contain the formatted data 

for (i = 0; i < Json_pov.length; i++) {
        
    if (Json_pov[i].Dimensions != '' && Json_pov[i].Dimensions !=null ) {
            const elt = new Object();
        elt.Dimensions = Json_pov[i].Dimensions;
            elt.Code = [];
        elt.Code.push(Json_pov[i].Code);
            povcsv.push(elt);
        }
        else {
            if(Json_pov[i].Code !=null && Json_pov[i].Code !='' ){
        povcsv[povcsv.length - 1].Code.push(Json_pov[i].Code);
            }
        }
}
console.log(povcsv); // uncomment to see result of pov.csv

// we convert the data to a json file 
final_pov = JSON.stringify(povcsv)

//saving the json file
fs.writeFileSync('data_pov.json', final_pov, function (err) {
    if (err) throw err
})

//_________________________________ PARCING VM_____________________________________//

var Document_vd_vm = fs.readFileSync('assets/data/vd-et-vm.csv').toString().split('\r\n')
var Columns_vd_vm = Document_vd_vm[0]
Columns_vd_vm = Columns_vd_vm.split(';')
Document_vd_vm.shift()

var Json_vd_vm = []

for (var i = 0; i < Document_vd_vm.length; i++) {
    var Data_vd_vm = {}
    var Element_vd_vm = Document_vd_vm[i].split(';')
    for (var j = 0; j < Element_vd_vm.length; j++) {
        Data_vd_vm[Columns_vd_vm[j]] = Element_vd_vm[j]
    }
    Json_vd_vm.push(Data_vd_vm)
}


const vd_vm_csv = [];  //array of objects that will contain the formatted data 

for (i = 0; i < Json_vd_vm.length; i++) {
        
    if (Json_vd_vm[i].Concepts != '' && Json_vd_vm[i].Concepts !=null ) {
            const elt = new Object();
        elt.Dimensions = Json_vd_vm[i].Concepts;
            elt.Code = [];
        elt.Code.push(Json_vd_vm[i].CODE);
            vd_vm_csv.push(elt);
        }
        else {
            if(Json_vd_vm[i].CODE!=null && Json_vd_vm[i].CODE !=''){
            vd_vm_csv[vd_vm_csv.length - 1].Code.push(Json_vd_vm[i].CODE);
            }
            }
}

console.log(vd_vm_csv); // uncomment to see result of vd_vm.csv

// we convert the data to a json file 
final_vd_vm = JSON.stringify(vd_vm_csv)

//saving the json file
fs.writeFileSync('data_vd_vm.json', final_vd_vm, function (err) {
    if (err) throw err
})

//_______________ concatenating the  vd_vm_csv and povcsv arrays____________//
dimensionCode_array = povcsv.concat(vd_vm_csv);



//____________________ parsing bdd2.csv ______________________//

// read bdd2 INTO json file
var Document_bdd2 = fs.readFileSync('assets/data/BDD2.csv').toString().split('\r\n')
var Columns_bdd2 = Document_bdd2[0]

Document_bdd2.shift()
Columns_bdd2 = Columns_bdd2.split(';') 
var Json_bdd2 = []

for (var i = 0; i < Document_bdd2.length; i++) {
    var Data_bdd2 = {}
    var Element_bdd2 = Document_bdd2[i].split(';')
    for (var j = 0; j < Element_bdd2.length; j++) {
        Data_bdd2[Columns_bdd2[j]] = Element_bdd2[j]
    }
    Json_bdd2.push(Data_bdd2)
}

// we convert the csv to a json file 
Data_bdd2 = JSON.stringify(Json_bdd2)

fs.writeFileSync('data_bdd2.json', Data_bdd2, function (err) {
    if (err) throw err
})

//get the bdd2 file data OBJECT
/*
const json_bdd2String = fs.readFileSync('data_bdd2.json')
const dataObj_bdd2 = JSON.parse(json_bdd2String)
//console.log(dataObj_bdd2); // uncomment to see BDD2 parsing result
*/


////////////////////// parsing bdd3.csv ///////////////////

// read bdd3 INTO json file
var Document_bdd3 = fs.readFileSync('assets/data/BDD3.csv').toString().split('\r\n')
var Columns_bdd3 = Document_bdd3[0]

Document_bdd3.shift()
Columns_bdd3 = Columns_bdd3.split(';')

var Json_bdd3 = []

for (var i = 0; i < Document_bdd3.length; i++) {
    var Data_bdd3 = {}
    var Element_bdd3 = Document_bdd3[i].split(';')
    for (var j = 0; j < Element_bdd3.length; j++) {
        Data_bdd3[Columns_bdd3[j]] = Element_bdd3[j]
    }
    Json_bdd3.push(Data_bdd3)
}

// we convert the csv to a json file 
Data_bdd3 = JSON.stringify(Json_bdd3)

fs.writeFileSync('data_bdd3.json', Data_bdd3, function (err) {
    if (err) throw err
})

/*
//get the bdd3 file data OBJECT
const json_bdd3String = fs.readFileSync('data_bdd3.json')
const dataObj_bdd3 = JSON.parse(json_bdd3String)
//console.log(dataObj_bdd3); //// uncomment to see BDD2 parsing result
*/


//_______________ concatenating the  vd_vm_csv and povcsv arrays____________//
Bdd_array = Json_bdd2.concat(Json_bdd3);
//__________________________________________________________________________//

//////////////////////// PART 2 : calculating the summary of data for each dimention

//// iterate through pov/dimensions array 

var all_counts = []
for (i = 0; i < dimensionCode_array.length; i++) {
    // saving the dimention name
    dimention_name = dimensionCode_array[i].Dimensions;
    // setting up the counts
    count_1 = 0;
    count_2 = 0;
    count_3 = 0;
    count_4 = 0;
    count_5 = 0;
    // counting
    for (j = 0; j < Bdd_array.length; j++) {

        for (k = 0; k < dimensionCode_array[i].Code.length; k++) {
            if (Bdd_array[j][dimensionCode_array[i].Code[k]] == 1) {
                count_1++;
            }
            if (Bdd_array[j][dimensionCode_array[i].Code[k]] == 2) {
                count_2++;
            }
            if (Bdd_array[j][dimensionCode_array[i].Code[k]] == 3) {
                count_3++;
            }
            if (Bdd_array[j][dimensionCode_array[i].Code[k]] == 4) {
                count_4++;
            }
            if (Bdd_array[j][dimensionCode_array[i].Code[k]] == 5) {
                count_5++;
            }
        }  
    }

    count = new Object();
    count.dimention = dimention_name;
    count.nbOf1 = count_1;
    count.nbOf2 = count_2;
    count.nbOf3 = count_3;
    count.nbOf4 = count_4;
    count.nbOf5 = count_5;
    all_counts.push(count);
}
// we convert the data to a json file 
final_counts = JSON.stringify(all_counts)

//saving the json file
fs.writeFileSync('data_resume.json', final_counts, function (err) {
    if (err) throw err
})
