
import './App.css';
import React from 'react';
import Input from "./components/input";
import DisplayTimer from './components/DisplayTimer';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      dateField : '',
       timer:0,
      days:0,
      hours:0,
      minutes:0,
      seconds:0,
      checkInput:false,
      dateExpired:false
    }
  }


onInputChange = (event) =>{
  let inputDate = event.target.value;
  this.setState({dateField: inputDate});
  console.log(this.state.dateField);
  event.target.value="";
}

onSubmit=()=>{
  this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0});
  clearInterval(this.state.timer);
   if(this.state.dateField!==""){
    this.setState({checkInput:true,dateExpired:false});
    var countDownDate = new Date(this.state.dateField).getTime();
    var changeTime = setInterval(() => {
    var currentDate = new Date().getTime();
    var remainingTime = countDownDate - currentDate;
    var remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
     this.setState({days:remainingDays});
     this.setState({hours: remainingHours});
     this.setState({minutes:remainingMinutes});
     this.setState({seconds:remainingSeconds});
     this.setState({timer:changeTime});
    if (remainingTime < 0) {
        this.setState({dateExpired:true});
        clearInterval(this.state.changeTime);
        return
    }
    }, 1000);
 }
}

  render(){
  return (

    <div className="App">
      
      <div className = "container">
      
      <div>
        <h1 className="title">Count-down Timer</h1>
      </div>
        <DisplayTimer checkInput={this.state.checkInput} days={this.state.days} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} date={this.state.dateField} edate={this.state.dateExpired}/>
          <Input getDateInput={this.onInputChange} submit={this.onSubmit} value={this.state.dateField}/>
     </div>
    </div>
  );
}

}
export default App;
