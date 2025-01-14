import express from "express";
const router = express.Router();
import mailer from "nodemailer";
import emoji from "node-emoji";

router.post("/send-coupon-mail", async (req, res) => {
  try {
    const { personalizeResponse, email } = req.body;

    // we will process the discount data when we have it
    const productUrls = personalizeResponse.response.map((item) => item.IMGURL);

    const ideal_size = personalizeResponse.response[0].Size || "";

    let transporter = mailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // now what are the things i will need to complete this functionality
    // need the sender email
    // need the response data from the personalize quiz
    // discount code information

    let info = await transporter.sendMail({
      from: "notifications@leaclothingco.com",
      to: email,
      subject: `The results are in--you have GREAT style!${emoji.get(
        "heart_eyes"
      )}${emoji.get("smiley")}${emoji.get("dancer")}`, // Subject line
      text: "Welcome to your style room, shop personalized Lea Looks for you!",
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Coupon</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width" />
      
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        </head>
      
        <body
          style="
            background: -webkit-radial-gradient(
              top left,
              rgba(211, 174, 210, 0.5) 0%,
              rgba(255, 255, 255, 0.2) 46.88%,
              rgba(0, 0, 0, 0) 100%
            );
          "
        >
          <table
            class="container"
            role="banner"
            border="0"
            width="100%"
            cellspacing="6"
          >
            <tr>
              <td align="center">
                <img
                  src="https://i.ibb.co/0rzNFpt/200x60-transparent.png"
                  alt="Logo-Working-File-05-0b1f383c-cfb7-4296-b410-21929ef368d8-200x"
                  border="0"
                  width="100%"
                />
              </td>
            </tr>
            <tr>
              <td align="center">
                <h2
                  class="main-heading"
                  style="
                    font-family: 'Roboto', sans-serif;
                    font-size: 2rem;
                    font-weight: 500;
                    color: #6c4a6d;
                    line-height: 50px;
                    text-transform: uppercase;
                    text-shadow: 2.1px 1px 1.8px rgba(108, 74, 109, 0.3);
                  "
                >
                Welcome to your style room, shop personalized Lea Looks for you!
                </h2>
              </td>
            </tr>
            <tr>
              <td align="center">
                <img
                  src="https://i.ibb.co/mXyxpCD/Untitled-design-12.png"
                  alt="Logo-Working-File-05-0b1f383c-cfb7-4296-b410-21929ef368d8-200x"
                  border="0"
                />
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 2rem 0;">
                <div class="tag-bar-container" style="display: inline-flex;">
                  <span
                    class="tag-bar"
                    style="
                      font-family: 'Roboto', sans-serif;
                      font-size: 1.6rem;
                      font-weight: 400;
                      color: #fff;
                      line-height: 40px;
                      text-transform: uppercase;
                      padding: 1.6rem 1.8rem;
                      border-radius: 4rem;
                      background-color: #d3aed2;
                    "
                  >
                    YOUR STYLE QUIZ RESULTS
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td align="center">
                <div style="width: 90%; text-align: center;">
                  <p
                    class="para-text"
                    style="
                      font-family: 'Montserrat', sans-serif;
                      font-size: 1.9rem;
                      font-weight: 200;
                      color: #6c4a6d;
                      line-height: 42px;
                      letter-spacing: 1.2px;
                      text-align: center;
                    "
                  >
                    Taking all your fit and style preferences into consideration,
                    we've carefully curated some looks we think you'd love, in the
                    perfect size for you!
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td align="center">
                <div style="width: 80%; text-align: center;">
                  <p
                    class="hashtag-text"
                    style="
                      font-family: 'Roboto', sans-serif;
                      font-size: 2.5rem;
                      font-weight: 400;
                      color: #d3aed2;
                      line-height: 50px;
                      text-transform: uppercase;
                    "
                  >
                    #LEALOOKS FOR YOU THAT ACTUALLY FIT!
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 6rem 0 2rem 0;">
                <div
                  class="size-tag-bar"
                  style="
                    display: inline-flex;
                    background-color: #d3aed2;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    padding: 1rem 2rem;
                    border-radius: 3rem;
                  "
                >
                  <span
                    class="ideal-size-text"
                    style="
                      display: flex;
                      font-family: 'Roboto', sans-serif;
                      font-size: 1.5rem;
                      font-weight: 400;
                      line-height: 24px;
                      width: 50%;
                      justify-content: center;
                      align-items: center;
                    "
                  >
                    YOUR IDEAL SIZE
                  </span>
                  <span
                    class="vertical-line"
                    style="
                      display: flex;
                      border-left: 2px solid #fff;
                      height: 3rem;
                      margin: 0 1rem;
                      margin-top: auto;
                      margin-bottom: auto;
                    "
                  ></span>
                  <span
                    class="size-text"
                    style="
                      display: flex;
                      font-family: 'Roboto', sans-serif;
                      font-size: 1.8rem;
                      font-weight: 500;
                      line-height: 24px;
                      width: 20%;
                      margin: auto;
                    "
                  >
                    ${ideal_size}
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 2rem 0 0.3rem 0; min-height: 300px">
                <div class="img-container" style="display: inline-flex; justify-content: center; width: 90%; flex-wrap: wrap;">
                  <div
                    class="img-wrapper"
                    style="min-width: 33.33%; max-width: 300px; min-height: 250px; background-color: gray; margin-bottom: 10px"
                  >
                    <img
                      src="${productUrls[0]}"
                      alt="Recommend Product"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div
                    class="img-wrapper"
                    style="
                      min-width: 33.33%;
                      max-width: 300px;
                      min-height: 250px;
                      background-color: gray;
                      margin-left: 0.5rem;
                      margin-bottom: 10px
                    "
                  >
                    <img
                      src="${productUrls[1]}"
                      alt="Recommend Product"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div
                    class="img-wrapper"
                    style="
                      min-width: 33.33%;
                      max-width: 300px;
                      min-height: 250px;
                      background-color: gray;
                      margin-left: 0.5rem;
                      margin-bottom: 10px
                    "
                  >
                    <img
                      src="${productUrls[2]}"
                      alt="Recommend Product"
                      height="100%"
                      width="100%"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 0 0 2rem 0; min-height: 300px">
                <div class="img-container" style="display: inline-flex; justify-content: center; width: 90%; flex-wrap: wrap">
                  <div
                    class="img-wrapper"
                    style="min-width: 33.33%; max-width: 300px; min-height: 250px; background-color: gray; margin-bottom: 10px"
                  >
                    <img
                      src="${productUrls[3]}"
                      alt="Recommend Product"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div
                    class="img-wrapper"
                    style="
                      min-width: 33.33%;
                      max-width: 300px;
                      min-height: 250px;
                      background-color: gray;
                      margin-left: 0.5rem;
                      margin-bottom: 10px;
                    "
                  >
                    <img
                      src="${productUrls[4]}"
                      alt="Recommend Product"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div
                    class="img-wrapper"
                    style="
                      min-width: 33.33%;
                      max-width: 300px;
                      min-height: 250px;
                      background-color: gray;
                      margin-left: 0.5rem;
                      margin-bottom: 10px;
                    "
                  >
                    <img
                      src="${productUrls[5]}"
                      alt="Recommend Product"
                      height="100%"
                      width="100%"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 1rem 0;">
                <a
                  href="https://leaclothingco.com/pages/personalize-quiz"
                  class="style-room-link"
                  style="
                    display: inline-flex;
                    font-family: 'Roboto', sans-serif;
                    background-color: #d3aed2;
                    color: #fff;
                    font-size: 1.5rem;
                    font-weight: 400;
                    line-height: 25px;
                    text-transform: uppercase;
                    padding: 1.5rem;
                    border-radius: 3rem;
                    cursor: pointer;
                    text-decoration: none;
                  "
                >
                  SHOP YOUR STYLE ROOM
                </a>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 1rem 0;">
                <a
                  href="https://leaclothingco.com/pages/personalize-quiz"
                  class="retake-link"
                  style="
                    display: inline-flex;
                    font-family: 'Roboto', sans-serif;
                    background-color: transparent;
                    color: #d3aed2;
                    font-size: 1.4rem;
                    font-weight: 400;
                    line-height: 20px;
                    text-transform: uppercase;
                    padding: 1.2rem;
                    border-radius: 3rem;
                    cursor: pointer;
                    border: 3px solid;
                    text-decoration: none;
                  "
                >
                  RETAKE QUIZ
                </a>
              </td>
            </tr>
          </table>
        </body>
      </html>     
      `,
    });

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("[ERROR]: ", error);
    res.status(400).send("Email not sent");
  }
});

export default router;
