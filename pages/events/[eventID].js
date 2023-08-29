import { useRouter } from "next/router";
import EventContent from "../../components/events/event-content";
import EventLogistics from "../../components/events/event-logistics";
import EventSummary from "../../components/events/event-summary";
import { getEventById } from "../../dummydata";

const EventDetailPage = () => {
  const router = useRouter();

  const eventID = router.query.eventID;
  const event = getEventById(eventID);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};
export default EventDetailPage;
