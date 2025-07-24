import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://chat.whatsapp.com/HCphz5X53Bi1O6449trKyc"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-xl z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}