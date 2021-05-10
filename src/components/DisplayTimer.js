import React from 'react';

const DisplayTimer=({checkInput,days,hours,minutes,seconds,date,edate})=>{
    return(
        <div id="demo">
        {checkInput ? edate ?<h1>Expired!! Please choose another date</h1> :<div> <h2> Entered date: {date}</h2><br></br>Time ends in:<br/>
        <table>
            <tbody>
            <tr>
                <th>Days</th>
                <th>Hours</th>
                <th>Minutes</th>
                <th>Seconds</th>
            </tr>
            <tr>
                <td>{days}</td>
                <td>{hours}</td>
                <td>{minutes}</td>
                <td>{seconds}</td>
            </tr>
            </tbody>
           
        </table> 
        </div> : <h1> Please choose a date</h1>
        }
    </div>
    );
}

 export default DisplayTimer;