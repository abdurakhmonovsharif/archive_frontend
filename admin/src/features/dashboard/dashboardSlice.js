
export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
      isLoading: false,
      statisticalInformations: [],
      error: null,
    },
    // extraReducers: (builder) => {
    //   builder
    //     // Handle getPages
    //     .addCase(getPages.pending, (state) => {
    //       state.isLoading = true;
    //       state.error = null;
    //     })
    //     .addCase(getPages.fulfilled, (state, action) => {
    //       state.isLoading = false;
    //       state.pages = action.payload;
    //     })
    //     .addCase(getPages.rejected, (state, action) => {
    //       state.isLoading = false;
    //       state.error = action.error.message;
    //     })
  
    //     // Handle createPage
    //     .addCase(createPage.pending, (state) => {
    //       state.isLoading = true;
    //       state.error = null;
    //     })
    //     .addCase(createPage.fulfilled, (state, action) => {
    //       state.isLoading = false;
    //       state.pages.push(action.payload);
    //     })
    //     .addCase(createPage.rejected, (state, action) => {
    //       state.isLoading = false;
    //       state.error = action.error.message;
    //     })
  
    //     // Handle updatePageById
    //     .addCase(updatePageById.pending, (state) => {
    //       state.isLoading = true;
    //       state.error = null;
    //     })
    //     .addCase(updatePageById.fulfilled, (state, action) => {
    //       state.isLoading = false;
    //       const updatedPage = action.payload;
    //       const index = state.pages.findIndex((page) => page.id === updatedPage.id);
    //       if (index !== -1) {
    //         state.pages[index] = updatedPage;
    //       }
    //     })
    //     .addCase(updatePageById.rejected, (state, action) => {
    //       state.isLoading = false;
    //       state.error = action.error.message;
    //     })
  
    //     // Handle deletePageById
    //     .addCase(deletePageById.pending, (state) => {
    //       state.isLoading = true;
    //       state.error = null;
    //     })
    //     .addCase(deletePageById.fulfilled, (state, action) => {
    //       state.isLoading = false;
    //       state.pages = state.pages.filter((page) => page.id !== action.payload);
    //     })
    //     .addCase(deletePageById.rejected, (state, action) => {
    //       state.isLoading = false;
    //       state.error = action.error.message;
    //     });
    // },
  });
  
  export default pagesSlice.reducer;
  