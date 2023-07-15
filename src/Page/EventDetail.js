import { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import RSVPModal from "../Component/RSVPModal";
import { DataContext } from "../Context/DataContext";
import { useClickOutside } from "../CustomHook/useClickOutside";
import { findEvent, formatDate } from "../utlis/utlis";
export default function EventDetail() {
  const { state } = useContext(DataContext);
  const { eId } = useParams();
  const [modal, setModal] = useState(false);

  const eventDetail = state.data?.meetups.find(({ id }) => id == eId);
  const modalref = useRef();
  useClickOutside(modalref, setModal);

  const isEventAlreadyAdded = findEvent(state.RSVP, eventDetail.id);

  return (
    <div className="event-detail">
      <div className="event-detail-info">
        <h3>{eventDetail?.title}</h3>
        <p>Hosted By:</p>
        <h4>{eventDetail?.hostedBy}</h4>

        <div>
          <img
            height={"400px"}
            width={"300px"}
            src={eventDetail?.eventThumbnail}
            alt="event"
          />
        </div>
        <div>
          <strong>Description:</strong>
          <p>{eventDetail?.eventDescription}</p>
        </div>
        <div>
          <h3>Additional Information</h3>
          <p>
            <strong>Dress Code:</strong>
            {eventDetail?.additionalInformation?.dressCode}
          </p>
          <p>
            <strong>Age Restriction:</strong>
            {/* {eventDetail?additionalInformation?.ageRestrictions} */}
          </p>

          <h3>Event Tags</h3>
          {eventDetail.eventTags.map((eveTag) => (
            <p id={eveTag}>{eveTag}</p>
          ))}
        </div>
      </div>
      <div className="event-detail-add">
        <div>
          <p>{formatDate(eventDetail?.eventStartTime)}</p>
          <p>{formatDate(eventDetail?.eventEndTime)}</p>
          <p>{eventDetail?.location}</p>
          <p>{eventDetail?.address}</p>
        </div>

        <div>
          <h2>Speakers {eventDetail?.speakers.length}</h2>
          <div className="speaker-contianer">
            {eventDetail.speakers.map((speaker) => (
              <div>
                <img
                  height={"50px"}
                  width={"50px"}
                  src={speaker?.image}
                  alt="speaker-profile"
                />
                <p>
                  <strong>{speaker.name}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
        {isEventAlreadyAdded ? (
          <p className="btn">ALready RSVP</p>
        ) : (
          <button className="btn btn-rsvp" onClick={() => setModal(!modal)}>
            RSVP
          </button>
        )}
      </div>

      {modal && (
        <div className="Modal-wrapper">
          <div children="Modal" ref={modalref}>
            <RSVPModal
              eventId={eventDetail?.id}
              setModal={setModal}
              isPaid={eventDetail?.isPaid}
            />
          </div>
        </div>
      )}
    </div>
  );
}
