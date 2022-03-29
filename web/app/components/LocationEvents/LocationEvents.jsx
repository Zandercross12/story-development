// remix
import { Link } from "remix";

export const LocationEvents = ({ location, stories }) => {
  let i = 0;

  return (
    <ul className="events_list">
      {location?.events.map((event) => {
        i++;

        const eventReferenceId = event?._ref;

        let eventRef;

        if (eventReferenceId) {
          eventRef = stories.find((story) => story._id === eventReferenceId);
        }

        // TODO: Sort events by date and fix styling

        return (
          <li className="event_item" key={i}>
            <div className="event_content">
              <h2>{eventRef?.name}</h2>
              <br />
              <p>{eventRef?.description}</p>
            </div>
            <div className="event_image_container">
              <img src="/right-long-solid.svg" alt="location" />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default LocationEvents;
