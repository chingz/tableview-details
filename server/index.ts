import app from '@server/app';

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`app is running on http://localhost:${PORT}`));
