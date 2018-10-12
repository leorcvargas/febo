import app from './app';
import database from './database';

// Database
database.connect();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Febo API is listening on: ' + PORT);
});
