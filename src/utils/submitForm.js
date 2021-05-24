const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

export const submitForm = async (id, fields, submittedAt, skipValidation) => {
  const url = `${process.env.HUBSPOT_BASE_URL}/submissions/v3/integration/submit/${process.env.PORTAL_ID}/${id}`;
  const data = {
    submittedAt: submittedAt,
    fields: fields,
    skipValidation: skipValidation,
  };

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf8",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((res) => res);
};
