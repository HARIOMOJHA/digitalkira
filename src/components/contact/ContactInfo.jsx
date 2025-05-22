import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg shadow-md p-6 md:p-8 text-white mb-8">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 mr-4 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Address</h3>
            <p>Ritika Tower - V Ground Floor 3/264/22, Dr B.C Roy Sarani Rishra Bazar - 712250</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p>+91 6290392983</p>
            <p>+91 7044744490</p>
          </div>
        </div>
        <div className="flex items-start">
          <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p>pragatiinfo.tech03@gmail.com</p>
            <p>admissions@digitalkirainstitute.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="h-6 w-6 mr-4 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Working Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;