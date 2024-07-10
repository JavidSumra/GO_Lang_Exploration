//write a code that leverage the discord api to count the index of user.
// Index is based upon the number at which user sent his first msg in this channel.

//! This is Discord API

const DISCORD_API_ENDPOINT = "https://discord.com/api";
const { CHANNEL_ID, PRIVATE_TOKEN } = process.env;

let mapIndex = new Map();
let firstIndex = 1;

const markInexOnFirstUserMessage = async () => {
  try {
    const apiResponse = await fetch(
      `${DISCORD_API_ENDPOINT}/channels/${CHANNEL_ID}/messages`,
      {
        headers: {
          Authorization: PRIVATE_TOKEN,
        },
      }
    );

    const jsonResponse = await apiResponse.json();

    if (jsonResponse.length) {
      //here reversing the data bcz of response is in latest first msg
      const requiredData = jsonResponse
        .map((data) => data.author.username)
        .reverse();

      if (requiredData.length) {
        requiredData.map((userName) => {
          if (!mapIndex.has(userName)) {
            mapIndex.set(userName, firstIndex);
            firstIndex++;
          }
        });

        console.log(mapIndex);
      } else {
        console.log("NO MESSAGES IN CHANNEL");
      }
    } else {
      console.log("Failed to Fetch API");
    }
  } catch (error) {
    console.log(error);
  }
};

markInexOnFirstUserMessage();
