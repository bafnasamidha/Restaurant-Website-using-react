import React from 'react'

export default function Reservation() {
  return (
    <div>
          <div class="reserve_block">
        <h1 class="reserve">Reservation</h1>
        <label for="name">Name</label>
        <input type="text" id="name"/>
        <br/>
        <label for="phone_no">Contact No.</label>
        <input type="tel" name="" id="phone_no"/>
        <br/>
        <label for="nomber">No. of People</label>
        <input type="number" id="nomber"/>
        <br/>
        <label for="on">Date</label>
        <input type="date" name="" id="on"/>
        <br/>
        <label for="at">Time</label>
        <input type="time" id="at"/>
        <br/>
        <button class="button">Done</button>
    </div>
    </div>
  );
}
