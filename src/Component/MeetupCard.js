import { useNavigate } from "react-router-dom";
import { formatDate } from "../utlis/utlis";

export default function MeetupCard({ event }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ position: "relative" }}
      className="cursor"
      onClick={() => navigate(`/event/${event.id}`)}
    >
      <div>
        <img
          height={"200px"}
          width={"200px"}
          style={{ borderRadius: "10px" }}
          src={event?.eventThumbnail}
          alt="meetupCardImage"
        />
        <div>
          <p>{formatDate(event?.eventStartTime)}IST</p>

          <h3>{event?.title}</h3>
        </div>
        <p
          style={{
            padding: "0.2rem",
            backgroundColor: "white",
            position: "absolute",
            top: "2%",
            left: "2%",
            borderRadius: "5px"
          }}
        >
          {event.eventType}
        </p>
      </div>
    </div>
  );
}
