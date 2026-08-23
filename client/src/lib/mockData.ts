import { HandPlatter, Hammer, Tractor, Truck, Search, Mic, MapPin, Users, User, MessageSquare } from "lucide-react";

export const JOBS = [
  {
    id: 1,
    title: "Rice Field Harvesting",
    type: "Farming",
    pay: "₹500/day",
    location: "Rampur Village",
    distance: "2km",
    posted: "2h ago",
    urgent: true,
  },
  {
    id: 2,
    title: "Construction Helper",
    type: "Labor",
    pay: "₹650/day",
    location: "City Outskirts",
    distance: "5km",
    posted: "5h ago",
    urgent: false,
  },
  {
    id: 3,
    title: "Tractor Driver Needed",
    type: "Driving",
    pay: "₹12000/month",
    location: "Kisan Mandi",
    distance: "8km",
    posted: "1d ago",
    urgent: true,
  },
  {
    id: 4,
    title: "Warehouse Loading",
    type: "Logistics",
    pay: "₹450/day",
    location: "Industrial Zone",
    distance: "12km",
    posted: "1d ago",
    urgent: false,
  },
];

export const CATEGORIES = [
  { id: 1, name: "Farming", icon: Tractor, color: "bg-green-500/20 text-green-500" },
  { id: 2, name: "Construction", icon: Hammer, color: "bg-orange-500/20 text-orange-500" },
  { id: 3, name: "Daily Labor", icon: Users, color: "bg-blue-500/20 text-blue-500" },
  { id: 4, name: "Driving", icon: Truck, color: "bg-purple-500/20 text-purple-500" },
  { id: 5, name: "Domestic", icon: HandPlatter, color: "bg-pink-500/20 text-pink-500" },
];

export const COMMUNITY_POSTS = [
  {
    id: 1,
    user: "Ramesh Kumar",
    role: "Labor Contractor",
    content: "Need 10 people for road construction near Panchayat Bhawan next week. Advance payment available.",
    likes: 12,
    comments: 4,
    time: "2h ago",
  },
  {
    id: 2,
    user: "Suresh Singh",
    role: "Farmer",
    content: "Wheat harvesting starting from Monday. Food provided.",
    likes: 25,
    comments: 8,
    time: "4h ago",
  },
];

export const USER_PROFILE = {
  name: "Mukesh Patel",
  location: "Rampur, UP",
  skills: ["Farming", "Masonry Helper"],
  jobsCompleted: 45,
  earnings: "₹12,500",
  rating: 4.8,
};