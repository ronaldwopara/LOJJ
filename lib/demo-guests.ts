export type DemoGuestProfile = {
  id: string;
  name: string;
  room: string;
  initials: string;
  /** Accent for initials orb in inbox / phone demos */
  orbColor: string;
};

export const LIVE_GUEST: DemoGuestProfile = {
  id: "alex",
  name: "Alex Johnson",
  room: "412",
  initials: "AJ",
  orbColor: "#223d14",
};

export const DEMO_GUESTS: DemoGuestProfile[] = [
  LIVE_GUEST,
  {
    id: "sarah",
    name: "Sarah Williams",
    room: "305",
    initials: "SW",
    orbColor: "#4a5568",
  },
  {
    id: "marcus",
    name: "Marcus Chen",
    room: "218",
    initials: "MC",
    orbColor: "#2c5282",
  },
  {
    id: "priya",
    name: "Priya Patel",
    room: "507",
    initials: "PP",
    orbColor: "#6b46c1",
  },
  {
    id: "daniel",
    name: "Daniel Reeves",
    room: "119",
    initials: "DR",
    orbColor: "#744210",
  },
];

export function guestById(id: string) {
  return DEMO_GUESTS.find((g) => g.id === id);
}

export function guestLabel(guest: DemoGuestProfile) {
  return `${guest.name} · Room ${guest.room}`;
}
