import jwt from "jsonwebtoken";
import config from "../utils/Constants";
import singTypes from "../utils/singTypes";

class JwtService {
  constructor() {}

  async sign(payload: object, type: singTypes, exp?: string): Promise<string> {
    const genToken: Record<singTypes, () => string> = {
      access: () => {
        if (!exp) exp = "30d";

        const accessToken: string = jwt.sign(payload, config.jwt.access_refresh, {
          expiresIn: exp,
        });

        return accessToken;
      },
      refresh: () => {
        const refreshToken: string = jwt.sign(payload, config.jwt.refresh_secret);

        return refreshToken;
      },
    };
    return genToken[type]();
  }
}

export default JwtService;
