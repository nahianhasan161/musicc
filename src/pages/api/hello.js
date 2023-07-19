import { APIRoute } from 'next';

export default APIRoute({
  resolver: (req, res) => {
    res.status(200).json({ name: 'John Doe' });
  },
});