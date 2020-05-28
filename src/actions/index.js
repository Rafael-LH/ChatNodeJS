export const formRequest = (payload) => {
  return (
    {
      type: 'FORM_REQUEST',
      payload,
    }
  )
}