"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/content";

type Status = "idle" | "sending" | "ready" | "error";

type Letter = {
  subject: string;
  body: string;
};

const initial = {
  name: "",
  email: "",
  project: "",
  message: "",
  company: "",
};

export function Contact() {
  const [fields, setFields] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [letter, setLetter] = useState<Letter | null>(null);
  const [error, setError] = useState("");

  const update = (key: keyof typeof initial, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(fields),
      });
      const payload = (await response.json()) as { letter?: Letter; error?: string };
      if (!response.ok || !payload.letter) {
        setStatus("error");
        setError(payload.error ?? "The letter could not be prepared.");
        return;
      }
      setLetter(payload.letter);
      setStatus("ready");
      try {
        await navigator.clipboard.writeText(`${payload.letter.subject}\n\n${payload.letter.body}`);
      } catch {
        setError("The letter is ready below. Clipboard access was blocked.");
      }
    } catch {
      setStatus("error");
      setError("The letter could not be prepared. You can still write through GitHub.");
    }
  };

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="section-head">
        <p>03 — Contact</p>
        <h2 id="contact-title">Begin a conversation.</h2>
      </div>
      <div className="contact-grid">
        <div>
          <p className="section-lead">
            Tell me what you are making. This form does not store a copy. It prepares a letter on your machine, then you can send it from your own mail or continue on GitHub.
          </p>
          <a className="text-link" href={profile.github} rel="noreferrer">
            github.com/torquefoysal-art
          </a>
        </div>
        <form onSubmit={onSubmit} noValidate>
          <label className="field">
            <span>Your name</span>
            <input
              name="name"
              autoComplete="name"
              required
              maxLength={80}
              value={fields.name}
              onChange={(event) => update("name", event.target.value)}
            />
          </label>
          <label className="field">
            <span>Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={120}
              value={fields.email}
              onChange={(event) => update("email", event.target.value)}
            />
          </label>
          <label className="field">
            <span>The work</span>
            <input
              name="project"
              required
              maxLength={120}
              value={fields.project}
              onChange={(event) => update("project", event.target.value)}
            />
          </label>
          <label className="field">
            <span>A note</span>
            <textarea
              name="message"
              required
              maxLength={2000}
              rows={5}
              value={fields.message}
              onChange={(event) => update("message", event.target.value)}
            />
          </label>
          <div className="honey" aria-hidden="true">
            Company
            <input
              tabIndex={-1}
              autoComplete="off"
              value={fields.company}
              onChange={(event) => update("company", event.target.value)}
            />
          </div>
          <button className="button" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Preparing" : "Compose the letter"}
          </button>
          {error ? <p className="form-note">{error}</p> : null}
          {status === "ready" && letter ? (
            <div className="letter" role="status">
              <p>The letter is ready{error ? "." : " and copied."}</p>
              <pre>{letter.body}</pre>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
