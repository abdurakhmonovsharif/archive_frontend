import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// findAll
export const getPages = createAsyncThunk("pages/getPages", async () => {
  const {data:response} = await axios.get("/pages");
  return response.data;
});

// create new page
export const createPage = createAsyncThunk("pages/createPage", async (pageData) => {
  const {data:response} = await axios.post("/pages", pageData);
  return response.data;
});

// update page
export const updatePageById = createAsyncThunk(
  "pages/updatePageById",
  async ({ pageId, pageData }) => {
    const {data:response} = await axios.put(`/pages/${pageId}`, pageData);
    return response.data;
  }
);

// delete page
export const deletePageById = createAsyncThunk("pages/deletePageById", async (pageId) => {
  await axios.delete(`/pages/${pageId}`);
  return pageId;
});

export const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    isLoading: false,
    pages: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // Handle getPages
      .addCase(getPages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pages = action.payload;
      })
      .addCase(getPages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle createPage
      .addCase(createPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pages.push(action.payload);
      })
      .addCase(createPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle updatePageById
      .addCase(updatePageById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePageById.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedPage = action.payload;
        const index = state.pages.findIndex((page) => page.id === updatedPage.id);
        if (index !== -1) {
          state.pages[index] = updatedPage;
        }
      })
      .addCase(updatePageById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle deletePageById
      .addCase(deletePageById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deletePageById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pages = state.pages.filter((page) => page.id !== action.payload);
      })
      .addCase(deletePageById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default pagesSlice.reducer;
