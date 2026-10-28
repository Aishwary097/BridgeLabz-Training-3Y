"use strict";

function mountMovieBookingForm() {
  const root = document.createElement("main");
  root.innerHTML = `
    <form class="movie-form" novalidate>
      <h1>Movie Ticket Booking</h1>
      <label>Name<input name="name" autocomplete="name" required></label>
      <label>Email<input name="email" type="email" autocomplete="email" required></label>
      <label>Seats<input name="seats" type="number" min="1" max="10" value="1" required></label>
      <button type="submit">Book tickets</button>
      <p class="booking-message" aria-live="polite"></p>
    </form>`;
  const style = document.createElement("style");
  style.textContent = ".movie-form{max-width:440px;margin:40px auto;padding:28px;border:1px solid #dce3eb;border-radius:16px;font:16px/1.5 Arial,sans-serif;box-shadow:0 12px 36px #152c4515}.movie-form h1{margin-top:0}.movie-form label{display:block;margin:16px 0}.movie-form input{box-sizing:border-box;display:block;width:100%;margin-top:6px;padding:11px;border:1px solid #cbd5e1;border-radius:8px}.movie-form button{padding:11px 18px;border:0;border-radius:8px;background:#173f74;color:white;font-weight:700}.booking-message{white-space:pre-line}";
  document.head.append(style);
  document.body.append(root);

  const form = root.querySelector("form");
  const message = root.querySelector(".booking-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const seats = Number(form.elements.seats.value);
    const errors = [];

    if (!/^[A-Za-z]+(?:[ '\u2019-][A-Za-z]+)*$/.test(name)) {
      errors.push("Name must contain only letters and spaces.");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Enter a valid email address.");
    }
    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
      errors.push("Choose between 1 and 10 seats.");
    }

    if (errors.length > 0) {
      message.textContent = errors.join("\n");
      message.style.color = "#cf3345";
      return;
    }

    const booking = { name, email, seats };
    message.textContent = `Booking confirmed\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
    message.style.color = "#16834b";
    console.log("Ticket booking:", booking);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountMovieBookingForm, { once: true });
} else {
  mountMovieBookingForm();
}
