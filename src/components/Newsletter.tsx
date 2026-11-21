"use client";

import { useState } from "react";

/**
 * Newsletter signup.
 * TODO: connect this to an email service (for example Buttondown, Mailchimp
 * or ConvertKit). Until then it only shows a thank-you message and doesn't
 * save the email address anywhere.
 */
export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6" aria-labelledby="news-heading">
      <div className="rounded-[2rem] bg-sand-100 p-8 text-center sm:p-12">
        <h2 id="news-heading" className="font-display text-3xl font-extrabold">Get the beach report</h2>
        <p className="mx-auto mt-2 max-w-lg text-ink/70">
          New gear, seasonal deals and packing tips. About once a month, never spammy.
        </p>
        {done ? (
          <p className="mt-6 font-semibold text-ocean-700" role="status">
            Thanks! You&apos;re on the list. 🌊
          </p>
        ) : (
          <form
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <label htmlFor="news-email" className="sr-only">Email address</label>
            <input
              id="news-email"
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-ink/10 bg-white px-5 py-3 outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100"
            />
            <button className="rounded-full bg-ocean-600 px-6 py-3 font-semibold text-white hover:bg-ocean-700">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
