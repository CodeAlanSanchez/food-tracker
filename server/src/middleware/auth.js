import jwt, {decode} from 'jsonwebtoken';

export default async (req, res, next) => {
  try {
    token = req.headers?.authorization.split(' ')[1];

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