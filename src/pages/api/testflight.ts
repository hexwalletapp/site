import jwt, { SignOptions } from "jsonwebtoken";
import got from "got";

export default async function handler(req: any, res: any) {
  const NOW = Math.round(new Date().getTime() / 1000);
  const EXPIRES_IN = 1200;

  const { privateKey } = JSON.parse(
    String(process.env.ASC_API_PRIVATE_KEY_DICT)
  );
  const apiKeyId = String(process.env.ASC_API_KEY_ID);
  const apiKeyIssuer = String(process.env.ASC_API_KEY_ISSUER);
  const appIdentifier = String(process.env.ASC_APP_IDENTIFIER);

  const payload = {
    iss: apiKeyIssuer,
    exp: NOW + EXPIRES_IN,
    aud: "appstoreconnect-v1",
  };

  const signOpts: SignOptions = {
    algorithm: "ES256",
    header: {
      alg: "ES256",
      kid: apiKeyId,
      typ: "JWT",
    },
  };

  const bearerToken = jwt.sign(payload, privateKey, signOpts);

  try {
    // Get Public Tester Group
    let groupSearchResponse = await got.get(
      "https://api.appstoreconnect.apple.com/v1/betaGroups",
      {
        headers: {
          Authorization: "Bearer " + bearerToken,
        },
        searchParams: {
          "filter[app]": appIdentifier.toString(),
          "limit[betaTesters]": "0",
          "filter[name]": "Hexicans",
          include: "app",
          "fields[apps]": "name",
        },
      }
    );

    const publicTestersGroup = JSON.parse(groupSearchResponse.body).data[0];
    // console.log(publicTestersGroup);
    // Create TestFlight Invite
    const createInviteResponse = await got.post(
      "https://api.appstoreconnect.apple.com/v1/betaTesters",
      {
        headers: {
          Authorization: "Bearer " + bearerToken,
        },
        json: {
          data: {
            attributes: {
              email: req.body.email,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
            },
            relationships: {
              betaGroups: {
                data: [
                  {
                    id: publicTestersGroup.id,
                    type: "betaGroups",
                  },
                ],
              },
            },
            type: "betaTesters",
          },
        },
      }
    );

    // console.log(createInviteResponse);
    res.status(200).json(JSON.parse(createInviteResponse.body));
  } catch (error: any) {
    console.log(error.response.body);
    res.status(error.response.status);
  }
}
