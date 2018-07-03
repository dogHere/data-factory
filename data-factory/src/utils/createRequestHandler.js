export default function createRequestHandler(onSuccess) {
  return (state, action) => (
    {
      ...state,
      ...onSuccess(state, action)
    }
  )
}
