import LegalLayout from "@/components/LegalLayout";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <LegalLayout title="Privacy Policy">
            <div className="space-y-10">
                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Introduction</h2>
                    <p>
                        At Bongo Productions GH, we respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">The Data We Collect</h2>
                    <p>
                        Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Financial Data:</strong> includes bank account and payment card details.</li>
                        <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">How We Use Your Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation in Ghana.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Data Protection in Ghana</h2>
                    <p>
                        Our operations follow the <strong>Data Protection Act 2012 (Act 843)</strong> of Ghana. We ensure that your data is processed lawfully, fairly, and in a transparent manner. Your information is protected against unauthorized or unlawful processing and against accidental loss, destruction, or damage.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Your Legal Rights</h2>
                    <p>
                        Under certain circumstances, you have rights under the Data Protection Act in relation to your personal data, including the right to request access, correction, erasure, or restriction of your personal data.
                    </p>
                    <p className="mt-4">
                        If you wish to exercise any of the rights set out above, please <Link to="/contact" className="text-primary font-bold hover:underline">contact us</Link>.
                    </p>
                </section>
            </div>
        </LegalLayout>
    );
};

export default PrivacyPolicy;
