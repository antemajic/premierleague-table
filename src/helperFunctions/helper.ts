import { object } from "prop-types";
import _ from 'lodash'

const teams: Array<string> = ["Hull City", "Leicester City", "Burnley", "Swansea", "Crystal Palace", "West Bromwich Albion",
"Everton", "Tottenham Hotspur", "Middlesbrough", "Stoke City", "Southampton", "Watford", "Manchester City", "Sunderland",
"Bournemouth", "Manchester United", "Arsenal", "Liverpool", "Chelsea", "West Ham United"];

/* let teamResults:Object = {
    "Hull City": {won: 0, drawn:0}, 
    "Leicester City": {won: 0, drawn:0},
    "Burnley": {won: 0, drawn:0},
    "Swansea": {won: 0, drawn:0},
    "Crystal Palace": {won: 0, drawn:0},
    "West Bromwich Albion": {won: 0, drawn:0},
    "Everton": {won: 0, drawn:0},
    "Tottenham Hotspur": {won: 0, drawn:0},
    "Middlesbrough": {won: 0, drawn:0},
    "Stoke City": {won: 0, drawn:0},
    "Southampton": {won: 0, drawn:0},
    "Watford": {won: 0, drawn:0},
    "Manchester City": {won: 0, drawn:0},
    "Sunderland": {won: 0, drawn:0},
    "Bournemouth": {won: 0, drawn:0},
    "Manchester United": {won: 0, drawn:0},
    "Arsenal": {won: 0, drawn:0},
    "Liverpool": {won: 0, drawn:0},
    "Chelsea": {won: 0, drawn:0},
    "West Ham United": {won:0, drawn:0}
} */
let teamResults:Array<any> = [
    {name: "Hull City", won: 0, drawn:0}, 
    {name: "Leiceste City", won: 0, drawn:0}, 
    {name: "Burnley", won: 0, drawn:0}, 
    {name: "Swansea", won: 0, drawn:0}, 
    {name: "Crystal Palace", won: 0, drawn:0}, 
    {name: "West Bromwich Albion", won: 0, drawn:0}, 
    {name: "Everton", won: 0, drawn:0}, 
    {name: "Tottenham Hotspur", won: 0, drawn:0}, 
    {name: "Middlesbrough", won: 0, drawn:0}, 
    {name: "Stoke City", won: 0, drawn:0}, 
    {name: "Southampton", won: 0, drawn:0}, 
    {name: "Watford", won: 0, drawn:0}, 
    {name: "Manchester City", won: 0, drawn:0}, 
    {name: "Sunderland", won: 0, drawn:0}, 
    {name: "Bournemouth", won: 0, drawn:0}, 
    {name: "Manchester United", won: 0, drawn:0}, 
    {name: "Arsenal", won: 0, drawn:0}, 
    {name: "Liverpool", won: 0, drawn:0}, 
    {name: "Chelsea", won: 0, drawn:0}, 
    {name: "West Ham", won: 0, drawn:0}, 
]
console.log(teamResults[0].name)

/* const arrayOfObj = Object.entries(teamResults).map((e) => ( { [e[0]]: e[1] } ));
console.log('arrayofObj', arrayOfObj[0].key);
console.log('indexisaaa', teamResults[0]) */

export const mapResults = (data: Array<any>, matchweek: number) => {
    let dataForRender : Array<any> = [];
    let matches = data[matchweek -1].matches;
    console.log('matches', matches)
    
    matches.map((matches: Array<object>, index) =>
    {

    let newElement: Object = {
            club: Object.keys(matches)[0],
            club2: Object.keys(matches)[1], 
            club1score: Object.values(matches)[0],
            club2score: Object.values(matches)[1]
        } 
        
        dataForRender.push(newElement) 
        /* if (dataForRender[index].club1score > dataForRender[index].club2score ) {
           teamResults[dataForRender[index].club.toString()].won = teamResults[dataForRender[index].club.toString()].won +1;
       }
       else if (dataForRender[index].club1score < dataForRender[index].club2score)
       {
           teamResults[dataForRender[index].club2.toString()].won = teamResults[dataForRender[index].club2.toString()].won +1;
       }
       else if (dataForRender[index].club1score === dataForRender[index].club2score)
       {
           teamResults[dataForRender[index].club.toString()].drawn = teamResults[dataForRender[index].club.toString()].drawn +1;
           teamResults[dataForRender[index].club2.toString()].drawn = teamResults[dataForRender[index].club2.toString()].drawn +1;
       } */
   
    })
    return dataForRender
}



