"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Phone, Mail, Users, Target, Camera, TrendingUp, Stethoscope, TestTube, Home, ShoppingCart, CheckCircle, Star, ArrowRight, Menu, X, Facebook, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cairo, Tajawal } from 'next/font/google'

// تهيئة خط القاهرة
const cairo = Cairo({
subsets: ["arabic"],
weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
variable: "--font-cairo",
display: "swap",
})

// تهيئة خط تاجاول (يمكن استخدامه كخط احتياطي أو لعناصر محددة)
const tajawal = Tajawal({
subsets: ["arabic"],
weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
variable: "--font-tajawal",
display: "swap",
})

export default function BaltoMediaPortfolio() {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const { scrollYProgress } = useScroll()

const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
const heroBgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.05, 0.02])

const contactCircleY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
const contactCircleX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

const fadeInUp = {
initial: { opacity: 0, y: 60 },
animate: { opacity: 1, y: 0 },
transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
animate: {
transition: {
staggerChildren: 0.15,
},
},
}

const cardHoverEffect = {
whileHover: {
scale: 1.02,
boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
transition: { duration: 0.3, ease: "easeOut" },
},
whileTap: { scale: 0.98 },
}

const iconRotateHover = {
whileHover: { rotate: 360, scale: 1.1 },
transition: { duration: 0.6, ease: "easeOut" },
}

const subtleHover = {
whileHover: { scale: 1.02, y: -5, transition: { duration: 0.2, ease: "easeOut" } },
whileTap: { scale: 0.98 },
}

const services = [
{
icon: <Stethoscope className="w-8 h-8" />,
title: "العيادات والمراكز الطبية",
description: "إدارة احترافية لحسابات وسائل التواصل الاجتماعي وتصوير جلسات الطبيب بجودة عالية",
image: "/images/clinic-growth.jpg",
features: [
"تصوير احترافي بمعدات عالية الجودة",
"مونتاج احترافي للفيديوهات الطبية",
"تصميم مواقع إلكترونية للحجز",
"حملات إعلانية ممولة مستهدفة",
"SEO كتابة محتوى طبي متوافق مع",
],
},
{
icon: <TestTube className="w-8 h-8" />,
title: "معامل التحاليل ومراكز التشخيص",
description: "تصميم إعلانات جذابة واستهداف دقيق لفئات العملاء المناسبة",
image: "/images/medical-content.jpg",
features: [
"تصميم إعلانات للعروض الشهرية",
"استهداف فئات محددة (الأمهات، مرضى مزمنين)",
"منشورات تعليمية لبناء الثقة",
"فيديوهات توعوية مبسطة وجذابة",
],
},
{
icon: <Home className="w-8 h-8" />,
title: "خدمات التمريض المنزلي",
description: "إيصال الخدمة بسهولة للأشخاص الذين يحتاجون رعاية صحية في المنزل",
image: "/images/guaranteed-growth.jpg",
features: [
"فيديوهات تعريفية بالخدمة وفريق التمريض",
"حملات موجهة لكبار السن وأسرهم",
"إظهار الاحترافية والرعاية المقدمة",
],
},
{
icon: <ShoppingCart className="w-8 h-8" />,
title: "شركات المستلزمات الطبية",
description: "تصوير المنتجات الطبية بطريقة احترافية وإدارة المتاجر الإلكترونية",
image: "/images/marketing-services.jpg",
features: [
"تصوير المنتجات الطبية احترافياً",
"إدارة متجر إلكتروني",
"إعلانات تستهدف العيادات والمستهلكين",
"فيديوهات توضيحية لاستخدام المنتجات",
],
},
]

const whyChooseUs = [
{
icon: <Target className="w-6 h-6" />,
title: "تخصص في المجال الطبي فقط",
description: "فهم عميق للسوق الطبي واحتياجاته الخاصة",
},
{
icon: <Users className="w-6 h-6" />,
title: "فريق طبي وتسويقي",
description: "خبرة تسويقية مع خلفية طبية لنتائج فعالة",
},
{
icon: <Camera className="w-6 h-6" />,
title: "محتوى مرئي عالي الجودة",
description: "تصوير ومونتاج احترافي يُظهر صورتك المهنية",
},
{
icon: <TrendingUp className="w-6 h-6" />,
title: "نتائج واضحة وملموسة",
description: "زيادة الحجوزات وتفاعل أعلى وصورة احترافية",
},
]

