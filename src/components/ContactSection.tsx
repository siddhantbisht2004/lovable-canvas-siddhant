
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0a1728]">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-teal font-mono mb-2">04. What's Next?</p>
          <h2 className="text-4xl font-bold text-lightestSlate">Get In Touch</h2>
          <p className="mt-4 max-w-lg mx-auto text-slate">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-lightNavy p-3 rounded-full mr-4">
                <Mail className="text-teal h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lightestSlate font-medium">Email</h3>
                <a href="mailto:siddhant.bishte@example.com" className="text-slate hover:text-teal">
                  siddhant.bishte@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-lightNavy p-3 rounded-full mr-4">
                <Phone className="text-teal h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lightestSlate font-medium">Phone</h3>
                <a href="tel:+1234567890" className="text-slate hover:text-teal">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-lightNavy p-3 rounded-full mr-4">
                <MapPin className="text-teal h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lightestSlate font-medium">Location</h3>
                <p className="text-slate">San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-lightNavy border-lightestNavy focus-visible:ring-teal text-lightSlate"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-lightNavy border-lightestNavy focus-visible:ring-teal text-lightSlate"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-lightNavy border-lightestNavy focus-visible:ring-teal text-lightSlate"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-lightNavy border-lightestNavy focus-visible:ring-teal text-lightSlate resize-none"
                />
              </div>
              
              <div className="text-right">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-transparent hover:bg-teal/10 text-teal border border-teal"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
