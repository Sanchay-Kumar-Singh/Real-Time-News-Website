export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center text-sm px-4 mt-20">
      
      {/* Heading */}
      <p className="text-lg text-blue-600 font-medium pb-2">Contact Us</p>
      <h1 className="text-4xl font-semibold text-slate-700 pb-4 text-center">
        Get in touch with us
      </h1>
      <p className="text-sm text-gray-500 text-center pb-10">
        Feel free to reach out for any queries, support, or collaboration.<br />
        We usually reply within a few hours.
      </p>

      {/* FORM CARD */}
      <form
        method="post"
        action="https://api.web3forms.com/submit"
        className="flex flex-col items-center text-sm w-full"
      >
        {/* Required API Key */}
        <input
          type="hidden"
          name="access_key"
          value="17067777-eb0c-4d4b-8039-e3b51331296e"
        />

        {/* NAME + EMAIL GRID */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          
          <div className="w-full">
            <label className="text-black/70">Your Name</label>
            <input
              name="name"
              required
              type="text"
              placeholder="Enter your name"
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300 transition"
            />
          </div>

          <div className="w-full">
            <label className="text-black/70">Your Email</label>
            <input
              name="email"
              required
              type="email"
              placeholder="Enter your email"
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300 transition"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-6 w-[350px] md:w-[700px]">
          <label className="text-black/70">Message</label>
          <textarea
            name="message"
            required
            placeholder="Write your message..."
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300 transition"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-6 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition hover:bg-indigo-700 shadow"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
