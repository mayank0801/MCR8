import { useContext } from "react";
import MeetupCard from "../Component/MeetupCard";
import { DataContext } from "../Context/DataContext";
import { FIlterData } from "../utlis/utlis";

export default function Home() {
  const { state, dispatch } = useContext(DataContext);
  const { searchType, searchValue } = state;
  const filterData = FIlterData(searchValue, searchType, state.data.meetups);
  return (
    <div>
      <div className="flex-space">
        <h1>Meetup Event</h1>
        <select
          className="cursor"
          name="eventType"
          id="eventType"
          onChange={(e) =>
            dispatch({ type: "SET_SEACH_TYPE", payload: e.target.value })
          }
        >
          <option value="Both">Select an Event Type</option>
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
          <option value="Both">Both</option>
        </select>
      </div>
      <div className="event-card-conatiner">
        {filterData.map((event) => (
          <MeetupCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
