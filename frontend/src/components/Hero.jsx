import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Sparkles, TrendingUp, Heart } from 'lucide-react'
import {  useNavigate } from 'react-router-dom'

const Hero = () => {

    const navigate = useNavigate()
 
    const total = 100;
    const r1 = Math.floor(Math.random() * (total - 2)) + 1;
    const r2 = Math.floor(Math.random() * (total - r1 - 1)) + 1;
    const r3 = total - r1 - r2;
    
    const sentimentData = [
        { name: "Positive", value: r1 },
        { name: "Neutral", value: r2 },
        { name: "Negative", value: r3 },
    ]

    // Generate random emotion values that sum to 100
    const e1 = Math.floor(Math.random() * (total - 5)) + 1;
    const e2 = Math.floor(Math.random() * (total - e1 - 4)) + 1;
    const e3 = Math.floor(Math.random() * (total - e1 - e2 - 3)) + 1;
    const e4 = Math.floor(Math.random() * (total - e1 - e2 - e3 - 2)) + 1;
    const e5 = Math.floor(Math.random() * (total - e1 - e2 - e3 - e4 - 1)) + 1;
    const e6 = total - e1 - e2 - e3 - e4 - e5;

    const emotionData = [
        { name: "Joy", value: e1 },
        { name: "Anger", value: e2 },
        { name: "Sadness", value: e3 },
        { name: "Surprise", value: e4 },
        { name: "Fear", value: e5 },
        { name: "Disgust", value: e6 },
    ]


    const sentimentColors = {
        Positive: '#22d3ee', 
        Neutral: '#60a5fa', 
        Negative: '#f472b6'  
    }


    const emotionColors = ['#22d3ee', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981']

    const dominantSentiment = sentimentData.reduce((max, item) =>
        item.value > max.value ? item : max
    )

    const dominantEmotion = emotionData.reduce((max, item) =>
        item.value > max.value ? item : max
    )


    const sentimentEmojis = {
        Positive: '😊',
        Neutral: '😐',
        Negative: '😔'
    }

    const emotionEmojis = {
        Joy: '😄',
        Anger: '😠',
        Sadness: '😢',
        Surprise: '😲',
        Fear: '😨',
        Disgust: '🤢'
    }


    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-slate-800/95 backdrop-blur-lg border border-cyan-500/30 rounded-lg p-3 shadow-xl">
                    <p className="text-slate-200 font-semibold">{payload[0].name}</p>
                    <p className="text-cyan-400 text-sm">{payload[0].value}%</p>
                </div>
            )
        }
        return null;
    }

    return (
        <div className="min-h-screen px-4 py-16">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="inline-block mb-6"
                    >
                        <Sparkles className="w-16 h-16 text-cyan-400" />
                    </motion.div>

                    <h1 className="text-6xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Emotion Lens
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 mb-4">
                        AI-Powered YouTube Comment Analysis
                    </p>

                    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                        Unlock powerful insights from your YouTube comments with advanced sentiment analysis and emotion detection
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 cursor-pointer transition-all duration-300"
                            onClick={()=>navigate('/analysis')}
                        >
                            Get Started 
                        </motion.button>
                    </div>
                </motion.div>

                {/* Analytics Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
                >
                    {/* Sentiment Distribution Bar Chart */}
                    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                            <TrendingUp className="w-6 h-6 text-cyan-400" />
                            <h3 className="text-2xl font-bold text-slate-200">Sentiment Distribution</h3>
                        </div>

                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={sentimentData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                <XAxis
                                    dataKey="name"
                                    stroke="#94a3b8"
                                    style={{ fontSize: '14px' }}
                                />
                                <YAxis
                                    stroke="#94a3b8"
                                    style={{ fontSize: '14px' }}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar
                                    dataKey="value"
                                    radius={[8, 8, 0, 0]}
                                >
                                    {sentimentData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={sentimentColors[entry.name]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>

                        {/* Legend */}
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            {sentimentData.map((item) => (
                                <div key={item.name} className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: sentimentColors[item.name] }}
                                    />
                                    <span className="text-slate-300 text-sm">{item.name}: {item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Emotion Breakdown Pie Chart */}
                    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-6 h-6 text-cyan-400" />
                            <h3 className="text-2xl font-bold text-slate-200">Emotion Breakdown</h3>
                        </div>

                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={emotionData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {emotionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={emotionColors[index % emotionColors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>

                        {/* Legend */}
                        <div className="grid grid-cols-2 gap-3 mt-6">
                            {emotionData.map((item, index) => (
                                <div key={item.name} className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: emotionColors[index] }}
                                    />
                                    <span className="text-slate-300 text-sm">{item.name}: {item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Dominant Sentiment and Emotion */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                >
                    {/* Dominant Sentiment */}
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-semibold text-slate-300">Dominant Sentiment</h4>
                            <TrendingUp className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                                <span className="text-3xl">{sentimentEmojis[dominantSentiment.name]}</span>
                            </div>
                            <div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    {dominantSentiment.name}
                                </div>
                                <div className="text-slate-400 text-sm mt-1">{dominantSentiment.value}% of all comments</div>
                            </div>
                        </div>
                    </div>

                    {/* Dominant Emotion */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-semibold text-slate-300">Dominant Emotion</h4>
                            <Heart className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                                <span className="text-3xl">{emotionEmojis[dominantEmotion.name]}</span>
                            </div>
                            <div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    {dominantEmotion.name}
                                </div>
                                <div className="text-slate-400 text-sm mt-1">{dominantEmotion.value}% of all emotions</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                            10K+
                        </div>
                        <div className="text-slate-400">Videos Analyzed</div>
                    </div>

                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                            1M+
                        </div>
                        <div className="text-slate-400">Comments Processed</div>
                    </div>

                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                            95%
                        </div>
                        <div className="text-slate-400">Accuracy Rate</div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
