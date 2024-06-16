import SignupForm from "@/app/_components/Events/SignupForm";
import FeaturedItems from "@/app/_components/FeaturedItems/FeaturedItems";
import { fetchAllEvents, fetchDataFromStrapi } from "@/utils/strapi.utils";
import { fetchIndividualEvent } from "@/utils/strapi.utils";
import ReactMarkdown from "react-markdown";

export default async function Page({ params }) {
  const eventId = params.event;
  const event = await fetchIndividualEvent(eventId);
  // Fetch all events except the current one
  const otherEvents = await fetchAllEvents(eventId);

  const description = (
    <ReactMarkdown className="copy">
      {event.description
        .map((paragraph) =>
          paragraph.children
            ?.map((child) => {
              return child.text;
            })
            .join("")
            .replace("\\", "\n")
        )
        .join("\n")}
    </ReactMarkdown>
  );

  const pricing = {
    singlePrice: event.singlePrice,
    sharedPrice: event.sharedPrice,
  };

  return (
    <main className="events-page">
      <SignupForm
        headline={event.name}
        infoText={description}
        buttonLabel="Sign Up"
        pricing={pricing}
        eventId={eventId}
      />
      <FeaturedItems
        headline="Explore other events"
        items={otherEvents}
        itemType="event"
      />
    </main>
  );
}

export async function generateStaticParams() {
  try {
    const events = await fetchDataFromStrapi("events");
    const slugs = events.map((event) => ({
      eventId: String(event.id),
    }));
    return slugs;
  } catch (error) {
    console.log("Error fetching slugs for events", error);
    return [];
  }
}
