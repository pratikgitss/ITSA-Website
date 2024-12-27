import React from "react";

export default function Faq() {
  return (
    <div>
      <section className="text-gray-700">
        <div className="container mx-auto px-5">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-10 text-center"
          >
            <h1 className="title-font mb-4 text-center text-5xl font-bold text-teal-600 sm:text-3xl">
              Frequently Asked Questions
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5"
          >
            <div className="w-full px-4 py-2 lg:w-1/2">
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 py-5 px-5 font-semibold">
                  Who can become a member?
                </summary>
                <p className="pl-4 pt-4 text-left">
                  There is not any membership criteria! Anyone who is willing to
                  learn and develop their skills in the field of programming can
                  become a member.
                </p>
              </details>
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 py-5 px-4 font-semibold">
                  What should I carry when attending a workshop?
                </summary>
                <p className="pl-4 pt-4 text-left antialiased">
                  We recommend you to carry with you a notebook, pen, and laptop
                  because more often than not, we get our hands dirty with code.
                  Most importantly, bring along a healthy dose of curiosity and
                  enthusiasm.
                </p>
              </details>
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 py-5 px-4 font-semibold">
                  Can I attend workshops if I am not a member?
                </summary>
                <p className="pl-4 pt-4 text-left antialiased">
                  Absolutely! Our workshops and events are open to everyone.
                  However, becoming a member gives you exclusive access to
                  resources, mentorship, and advanced sessions.
                </p>
              </details>
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 py-5 px-4 font-semibold">
                  Do I need prior coding knowledge to join?
                </summary>
                <p className="pl-4 pt-4 text-left antialiased">
                  No, you don't need any prior coding knowledge. Our events and
                  workshops cater to all levels, from beginners to advanced
                  learners.
                </p>
              </details>
            </div>
            <div className="w-full px-4 py-2 lg:w-1/2">
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 py-5 px-5 font-semibold">
                  How frequently do events and workshops occur?
                </summary>
                <p className="pl-4 pt-4 text-left antialiased">
                  We organize a lot of events and workshops throughout the year,
                  from programming bootcamps to various contests and speaker
                  sessions.
                </p>
              </details>
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 py-5 px-5 font-semibold">
                  Who should I reach out to if I have any questions?
                </summary>
                <p className="pl-4 pt-4 text-left antialiased">
                  We have an extended management system. You can always reach
                  out to us anytime through our Social media platforms. Despite
                  this, Discord is our first priority. We would love to handle
                  queries and see your comments and suggestions there.
                </p>
              </details>
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 py-5 px-4 font-semibold">
                  Is there any fee to join the ITSA?
                </summary>
                <p className="pl-4 pt-4 text-left antialiased">
                  No, there is no joining fee. ITSA is a community-driven
                  initiative that is open to all IT students.
                </p>
              </details>
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 py-5 px-4 font-semibold">
                  How do I stay updated with the latest events?
                </summary>
                <p className="pl-4 pt-4 text-left antialiased">
                  You can stay updated by following us on social media and
                  joining our Discord server. We regularly post updates and
                  announcements there.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
