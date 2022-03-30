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
        const startDisplayDate = new Date(eventRef?.startDate);
        const endDisplayDate = new Date(eventRef?.endDate);

        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        const startDisplayMonth = months[startDisplayDate.getMonth()];
        const endDisplayMonth = months[endDisplayDate.getMonth()];

        const startDate =
          startDisplayMonth +
          " " +
          (startDisplayDate.getDate() + 1) +
          ", " +
          startDisplayDate.getFullYear();

        const endDate =
          endDisplayMonth +
          " " +
          (endDisplayDate.getDate() + 1) +
          ", " +
          endDisplayDate.getFullYear();

        return (
          <li className="event_item" key={i}>
            <div className="event_content">
              <h2>{eventRef?.name}</h2>
              <p>
                {eventRef?.startDate ? startDate : ""}{" "}
                {eventRef?.startDate && eventRef?.endDate ? "-" : ""}{" "}
                {eventRef?.endDate ? endDate : ""}
              </p>
              <br />
              <p>{eventRef?.description}</p>
            </div>
            <div className="location_event_image_container">
              <img src="/right-long-solid.svg" alt="location" />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default LocationEvents;
