const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/channel/stats/:id", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://livecounts.xyz/api/youtube-live-subscriber-count/live/${req.params.id}`
    );
    return res.json({
      counts: {
        subscribers: data.counts[0],
        views: data.counts[1],
        videos: data.counts[2],
        goal: data.counts[3],
      },
    });
  } catch (err) {
    console.error(err);
    res.json(null);
  }
});

router.get("/video/stats/:id", async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(
    `https://mixerno.space/api/youtube-video-counter/user/${id}`
  );
  const {
    data: { dislikes },
  } = await axios.get(
    `https://returnyoutubedislikeapi.com/votes?videoId=${id}`
  );
  return res.json({
    counts: {
      views: data.counts[0].count,
      likes: data.counts[3].count,
      dislikes,
      comments: data.counts[5].count,
    },
  });
});

router.get("/stream/stats/:id", async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(
    `	https://mixerno.space/api/youtube-stream-counter/user/${id}`
  );
  return res.json({
    counts: {
      viewers: data.counts[0].count,
      likes: data.counts[2].count,
      views: data.counts[4].count,
    },
  });
});

router.get("/total", (_, res) => {
  let hoursUploadedPerMinute = 500;
  let minutesinHoursUploadedPerMinute = hoursUploadedPerMinute * 60;
  let videosPerMinute = minutesinHoursUploadedPerMinute / 8;
  let minutesin1Day = 1440;
  var days_Since_Feb_14_2005 =
    (new Date().getTime() - new Date("02/14/2005").getTime()) /
    (1000 * 3600 * 24);
  let rate = minutesin1Day * videosPerMinute;
  let total = rate * days_Since_Feb_14_2005;
  let newTotal = total;
  newTotal = newTotal / 2.3;
  let public = newTotal;
  newTotal = newTotal / 22.3;
  let unlisted = newTotal;
  newTotal = newTotal / 14.3;
  let private = newTotal;
  newTotal = newTotal;
  let shorts = newTotal;
  let data = {
    total: rate * days_Since_Feb_14_2005,
    public: public,
    unlisted: unlisted,
    private: private,
    shorts: shorts,
  };

  total += rate / 24 / 60 / 60;
  data.total = total;
  data.public = total / 2.3;
  data.unlisted = total / 22.3;
  data.private = total / 14.3;
  data.shorts = total / 2 / 60;

  Object.keys(data).forEach((key) => {
    data[key] = Math.round(data[key]);
  });

  return res.json(data);
});

module.exports = router;
