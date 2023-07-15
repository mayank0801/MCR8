import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export default function RSVPModal({ setModal, isPaid, eventId }) {
  const { dispatch } = useContext(DataContext);
  return (
    <div className="RSVPModal-container">
      <div className="RSVPModal-container-card">
        <h2 className="padding-bottom">Complete Your RSVP</h2>
        <p className="padding-bottom">Fill Your Personal Information</p>
        <label className="flex-coloumn padding-bottom ">
          Name
          <input type="text" required />
        </label>
        <label className="flex-coloumn padding-bottom">
          Email
          <input type="text" required />
        </label>

        {isPaid && <p>You have to make the payment at the venue</p>}

        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "ADD_EVENT", payload: eventId });
            setModal(false);
          }}
        >
          RSVP
        </button>
      </div>
    </div>
  );
}
