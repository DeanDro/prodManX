import React from 'react';
import { CheckCircle, Rocket, Layout, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage(){
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* --- Navigation section --*/}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-50">
        <div className="text-xl font-bold text-black-700 flex items-center gap-2">
          <Rocket size={24} /> prodManX
        </div>
        <Link href="/login">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
      </nav>

      <header className="px-6 py-16 md:py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Control your product launch <span className="text-blue-600">without the chaos.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10">
          The all-in-one workspace for Product Managers to map operations, track milestones, and sync teams from any device.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition">
            Start Your First Launch
          </button>
          <button className="bg-white border border-slate-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition">
            View Demo
          </button>
        </div>
      </header>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg text-blue-600">
              <Layout size={28} />
            </div>
            <h3 className="text-xl font-bold">Visual Roadmaps</h3>
            <p className="text-slate-600">Drag-and-drop your launch phases. Visualize every dependency before the big day.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-lg text-green-600">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-xl font-bold">Ops Checklist</h3>
            <p className="text-slate-600">Pre-built templates for legal, marketing, and engineering go-lives.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-lg text-purple-600">
              <Smartphone size={28} />
            </div>
            <h3 className="text-xl font-bold">Mobile First</h3>
            <p className="text-slate-600">Check your launch status from your phone while you're on the go.</p>
          </div>

        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t text-center text-slate-500 text-sm">
        © 2026 LaunchMap Inc. Built for Product Managers.
      </footer>
    </div>
  )
}