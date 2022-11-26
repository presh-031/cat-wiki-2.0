const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

export default async function handler(req, res) {
  const { id } = req.query;
  const images = [];
  try {
    for (let i = 0; i < 8; i++) {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`);
      const data = await response.json();
      // push data into images array so server responds once

      images.push(data[0]);
    }

    const uniqueImages = [];

    const unique = images.filter((image) => {
      const isDuplicate = uniqueImages.includes(image.id);

      if (!isDuplicate) {
        uniqueImages.push(image.id);

        return true;
      }

      return false;
    });

    res.status(200).send(unique);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      mssg: "error getting images",
    });
  }
}
