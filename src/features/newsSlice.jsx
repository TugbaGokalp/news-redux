import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  news: [],
  loading: false,
  error: false,
};

export const getNews = createAsyncThunk(
  "getNews",

  async (thunkAPI, {rejectWithValue}) => {
    const API_KEY = "b924a4931c4146859a1d4ac136f7d9aa";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    try {
      const { data } = await axios(url);
      console.log(data);
      return data.articles;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Something went wrong")
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = [];
    },
  },
  extraReducers: (builder) => {
    //side effects and updating data because axios can't update data directly
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.loading = false;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      });
  },
});

export const { clearNews } = newsSlice.actions;

export default newsSlice.reducer;
