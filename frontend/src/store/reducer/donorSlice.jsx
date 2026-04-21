import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Move donor data here so components can read from the Redux store
  donors: [
    {
      id: 1,
      name: "Rajesh Kumar",
      donations: 45,
      bloodType: "O+",
      lastDonation: "2 weeks ago",
      rank: 1,
      image: "https://i.pinimg.com/736x/46/97/cd/4697cd238531208a7783b70e42070625.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      donations: 38,
      bloodType: "A+",
      lastDonation: "1 month ago",
      rank: 2,
      image: "https://i.pinimg.com/736x/9e/5d/38/9e5d38179984e523c47d93616dfa6485.jpg",
    },
    {
      id: 3,
      name: "Amit Patel",
      donations: 32,
      bloodType: "B+",
      lastDonation: "3 weeks ago",
      rank: 3,
      image: "https://i.pinimg.com/736x/57/00/5e/57005e4e1d0b4c47bc68c4ace761da35.jpg",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      donations: 28,
      bloodType: "AB+",
      lastDonation: "1 week ago",
      rank: 4,
      image: "https://i.pinimg.com/736x/2e/ed/3c/2eed3c89bd99f908417a7fed2fbeb2e4.jpg",
    },
    {
      id: 5,
      name: "Vikram Singh",
      donations: 25,
      bloodType: "O-",
      lastDonation: "2 months ago",
      rank: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Anjali Mehta",
      donations: 22,
      bloodType: "A-",
      lastDonation: "1 month ago",
      rank: 6,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: 7,
      name: "Rohit Verma",
      donations: 20,
      bloodType: "B-",
      lastDonation: "3 weeks ago",
      rank: 7,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: 8,
      name: "Kavita Nair",
      donations: 18,
      bloodType: "O+",
      lastDonation: "2 weeks ago",
      rank: 8,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ],
  loading: false,
  error: null,
};

const donorSlice = createSlice({
  name: "donor",
  initialState,
  reducers: {
    fetchDonorsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDonorsSuccess(state, action) {
      state.loading = false;
      state.donors = action.payload;
    },
    fetchDonorsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions and reducer
export const {
  fetchDonorsStart,
  fetchDonorsSuccess,
  fetchDonorsFailure,
} = donorSlice.actions;

export default donorSlice.reducer;