import express from "express";
const router = express.Router();
import mailer from "nodemailer";

router.post("/send-coupon-mail", async (req, res) => {
  try {
    const { personalizeResponse, email, discountData } = req.body;

    // we will process the discount data when we have it
    const productUrls = personalizeResponse.response.map((item) => item.IMGURL);

    const ideal_size = personalizeResponse?.response[0].Size || '';

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
      subject: "Coupon Email", // Subject line
      html: `<!DOCTYPE html>
      <html lang="en">
          <head>
        <title>Coupon</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width">
            
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
            
        <link rel="stylesheet" type="text/css" media="screen" href="/assets/admin/merchant_mailer/style.css">
            
        <style>
          body {
            background-image: radial-gradient(top left, rgba(211, 174, 210, 0.5) 0%, rgba(255, 255, 255, 0.2) 46.88%, rgba(0, 0, 0, 0) 100%);
          }
          
          .main-heading {
            font-family: Montserrat, sans-serif;
            font-size: 2rem;
            font-weight: 600;
            color: #6C4A6D;
            line-height: 38px;
            text-transform: uppercase;
          }
          
          .tag-bar-container {
            display: inline-flex;
          }
          
          .tag-bar {
            font-family: Karla, sans-serif;
            font-size: 1.5rem;
            font-weight: 500;
            color: #fff;
            line-height: 18px;
            text-transform: uppercase;
            padding: 1.8rem;
            border-radius: 3rem;
            background-color: #d3aed2;
          }
          
          .para-text {
            font-size: 1.5rem;
            font-weight: 300;
            color: #6C4A6D;
            line-height: 34px;
            letter-spacing: 1.2px;
          }
          
          .hashtag-text {
            font-size: 1.8rem;
            font-weight: 500;
            color: #D3AED2;
            line-height: 35px;
            text-transform: uppercase;
          }
          
          .size-tag-bar {
            display: inline-flex;
            background-color: #d3aed2;
            justify-content: center;
            align-items: center;
            color: #fff;
            padding: 1rem 2rem;
            border-radius: 3rem;
          }
          
          .ideal-size-text {
            display: flex;
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 24px;
            width: 50%;
            justify-content: center;
            align-items: center;
          }
          
          .size-text {
            display: flex;
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 24px;
            width: 20%;
            margin: auto;
          }
          
          .vertical-line {
            display: flex;
            border-left: 2px solid #fff;
            height: 3rem;
            margin: 0 1rem;
            margin-top: auto;
            margin-bottom: auto;
          }
          
          .img-container {
            display: inline-flex;
            width: 90%;
          }
          
          .img-wrapper {
            width: 33.33%;
            min-height: 250px;
            background-color: gray;
          }
          
          .img-wrapper + .img-wrapper {
            margin-left: 0.5rem;
          }
          
          .style-room-link {
            display: inline-flex;
            background-color: #d3aed2;
            color: #fff;
            font-family: Montserrat, sans-serif;
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 25px;
            text-transform: uppercase;
            padding: 1.5rem;
            border-radius: 3rem;
            cursor: pointer;
          }
          
          .retake-link {
            display: inline-flex;
            background-color: transparent;
            color: #d3aed2;
            border: 3px solid #d3aed2
            font-family: Montserrat, sans-serif;
            font-size: 1.4rem;
            font-weight: 600;
            line-height: 20px;
            text-transform: uppercase;
            padding: 1.2rem;
            border-radius: 3rem;
            cursor: pointer;
          }
          
          </style>
      </head>
      
          <body>
              <table class="container" role="banner" border="0" width="100%" cellspacing="6">
                <tr>
                  <td align="center" style="padding: 1rem 0;">
                    <img src="https://i.ibb.co/HgK9kSm/Logo-Working-File-05-0b1f383c-cfb7-4296-b410-21929ef368d8-200x.png" alt="Logo-Working-File-05-0b1f383c-cfb7-4296-b410-21929ef368d8-200x" border="0">
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 2rem 0;">
                    <h2 class="main-heading" style="
                      font-family: Montserrat, sans-serif;
                      font-size: 2rem;
                      font-weight: 600;
                      color: #6C4A6D;
                      line-height: 38px;
                      text-transform: uppercase;"
                    >
                      YOU'RE AWESOME, AND SO ARE YOUR CHOICES!
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <img src="https://i.ibb.co/mXyxpCD/Untitled-design-12.png" alt="Logo-Working-File-05-0b1f383c-cfb7-4296-b410-21929ef368d8-200x" border="0">
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 2rem 0;">
                    <div class="tag-bar-container" style="
                      display: inline-flex;"
                    >
                      <span class="tag-bar" style="
                        font-family: Karla, sans-serif;
                        font-size: 1.5rem;
                        font-weight: 500;
                        color: #fff;
                        line-height: 18px;
                        text-transform: uppercase;
                        padding: 1.8rem;
                        border-radius: 3rem;
                        background-color: #d3aed2;"
                      >
                        YOUR STYLE QUIZ RESULTS
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 1rem 0;">
                    <div style="width: 80%; text-align: center;">
                      <p class="para-text" style="
                        font-size: 1.5rem;
                        font-weight: 300;
                        color: #6C4A6D;
                        line-height: 34px;
                        letter-spacing: 1.2px;"
                      >
                        Taking all your fit and style preferences into
                        consideration, we've carefully curated some
                        looks we think you'd love, in the perfect size
                        for you!
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 1rem 0;">
                    <div style="width: 50%; text-align: center;">
                      <p class="hashtag-text" style="
                        font-size: 1.8rem;
                        font-weight: 500;
                        color: #D3AED2;
                        line-height: 35px;
                        text-transform: uppercase;"
                      >
                        #LEALOOKS FOR YOU
                        THAT ACTUALLY FIT!
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 6rem 0 2rem 0;">
                    <div class="size-tag-bar" style="
                      display: inline-flex;
                      background-color: #d3aed2;
                      justify-content: center;
                      align-items: center;
                      color: #fff;
                      padding: 1rem 2rem;
                      border-radius: 3rem;"
                    >
                      <span class="ideal-size-text" style="
                        display: flex;
                        font-size: 1.5rem;
                        font-weight: 500;
                        line-height: 24px;
                        width: 50%;
                        justify-content: center;
                        align-items: center;"
                      >
                        YOUR IDEAL SIZE
                      </span>
                      <span class="vertical-line" style="
                        display: flex;
                        border-left: 2px solid #fff;
                        height: 3rem;
                        margin: 0 1rem;
                        margin-top: auto;
                        margin-bottom: auto;"
                      ></span>
                      <span class="size-text" style="
                        display: flex;
                        font-size: 1.8rem;
                        font-weight: 600;
                        line-height: 24px;
                        width: 20%;
                        margin: auto;"
                      >
                        ${ideal_size}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 2rem 0 0.3rem 0;">
                    <div class="img-container" style="
                      display: inline-flex;
                      width: 90%;"
                    >
                      <div class="img-wrapper" style="
                        width: 33.33%;
                        min-height: 250px;
                        background-color: gray;"
                      >
                        <img src=${productUrls[0]}
                         alt="Recommend Product"
                         height="100%"
                         width="100%"
                        />
                      </div>
                      <div class="img-wrapper" style="
                        width: 33.33%;
                        min-height: 250px;
                        background-color: gray;
                        margin-left: 0.5rem;"
                      >
                        <img src=${productUrls[1]}
                         alt="Recommend Product"
                         height="100%"
                         width="100%"
                        />
                      </div>
                      <div class="img-wrapper" style="
                        width: 33.33%;
                        min-height: 250px;
                        background-color: gray;
                        margin-left: 0.5rem;"
                      >
                        <img src=${productUrls[2]}
                         alt="Recommend Product"
                         height="100%"
                         width="100%"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 0 0 2rem 0;">
                    <div class="img-container" style="
                      display: inline-flex;
                      width: 90%;"
                    >
                      <div class="img-wrapper" style="
                        width: 33.33%;
                        min-height: 250px;
                        background-color: gray;"
                      >
                        <img src=${productUrls[3]}
                         alt="Recommend Product"
                         height="100%"
                         width="100%"
                        />
                      </div>
                      <div class="img-wrapper" style="
                        width: 33.33%;
                        min-height: 250px;
                        background-color: gray;
                        margin-left: 0.5rem;"
                      >
                        <img src=${productUrls[4]}
                         alt="Recommend Product"
                         height="100%"
                         width="100%"
                        />
                      </div>
                      <div class="img-wrapper" style="
                        width: 33.33%;
                        min-height: 250px;
                        background-color: gray;
                        margin-left: 0.5rem;"
                      >
                        <img src=${productUrls[5]}
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
                      href="https://dev-store-1196.myshopify.com/pages/quiz"
                      class="style-room-link"
                      style="            
                        display: inline-flex;
                        background-color: #d3aed2;
                        color: #fff;
                        font-family: Montserrat, sans-serif;
                        font-size: 1.5rem;
                        font-weight: 600;
                        line-height: 25px;
                        text-transform: uppercase;
                        padding: 1.5rem;
                        border-radius: 3rem;
                        cursor: pointer;
                        text-decoration: none;"
                    >
                      SHOP YOUR STYLE ROOM
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 1rem 0;">
                    <a 
                      href="https://dev-store-1196.myshopify.com/pages/quiz"
                      class="retake-link"
                      style="            
                        display: inline-flex;
                        background-color: transparent;
                        color: #d3aed2;
                        font-family: Montserrat, sans-serif;
                        font-size: 1.4rem;
                        font-weight: 600;
                        line-height: 20px;
                        text-transform: uppercase;
                        padding: 1.2rem;
                        border-radius: 3rem;
                        cursor: pointer;
                        border: 3px solid;
                        text-decoration: none;"
                    >
                      RETAKE QUIZ
                    </a>
                  </td>
                </tr>
              </table>
          </body>
        <script>alert('email sent')</script>
      </html>
      `,
    });

    console.log("Message sent: %s", info.messageId);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("[ERROR]: ", error);
    res.status(400).send("Email not sent");
  }
});

export default router;
