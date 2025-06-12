// server/src/api/auth/auth.middleware.js
import jwt from 'jsonwebtoken';
import { User } from '../../ressources/user/user.model.js';

export const protect = async (req, res, next) => {
  try {
    // 1) Récupérer le token
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token manquant' });
    }
    const token = authHeader.split(' ')[1];

    // 2) Vérifier le token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // 3) Charger l’utilisateur
    const user = await User.findById(payload.sub).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'Utilisateur non trouvé' });
    }

    // 4) Attacher à req et passer au suivant
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Token invalide' });
  }
};