const ourServices = [
"عيادات الأسنان",
"الجلدية",
"النساء والتوليد",
"العظام",
"معامل التحاليل",
"مراكز الأشعة",
"التمريض المنزلي",
"الأجهزة والمستلزمات الطبية",
]

// Removed testimonials array

const scrollToSection = (id: string) => {
const section = document.getElementById(id)
if (section) {
section.scrollIntoView({ behavior: "smooth" })
setIsMenuOpen(false) // Close mobile menu after navigation
}
}

return (
<div
className={`min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 text-gray-800 overflow-x-hidden ${cairo.variable} ${tajawal.variable} font-sans`}
>
{/* Navigation */}
<motion.nav
initial={{ y: -100 }}
animate={{ y: 0 }}
className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-xl border-b border-blue-100"
>
<div className="container mx-auto px-4 py-4 flex justify-between items-center">
  <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-4">
    <motion.div
      animate={{
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="relative"
    >
      <img src="/images/logo.jpg" alt="بالطو ميديا" className="w-16 h-16 rounded-full shadow-lg object-cover" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center"
      >
        <Sparkles className="w-4 h-4 text-white" />
      </motion.div>
    </motion.div>
    <div className="text-right">
      <h1 className="text-2xl font-bold text-gray-800">بالطو ميديا</h1>
      <p className="text-sm text-gray-600">Balto Media</p>
    </div>
  </motion.div>

  {/* Desktop Menu */}
  <div className="hidden md:flex items-center space-x-8">
    <motion.a
      onClick={() => scrollToSection("home")}
      whileHover={{ scale: 1.1, color: "#3b82f6" }}
      className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium cursor-pointer"
    >
      الرئيسية
    </motion.a>
    <motion.a
      onClick={() => scrollToSection("about")}
      whileHover={{ scale: 1.1, color: "#3b82f6" }}
      className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium cursor-pointer"
    >
      من نحن
    </motion.a>
    <motion.a
      onClick={() => scrollToSection("services")}
      whileHover={{ scale: 1.1, color: "#3b82f6" }}
      className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium cursor-pointer"
    >
      خدماتنا
    </motion.a>
    <motion.a
      onClick={() => scrollToSection("our-works")}
      whileHover={{ scale: 1.1, color: "#3b82f6" }}
      className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium cursor-pointer"
    >
      من أعمالنا
    </motion.a>
    {/* Removed Testimonials link */}
    <motion.a
      onClick={() => scrollToSection("contact")}
      whileHover={{ scale: 1.1, color: "#3b82f6" }}
      className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium cursor-pointer"
    >
      تواصل معنا
    </motion.a>
  </div>

  {/* Mobile Menu Button */}
  <motion.button whileTap={{ scale: 0.9 }} className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </motion.button>
</div>

{/* Mobile Menu */}
{isMenuOpen && (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    className="md:hidden bg-white/95 backdrop-blur-lg border-t border-blue-100"
  >
    <div className="container mx-auto px-4 py-4 space-y-4">
      <a
        onClick={() => scrollToSection("home")}
        className="block text-gray-700 hover:text-blue-500 font-medium cursor-pointer"
      >
        الرئيسية
      </a>
      <a
        onClick={() => scrollToSection("about")}
        className="block text-gray-700 hover:text-blue-500 font-medium cursor-pointer"
      >
        من نحن
      </a>
      <a
        onClick={() => scrollToSection("services")}
        className="block text-gray-700 hover:text-blue-500 font-medium cursor-pointer"
      >
        خدماتنا
      </a>
      <a
        onClick={() => scrollToSection("our-works")}
        className="block text-gray-700 hover:text-blue-500 font-medium cursor-pointer"
      >
        من أعمالنا
      </a>
      {/* Removed Testimonials link */}
      <a
        onClick={() => scrollToSection("contact")}
        className="block text-gray-700 hover:text-blue-500 font-medium cursor-pointer"
      >
        تواصل معنا
      </a>
    </div>
  </motion.div>
)}
</motion.nav>

{/* Hero Section */}
<section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
<motion.div style={{ y: heroBgY, opacity: heroBgOpacity }} className="absolute inset-0">
  <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
  <div className="absolute bottom-20 right-20 w-56 h-56 bg-sky-200 rounded-full blur-3xl"></div>
  <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-200 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
</motion.div>

<div className="container mx-auto px-4 text-center relative z-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
          rotateY: [0, 2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative mb-8"
      >
        <img
          src="/images/patient-online.jpg"
          alt="مريضك بيدور عليك"
          className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center"
        >
          <Sparkles className="w-4 h-4 text-white" />
        </motion.div>
      </motion.div>
    </motion.div>

    <div className="text-right">
      <motion.h1
        {...fadeInUp}
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
      >
        بالطو ميديا
      </motion.h1>

      <motion.h2
        {...fadeInUp}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700"
      >
        Balto Media
      </motion.h2>

      <motion.p
        {...fadeInUp}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed"
      >
        <span className="font-bold text-blue-600">فريق طبي & خبرة تسويقية</span>
        <br />
        شركاء نجاحك في التسويق الطبي
      </motion.p>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-center"
      >
        <motion.div {...subtleHover}>
          <Button
            size="lg"
            onClick={() => window.open("https://www.facebook.com/share/16fsGJfxZb/", "_blank")}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            ابدأ رحلتك معنا
            <ArrowRight className="mr-2 w-5 h-5" />
          </Button>
        </motion.div>
        <motion.div {...subtleHover}>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("services")}
            className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent"
          >
            تعرف على خدماتنا
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </div>
</div>

{/* Floating Elements - Parallax enhanced */}
{[...Array(6)].map((_, i) => (
  <motion.div
    key={i}
    style={{
      y: useTransform(scrollYProgress, [0, 1], [`${i * 10}px`, `${i * 50 + 100}px`]), // Different parallax speeds
      x: useTransform(scrollYProgress, [0, 1], [`${i * 5}px`, `${i * 20 + 50}px`]),
    }}
    animate={{
      rotate: [0, 360],
    }}
    transition={{
      duration: 10 + i,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
      delay: i * 0.5,
    }}
    className="absolute w-4 h-4 bg-gradient-to-r from-blue-200 to-sky-200 rounded-full opacity-40"
    style={{
      top: `${20 + i * 10}%`,
      left: `${10 + i * 15}%`,
    }}
  />
))}
</section>

{/* About Section */}
<section id="about" className="py-20 bg-white/60 backdrop-blur-sm">
<div className="container mx-auto px-4">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <motion.h2
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
    >
      من نحن؟
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"
    />
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      نفتخر بالعمل مع نخبة من الأطباء والمنشآت الطبية، وإليكم بعض آرائهم
    </p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto"
  >
    <motion.div {...cardHoverEffect}>
      <Card className="bg-gradient-to-br from-white to-blue-25 shadow-2xl border-0 overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="text-lg md:text-xl leading-relaxed text-gray-700 space-y-6 text-right">
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-semibold text-blue-600 text-xl"
            >
              بالطو ميديا هي شركة متخصصة في تقديم خدمات التسويق الرقمي للمجال الطبي فقط.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              نُدرك تمامًا التحديات التي يواجهها الأطباء وأصحاب المنشآت الصحية، ونوفّر حلولًا تسويقية مخصصة تساعد
              على نجاح العيادات، المراكز الطبية، معامل التحاليل، شركات المستلزمات، وحتى خدمات التمريض المنزلي.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="font-semibold text-cyan-600 text-xl"
            >
              هدفنا هو تحويل حضورك الرقمي إلى وسيلة فعالة لجذب المرضى وزيادة الحجوزات الفعلية.
            </motion.p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </motion.div>
</div>
</section>

{/* Services Section */}
<section id="services" className="py-20 bg-gradient-to-br from-blue-25 to-sky-25">
<div className="container mx-auto px-4">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <motion.h2
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
    >
      خدماتنا المتخصصة
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"
    />
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      نقدم مجموعة شاملة من الخدمات التسويقية المصممة خصيصاً للمجال الطبي
    </p>
  </motion.div>

  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8"
  >
    {services.map((service, index) => (
      <motion.div key={index} variants={fadeInUp} {...cardHoverEffect} className="group">
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 right-4">
              <motion.div
                {...iconRotateHover}
                className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white"
              >
                {service.icon}
              </motion.div>
            </div>
          </div>

          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-800 text-right mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6 text-right leading-relaxed">{service.description}</p>

            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: featureIndex * 0.1 }}
                  className="flex items-center text-right"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 ml-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </motion.div>
</div>
</section>

{/* Our Services Section (This is actually "Why Choose Us" in the previous version, keeping the ID for consistency) */}
<section className="py-20 bg-white/60 backdrop-blur-sm">
<div className="container mx-auto px-4">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <motion.h2
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
    >
      ما هي خدماتنا؟
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"
    />
    <p className="text-xl text-gray-600">قدمنا خدماتنا للعديد من التخصصات والمجالات الصحية</p>
  </motion.div>

  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="grid grid-cols-2 md:grid-cols-4 gap-6"
  >
    {ourServices.map((service, index) => (
      <motion.div
        key={index}
        variants={fadeInUp}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
        className="bg-gradient-to-br from-white to-blue-25 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
        >
          <Star className="w-6 h-6" />
        </motion.div>
        <h3 className="font-semibold text-gray-800">{service}</h3>
      </motion.div>
    ))}
  </motion.div>
</div>
</section>

{/* Why Choose Us Section */}
<section className="py-20 bg-gradient-to-br from-blue-25 to-sky-25">
<div className="container mx-auto px-4">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <motion.h2
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
    >
      لماذا تختار بالطو ميديا؟
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"
    />
  </motion.div>

  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  >
    {whyChooseUs.map((item, index) => (
      <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="text-center group">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg"
        >
          {item.icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      </motion.div>
    ))}
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5 }}
    className="text-center mt-16"
  >
    <motion.div {...cardHoverEffect}>
      <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-2xl max-w-4xl mx-auto">
        <CardContent className="p-8">
          <motion.h3 initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} className="text-2xl font-bold mb-4">
            نعمل معك كشركاء حقيقيين، لا كمجرد مقدم خدمة
          </motion.h3>
          <p className="text-lg opacity-90">
            نحن ملتزمون بنجاحك ونعمل بجد لتحقيق أهدافك التسويقية والوصول إلى المرضى المناسبين
          </p>
        </CardContent>
      </Card>
    </motion.div>
  </motion.div>
</div>
</section>

{/* Our Works Section */}
<section id="our-works" className="py-20 bg-white/60 backdrop-blur-sm">
<div className="container mx-auto px-4">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <motion.h2
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
    >
      من أعمالنا
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"
    />
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      نقدم حلولاً تسويقية مبتكرة لشركائنا في المجال الطبي، وإليكم بعض من أعمالنا
    </p>
  </motion.div>

  {/* Home Care North Coast Section */}
  <div className="mb-16">
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
    >
      Home Care North Coast
    </motion.h3>
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
    >
      {/* Work 1: Home Care North Coast - Doctor Visit */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/home-care-north-coast-1.jpg"
              alt="Home Care North Coast - زيارة الطبيب للمنزل"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 2: Home Care North Coast - Physical Therapy */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/home-care-north-coast-2.jpg"
              alt="Home Care North Coast - علاج طبيعي منزلي"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 3: Home Care North Coast - Waterproof Cast */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/home-care-north-coast-3.jpg"
              alt="Home Care North Coast - جبس طبي مضاد للماء"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 4: Home Care North Coast - 24/7 Service */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/home-care-north-coast-4.jpg"
              alt="Home Care North Coast - خدمة 24 ساعة"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  </div>

  {/* Dr. Mohamed Fathy El Leithy Section */}
  <div className="mb-16">
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
    >
      د / محمد فتحي الليثي ( استشاري جراحة الأورام )
    </motion.h3>
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
      {/* Work 1: Dr. Mohamed Fathy - Breast Surgery */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-mohamed-fathy-1.jpg"
              alt="دكتور محمد فتحي - جراحة أورام الثدي التجميلية"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 2: Dr. Mohamed Fathy - Uterine Tumors */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-mohamed-fathy-2.jpg"
              alt="دكتور محمد فتحي - أعراض أورام الرحم"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 3: Dr. Mohamed Fathy - Thyroid Surgery */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-mohamed-fathy-3.jpg"
              alt="دكتور محمد فتحي - استئصال أورام الغدة الدرقية"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 4: Dr. Mohamed Fathy - Vaginal Hysterectomy */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-mohamed-fathy-4.jpg"
              alt="دكتور محمد فتحي - استئصال الرحم عن طريق المهبل"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 5: Dr. Mohamed Fathy - Breast Reconstruction */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-mohamed-fathy-5.jpg"
              alt="دكتور محمد فتحي - إعادة بناء الثدي"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 6: Dr. Mohamed Fathy - Neck Nerves Safety */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-mohamed-fathy-6.jpg"
              alt="دكتور محمد فتحي - أعصاب الرقبة في أمان"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  </div>

  {/* ReHappy Center Section */}
  <div className="mb-16">
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
    >
      ReHappy مركز
    </motion.h3>
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
      {/* Work 1: ReHappy - Program */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/rehappy-1.jpg"
              alt="برنامج ReHappy للتعافي من الصدمات النفسية"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 2: ReHappy - Misunderstanding */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/rehappy-2.jpg"
              alt="هو مش فاهمني!"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 3: ReHappy - Relationship Collapse Triangle */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/rehappy-3.jpg"
              alt="مثلث انهيار العلاقات"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 4: ReHappy - End Your Conflicts */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/rehappy-4.jpg"
              alt="انهي خلافاتك مع شريك حياتك"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 5: ReHappy - I'm Shocked */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/rehappy-5.jpg"
              alt="أنا اتصدمت.. هافضل كده؟"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  </div>

  {/* Naqaa Center Section */}
  <div className="mb-16">
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
    >
      مركز نقاء لعلاج الادمان والطب النفسي
    </motion.h3>
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
      {/* Work 1: Naqaa - Mental Illness Support */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/naqaa-1.jpg"
              alt="هناخد بايدك! معاك ضد كافة الأمراض النفسية"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 2: Naqaa - Who's in Control? */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/naqaa-2.jpg"
              alt="انت المسيطر؟! ولا المخدرات؟"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 3: Naqaa - Save Your Life */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/naqaa-3.jpg"
              alt="أنقذ حياتك من الإدمان"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 4: Naqaa - Free Yourself */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/naqaa-4.jpg"
              alt="حرر نفسك من الإدمان متستسلمش لأعراض الانسحاب"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 5: Naqaa - Home Treatment Danger */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/naqaa-5.jpg"
              alt="علاج المدمن في البيت.. خطر عليه وعليكم!"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 6: Naqaa - Licensed Means Safety */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/naqaa-6.jpg"
              alt="مرخص يعني أمان! اختار صح، اختار مركزنا"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 7: Naqaa - Depression Out of Your Life */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/naqaa-7.jpg"
              alt="الاكتئاب برا حياتك"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  </div>

  {/* Dr. Mahmoud El Omda Section */}
  <div className="mb-16">
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
    >
      دكتور / محمود العمدة أخصائي جراحة العظام والمفاصل ومناظير الركبة
    </motion.h3>
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
      {/* Work 1: El Omda - Cruciate Ligament Treatment */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/el-omda-1.jpg"
              alt="علاج قطع الرباط الصليبي"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 2: El Omda - Your Knee Needs Attention */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/el-omda-2.jpg"
              alt="ركبتك محتاجة شوية اهتمام!"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 3: El Omda - Arthroscopy is the Solution */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/el-omda-3.jpg"
              alt="المنظار هو الحل لمشاكل ركبتك"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 4: El Omda - Meniscus Injury Treatment */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/el-omda-4.jpg"
              alt="إصابة الغضروف الهلالي علاجها إيه؟"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 5: El Omda - Meniscus Injury Stages */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/el-omda-5.jpg"
              alt="إصابة الغضروف الهلالي"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 6: El Omda - Knee Effusion Treatment */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/el-omda-6.jpg"
              alt="علاج ارتشاح الركبة"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 7: El Omda - Torn Cruciate Ligament */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/el-omda-7.jpg"
              alt="قطع الرباط الصليبي"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 8: El Omda - Protect Your Knee */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/el-omda-8.jpg"
              alt="حافظ على ركبتك من الخشونة"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 9: El Omda - Sports Injuries */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/el-omda-9.jpg"
              alt="إصابات الملاعب نتعامل ازاي؟"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 10: El Omda - Nerve Decompression */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/el-omda-10.jpg"
              alt="تسليك العصب.. هيخلي حياتك أسهل!"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  </div>

  {/* Dr. Ahmed Hesham Section */}
  <div className="mb-16">
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
    >
      دكتور أحمد هشام طبيب نادي الاسماعيلي
    </motion.h3>
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
      {/* Work 1: Dr. Ahmed Hesham - Meniscus Tear */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-ahmed-hesham-1.jpg"
              alt="تمزق الغضروف الهلالي"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 2: Dr. Ahmed Hesham - Not Just Surgery */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-ahmed-hesham-2.jpg"
              alt="الحل مش بس جراحة! حالات تمزق الغضروف الهلالي"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 3: Dr. Ahmed Hesham - Meniscus Injury Symptoms */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-ahmed-hesham-3.jpg"
              alt="إصابة الغضروف الهلالي إزاي تعرفها؟"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 4: Dr. Ahmed Hesham - Knee Osteoarthritis Symptoms */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-ahmed-hesham-4.jpg"
              alt="خشونة الركبة الأعراض تنطبق عليك؟!"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 5: Dr. Ahmed Hesham - Portrait */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-ahmed-hesham-5.jpg"
              alt="دكتور أحمد هشام"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 6: Dr. Ahmed Hesham - Ligament Tear */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-ahmed-hesham-6.jpg"
              alt="تمزق الأربطة"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 7: Dr. Ahmed Hesham - Muscle Cramp */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-ahmed-hesham-7.jpg"
              alt="الشد العضلي: نتعامل ازاي؟"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Work 8: Dr. Ahmed Hesham - Logo */}
      <motion.div variants={fadeInUp} {...cardHoverEffect}>
        <Card className="h-full bg-gradient-to-br from-white to-blue-25 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <img
              src="/images/dr-ahmed-hesham-8.jpg"
              alt="لوجو دكتور أحمد هشام"
              className="w-full max-w-sm h-64 object-contain rounded-xl mb-6 shadow-md"
            />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  </div>
</div>
</section>

{/* Removed Testimonials Section */}

{/* Contact Section */}
<section
id="contact"
className="py-20 bg-gradient-to-br from-blue-500 to-cyan-500 text-white relative overflow-hidden"
>
{/* Parallax circle with logo */}
<motion.div
  style={{ y: contactCircleY, x: contactCircleX }}
  className="absolute top-10 right-10 w-32 h-32 border-4 border-white/20 rounded-full flex items-center justify-center"
>
  <img src="/images/logo.jpg" alt="بالطو ميديا" className="w-24 h-24 rounded-full object-cover" />
</motion.div>
{/* Second parallax circle */}
<motion.div
  style={{
    y: useTransform(scrollYProgress, [0, 1], ["0%", "150%"]),
    x: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]),
  }}
  animate={{ rotate: -360 }}
  transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
  className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white/20 rounded-full"
/>

<div className="container mx-auto px-4 relative z-10">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <motion.h2
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl md:text-5xl font-bold mb-6"
    >
      تواصل معنا
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-1 bg-white mx-auto mb-8"
    />
    <p className="text-xl opacity-90 max-w-3xl mx-auto">ابدأ رحلتك نحو النجاح في التسويق الطبي معنا اليوم</p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center"
      >
        <motion.div {...iconRotateHover}>
          <Mail className="w-12 h-12 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
        <p className="text-lg">baltwmydya@gmail.com</p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center"
      >
        <motion.div {...iconRotateHover}>
          <Phone className="w-12 h-12 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-xl font-bold mb-2">رقم الهاتف</h3>
        <p className="text-lg" dir="ltr">
          01014895642
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center"
      >
        <motion.div {...iconRotateHover}>
          <Facebook className="w-12 h-12 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-xl font-bold mb-2">فيسبوك</h3>
        <Button
          variant="ghost"
          onClick={() => window.open("https://www.facebook.com/share/16fsGJfxZb/", "_blank")}
          className="text-white hover:bg-white/20"
        >
          تواصل معنا
        </Button>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          size="lg"
          onClick={() => window.open("https://www.facebook.com/share/16fsGJfxZb/", "_blank")}
          className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          ابدأ مشروعك معنا الآن
          <ArrowRight className="mr-3 w-6 h-6" />
        </Button>
      </motion.div>
    </motion.div>
  </motion.div>
</div>
</section>

{/* Footer */}
<footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.1, 0.3, 0.1],
  }}
  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
/>

<div className="container mx-auto px-4 text-center relative z-10">
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
    <motion.div
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ duration: 0.8 }}
      className="w-16 h-16 mx-auto mb-4 relative"
    >
      <img
        src="/images/logo.jpg"
        alt="بالطو ميديا"
        className="w-full h-full rounded-full object-cover"
      />
    </motion.div>
    <h3 className="text-2xl font-bold mb-2">بالطو ميديا</h3>
    <p className="text-gray-400">Balto Media</p>
  </motion.div>

  <div className="border-t border-gray-800 pt-8">
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gray-400">
      © 2025 بالطو ميديا - جميع الحقوق محفوظة
    </motion.p>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gray-400 mt-2">
      All rights reserved by Ahmed Reda Elwan -{" "}
      <a
        href="https://www.instagram.com/webbiix?igsh=MXRpZ2UyYXoyd3d1YQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 font-semibold underline"
      >
        Webbiix
      </a>
    </motion.p>
  </div>
</div>
</footer>
</div>
)
}
