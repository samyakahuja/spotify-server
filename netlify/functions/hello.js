exports.handler = async function (event, context) {
  const spotify_response = {
    name: "Samyak",
    age: 25,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(spotify_response),
  };
};
