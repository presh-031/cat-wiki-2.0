export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  const { id } = req.query;

  try {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`);
    const data = await response.json();

    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json([{}]);
  }
}
