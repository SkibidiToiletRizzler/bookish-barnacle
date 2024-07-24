const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/latestBadge/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const response = await axios.get(`https://badges.roblox.com/v1/users/${userId}/badges?sortOrder=Desc&limit=1`);
    const latestBadge = response.data.data[0];
    res.json(latestBadge);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch badge information' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
