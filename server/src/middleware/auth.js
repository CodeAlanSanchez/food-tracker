import jwt, {decode} from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    if (!req.headers.hasOwnProperty('authorization')) return;
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).send('Access denied.');
    let decodedToken;
    if (token) {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decodedToken?.id;
    }
    next();
  } catch (error) {
    console.error(error);
  }
}