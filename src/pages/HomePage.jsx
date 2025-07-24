"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import BookingSection from "../components/booking";
import { toast, Toaster } from "sonner";
import { FaCalendarCheck } from "react-icons/fa";
import SubmittedBookingsTable from "../components/SubmittedBookingsTable";
import {
  Car, Clock, Award, Users, CheckCircle, Star, Phone, Mail, MessageCircleMore, Calendar, Shield, BookOpen, Target
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

function HomePage() {
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [submittedBookings, setSubmittedBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then(res => res.json())
      .then(data => setSubmittedBookings(data))
      .catch(err => console.error("Failed to load bookings:", err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", bookingForm);
    toast.success("Booking submitted successfully!");
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <motion.header
        className="bg-white shadow-lg sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">DriveAcademy</span>
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              {["Home", "Courses", "About", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
   <motion.div {...scaleOnHover}>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm sm:text-base">
        {/* Show icon on small screens, text on larger */}
        <span className="block sm:hidden text-lg">
          <FaCalendarCheck />
        </span>
        <span className="hidden sm:block">
          Book Now
        </span>
      </Button>
    </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Master Driving in{" "}
                <motion.span
                  className="text-blue-600"
                  animate={{
                    textShadow: ["0 0 0px #3B82F6", "0 0 20px #3B82F6", "0 0 0px #3B82F6"],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  24 Days
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Professional driving instruction with certified trainers. Get your license with confidence through our
                comprehensive 24-day program.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.div {...scaleOnHover}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                    Start Your Journey
                  </Button>
                </motion.div>
                <motion.div {...scaleOnHover}>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                    View Courses
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/black-isolated-car.png"
                  alt="Driving School Car"
                  className="rounded-2xl "
                />
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-full"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Award className="h-8 w-8" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-blue-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Users, number: "5000+", label: "Students Trained" },
              { icon: Award, number: "98%", label: "Pass Rate" },
              { icon: Clock, number: "24", label: "Days Program" },
              { icon: Star, number: "4.9", label: "Rating" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="space-y-2">
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                  <stat.icon className="h-12 w-12 mx-auto mb-4" />
                </motion.div>
                <motion.div
                  className="text-4xl font-bold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 24-Day Program Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our 24-Day Certification Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive driving education designed to make you a confident, safe driver in just 24 days
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                week: "Week 1",
                title: "Foundation & Theory",
                days: "Days 1-8",
                icon: BookOpen,
                topics: ["Traffic Rules", "Road Signs", "Safety Basics", "Vehicle Controls"],
              },
              {
                week: "Week 2",
                title: "Practical Training",
                days: "Days 9-16",
                icon: Target,
                topics: ["Basic Maneuvers", "Parking Skills", "City Driving", "Highway Basics"],
              },
              {
                week: "Week 3",
                title: "Advanced & Testing",
                days: "Days 17-24",
                icon: Shield,
                topics: ["Advanced Techniques", "Mock Tests", "Final Assessment", "Certification"],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                  <CardHeader className="text-center">
                    <motion.div
                      className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <phase.icon className="h-8 w-8 text-blue-600" />
                    </motion.div>
                    <Badge variant="secondary" className="mb-2">
                      {phase.days}
                    </Badge>
                    <CardTitle className="text-2xl">{phase.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-blue-600">{phase.week}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {phase.topics.map((topic, topicIndex) => (
                        <motion.li
                          key={topicIndex}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + topicIndex * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>{topic}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certification Info */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Award className="h-16 w-16 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-4">Get Certified!</h3>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Upon successful completion of our 24-day program, receive your official driving certificate and be ready
              for your license test with confidence.
            </p>
            <motion.div {...scaleOnHover}>
              <Button size="lg" variant="secondary" className="text-blue-600">
                View Certificate Sample
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
 {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About DriveAcademy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in safe driving education for over 15 years
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.img
                  src="/img1.jpg"
                  alt="Professional driving instructor teaching student"
                  className="rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-3xl font-bold text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Building Confident Drivers Since 2009
              </motion.h3>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                At DriveAcademy, we believe that learning to drive should be an empowering and enjoyable experience. Our
                mission is to create safe, confident, and responsible drivers through comprehensive education and
                personalized instruction.
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                With over 15 years of experience and more than 5,000 successful graduates, we've perfected our teaching
                methods to ensure every student receives the attention and guidance they need to succeed.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-4 pt-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  { icon: Award, text: "Certified Instructors" },
                  { icon: Shield, text: "Safety First Approach" },
                  { icon: Users, text: "Personalized Learning" },
                  { icon: CheckCircle, text: "Proven Success Rate" },
                ].map((feature, index) => (
                  <motion.div key={index} className="flex items-center space-x-3" variants={fadeInUp}>
                    <motion.div
                      className="p-2 bg-blue-100 rounded-full"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </motion.div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Mission, Vision, Values */}
          <motion.div
            className="grid lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Our Mission",
                icon: Target,
                content:
                  "To provide exceptional driving education that creates safe, confident, and responsible drivers who contribute to safer roads for everyone.",
                color: "blue",
              },
              {
                title: "Our Vision",
                icon: Star,
                content:
                  "To be the leading driving school that sets the standard for excellence in driver education and road safety awareness.",
                color: "green",
              },
              {
                title: "Our Values",
                icon: Shield,
                content:
                  "Safety, integrity, patience, and personalized attention guide everything we do. We believe every student deserves the best education possible.",
                color: "purple",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="h-full text-center p-6 hover:shadow-xl transition-all duration-300">
                  <motion.div
                    className={`mx-auto mb-4 p-4 bg-${item.color}-100 rounded-full w-fit`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className={`h-8 w-8 text-${item.color}-600`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.content}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose DriveAcademy?</h3>
              <p className="text-lg text-gray-600">Discover what makes us the preferred choice for driving education</p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Award,
                  title: "Expert Instructors",
                  description: "All our instructors are certified professionals with years of teaching experience",
                },
                {
                  icon: Car,
                  title: "Modern Fleet",
                  description: "Learn in well-maintained, modern vehicles equipped with the latest safety features",
                },
                {
                  icon: Clock,
                  title: "Flexible Scheduling",
                  description: "Choose lesson times that work with your schedule, including evenings and weekends",
                },
                {
                  icon: CheckCircle,
                  title: "High Success Rate",
                  description: "98% of our students pass their driving test on the first attempt",
                },
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mx-auto mb-4 p-3 bg-white rounded-full shadow-md w-fit"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <advantage.icon className="h-8 w-8 text-blue-600" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{advantage.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Expert Team</h3>
              <p className="text-lg text-gray-600">Professional instructors dedicated to your success</p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "Sarah Johnson",
                  role: "Chief Instructor",
                  experience: "12 Years Experience",
                  specialties: ["Highway Training", "Nervous Drivers"],
                  image: "/img2.jpg",
                },
                {
                  name: "Mike Rodriguez",
                  role: "Senior Instructor",
                  experience: "8 Years Experience",
                  specialties: ["Manual Transmission", "Test Preparation"],
                  image: "/img3.png",
                },
                {
                  name: "Emily Chen",
                  role: "Instructor",
                  experience: "5 Years Experience",
                  specialties: ["Teen Drivers", "Parallel Parking"],
                  image: "/img4.jpg",
                },
              ].map((instructor, index) => (
                <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                  <Card className="text-center p-6 hover:shadow-xl transition-all duration-300">
                    <motion.div className="relative mb-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <img
                        src={instructor.image || "/placeholder.svg"}
                        alt={instructor.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                      <motion.div
                        className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1 rounded-full"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Award className="h-4 w-4" />
                      </motion.div>
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">{instructor.name}</h4>
                    <p className="text-blue-600 font-semibold mb-2">{instructor.role}</p>
                    <p className="text-sm text-gray-600 mb-3">{instructor.experience}</p>
                    <div className="space-y-1">
                      {instructor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      <div className="flex flex-col gap-20">
  
  <BookingSection
    bookingForm={bookingForm}
    handleInputChange={handleInputChange}
    handleSubmit={handleSubmit}
  />
</div>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We're here to help you start your driving journey</p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "9135156440",
                description: "Mon-Fri 8AM-6PM",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "mafiyamood@gmail.com",
                description: "We reply within 24 hours",
              },
             
  {
  icon: MessageCircleMore,
  title: "Whatsapp",
  info: "Message For any Queary",
  description: "We reply within 24 hours",
  href: "https://chat.whatsapp.com/HCphz5X53Bi1O6449trKyc"
}

            ].map((contact, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                  <motion.div
                    className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <contact.icon className="h-8 w-8 text-blue-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-1">{contact.info}</p>
                  <p className="text-gray-600">{contact.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </section>
{/* Render Bookings */}
      {submittedBookings.length === 0 ? (
        <p className="text-gray-500">No bookings found.</p>
      ) : (
        <SubmittedBookingsTable bookings={submittedBookings} />
      )}
    
  


      {/* Footer */}
      <motion.footer
        className="bg-gray-800 text-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">DriveAcademy</span>
              </div>
              <p className="text-gray-300">
                Professional driving instruction with certified trainers. Your journey to safe driving starts here.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Courses", "About", "Contact", "Book Now"].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-300">
                <li>24-Day Standard Program</li>
                <li>24-Day Intensive Program</li>
                <li>Refresher Course</li>
                <li>Advanced Driving</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>9135156440</p>
                <p>mafiyamood@gmail.com</p>
                <p> Driving School, Patna, Bihar</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 DriveAcademy. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}

export default HomePage
