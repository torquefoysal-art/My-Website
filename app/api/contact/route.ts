import { NextResponse } from "next/server";

type Letter = {
  subject: string;
  body: string;
};

const limits = {
  name: 80,
  email: 120,
  project: 120,
  message: 2000,
} as const;

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Send the letter as JSON." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "The letter was empty." }, { status: 400 });
  }

  const input = payload as Record<string, unknown>;
  if (clean(input.company, 80)) {
    const letter: Letter = {
      subject: "Letter for Foysal Islam",
      body: "Received.",
    };
    return NextResponse.json({ letter });
  }

  const name = clean(input.name, limits.name);
  const email = clean(input.email, limits.email);
  const project = clean(input.project, limits.project);
  const message = typeof input.message === "string" ? input.message.trim().slice(0, limits.message) : "";

  if (name.length < 2) {
    return NextResponse.json({ error: "Add your name." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Add a valid email." }, { status: 400 });
  }
  if (project.length < 2) {
    return NextResponse.json({ error: "Say a little about the work." }, { status: 400 });
  }
  if (message.length < 8) {
    return NextResponse.json({ error: "The note is too short." }, { status: 400 });
  }

  const letter: Letter = {
    subject: `Project note from ${name}`,
    body: [`From: ${name} <${email}>`, `Work: ${project}`, "", message].join("\n"),
  };

  return NextResponse.json({ letter });
}
