export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await response.json();

    res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
