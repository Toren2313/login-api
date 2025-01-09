import jwt from "jsonwebtoken";
import singTypes from "../utils/singTypes";

class JwtService {
  constructor() {}

  async sign(payload: object, type: singTypes, exp?: string): Promise<string> {
    const genToken: Record<singTypes, () => string> = {
      access: () => {
        if (!exp) exp = "30d";

        const accessToken: string = jwt.sign(payload, process.env.JWT_REFRESH_ACCESS, {
          expiresIn: exp,
        });

        return accessToken;
      },
      refresh: () => {
        const refreshToken: string = jwt.sign(payload, process.env.JWT_REFERSH_SECRET);

        return refreshToken;
      },
    };
    return genToken[type]();
  }
}

export default JwtService;
