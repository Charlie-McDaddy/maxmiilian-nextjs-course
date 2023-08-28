import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummydata";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents;

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};
export default HomePage;
