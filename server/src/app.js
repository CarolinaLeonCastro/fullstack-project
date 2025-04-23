import express from 'express';
import { config } from './config/app.config.js';
import { User } from './models/user.model.js';
import { Client } from './models/client.model.js';
import contactRoutes from './app.router.js';

const app = express(); // retorne instancia de la aplicación

// (async function() {
//   // --- Création d'un nouvel utilisateur
//   const userData = new User({
//     nickname: 'efp-student',
//     password: '123456'
//   });

//   const user = await User.create(userData);

  // --- Création d'un nouveau client
  // const clientData = {
  //   firstname: 'John',
  //   lastname: 'Doe',
  //   birthdate: new Date('1980-01-01'),
  //   company: 'Tartempion Inc',
  //   email: 'info@tartempion.inc.com',
  //   address: [
  //     { street: 'Place de la Madeleine, 120', zip: 75000, city: 'Paris', country: 'FR' }
  //   ],
  //   vat: 'BE0806913405',
  //   sectors: ['Web'],
  //   revenues: 1000528,
  //   user: user._id
  // };

  // const client = new Client(clientData);

  // --- Validation manuelle du client
  // const errors = await client.validate();
  // console.log('--- Erreurs de validation');
  // console.log(errors);

  // if (!errors) {
  //   await client.save();
  // }

//   // --- Récupération de la liste des clients
//   const clients = await Client.find();
//   console.log('--- Clients list');
//   console.log(clients);

//   // --- Récupération d'un client par son id
//   const clientById = await Client.findById(client._id);

//   // --- Calcul de l'âge du client
//   const age = await clientById.getAge();
//   console.log('--- Age du client');
//   console.log(age);

//   // --- Récupération des collègues du client via une méthode d'instance
//   const colleagues = await clientById.getColleagues();
//   console.log('--- Collègues du client');
//   console.log(colleagues);

//   // --- Récupération d'un client par son id et population de l'utilisateur associé
//   const clientWithUser = await Client.findOne({ _id: client._id }).populate('user');
//   console.log('--- Client avec l\'utilisateur associé');
//   console.log(clientWithUser);

//   // --- Mise à jour d'un client par son id
//   const updatedClient = await Client.findByIdAndUpdate(
//     client._id,
//     { $set: { lastname: 'Dupont', 'address.0.city': 'Bruxelles' } },
//     { new: true }
//   );
//   console.log('--- Client mis à jour');
//   console.log(updatedClient);
// })();

// listen - Escuchar peticiones en el puerto 3000
app.listen(3000, () => {
  console.log('Server on port 3000');
});
