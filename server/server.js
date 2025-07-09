const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ Scale Forge Backend is Live!");
});


// Route to handle contact form email
app.post("/send-email", async (req, res) => {
  const { name, email, phone, service, message } = req.body;
  const clientEmailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - Scale Forge Digital Solutions</title>
      <style>
        body { 
          font-family: 'Arial', sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0;
          background-color: #f4f4f4;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white; 
          border-radius: 10px; 
          overflow: hidden; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #dc2626, #ef4444); 
          color: white; 
          padding: 30px 20px; 
          text-align: center; 
        }
        .header h1 { 
          margin: 0; 
          font-size: 26px; 
          font-weight: bold; 
        }
        .content { 
          padding: 30px 20px; 
        }
        .highlight { 
          background: linear-gradient(135deg, #fef2f2, #fee2e2); 
          padding: 20px; 
          border-radius: 10px; 
          margin: 20px 0; 
          border-left: 4px solid #dc2626;
        }
        .highlight h3 { 
          margin: 0 0 10px 0; 
          color: #dc2626; 
          font-size: 18px; 
        }
        .steps { 
          background: #f8f9fa; 
          padding: 20px; 
          border-radius: 10px; 
          margin: 20px 0; 
        }
        .steps h3 { 
          margin: 0 0 15px 0; 
          color: #333; 
        }
        .steps ul { 
          margin: 0; 
          padding-left: 0; 
          list-style: none; 
        }
        .steps li { 
          margin: 10px 0; 
          padding: 10px 15px; 
          background: white; 
          border-radius: 5px; 
          border-left: 3px solid #dc2626; 
        }
        .contact-section { 
          background: #333; 
          color: white; 
          padding: 20px; 
          border-radius: 10px; 
          margin: 20px 0; 
          text-align: center; 
        }
        .contact-section h3 { 
          margin: 0 0 15px 0; 
          color: #dc2626; 
        }
        .contact-section a { 
          color: #dc2626; 
          text-decoration: none; 
          font-weight: bold; 
        }
        .footer { 
          background: #333; 
          color: white; 
          padding: 20px; 
          text-align: center; 
          font-size: 12px; 
        }
        .social-links { 
          margin: 15px 0; 
        }
        .social-links a { 
          color: #dc2626; 
          text-decoration: none; 
          margin: 0 10px; 
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Thank You, ${name}!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Your request has been successfully submitted</p>
        </div>
        
        <div class="content">
          <p style="font-size: 16px; margin-bottom: 20px;">
            Dear <strong>${name}</strong>,
          </p>
          
          <div class="highlight">
            <h3>✅ Your request has been successfully submitted!</h3>
            <p style="margin: 0;">Our team has received your inquiry and is already reviewing your requirements. We're excited to help transform your business digitally!</p>
          </div>
          
          <div class="steps">
            <h3>📋 What happens next?</h3>
            <ul>
              <li><strong>📧 Initial Review:</strong> Our team will analyze your requirements within 2-4 hours</li>
              <li><strong>📞 Personal Contact:</strong> We'll reach out via email or WhatsApp within 24 hours</li>
              <li><strong>💡 Custom Solution:</strong> We'll provide a tailored proposal for your specific needs</li>
              <li><strong>🚀 Project Kickoff:</strong> Once approved, we'll begin transforming your vision into reality</li>
            </ul>
          </div>
          
          <div class="contact-section">
            <h3>🆘 Need Immediate Assistance?</h3>
            <p style="margin: 15px 0;">We're here to help! Contact us directly:</p>
            <p>
              📱 <strong>WhatsApp:</strong> 
              <a href="https://wa.me/919361757753">+91 93617 57753</a> | 
              <a href="https://wa.me/919677475924">+91 96774 75924</a>
            </p>
            <p>📧 <strong>Email:</strong> <a href="mailto:scaleforge.services@gmail.com">scaleforge.services@gmail.com</a></p>
            <p>💬 <strong>Telegram:</strong> <a href="https://t.me/scaleforge_support">@scaleforge_support</a></p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="font-size: 18px; color: #dc2626; font-weight: bold;">
              🌟 Thank you for choosing Scale Forge Digital Solutions!
            </p>
            <p style="margin: 10px 0; color: #666;">
              We're committed to delivering exceptional results that scale your business to new heights.
            </p>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>Scale Forge Digital Solutions</strong></p>
          <p>Transforming Businesses Digitally | Chennai, Tamil Nadu</p>
          
          <div class="social-links">
            <a href="mailto:scaleforge.services@gmail.com">Email</a> |
            <a href="https://wa.me/919361757753">WhatsApp</a> |
            <a href="https://t.me/scaleforge_support">Telegram</a>
          </div>
          
          <p style="margin-top: 15px; font-size: 11px; opacity: 0.8;">
            © 2024 Scale Forge Digital Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
   const adminEmailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - Scale Forge</title>
      <style>
        body { 
          font-family: 'Arial', sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0;
          background-color: #f4f4f4;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white; 
          border-radius: 10px; 
          overflow: hidden; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #dc2626, #ef4444); 
          color: white; 
          padding: 30px 20px; 
          text-align: center; 
        }
        .header h1 { 
          margin: 0; 
          font-size: 24px; 
          font-weight: bold; 
        }
        .content { 
          padding: 30px 20px; 
          background: #ffffff; 
        }
        .detail-box { 
          background: #f8f9fa; 
          padding: 15px 20px; 
          margin: 15px 0; 
          border-left: 4px solid #dc2626; 
          border-radius: 5px;
        }
        .detail-box strong { 
          color: #dc2626; 
          display: inline-block; 
          min-width: 120px; 
        }
        .priority-notice { 
          background: #fff3cd; 
          border: 1px solid #ffeaa7; 
          color: #856404; 
          padding: 15px; 
          border-radius: 5px; 
          margin: 20px 0; 
          text-align: center; 
          font-weight: bold;
        }
        .footer { 
          background: #333; 
          color: white; 
          padding: 20px; 
          text-align: center; 
          font-size: 12px; 
        }
        .footer a { 
          color: #dc2626; 
          text-decoration: none; 
        }
        .contact-info { 
          margin-top: 10px; 
        }
        .contact-info span { 
          margin: 0 15px; 
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 New Lead from Scale Forge Website</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">High Priority Contact Form Submission</p>
        </div>
        
        <div class="content">
          <h2 style="color: #333; margin-bottom: 20px;">Contact Information</h2>
          
          <div class="detail-box">
            <strong>👤 Name:</strong> ${name}
          </div>
          
          <div class="detail-box">
            <strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #dc2626;">${email}</a>
          </div>
          
          ${phone ? `
          <div class="detail-box">
            <strong>📱 Phone:</strong> <a href="tel:${phone}" style="color: #dc2626;">${phone}</a>
          </div>
          ` : ''}
          
          ${service ? `
          <div class="detail-box">
            <strong>🔧 Service Interest:</strong> ${service}
          </div>
          ` : ''}
          
          <div class="detail-box">
            <strong>💬 Message:</strong><br>
            <div style="margin-top: 10px; padding: 10px; background: white; border-radius: 5px; border: 1px solid #e0e0e0;">
              ${message}
            </div>
          </div>
          
          <div class="priority-notice">
            ⚡ Follow up within 2 hours for best conversion rates!
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 5px;">
            <h3 style="margin: 0 0 15px 0; color: #333;">Recommended Next Steps:</h3>
            <ul style="margin: 0; padding-left: 20px; color: #666;">
              <li>📞 Call the prospect within 2 hours</li>
              <li>📧 Send a personalized email with relevant portfolio samples</li>
              <li>💼 Prepare a custom proposal based on their service interest</li>
              <li>📅 Schedule a discovery call if it's a complex project</li>
            </ul>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>Scale Forge Digital Solutions</strong></p>
          <p>Transforming Businesses Digitally</p>
          <div class="contact-info">
            <span>📧 <a href="mailto:scaleforge.services@gmail.com">scaleforge.services@gmail.com</a></span>
            <span>📱 <a href="tel:+919361757753">+91 93617 57753</a></span>
          </div>
          <p style="margin-top: 15px; font-size: 11px; opacity: 0.8;">
            Auto-generated from website contact form • ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,     // your Gmail
        pass: process.env.EMAIL_PASS      // app password
      }
    });
    

    const mailOptions1 = {
      from: `"Request Scale Forge Services" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Scale Forge Service Request (Website)!`,
      html: adminEmailContent
    };

    const mailOptions = {
      from: `${process.env.EMAIL_USER}`,
      to: email,
      subject: `Thanks for contacting Scale Forge!`,
      html: clientEmailContent
    };
 
    await transporter.sendMail(mailOptions1);
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
