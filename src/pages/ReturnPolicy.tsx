import React from "react";
import LegalLayout from "@/components/LegalLayout";
import { Link } from "react-router-dom";

const ReturnPolicy = () => {
    return (
        <LegalLayout title="Return Policy">
            <div className="space-y-10">
                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Refund Policy</h2>
                    <p>
                        We standing by our products and services. If you are not completely satisfied with your purchase, we’re here to help.
                    </p>
                    <p className="mt-4">
                        Items must be returned within <strong>7 days</strong> of the date of purchase (or receipt of order) with proof of purchase. The item must be unused and in the same condition as received, and in the original packaging.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Eligible Items for Returns</h2>
                    <p>
                        Return or refund is only available for the following cases:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 font-bold text-gray-800">
                        <li>Item is damaged upon arrival.</li>
                        <li>Item is defective.</li>
                        <li>Incorrect item was delivered.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Non-Returnable Items</h2>
                    <p>
                        The following items cannot be returned or refunded:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 font-bold text-gray-800 text-red-700">
                        <li>Customized cables and gear.</li>
                        <li>Software and digital products.</li>
                        <li>Used accessories (reeds, drumsticks, strings).</li>
                        <li>Items show evidence of misuse or physical damage.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Refund Method</h2>
                    <p>
                        Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed via the original method of payment (MTN MoMo, Vodafone Cash, etc.) within 5-7 business days.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Exchanges</h2>
                    <p>
                        We only replace items if they are defective or damaged. If you need to exchange it for the same item, visit our physical store in Accra or contact us.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-white mb-4">Contacting Us</h2>
                    <p>
                        For any further clarification on returns or exchanges, please contact our support team:
                        <br />
                        Phone: <span className="text-primary font-bold">+233 26 300 9284</span>
                        <br />
                        Email: <a href="mailto:info@bongoproductions.com.gh" className="text-primary font-bold hover:underline">info@bongoproductions.com.gh</a>
                    </p>
                </section>
            </div>
        </LegalLayout>
    );
};

export default ReturnPolicy;
