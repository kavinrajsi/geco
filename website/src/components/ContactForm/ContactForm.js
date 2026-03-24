"use client";

import { useState, useRef } from "react";
import styles from "./ContactForm.module.scss";

const initialForm = {
  "Last Name": "",
  Email: "",
  Mobile: "",
  Company: "",
  Description: "",
};

function validate(form) {
  const errors = {};
  if (
    !form["Last Name"].trim() ||
    form["Last Name"].trim().length < 3 ||
    !/^[a-zA-Z\s]+$/.test(form["Last Name"].trim())
  ) {
    errors["Last Name"] =
      "Name must be at least 3 characters and contain only letters.";
  }
  if (
    form.Email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.Email)
  ) {
    errors.Email = "Please enter a valid email address.";
  }
  if (
    form.Company.trim() &&
    !/^[a-zA-Z0-9\s]+$/.test(form.Company.trim())
  ) {
    errors.Company = "Company must contain only letters, numbers, and spaces.";
  }
  if (!form.Mobile.trim() || !/^\d{10}$/.test(form.Mobile.trim())) {
    errors.Mobile = "Please enter a valid 10-digit phone number.";
  }
  if (
    !form.Description.trim() ||
    form.Description.trim().length < 10
  ) {
    errors.Description = "Message must be at least 10 characters.";
  }
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const formRef = useRef(null);

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

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    // Submit via hidden iframe to avoid redirect
    const iframe = document.createElement("iframe");
    iframe.name = "zoho_submit_frame";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const nativeForm = formRef.current;
    nativeForm.target = "zoho_submit_frame";
    nativeForm.submit();

    // Show success after a brief delay
    setTimeout(() => {
      setStatus("success");
      document.body.removeChild(iframe);
    }, 2000);
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
        ref={formRef}
        className={styles["contact-form"]}
        action="https://crm.zoho.in/crm/WebToLeadForm"
        method="POST"
        acceptCharset="UTF-8"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Zoho hidden fields — Do not remove */}
        <input type="hidden" name="xnQsjsdp" value="1579facf6ddd3e40505f6961ceecb2843d6dbfa3dd93e8fb6601fe72fe42dfbf" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="hidden" name="xmIwtLD" value="13d988973c391fe6685def9be0587e38a622b7a4cb211366c8a3097a78fc33616d59b19459219d523ac090aeed6fee61" />
        <input type="hidden" name="actionType" value="TGVhZHM=" />
        <input type="hidden" name="returnURL" value="null" />

        {/* Default values */}
        <input type="hidden" name="Lead Status" value="Raw leads" />
        <input type="hidden" name="LEADCF18" value="Geco Website" />
        <input type="hidden" name="Lead Source" value="Website" />
        <input type="hidden" name="LEADCF15" value="GECO" />

        {/* Honeypot — Do not remove */}
        <div className={styles["contact-form__honeypot"]} aria-hidden="true">
          <input type="text" name="aG9uZXlwb3Q" defaultValue="" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Row 1: Name + Email */}
        <div className={styles["contact-form__row"]}>
          <div className={styles["contact-form__field"]}>
            <input
              className={errors["Last Name"] ? styles["contact-form__input--error"] : styles["contact-form__input"]}
              type="text"
              id="Last_Name"
              name="Last Name"
              placeholder="Your Name*"
              maxLength={80}
              value={form["Last Name"]}
              onChange={handleChange}
            />
            {errors["Last Name"] && (
              <span className={styles["contact-form__error"]}>{errors["Last Name"]}</span>
            )}
          </div>
          <div className={styles["contact-form__field"]}>
            <input
              className={errors.Email ? styles["contact-form__input--error"] : styles["contact-form__input"]}
              type="email"
              id="Email"
              name="Email"
              placeholder="Your Email"
              maxLength={100}
              value={form.Email}
              onChange={handleChange}
            />
            {errors.Email && (
              <span className={styles["contact-form__error"]}>{errors.Email}</span>
            )}
          </div>
        </div>

        {/* Row 2: Phone + Company */}
        <div className={styles["contact-form__row"]}>
          <div className={styles["contact-form__field"]}>
            <input
              className={errors.Mobile ? styles["contact-form__input--error"] : styles["contact-form__input"]}
              type="tel"
              id="Mobile"
              name="Mobile"
              placeholder="Phone Number*"
              maxLength={30}
              value={form.Mobile}
              onChange={handleChange}
            />
            {errors.Mobile && (
              <span className={styles["contact-form__error"]}>{errors.Mobile}</span>
            )}
          </div>
          <div className={styles["contact-form__field"]}>
            <input
              className={errors.Company ? styles["contact-form__input--error"] : styles["contact-form__input"]}
              type="text"
              id="Company"
              name="Company"
              placeholder="Company"
              maxLength={200}
              value={form.Company}
              onChange={handleChange}
            />
            {errors.Company && (
              <span className={styles["contact-form__error"]}>{errors.Company}</span>
            )}
          </div>
        </div>

        {/* Message */}
        <div className={styles["contact-form__field"]}>
          <textarea
            className={errors.Description ? styles["contact-form__textarea--error"] : styles["contact-form__textarea"]}
            id="Description"
            name="Description"
            placeholder="Your Message*"
            rows={5}
            value={form.Description}
            onChange={handleChange}
          />
          {errors.Description && (
            <span className={styles["contact-form__error"]}>
              {errors.Description}
            </span>
          )}
        </div>

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
