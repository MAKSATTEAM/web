import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(express.json({ limit: "200kb" }));

const smtpHost = process.env.SMTP_HOST || "";
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = process.env.SMTP_SECURE === "true";
const smtpUser = process.env.SMTP_USER || "";
const smtpPass = process.env.SMTP_PASS || "";

const contactTo = process.env.CONTACT_TO || "rk@maksat.pro";
const contactFrom = process.env.CONTACT_FROM || process.env.SMTP_FROM || smtpUser;

const transporter = smtpHost
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
    })
  : null;

app.post("/api/contact", async (req, res) => {
  const getValue = (value) => (typeof value === "string" ? value.trim() : "");
  const firstName = getValue(req.body?.firstName);
  const lastName = getValue(req.body?.lastName);
  const email = getValue(req.body?.email);
  const interest = getValue(req.body?.interest);
  const message = getValue(req.body?.message);

  if (!email || !message) {
    return res.status(400).json({ ok: false, message: "Email and message are required." });
  }

  const emailPattern = /.+@.+\..+/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ ok: false, message: "Please provide a valid email." });
  }

  if (!transporter || !contactFrom) {
    return res.status(500).json({ ok: false, message: "Email service is not configured." });
  }

  const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "-";
  const userAgent = req.headers["user-agent"] || "-";

  const text = [
    "New contact form submission",
    "",
    `First name: ${firstName || "-"}`,
    `Last name: ${lastName || "-"}`,
    `Email: ${email || "-"}`,
    `Interest area: ${interest || "-"}`,
    "",
    "Message:",
    message,
    "",
    `IP: ${ipAddress}`,
    `User agent: ${userAgent}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: contactFrom,
      to: contactTo,
      replyTo: email,
      subject: "Contact form submission",
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return res.status(500).json({ ok: false, message: "Failed to send email." });
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const indexHtml = path.join(distDir, "index.html");

if (fs.existsSync(distDir) && fs.existsSync(indexHtml)) {
  app.use(express.static(distDir));
  app.get("*", (req, res) => {
    res.sendFile(indexHtml);
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
