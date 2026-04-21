import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stories: [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Blood Recipient",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      story:
        "I was in a critical condition after an accident and needed urgent blood transfusion. Thanks to BloodBank's quick response and the generous donors, my life was saved. I'm forever grateful!",
      rating: 5,
      date: "2 months ago",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Regular Donor",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      story:
        "I've been donating blood for the past 5 years through BloodBank. The process is smooth, the staff is professional, and knowing that I'm helping save lives gives me immense satisfaction.",
      rating: 5,
      date: "1 month ago",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      name: "Anjali Mehta",
      role: "Blood Recipient",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      story:
        "During my surgery, I needed multiple units of blood. BloodBank coordinated everything perfectly and ensured I received the right blood type. The service was exceptional!",
      rating: 5,
      date: "3 weeks ago",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      name: "Amit Patel",
      role: "Regular Donor",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      story:
        "The convenience of scheduling donations and the regular updates about how my donations are being used makes me feel connected to the cause. BloodBank makes it easy to make a difference.",
      rating: 5,
      date: "2 weeks ago",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ],
  loading: false,
  error: null,
};

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    fetchStoriesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchStoriesSuccess(state, action) {
      state.loading = false;
      state.stories = action.payload;
    },
    fetchStoriesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStoriesStart, fetchStoriesSuccess, fetchStoriesFailure } = storiesSlice.actions;

export default storiesSlice.reducer;
