import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sdfv_list = createAsyncThunk(
  "sdfvs/api_v1_sdfv_list",
  async payload => {
    const response = await apiService.api_v1_sdfv_list(payload)
    return response.data
  }
)
export const api_v1_sdfv_create = createAsyncThunk(
  "sdfvs/api_v1_sdfv_create",
  async payload => {
    const response = await apiService.api_v1_sdfv_create(payload)
    return response.data
  }
)
export const api_v1_sdfv_retrieve = createAsyncThunk(
  "sdfvs/api_v1_sdfv_retrieve",
  async payload => {
    const response = await apiService.api_v1_sdfv_retrieve(payload)
    return response.data
  }
)
export const api_v1_sdfv_update = createAsyncThunk(
  "sdfvs/api_v1_sdfv_update",
  async payload => {
    const response = await apiService.api_v1_sdfv_update(payload)
    return response.data
  }
)
export const api_v1_sdfv_partial_update = createAsyncThunk(
  "sdfvs/api_v1_sdfv_partial_update",
  async payload => {
    const response = await apiService.api_v1_sdfv_partial_update(payload)
    return response.data
  }
)
export const api_v1_sdfv_destroy = createAsyncThunk(
  "sdfvs/api_v1_sdfv_destroy",
  async payload => {
    const response = await apiService.api_v1_sdfv_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sdfvsSlice = createSlice({
  name: "sdfvs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_sdfv_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdfv_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_sdfv_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdfv_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdfv_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_sdfv_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdfv_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdfv_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_sdfv_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdfv_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdfv_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sdfv_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdfv_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdfv_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sdfv_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdfv_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdfv_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sdfv_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_sdfv_list,
  api_v1_sdfv_create,
  api_v1_sdfv_retrieve,
  api_v1_sdfv_update,
  api_v1_sdfv_partial_update,
  api_v1_sdfv_destroy,
  slice: sdfvsSlice
}
