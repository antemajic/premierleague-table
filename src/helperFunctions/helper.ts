const teams: Array<string> = ["Hull City", "Leicester City", "Burnley", "Swansea", "Crystal Palace", "West Bromwich Albion",
    "Everton", "Tottenham Hotspur", "Middlesbrough", "Stoke City", "Southampton", "Watford", "Manchester City", "Sunderland",
    "Bournemouth", "Manchester United", "Arsenal", "Liverpool", "Chelsea", "West Ham United"];

// Array with initial data which will be populated later and after populating they will be rendered in Standings Table

let teamResults: Array<any> = [
    { name: "Hull City", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Leicester City", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Burnley", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Swansea", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Crystal Palace", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "West Bromwich Albion", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Everton", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Tottenham Hotspur", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Middlesbrough", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Stoke City", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Southampton", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Watford", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Manchester City", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Sunderland", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Bournemouth", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Manchester United", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Arsenal", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Liverpool", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "Chelsea", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    { name: "West Ham United", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
]

/*Map results to prepare them for render in Matchweek results
Search through selected matchweek results and store them into new array*/
export const mapResults = (data: Array<any>, matchweek: number) => {
    let dataForRender: Array<any> = [];
    let matches = data[matchweek - 1].matches;

    matches.map((matches: Array<object>, index) => {

        let newElement: Object = {
            club: Object.keys(matches)[0],
            club2: Object.keys(matches)[1],
            club1score: Object.values(matches)[0],
            club2score: Object.values(matches)[1]
        }

        dataForRender.push(newElement)
    })
    return dataForRender
}

//Compare two values (e.g. points, goaldifference, etc. ) so that data in Standings Table could be properly sorted 
function compare(a, b) {
    if (a.points < b.points) {
        return 1;
    }
    if (a.points > b.points) {
        return -1;
    }
    if (a.points === b.points) {
        if (a.goalsDifference < b.goalsDifference) {
            return 1;
        }
        if (a.goalsDifference > b.goalsDifference) {
            return -1;
        }
        if (a.goalsDifference === b.goalsDifference) {
            if (a.goalsScored < b.goalsScored) {
                return 1;
            }
            if (a.goalsScored > b.goalsScored) {
                return -1;
            }
        }
    }
    return 0;
}

/*Function in which mapping of all matchweeks are goind on
Logic is that results of all matchweeks before and including selected matchweek are included in new array
which is used for Table Standings rendering */
export const mapTableStandings = (data: Array<any>, matchweek: number) => {
    let dataTable: Array<any> = [];
    let standingsData: Array<any> = [];
    let matches: Array<any> = []
    // Push all matches into one array which will be used as data later
    for (let index = 0; index < matchweek; index++) {
        matches.push(data[index].matches)
        matches[index].map(element => dataTable.push(element))
    }

    dataTable.map((matches: Array<object>, i) => {
        let newElement: Object = {
            club: Object.keys(matches)[0],
            club2: Object.keys(matches)[1],
            club1score: Object.values(matches)[0],
            club2score: Object.values(matches)[1]
        }

        standingsData.push(newElement)

        /* Compare results which are given to function, e.g. if first club has bigger score than second club
         that means first club is the one whose won counter will be raised, 
         Below all results are checked, and wins, draws and defeats counte is being raised accordingly, 
         just as scored goals, conceded goals and goals difference, form, etc.
        */
        if (standingsData[i].club1score > standingsData[i].club2score) {
            let foundIndex = teamResults.findIndex(x => x.name === standingsData[i].club);
            if (teamResults[foundIndex] !== undefined) {
                teamResults[foundIndex].won++;
                teamResults[foundIndex].goalsScored += standingsData[i].club1score;
                teamResults[foundIndex].goalsConceded += standingsData[i].club2score;
                teamResults[foundIndex].goalsDifference = teamResults[foundIndex].goalsScored - teamResults[foundIndex].goalsConceded;
                teamResults[foundIndex].points += 3;
                teamResults[foundIndex].form.push('W');
            }

            let foundIndex2 = teamResults.findIndex(x => x.name === standingsData[i].club2);
            if (teamResults[foundIndex2] !== undefined) {
                teamResults[foundIndex2].lost++;
                teamResults[foundIndex2].goalsScored += standingsData[i].club2score;
                teamResults[foundIndex2].goalsConceded += standingsData[i].club1score;
                teamResults[foundIndex2].goalsDifference = teamResults[foundIndex2].goalsScored - teamResults[foundIndex2].goalsConceded;
                teamResults[foundIndex2].form.push('L');
            }

        }
        else if (standingsData[i].club1score < standingsData[i].club2score) {
            let foundIndex = teamResults.findIndex(x => x.name === standingsData[i].club2);
            if (teamResults[foundIndex] !== undefined) {
                teamResults[foundIndex].won++;
                teamResults[foundIndex].goalsScored += standingsData[i].club2score;
                teamResults[foundIndex].goalsConceded += standingsData[i].club1score;
                teamResults[foundIndex].goalsDifference = teamResults[foundIndex].goalsScored - teamResults[foundIndex].goalsConceded;
                teamResults[foundIndex].points += 3;
                teamResults[foundIndex].form.push('W');
            }

            let foundIndex2 = teamResults.findIndex(x => x.name === standingsData[i].club);
            if (teamResults[foundIndex2] !== undefined) {
                teamResults[foundIndex2].lost++;
                teamResults[foundIndex2].goalsScored += standingsData[i].club1score;
                teamResults[foundIndex2].goalsConceded += standingsData[i].club2score;
                teamResults[foundIndex2].goalsDifference = teamResults[foundIndex2].goalsScored - teamResults[foundIndex2].goalsConceded;
                teamResults[foundIndex2].form.push('L');
            }
        }
        else if (standingsData[i].club1score === standingsData[i].club2score) {
            let foundIndex = teamResults.findIndex(x => x.name === standingsData[i].club);
            if (teamResults[foundIndex] !== undefined) {
                teamResults[foundIndex].drawn++;
                teamResults[foundIndex].goalsScored += standingsData[i].club1score;
                teamResults[foundIndex].goalsConceded += standingsData[i].club2score;
                teamResults[foundIndex].goalsDifference = teamResults[foundIndex].goalsScored - teamResults[foundIndex].goalsConceded;
                teamResults[foundIndex].points += 1;
                teamResults[foundIndex].form.push('D');

            }
            let foundIndex2 = teamResults.findIndex(x => x.name === standingsData[i].club2);
            if (teamResults[foundIndex2] !== undefined) {
                teamResults[foundIndex2].drawn++;
                teamResults[foundIndex2].goalsScored += standingsData[i].club2score;
                teamResults[foundIndex2].goalsConceded += standingsData[i].club1score;
                teamResults[foundIndex2].goalsDifference = teamResults[foundIndex2].goalsScored - teamResults[foundIndex2].goalsConceded;
                teamResults[foundIndex2].points += 1;
                teamResults[foundIndex2].form.push('D');
            }

        }

    })

    /* Set teamResults values to initial values so that conflicts in data manipulations are avoided */
    let teamResultsForTable = teamResults;
    teamResults = [
        { name: "Hull City", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Leicester City", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Burnley", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Swansea", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Crystal Palace", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "West Bromwich Albion", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Everton", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Tottenham Hotspur", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Middlesbrough", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Stoke City", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Southampton", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Watford", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Manchester City", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Sunderland", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Bournemouth", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Manchester United", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Arsenal", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Liverpool", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "Chelsea", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
        { name: "West Ham United", won: 0, drawn: 0, lost: 0, goalsScored: 0, goalsConceded: 0, goalsDifference: 0, points: 0, form: [] },
    ]
    teamResultsForTable.sort(compare);
    return teamResultsForTable
}

