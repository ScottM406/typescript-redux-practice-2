import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AdviceSlice {
  advice: string;
}

const initialState: AdviceSlice = {
  advice: "",
}

const adviceSlice = createSlice({
  name: "advice",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getAdvice.fulfilled, (state, action) => {
      state.advice = action.payload;
    })
  }
});

export const getAdvice = createAsyncThunk(
  "advice/getAdvice",
  async () => {
  const adviceResponse = await fetch("https://api.adviceslip.com/advice");
  const adviceJSON = await adviceResponse.json();
  console.log(adviceJSON.slip)
  const advice = adviceJSON.slip.advice;
  return advice
}
)

export default adviceSlice.reducer