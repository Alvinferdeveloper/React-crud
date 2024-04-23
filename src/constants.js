export const orderValues = {
    ASCENDING : "ASCENDING",
    DESCENDING: "DESCENDING",
    DONE: "DONE",
    PENDING:"PENDING"
  }

export const initialState = {
    default: true,
    sorted: {
      ascending: false,
      descending: false,
    },
    byStatus: {
      done: false,
      pending: false,
    },
  }