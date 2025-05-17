
const Faq = () => {
    const faqs = [
        {
            question: 'What is the return policy?',
            answer: 'You can return the product within 30 days of delivery.',
        },
        {
            question: 'Is the t-shirt true to size?',
            answer: 'Yes, the fit is as expected based on standard size charts.',
        },
        {
            question: 'Do you ship internationally?',
            answer: 'Yes, we offer worldwide shipping with varying delivery times.',
        },
    ];

    return (
        <div className="p-6 bg-white rounded-md shadow space-y-4">
            <h2 className="text-lg font-semibold mb-4">FAQs</h2>
            {faqs.map((faq, index) => (
                <div key={index}>
                    <h3 className="font-medium text-gray-900">{faq.question}</h3>
                    <p className="text-sm text-gray-700">{faq.answer}</p>
                </div>
            ))}
        </div>
    );
}

export default Faq