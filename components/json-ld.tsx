interface OrganizationSchema {
  type: "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
}

interface WebSiteSchema {
  type: "WebSite";
  name: string;
  url: string;
  description: string;
}

interface EventSchema {
  type: "Event";
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  eventStatus: "EventScheduled" | "EventCancelled" | "EventPostponed";
  eventAttendanceMode:
    | "OnlineEventAttendanceMode"
    | "OfflineEventAttendanceMode"
    | "MixedEventAttendanceMode";
  location?: {
    type: "Place" | "VirtualLocation";
    name?: string;
    url?: string;
  };
  organizer: {
    type: "Organization";
    name: string;
    url: string;
  };
  image?: string;
}

type SchemaType = OrganizationSchema | WebSiteSchema | EventSchema;

interface JsonLdProps {
  data: SchemaType | SchemaType[];
}

function generateSchema(schema: SchemaType) {
  const baseContext = "https://schema.org";

  switch (schema.type) {
    case "Organization":
      return {
        "@context": baseContext,
        "@type": "Organization",
        name: schema.name,
        url: schema.url,
        logo: schema.logo,
        description: schema.description,
        ...(schema.sameAs && { sameAs: schema.sameAs }),
      };
    case "WebSite":
      return {
        "@context": baseContext,
        "@type": "WebSite",
        name: schema.name,
        url: schema.url,
        description: schema.description,
      };
    case "Event":
      return {
        "@context": baseContext,
        "@type": "Event",
        name: schema.name,
        description: schema.description,
        startDate: schema.startDate,
        ...(schema.endDate && { endDate: schema.endDate }),
        eventStatus: `https://schema.org/${schema.eventStatus}`,
        eventAttendanceMode: `https://schema.org/${schema.eventAttendanceMode}`,
        ...(schema.location && {
          location: {
            "@type": schema.location.type,
            ...(schema.location.name && { name: schema.location.name }),
            ...(schema.location.url && { url: schema.location.url }),
          },
        }),
        organizer: {
          "@type": "Organization",
          name: schema.organizer.name,
          url: schema.organizer.url,
        },
        ...(schema.image && { image: schema.image }),
      };
    default:
      return {};
  }
}

export function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];
  const jsonLd = schemas.map(generateSchema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd),
      }}
    />
  );
}

// Pre-configured schemas for IME FTUI
export const imeOrganizationSchema: OrganizationSchema = {
  type: "Organization",
  name: "IME FTUI",
  url: "https://imeftui.com",
  logo: "https://imeftui.com/logo.png",
  description: "Ikatan Mahasiswa Elektro Fakultas Teknik Universitas Indonesia",
  sameAs: [
    "https://www.instagram.com/imeftui/",
    "https://www.linkedin.com/company/ikatan-mahasiswa-elektro-ftui-ime-ftui/",
  ],
};

export const imeWebsiteSchema: WebSiteSchema = {
  type: "WebSite",
  name: "IME FTUI 2026",
  url: "https://imeftui.com",
  description: "Official website of Ikatan Mahasiswa Elektro FTUI",
};

