'use strict';
var flights = [];
var Flight = function (from, to, capacity, reserved){
    this.from = from;
    this.to = to;
    this.capacity = capacity;
    this.reserved = reserved; 
    this.available = 0 ; 
    flights.push(this);
}
Flight.prototype.getAvailabeSeats = function(){
this.available = this.capacity - this.reserved;
}
new Flight ('amman','aqaba', 30 , 12);
new Flight ('tailand','jordan', 30 , 15);

console.log(flights.length); 
var tableHD = ['from','to','capacity', 'reserved', 'available'];
var sectionEl = document.getElementById('tablesection');
var tableEl = document.createElement('table');
sectionEl.appendChild(tableEl);
function tableH (){
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
for ( var i = 0 ; i < tableHD.length ; i++){
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent=tableHD[i];
}
}
tableH();
Flight.prototype.render=function(){
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.from ; 
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.to ;
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.capacity ; 
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.reserved ; 
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.available ;  
}
for ( var i = 0 ; i < flights.length ; i++){
    flights[i].getAvailabeSeats();
    flights[i].render();

}
var formEl=document.getElementById('form');
formEl.addEventListener('submit', addFlight);
function addFlight(event){
   event.preventDefault ();
   var from = event.target.flyingFrom.value;
   var to = event.target.flyingTo.value;
   var capacity = event.target.capacity.value;
   var reserved = event.target.reserved.value;
   var addFlight = new Flight(from , to , capacity, reserved);
    addFlight.getAvailabeSeats();
    addFlight.render();
    formEl.reset();
}