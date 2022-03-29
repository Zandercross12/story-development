// remix
import { Link } from "remix";

export const LocationEvents = ({ location, stories }) => {
  console.log(location, stories);

  let i = 0;

  return (
    <>
      {location?.events.map((event) => {
        i++;

        const eventReferenceId = event?._ref;

        let eventRef;

        if (eventReferenceId) {
          eventRef = stories.find((story) => story._id === eventReferenceId);
        }

        return (
          <div key={i}>
            <h2>{eventRef?.name}</h2>
            <p>{eventRef?.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default LocationEvents;
