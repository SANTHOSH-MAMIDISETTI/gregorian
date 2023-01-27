function getDate() 
{
    const date = document.getElementById("Date").value;
    //console.log(date)
    return date;
}



  

const changeDate = () =>
{
    date = getDate()
    
    let a = date.split("-")
    let current_year = parseInt(a[0])
    let current_month = parseInt(a[1])-1
    let current_date = parseInt(a[2])
    
    //console.log(current_date)
    //console.log(current_month)
    //console.log(current_year)
    let current_day = new Date(current_year, current_month, current_date).getDay()
  

    const leap = (current_year % 4 === 0 && current_year % 100 !== 0) || current_year % 400 === 0
    // console.log(leap)

    const saka_days = [
        'Ravivara',
        'Somavara',
        'Mangalavara',
        'Budhavara',
        'Guruvara',
        'Shukravara',
        'Shanivara',
      ];
    
      const month = [
        ['Magha', 'Pausa', 'Jan', 21, 31],
        ['Phalguna', 'Magha', 'Feb', 20, leap? 29 : 28],
        ['Chaitra', 'Phalguna', 'Mar', leap? 21 : 22, 31],
        ['Vaisakha', 'Chaitra', 'Apr', 21, 30],
        ['Jyaistha', 'Vaisakha', 'May', 22, 31],
        ['Asadha', 'Jyaistha', 'Jun', 22, 30],
        ['Sravana', 'Asadha', 'Jul', 23, 31],
        ['Bhadra', 'Sravana', 'Aug', 23, 31],
        ['Asvina','Bhadra', 'Sep', 23, 30],
        ['Kartika', 'Asvina', 'Oct', 23, 31],
        ['Agrahayana', 'Kartika', 'Nov', 22, 30],
        ['Pausa', 'Agrahayana', 'Dec', 22, 31],
      ];
      
    let IndianDate = 
    {
        year: '',
        date: '',
        month: '',
        day: ''
    }

    
    console.log(current_day)
    IndianDate.day = saka_days[current_day]

    if(current_date >= month[current_month][3])
    {
        IndianDate.date =  current_date - month[current_month][3] + 1;
    }
    else
    {
        IndianDate.date = month[current_month][4] - month[current_month][3] + current_date + 1;
    } 
    if(current_date >= month[current_month][3])
    {
        IndianDate.month =  (month[current_month][0]);
    }
    else 
    { 
        IndianDate.month = (month[current_month][1]);
    }

    if(current_month < 2 || (current_month === 2 && current_date < month[current_month][3]))
    {
        IndianDate.year = (current_year - 79);
    }
    else 
    {
        IndianDate.year = (current_year - 78);
    } 

    document.getElementById("IndianDate").innerHTML = IndianDate.day + ", " + IndianDate.date + " " + IndianDate.month + " " + IndianDate.year
}
