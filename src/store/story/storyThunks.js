import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asenkron işlem: Hikaye verilerini çekme
export const fetchStory = createAsyncThunk('story/fetchStory', async (apiUrl) => {
  const response = await axios.get(apiUrl);
  return response.data;
});