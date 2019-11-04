let month =5;
let leap=false;
let monthstring;

/*if (month ==0,2,4,6) {
    console.log(31)
    
}else {
    console.log(30);
}*/
switch (month) {
    case 0: monthstring = 'January has got 31 days';
        break;
    case 1: monthstring = 'February';
        break;
    case 2: monthstring = 'March';
        break;
    case 3: monthstring = 'April has got 30 days';
        break;
    case 4: monthstring = 'May';
        break;
    case 5: monthstring = 'June has got 31 days';
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
