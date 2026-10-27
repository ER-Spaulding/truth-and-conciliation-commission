export const metadata = {
  title: "Contact Us | Truth & Conciliation Commission",
  description:
    "Contact the Truth & Conciliation Commission in Chicago, IL using the form below.",
};

export default function ContactPage() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>
        We welcome your message. Please use the form below to get in touch with
        the Truth &amp; Conciliation Commission.
      </p>
      <p>
        Email: <a href="mailto:contact@the-tacc.org">contact@the-tacc.org</a>
      </p>
      <p className="placeholder">
        [Placeholder] Phone: [Placeholder] — Mailing address: Chicago, IL
        [Placeholder — street address not supplied] — Social media:
        [Placeholder]
      </p>
      <p>
        The form collects First Name, Last Name, Email, and Phone, as submitted
        by you. See our <a href="/privacy">Privacy Policy</a> for details.
      </p>
      <div className="form-wrap">
        <iframe
          src="https://www.blackwomanstartuplinks.com/widget/form/AGadoN9OYCkV9hokPKIo"
          style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          id="inline-AGadoN9OYCkV9hokPKIo"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Contact Page | TCC"
          data-height="1037"
          data-layout-iframe-id="inline-AGadoN9OYCkV9hokPKIo"
          data-form-id="AGadoN9OYCkV9hokPKIo"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="Contact Page | TCC"
        ></iframe>
        <script src="https://www.blackwomanstartuplinks.com/js/form_embed.js"></script>
      </div>
    </>
  );
}
