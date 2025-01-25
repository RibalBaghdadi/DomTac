import nodemailer from 'nodemailer';

const sendContactFormEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Set up the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other email services (e.g., SendGrid)
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Define email options
    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL, // The email address to send the form to
      subject: `Contact Us Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Failed to send message.' });
  }
};

export { sendContactFormEmail };
