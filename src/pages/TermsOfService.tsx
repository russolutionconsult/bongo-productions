import React from "react";
import LegalLayout from "@/components/LegalLayout";
import { Link } from "react-router-dom";

const TermsOfService = () => {
    return (
        <LegalLayout title="Terms of Service">
            <div className="space-y-10">
                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Agreement to Terms</h2>
                    <p>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Bongo Productions GH (“we,” “us” or “our”), concerning your access to and use of our website.
                    </p>
                    <p className="mt-4">
                        You agree that by accessing the site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the site.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Accounts and Registration</h2>
                    <p>
                        You may be required to register with the site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Purchases and Payments</h2>
                    <p>
                        We accept the following forms of payment:
                    </p>
                    <ul className="list-disc pl-6 mt-4 font-bold text-gray-800">
                        <li>Mobile Money (MTN MoMo, Vodafone Cash, AirtelTigo Money)</li>
                        <li>Visa/Mastercard via secure payment gateways</li>
                        <li>Bank Transfers for large orders</li>
                    </ul>
                    <p className="mt-4">
                        You agree to provide current, complete, and accurate purchase and account information for all purchases made via the site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Governing Law</h2>
                    <p>
                        These Terms of Service and your use of the site are governed by and construed in accordance with the laws of the Republic of Ghana, without regard to its conflict of law principles.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Changes to Terms</h2>
                    <p>
                        We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Contact Us</h2>
                    <p>
                        In order to resolve a complaint regarding the site or to receive further information regarding use of the site, please contact us at:
                        <br />
                        <strong>Bongo Productions GH</strong>
                        <br />
                        Accra, Ghana
                        <br />
                        Email: <a href="mailto:info@bongoproductions.com.gh" className="text-primary font-bold hover:underline">info@bongoproductions.com.gh</a>
                    </p>
                </section>
            </div>
        </LegalLayout>
    );
};

export default TermsOfService;
