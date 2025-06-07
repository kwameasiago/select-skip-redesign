import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface Skip {
  id: number
  size: number
  hire_period_days: number
  transport_cost: number | null
  per_tonne_cost: number | null
  price_before_vat: number
  vat: number
  postcode: string
  area: string
  forbidden: boolean
  created_at: string
  updated_at: string
  allowed_on_road: boolean
  allows_heavy_waste: boolean
}

interface SkipsState {
  data: Skip[]
  loading: boolean
  error: string | null
}

const initialState: SkipsState = {
  data: [],
  loading: false,
  error: null,
}

interface FetchSkipsParams {
  postcode: string
  area: string
}

export const fetchSkips = createAsyncThunk(
  'skips/fetchSkips',
  async ({ postcode, area }: FetchSkipsParams, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
      )
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const skipsSlice = createSlice({
  name: 'skips',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkips.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSkips.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchSkips.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default skipsSlice.reducer
