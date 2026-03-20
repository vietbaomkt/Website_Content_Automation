'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'

export function HeroSection5() {
    return (
        <div className="overflow-x-hidden">
            <section>
                <div className="py-24 md:pb-32 lg:pb-36 lg:pt-44">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-bold">Biến nhân hiệu thành <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">cỗ máy nội dung</span></h1>
                            <p className="mt-8 max-w-2xl text-balance text-lg text-gray-400">Hệ thống AI tạo 5 bài/ngày — viết đúng giọng, tạo đúng ảnh, lên lịch tự động. Bạn chỉ cần duyệt và đăng.</p>

                            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                <Button
                                    size="lg"
                                    className="h-12 rounded-full pl-5 pr-3 text-base bg-orange-500 text-white hover:bg-orange-600 cursor-pointer">
                                    <span className="text-nowrap">Bắt đầu ngay</span>
                                    <ChevronRight className="ml-1" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 rounded-full px-5 text-base hover:bg-white/5 cursor-pointer">
                                    <span className="text-nowrap">Đặt lịch tư vấn</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-1 overflow-hidden rounded-3xl border border-white/5 aspect-video lg:rounded-[3rem]">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="none"
                            className="size-full object-cover opacity-35 lg:opacity-75">
                            <source src="/videos/hero-bg.webm" type="video/webm" />
                            <source src="/Background-hero.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
            <section className="pb-2">
                <div className="group relative m-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="md:max-w-44 md:border-r md:border-white/20 md:pr-6">
                            <p className="text-end text-sm text-gray-400">Công nghệ sử dụng</p>
                        </div>
                        <div className="relative py-6 md:w-[calc(100%-11rem)]">
                            <InfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={112}>
                                <div className="flex items-center"><span className="text-gray-400 font-semibold text-sm tracking-wide">Notion</span></div>
                                <div className="flex items-center"><span className="text-gray-400 font-semibold text-sm tracking-wide">n8n</span></div>
                                <div className="flex items-center"><span className="text-gray-400 font-semibold text-sm tracking-wide">ChatGPT</span></div>
                                <div className="flex items-center"><span className="text-gray-400 font-semibold text-sm tracking-wide">Gemini</span></div>
                                <div className="flex items-center"><span className="text-gray-400 font-semibold text-sm tracking-wide">Midjourney</span></div>
                                <div className="flex items-center"><span className="text-gray-400 font-semibold text-sm tracking-wide">Make</span></div>
                                <div className="flex items-center"><span className="text-gray-400 font-semibold text-sm tracking-wide">Canva</span></div>
                                <div className="flex items-center"><span className="text-gray-400 font-semibold text-sm tracking-wide">Supabase</span></div>
                            </InfiniteSlider>

                            <div className="bg-gradient-to-r from-[#030712] absolute inset-y-0 left-0 w-20"></div>
                            <div className="bg-gradient-to-l from-[#030712] absolute inset-y-0 right-0 w-20"></div>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