export const mapTableStandings = (data: Array<any>, matchweek: number) =>
{
    let standingsData : Array<any> = [];
    let matches:Array<any> = []
    for (let index = 0; index < matchweek; index++) {
        matches.push(data[index].matches)

        matches[index].map((matches: Array<object>, index) =>
    {
    let newElement: Object = {
            club: Object.keys(matches)[0],
            club2: Object.keys(matches)[1], 
            club1score: Object.values(matches)[0],
            club2score: Object.values(matches)[1]
        } 
        
        standingsData.push(newElement) 
        if (standingsData[index].club1score > standingsData[index].club2score ) {
            let foundIndex = teamResults.findIndex(x => x.name === standingsData[index].club);
            teamResults[foundIndex].won ++;
       }
       else if (standingsData[index].club1score < standingsData[index].club2score)
       {
        let foundIndex = teamResults.findIndex(x => x.name === standingsData[index].club2);
        teamResults[foundIndex].won ++;
       }
       else if (standingsData[index].club1score === standingsData[index].club2score)
       {
        let foundIndex = teamResults.findIndex(x => x.name === standingsData[index].club);
        console.log('standingsDataIndex', teamResults[foundIndex])
        teamResults[foundIndex].drawn ++;
        let foundIndex2 = teamResults.findIndex(x => x.name === standingsData[index].club2);
        console.log('standingsDataIndex2', teamResults[foundIndex2])
        teamResults[foundIndex2].drawn ++;

       }
   
    })
        
    }
    console.log('matches', matches)
    
    
       
    
    
    console.log('Data for render', standingsData)
    console.log('teams results', teamResults)
    return standingsData
}

//export const mapTableStandings = (data: Array<any>, matchweek: number ) => {
    /* for (let index = matchweek -1; index < matchweek; index++) {
        allMatchweeks = mapResults(data, index);
        
    }
    console.log('all matches', allMatchweeks); */

/* export const mapTableStandings = (data: Array<any>, matchweek: number) => {
    let matchweekResults: Array<any> = [];
    let teamData: any = []
    let mergedTeamData: any = []
    
    for (let index = 0; index < matchweek; index++) {
         if (dataForRender[index].club1score > dataForRender[index].club2score ) {
            teamResults[dataForRender[index].club.toString()].won = teamResults[dataForRender[index].club.toString()].won +1;
        }
        else if (dataForRender[index].club1score < dataForRender[index].club2score)
        {
            teamResults[dataForRender[index].club2.toString()].won = teamResults[dataForRender[index].club2.toString()].won +1;
        }
        else if (dataForRender[index].club1score === dataForRender[index].club2score)
        {
            teamResults[dataForRender[index].club.toString()].drawn = teamResults[dataForRender[index].club.toString()].drawn +1;
            teamResults[dataForRender[index].club2.toString()].drawn = teamResults[dataForRender[index].club2.toString()].drawn +1;
        }
    }

    for (let j = 0; j < matchweekResults.length; j++) {
            matchweekResults[j].map((element, index) => {
                    let values: any = Object.values(element)
                    if(values[0] > values[1])
                    {
                        let team = Object.keys(element)[0];
                        teamData.push({name: team, won: 1, scored: values[0], conceded: values[1]})
                        
                    }
                    else if(values[1] > values[0])
                    {
                        let team = Object.keys(element)[1];
                        teamData.push({name: team, won: 1, drawn: 0, scored: values[1], conceded: values[0]})
                        
                    }
                     else if (values[1] === values[0]) {
                        {
                            let team = Object.keys(element);
                            teamData.push({name: team[0], won: 0, drawn: 1, scored: values[1], conceded: values[0]})
                            teamData.push({name: team[1], won: 0, drawn: 1, scored: values[1], conceded: values[0]})
                            
                        }

                    } 

                    
                }
            )} 
           
            let element: Array<any> = [];
            let index: Array<any> = [];
            for (let i = 0; i < teamData.length; i++) {
                console.log('i name', teamData[i].name)
                
                 for (let j = 1; j < teamData.length; j++) {
                    console.log('j name', teamData[j] ? teamData[j].name:'test')
                 if (teamData[i].name === teamData[j].name)
                    {
                        console.log(teamData[j].name)
                        
                          
                         teamData.push({ won: teamData[i].won + teamData[j].won})
                         mergedTeamData.push(teamData[i])
                    
                    console.log('AAAAAAAAAAAAAAAA')    } 
                    
                    
                } 
                    
            
            } 
            
            mergedTeamData = element
            console.log('Team data',teamData)
                console.log('mergedTeamData', mergedTeamData);
            
    }
 */
  


