/*{let dateTimeNow = new Date();
let dayInWeek = dateTimeNow.getDay();
let dayInWeekString;


switch (dayInWeek) {
    case 0: dayInWeekString = 'Sunday';
        break;
    case 1: dayInWeekString = 'Monday';
        break;
    case 2: dayInWeekString = 'Tuesday';
        break;
    case 3: dayInWeekString = 'Wednesday';
        break;
    case 4: dayInWeekString = 'Thursday';
        break;
    case 5: dayInWeekString = 'Friday';
        break;
    case 6: dayInWeekString = 'Saturday';
        break;
    default:
        console.error(`Unknown day ${dayInWeek}`);
        dayInWeekString = 'ERROR';
        break;

}
console.log(dayInWeekString);
}

{
let dateTimeNow = new Date();
let month = dateTimeNow.getMonth();
let monthstring;

switch (month) {
    case 0: monthstring = 'January';
        break;
    case 1: monthstring = 'February';
        break;
    case 2: monthstring = 'March';
        break;
    case 3: monthstring = 'April';
        break;
    case 4: monthstring = 'May';
        break;
    case 5: monthstring = 'June';
        break;
    case 6: monthstring = 'July';
        break;
    case 7: monthstring = 'August';
        break;
    case 8: monthstring = 'September';
        break;
    case 9: monthstring = 'October';
        break;
    case 10: monthstring = 'November';
        break;
    case 11: monthstring = 'December';
        break;
    default:
        console.error(`Unknown day ${month}`);
        monthstring = 'ERROR';
        break;
    }
    console.log(monthstring);
}

{
    let down = 10;
    let up = 20;
    let sum = 0;

    for (let counter = down; counter <= up; counter++) {
        if (counter % 3 == 0) {
            console.log(counter);//prvi zad
            sum += counter;//drugi zad
        }
    }
    console.log(`Suma od ${down} do ${up} je ${sum}`);

    //treci zad
    for (let counter = up; counter >= down; counter--) {
        if (counter % 3 == 0) {
            console.log(counter);//treci zad
            
        }
        
    }
    
}
{
    let n = 5;

    for(let counter=0; counter<=n; counter++){
        console.log(counter);
    }
}*/
let m=4;
let n=3;
//let zvezdice='*'.repeat(m);

for(let redovi=0;redovi<n;redovi++){
    let zvezdaAku='';
    for(let dz=0;dz<m;dz++){
        zvezdaAku+='*';
    }
    console.log(zvezdaAku);
}
