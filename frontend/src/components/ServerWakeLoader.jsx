import { motion } from 'framer-motion'
import { Server } from 'lucide-react'

export default function ServerWakeLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex flex-col items-center gap-8">

        {/* Icon with pulse ring */}
        <div className="relative flex items-center justify-center">
          {/* Outer pulse ring */}
          <motion.div
            className="absolute w-24 h-24 rounded-full border-2 border-cyan-400/40"
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Inner spinning ring */}
          <motion.div
            className="absolute w-20 h-20 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          />
          {/* Server icon */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="bg-slate-800 border border-cyan-400/30 rounded-2xl p-4 z-10"
          >
            <Server className="w-9 h-9 text-cyan-400" />
          </motion.div>
        </div>

        {/* Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-white mb-1">Server is waking up</h2>
          <p className="text-slate-400 text-sm">This may take a few seconds on first load…</p>
        </motion.div>

        {/* Bouncing dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
