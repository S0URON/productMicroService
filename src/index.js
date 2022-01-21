import express from 'express';
import mongoose from 'mongoose';
import config from './config/config';
import bodyParser from 'body-parser'
import ApiRoutes from './routes';

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', ApiRoutes);

var server = app.listen(config.PORT, () => {
	console.log(`Server ready on port ${config.PORT}`);
});
