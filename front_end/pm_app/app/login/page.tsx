"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage(){
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                    </Link>
                </div>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transitition"/>
                            <input type="email" placeholder="name@example.com" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/> 
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <label className="block text-sm font-medium text-slate-700">Password</label>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot?</a>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size={18}"/>
                            <input type="password" placeholder="* * * * * * *" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/>
                        </div>
                    </div>
                    <Link href="/views/dashboard/tickets">
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                            Sing In <ArrowRight size={18}/>
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}