"use client";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import styles from "./ContactForm.module.scss";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  honeypot: "",
};

function validate(form) {
  const errors = {};
  if (!form.name.trim() || form.name.trim().length < 2 || !/^[a-zA-Z\s]+$/.test(form.name.trim())) {
    errors.name = "Name must be at least 2 characters and contain only letters.";
  }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (form.company.trim() && !/^[a-zA-Z0-9\s]+$/.test(form.company.trim())) {
    errors.company = "Company must contain only letters, numbers, and spaces.";
  }
  if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim())) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }
  if (!form.message.trim() || form.message.trim().length < 10 || !/^[a-zA-Z0-9\s.,!?'"\-]+$/.test(form.message.trim())) {
    errors.message = "Message must be at least 10 characters and contain no special characters.";
  }
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [serverError, setServerError] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    let recaptchaToken = "";
    if (executeRecaptcha) {
      try {
        recaptchaToken = await executeRecaptcha("contact_form");
      } catch {
        setServerError("reCAPTCHA verification failed. Please try again.");
        setStatus("idle");
        return;
      }
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }

      setStatus("success");
    } catch {
      setServerError("Network error. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className={styles["contact-form__card"]}>
        <div className={styles["contact-form__success"]}>
          <h2 className={styles["contact-form__success-title"]}>Thank you!</h2>
          <p className={styles["contact-form__success-message"]}>
            Your message has been sent. We&apos;ll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["contact-form__card"]}>
      <h2 className={styles["contact-form__title"]}>Get in touch with us</h2>

      <form
        className={styles["contact-form"]}
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Honeypot — visually hidden, bots fill it */}
        <div className={styles["contact-form__honeypot"]} aria-hidden="true">
          <label htmlFor="honeypot">Leave this empty</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Name + Email */}
        <div className={styles["contact-form__row"]}>
          <div className={styles["contact-form__field"]}>
            <input
              className={errors.name ? styles["contact-form__input--error"] : styles["contact-form__input"]}
              type="text"
              id="name"
              name="name"
              placeholder="Your Name*"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className={styles["contact-form__error"]}>{errors.name}</span>
            )}
          </div>
          <div className={styles["contact-form__field"]}>
            <input
              className={errors.email ? styles["contact-form__input--error"] : styles["contact-form__input"]}
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className={styles["contact-form__error"]}>{errors.email}</span>
            )}
          </div>
        </div>

        {/* Row 2: Phone + Company */}
        <div className={styles["contact-form__row"]}>
          <div className={styles["contact-form__field"]}>
            <input
              className={errors.phone ? styles["contact-form__input--error"] : styles["contact-form__input"]}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number*"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className={styles["contact-form__error"]}>{errors.phone}</span>
            )}
          </div>
          <div className={styles["contact-form__field"]}>
            <input
              className={errors.company ? styles["contact-form__input--error"] : styles["contact-form__input"]}
              type="text"
              id="company"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
            />
            {errors.company && (
              <span className={styles["contact-form__error"]}>{errors.company}</span>
            )}
          </div>
        </div>

        {/* Message */}
        <div className={styles["contact-form__field"]}>
          <textarea
            className={errors.message ? styles["contact-form__textarea--error"] : styles["contact-form__textarea"]}
            id="message"
            name="message"
            placeholder="Your Message*"
            rows={5}
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && (
            <span className={styles["contact-form__error"]}>
              {errors.message}
            </span>
          )}
        </div>

        {serverError && (
          <p className={styles["contact-form__server-error"]}>{serverError}</p>
        )}

        {/* Footer: Submit button */}
        <div className={styles["contact-form__footer"]}>
          <button
            className={styles["contact-form__submit"]}
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
