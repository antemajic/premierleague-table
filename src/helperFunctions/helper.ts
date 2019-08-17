import { object } from "prop-types";

export const mapResults = (data: Array<any>, matchweek: number) => {
    let matches = data[matchweek -1].matches;
    console.log('ALL matches', matches)
    let dataForRender : Array<any> = [];
    matches.map((matches: Array<object>, index) =>
    {

    let newElement = {
            club: Object.keys(matches)[0],
            club2: Object.keys(matches)[1], 
            club1score: Object.values(matches)[0],
            club2score: Object.values(matches)[1]
        } 
        
        dataForRender.push(newElement) 
    })
    
    
    return dataForRender
}

export const mapTableStandings = (data: Array<any>, matchweek: number) => {
    
}