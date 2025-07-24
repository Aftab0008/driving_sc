import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";


// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
};

export default function BookingSection({ bookingForm, handleInputChange, handleSubmit }) {
  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Book Your Course</h2>
          <p className="text-xl text-gray-600">Start your driving journey today</p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Course Booking Form</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below and we'll contact you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={bookingForm.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </motion.div>
                </motion.div>

                {/* Phone & Course Type */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="course">Course Type</Label>
                    <select
                      id="course"
                      name="course"
                      value={bookingForm.course}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a course</option>
                      <option value="24-day-standard">24-Day Standard Program</option>
                      <option value="24-day-intensive">24-Day Intensive Program</option>
                      <option value="refresher">Refresher Course</option>
                    </select>
                  </motion.div>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={bookingForm.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1"
                    placeholder="Any specific requirements or questions?"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div {...scaleOnHover}>
                    <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 px-12 py-3 text-lg">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Now
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
