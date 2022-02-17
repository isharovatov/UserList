export const TODO_TYPE = {
  GET_ALL_ITEM: {
      START: "get_all_users/pending",
      SUCCESS: "get_all_users/fulfilled",
      ERROR: "get_all_users/rejected"
  },
  GET_QUERY_ITEM: {
    START: "get_query_users/pending",
    SUCCESS: "get_query_users/fulfilled",
    ERROR: "get_query_users/rejected"
  },
  GET_LIMIT_ITEM: {
    START: "get_limit_users/pending",
    SUCCESS: "get_limit_users/fulfilled",
    ERROR: "get_limit_users/rejected"
  },
  POST_ADD_USER: {
    START: "post_add_user/pending",
    SUCCESS: "post_add_user/fulfilled",
    ERROR: "post_add_user/rejected"
  },
  POST_DELETE_USER: {
    START: "delete_user/pending",
    SUCCESS: "delete_user/fulfilled",
    ERROR: "delete_user/rejected"
  },
  POST_EDIT_USER: {
    START: "post_edit_user/pending",
    SUCCESS: "post_edit_user/fulfilled",
    ERROR: "post_edit_user/rejected"
  },
  POST_UPLOAD_IMAGE: {
    START: "post_upload_image/pending",
    SUCCESS: "post_upload_image/fulfilled",
    ERROR: "post_upload_image/rejected"
  },
  GET_IMAGE: {
    START: "get_image/pending",
    SUCCESS: "get_image/fulfilled",
    ERROR: "get_image/rejected"
  },
  AUTH: {
    START: "auth/pending",
    SUCCESS: "auth/fulfilled",
    ERROR: "auth/rejected"
  },
}



