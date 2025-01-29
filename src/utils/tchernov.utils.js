

class Point {
    constructor(x, y, a, b,c,d) {
        this.x = x; // x coordinate
        this.y = y; // y coordinate
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
}

const getImages = (a,b,c,d) => {
    if(a > 0 && a < 6 && b > 0 && b < 6 && c > 0 && c < 6 && d > 0 && d < 6) {

        return require(`../assets/chernov/${a}${b}${c}${d}.png`);

    }else {
        console.error("Error: getImages() received invalid arguments");
    }
}

/**
 * @param {Point} point
 * @param maincsv data de l'etude
 * @param xydata data du logiciel orange
 * @param indicedata1 id de la question 1 pour les visages
 * @param indicedata2 id de la question 2 pour les visages
 * @param indicedata3 id de la question 3 pour les visages
 * @param indicedata4 id de la question 4 pour les visages
 * @returns json pour le graphique
 */
const generateChernov = (maincsv, xydata,indicedata1,indicedata2,indicedata3,indicedata4) => {
    const listofp = [];
    for(let i = 1; i < maincsv.length-1; i++){
        const line = maincsv[i]

        const t = new Point(xydata[i][0],xydata[i][1],line[indicedata1],line[indicedata2],line[indicedata3],line[indicedata4])
        listofp.push(t)
    }


    const arrOfdata = []

    for (const p of listofp)
    {
        arrOfdata.push({x: p.x, y: p.y,a: p.a ,b: p.b,c : p.c, d : p.d,img: getImages(Math.round(p.a),Math.round(p.b),Math.round(p.c),Math.round(p.d))})
    }

    return {
        data: {
            values: arrOfdata
        },
        mark: {type: "image", width: 50, height: 50,},
        encoding: {
            x: {field: "x", type: "quantitative"},
            y: {field: "y", type: "quantitative"},
            url: {field: "img", type: "nominal"},
            tooltip: [
                {field: "x", type: "ordinal", title: "Axes X"},
                {field: "y", type: "quantitative", title: "Axes Y"},
                {field: "a", type: "quantitative", title: "Info A"},
                {field: "b", type: "quantitative", title: "Info B"},
                {field: "c", type: "quantitative", title: "Info C"},
                {field: "d", type: "quantitative", title: "Info D"}

            ]
        },
        width: 850, //TAILLE DU TRUC
        height: 550, //TAILLE DU TRUC
        url: {field: "img", type: "nominal"}
    };


}


export {
    getImages,
    generateChernov,
    Point
}
