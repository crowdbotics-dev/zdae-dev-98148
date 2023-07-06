import axios from "axios"
const zdaedevAPI = axios.create({
  baseURL: "https://zdae-dev-98148.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return zdaedevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return zdaedevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_sdfv_list(payload) {
  return zdaedevAPI.get(`/api/v1/sdfv/`)
}
function api_v1_sdfv_create(payload) {
  return zdaedevAPI.post(`/api/v1/sdfv/`, payload.data)
}
function api_v1_sdfv_retrieve(payload) {
  return zdaedevAPI.get(`/api/v1/sdfv/${payload.id}/`)
}
function api_v1_sdfv_update(payload) {
  return zdaedevAPI.put(`/api/v1/sdfv/${payload.id}/`, payload.data)
}
function api_v1_sdfv_partial_update(payload) {
  return zdaedevAPI.patch(`/api/v1/sdfv/${payload.id}/`, payload.data)
}
function api_v1_sdfv_destroy(payload) {
  return zdaedevAPI.delete(`/api/v1/sdfv/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return zdaedevAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_xvfbf_list(payload) {
  return zdaedevAPI.get(`/api/v1/xvfbf/`)
}
function api_v1_xvfbf_create(payload) {
  return zdaedevAPI.post(`/api/v1/xvfbf/`, payload.data)
}
function api_v1_xvfbf_retrieve(payload) {
  return zdaedevAPI.get(`/api/v1/xvfbf/${payload.id}/`)
}
function api_v1_xvfbf_update(payload) {
  return zdaedevAPI.put(`/api/v1/xvfbf/${payload.id}/`, payload.data)
}
function api_v1_xvfbf_partial_update(payload) {
  return zdaedevAPI.patch(`/api/v1/xvfbf/${payload.id}/`, payload.data)
}
function api_v1_xvfbf_destroy(payload) {
  return zdaedevAPI.delete(`/api/v1/xvfbf/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return zdaedevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return zdaedevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return zdaedevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return zdaedevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return zdaedevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return zdaedevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return zdaedevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return zdaedevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return zdaedevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return zdaedevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return zdaedevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_sdfv_list,
  api_v1_sdfv_create,
  api_v1_sdfv_retrieve,
  api_v1_sdfv_update,
  api_v1_sdfv_partial_update,
  api_v1_sdfv_destroy,
  api_v1_signup_create,
  api_v1_xvfbf_list,
  api_v1_xvfbf_create,
  api_v1_xvfbf_retrieve,
  api_v1_xvfbf_update,
  api_v1_xvfbf_partial_update,
  api_v1_xvfbf_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
