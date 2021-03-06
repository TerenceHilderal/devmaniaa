import mongoose from 'mongoose';

const bdConnect = async () => {
	try {
		await mongoose.connect(process.env['DB_ADMIN'], {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connexion à MongoDB réussie !');
	} catch (error) {
		console.log('Connexion à MongoDB échouée !');
	}
};
bdConnect();
