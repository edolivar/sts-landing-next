function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "Is this company a subsidiary of Call-a-Tek?",
      answer:
        "Yes, we are a subsidiary of Call-a-Tek, and our operations are managed by the same CEO.",
    },
    {
      id: 2,
      question: "What type of services do you offer?",
      answer:
        "We offer a wide range of services, including IT Department Help Desk support, secure SFTP solutions, phishing tests, managed VoIP, and cybersecurity services, all tailored to meet your specific business needs.",
    },
    {
      id: 3,
      question: "Do you provide ongoing IT support?",
      answer:
        "Yes, we provide continuous IT support with 24/7 access to our help desk and experts who are ready to assist with any IT or cybersecurity concerns.",
    },
    {
      id: 4,
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Reach out to us, and we'll schedule a consultation to understand your needs. From there, we’ll customize a service package and provide pricing details tailored to your business.",
    },
    {
      id: 5,
      question: "What industries do you serve?",
      answer:
        "We serve businesses across various industries, including healthcare, finance, education, and retail, with a focus on security and reliability in every sector.",
    },
    // Add more questions as needed...
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-12 lg:px-8 lg:py-8">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h2>
        <dl className="mt-20 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">{faq.question}</dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default FAQ
