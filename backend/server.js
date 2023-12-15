import express from 'express';
import kmlParser from 'kml-parser';
import pointInPolygon from 'point-in-polygon';

import * as fs from 'fs';

const app = express();

const kmlData = fs.readFileSync('backend/asset.kml', 'utf8');
const regions = kmlParser.parse(kmlData); // Parse KML file

app.get('/check-location', (req, res) => {
  const { lat, lng } = req.query;
  
  if (!lat || !lng) {
    return res.status(400).json({ error: 'Latitude and longitude are required.' });
  }

  const point = [parseFloat(lng), parseFloat(lat)];

  const foundRegion = regions.find((region) => pointInPolygon(point, region.coordinates));

  if (foundRegion) {
    res.json({ message: 'Location found in region: ' + foundRegion.name });
  } else {
    res.json({ message: 'Location not found in any region.' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});