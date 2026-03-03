import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

interface LegalLayoutProps {
    title: string;
    image?: string;
    children: React.ReactNode;
}

const LegalLayout = ({ title, children }: LegalLayoutProps) => {
    return (
        <Layout>
            <div className="pt-24 md:pt-32">
                {/* Banner */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')`, // Professional legal background
                            filter: "brightness(0.4)"
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 text-center px-4"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                            {title}
                        </h1>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-gray-200 font-medium leading-relaxed space-y-6 text-lg"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default LegalLayout;
