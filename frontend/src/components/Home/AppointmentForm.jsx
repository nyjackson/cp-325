import { useRef } from "react";
// import {} from '../slices/appointmentSlice
function AppointmentForm() {
  const aptForm = useRef();
  async function handleAppointment(e) {
    e.preventDefault();
    try{
      
    }
    catch(e){

    }
    // redirect to appointment scheduled page
  }
  return (
    <form ref={aptForm} onSubmit={handleAppointment} id="sign-in">
      <h3>Schedule An Appointment Today!</h3>
      <label htmlFor="appt-date">Appointment Date:</label>
      <input type="date"></input>
      <label htmlFor="appt-time">Appointment Time:</label>
      <input type="time"></input>
      <button className="tlink">Schedule</button>
    </form>
  );
}

export default AppointmentForm;
