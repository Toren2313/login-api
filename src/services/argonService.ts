import argon2 from "argon2";

class ArgonService {
  constructor() {}
  async hash(txt: string): Promise<string> {
    const hash = await argon2.hash(txt);
    return hash;
  }
  async validate(hashPass: string, password: string): Promise<boolean> {
    const hash = await argon2.verify(hashPass, password);
    return hash;
  }
}

export default ArgonService;
