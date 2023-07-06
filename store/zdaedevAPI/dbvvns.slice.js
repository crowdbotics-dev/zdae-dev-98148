import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_dbvvn_list = createAsyncThunk(
  "dbvvns/api_v1_dbvvn_list",
  async payload => {
    const response = await apiService.api_v1_dbvvn_list(payload)
    return response.data
  }
)
export const api_v1_dbvvn_create = createAsyncThunk(
  "dbvvns/api_v1_dbvvn_create",
  async payload => {
    const response = await apiService.api_v1_dbvvn_create(payload)
    return response.data
  }
)
export const api_v1_dbvvn_retrieve = createAsyncThunk(
  "dbvvns/api_v1_dbvvn_retrieve",
  async payload => {
    const response = await apiService.api_v1_dbvvn_retrieve(payload)
    return response.data
  }
)
export const api_v1_dbvvn_update = createAsyncThunk(
  "dbvvns/api_v1_dbvvn_update",
  async payload => {
    const response = await apiService.api_v1_dbvvn_update(payload)
    return response.data
  }
)
export const api_v1_dbvvn_partial_update = createAsyncThunk(
  "dbvvns/api_v1_dbvvn_partial_update",
  async payload => {
    const response = await apiService.api_v1_dbvvn_partial_update(payload)
    return response.data
  }
)
export const api_v1_dbvvn_destroy = createAsyncThunk(
  "dbvvns/api_v1_dbvvn_destroy",
  async payload => {
    const response = await apiService.api_v1_dbvvn_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dbvvnsSlice = createSlice({
  name: "dbvvns",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_dbvvn_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dbvvn_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_dbvvn_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dbvvn_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dbvvn_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_dbvvn_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dbvvn_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dbvvn_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_dbvvn_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dbvvn_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dbvvn_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_dbvvn_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dbvvn_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dbvvn_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_dbvvn_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dbvvn_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dbvvn_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_dbvvn_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_dbvvn_list,
  api_v1_dbvvn_create,
  api_v1_dbvvn_retrieve,
  api_v1_dbvvn_update,
  api_v1_dbvvn_partial_update,
  api_v1_dbvvn_destroy,
  slice: dbvvnsSlice
}
