import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles, ArrowRight, Shield, Smartphone, Cloud, Bell, BarChart3, Zap, Heart, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false)
    const navigate = useNavigate()

    const plans = [
        {
            name: 'Starter',
            description: 'Perfect for content creators and small channels',
            price: 0,
            features: [
                '10 video analysis per month',
                'Up to 100 comments per video',
                'Basic sentiment analysis',
                'Emotion detection',
                'Email support',
                'Export to PDF',
                '7-day data retention'
            ],
            popular: false
        },
        {
            name: 'Professional',
            description: 'For growing channels and content agencies',
            price: isAnnual ? 399 : 499,
            features: [
                'Unlimited video analysis',
                'Up to 500 comments per video',
                'Advanced sentiment analysis',
                'Detailed emotion insights',
                'Priority support',
                'Advanced analytics dashboard',
                'Team collaboration (3 members)',
                'API access',
                '30-day data retention',
                'Custom reports'
            ],
            popular: true
        },
        {
            name: 'Enterprise',
            description: 'For large organizations and media companies',
            price: isAnnual ? 1199 : 1499,
            features: [
                'Everything in Professional',
                'Unlimited team members',
                'Up to 1000 comments per video',
                'Custom AI model training',
                'Dedicated account manager',
                'SLA guarantee',
                'White-label solutions',
                'Advanced security & compliance',
                'Unlimited data retention',
                'Webhook integrations'
            ],
            popular: false
        }
    ]

    const commonFeatures = [
        { icon: <Smartphone className="w-5 h-5" />, text: 'Mobile-friendly interface' },
        { icon: <Shield className="w-5 h-5" />, text: 'Data encryption & privacy' },
        { icon: <Bell className="w-5 h-5" />, text: 'Real-time analysis' },
        { icon: <BarChart3 className="w-5 h-5" />, text: 'Visual analytics' },
        { icon: <Heart className="w-5 h-5" />, text: 'Multi-emotion detection' },
        { icon: <Zap className="w-5 h-5" />, text: 'Fast AI processing' }
    ]

    return (
        <div className="min-h-screen px-4 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >

                    <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                        Transparent Pricing
                    </h1>
                    <p className="text-xl text-slate-300 mb-2">Simple, Fair Pricing</p>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Start free, upgrade as you grow. No hidden fees and no surprise charges.
                    </p>
                </motion.div>

                {/* Toggle Annual/Monthly */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center justify-center gap-4 mb-16"
                >
                    <span className={`text-lg font-medium ${!isAnnual ? 'text-cyan-400' : 'text-slate-400'}`}>
                        Monthly
                    </span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className="relative w-16 h-8 bg-slate-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
                    >
                        <motion.div
                            animate={{ x: isAnnual ? 32 : 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className="absolute top-1 left-1 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
                        />
                    </button>
                    <span className={`text-lg font-medium ${isAnnual ? 'text-cyan-400' : 'text-slate-400'}`}>
                        Annual
                    </span>
                    {isAnnual && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-2 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold"
                        >
                            Save 20%
                        </motion.span>
                    )}
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="relative"
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Card */}
                            <div
                                className={`h-full bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-300 ${plan.popular
                                        ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105'
                                        : 'border-cyan-500/20 shadow-xl shadow-cyan-500/10 hover:border-cyan-500/40'
                                    }`}
                            >
                                {/* Plan Header */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-slate-200 mb-2">{plan.name}</h3>
                                    <p className="text-slate-400 text-sm">{plan.description}</p>
                                </div>

                                {/* Price */}
                                <div className="mb-8">
                                    <div className="flex items-baseline">
                                        <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                            ₹{plan.price}
                                        </span>
                                        <span className="text-slate-400 ml-2">/month</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => navigate('/login')}
                                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${plan.popular
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg cursor-pointer shadow-cyan-500/30 hover:shadow-cyan-500/50'
                                            : 'bg-slate-700/50 text-slate-200 hover:bg-slate-700 border border-slate-600 cursor-pointer'
                                        }`}
                                >
                                    Sign in to get started
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* All Plans Include */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <h3 className="text-2xl font-bold text-center text-slate-200 mb-8">
                        All Plans includes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {commonFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                                className="flex items-center gap-3 bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50"
                            >
                                <div className="text-cyan-400">{feature.icon}</div>
                                <span className="text-slate-300 text-sm">{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Support */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-center"
                >
                    <p className="text-slate-400">
                        Have questions about pricing?{' '}
                        <button
                            onClick={() => navigate('/contact')}
                            className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 transition-colors group"
                        >
                            Contact our support team
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Pricing
