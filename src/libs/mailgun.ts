// Mailgun stub implementation
const sendEmail = async (params: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) => {
  console.log("Mailgun not configured, skipping email send");
  return Promise.resolve();
};

export { sendEmail };

