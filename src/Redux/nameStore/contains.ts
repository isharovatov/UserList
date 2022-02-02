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
  DELETE_USER: 'delete_user',
  CHANGE_NAME: 'change_name'
}



