import { object } from "prop-types";

const teams: Array<string> = ["Hull City", "Leicester City", "Burnley", "Swansea", "Crystal Palace", "West Bromwich Albion",
"Everton", "Tottenham Hotspur", "Middlesbrough", "Stoke City", "Southampton", "Watford", "Manchester City", "Sunderland",
"Bournemouth", "Manchester United", "Arsenal", "Liverpool", "Chelsea", "West Ham United"];

let teamResults:Object = {
    Chelsea: {won: 0}
}

export const mapResults = (data: Array<any>, matchweek: number) => {
    let matches = data[matchweek -1].matches;
    let dataForRender : Array<any> = [];
    matches.map((matches: Array<object>) =>
    {

    let newElement: Object = {
            club: Object.keys(matches)[0],
            club2: Object.keys(matches)[1], 
            club1score: Object.values(matches)[0],
            club2score: Object.values(matches)[1]
        } 
        
        dataForRender.push(newElement) 
    })
    
    console.log('Data for render', dataForRender)
    return dataForRender
}

export const mapTableStandings = (data: Array<any>, matchweek: number) => {
    let matchweekResults: Array<any> = [];
    let teamData: any = []
    let mergedTeamData: any = []
    
    for (let index = 0; index < matchweek; index++) {
        matchweekResults.push(data[index].matches);
        console.log('ELEMENT', matchweekResults)
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
                
                for (let j = 1; j <= teamData.length; j++) {
                    if (teamData[i].name === teamData[j] ? teamData[j].name: null)
                    {
                         element.push({name:teamData[j].name, won: teamData[i].won + teamData[j].won})
                         teamData.splice(j,1, null)
                    }
                    
                    
                }
                    
            
            } 
            
            mergedTeamData = element
            console.log('Team data',teamData)
                console.log('mergedTeamData', mergedTeamData);
            
    }

  


