export const Response = (status, body) => ({
  statusCode: status,
  body: JSON.stringify(body)
});
