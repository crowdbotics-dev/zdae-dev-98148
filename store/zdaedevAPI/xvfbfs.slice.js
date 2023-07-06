import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_xvfbf_list = createAsyncThunk(
  "xvfbfs/api_v1_xvfbf_list",
  async payload => {
    const response = await apiService.api_v1_xvfbf_list(payload)
    return response.data
  }
)
export const api_v1_xvfbf_create = createAsyncThunk(
  "xvfbfs/api_v1_xvfbf_create",
  async payload => {
    const response = await apiService.api_v1_xvfbf_create(payload)
    return response.data
  }
)
export const api_v1_xvfbf_retrieve = createAsyncThunk(
  "xvfbfs/api_v1_xvfbf_retrieve",
  async payload => {
    const response = await apiService.api_v1_xvfbf_retrieve(payload)
    return response.data
  }
)
export const api_v1_xvfbf_update = createAsyncThunk(
  "xvfbfs/api_v1_xvfbf_update",
  async payload => {
    const response = await apiService.api_v1_xvfbf_update(payload)
    return response.data
  }
)
export const api_v1_xvfbf_partial_update = createAsyncThunk(
  "xvfbfs/api_v1_xvfbf_partial_update",
  async payload => {
    const response = await apiService.api_v1_xvfbf_partial_update(payload)
    return response.data
  }
)
export const api_v1_xvfbf_destroy = createAsyncThunk(
  "xvfbfs/api_v1_xvfbf_destroy",
  async payload => {
    const response = await apiService.api_v1_xvfbf_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const xvfbfsSlice = createSlice({
  name: "xvfbfs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_xvfbf_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xvfbf_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_xvfbf_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xvfbf_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xvfbf_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_xvfbf_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xvfbf_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xvfbf_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_xvfbf_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xvfbf_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xvfbf_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_xvfbf_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xvfbf_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xvfbf_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_xvfbf_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xvfbf_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xvfbf_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_xvfbf_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_xvfbf_list,
  api_v1_xvfbf_create,
  api_v1_xvfbf_retrieve,
  api_v1_xvfbf_update,
  api_v1_xvfbf_partial_update,
  api_v1_xvfbf_destroy,
  slice: xvfbfsSlice
}
