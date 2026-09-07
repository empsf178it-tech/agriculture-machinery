import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, PhoneCall, Calendar, X, CheckCircle2, Send, Tractor } from 'lucide-react';
import { machineryCatalog } from '../data/machineryData';

export default function WhatsAppInquiry() {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' or 'demo'
  const [submitted, setSubmitted] = useState(false);

  // Form states for booking field demo
  const [farmerName, setFarmerName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [selectedMachine, setSelectedMachine] = useState(machineryCatalog[0].id);

  // Default Fieldcore WhatsApp hotline
  const whatsappNumber = '919876543210'; 

  const handleWhatsAppChat = () => {
    const message = lang === 'ta'
      ? `வணக்கம் Fieldcore, எனக்கு விவசாய இயந்திரங்கள் மற்றும் அரசு மானியம் பற்றிய தகவல்கள் தேவை.`
      : `Hi Fieldcore Team, I am interested in your agricultural machinery catalog and government subsidy options.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFarmerName('');
      setPhone('');
      setDistrict('');
    }, 3500);
  };

  return (
    <>
      {/* Floating Action Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 bg-[#25D366] text-white font-['Space_Grotesk'] font-bold px-4 py-3 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-105 border-2 border-white/20 group cursor-pointer"
          aria-label="WhatsApp Inquiry"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white fill-current" />
          </div>
          <span className="hidden sm:inline text-xs font-extrabold tracking-wide uppercase">
            {t('common.inquireWhatsApp')}
          </span>
        </button>
      </div>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#15181d] border border-white/10 rounded-sm max-w-md w-full p-6 relative shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-sm text-[#8c9ba5] hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#25D366]/20 border border-[#25D366] rounded-sm flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white">
                  {t('whatsappModal.title')}
                </h3>
                <span className="text-[11px] text-[#8c9ba5]">
                  {t('whatsappModal.subtitle')}
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-2 gap-2 mb-6 bg-[#0a0c0e] p-1 rounded-sm border border-white/10">
              <button
                onClick={() => setActiveTab('chat')}
                className={`py-2 text-xs font-bold rounded-sm transition-all cursor-pointer ${
                  activeTab === 'chat'
                    ? 'bg-[#25D366] text-white shadow-md'
                    : 'text-[#8c9ba5] hover:text-white'
                }`}
              >
                1-Click WhatsApp Chat
              </button>
              <button
                onClick={() => setActiveTab('demo')}
                className={`py-2 text-xs font-bold rounded-sm transition-all cursor-pointer ${
                  activeTab === 'demo'
                    ? 'bg-[#2e7d32] text-white shadow-md'
                    : 'text-[#8c9ba5] hover:text-white'
                }`}
              >
                {t('whatsappModal.demoTitle')}
              </button>
            </div>

            {/* Tab 1: WhatsApp Chat */}
            {activeTab === 'chat' && (
              <div className="space-y-4 text-center">
                <div className="p-4 bg-[#0a0c0e] border border-white/10 rounded-sm text-xs text-[#b0bec5]">
                  <p className="mb-2">
                    Connect instantly with our Fieldcore Agricultural Machinery advisor on WhatsApp to get brochures, quotes, or subsidy assistance.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[#25D366] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
                    <span>Line Active (Response in &lt; 5 mins)</span>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppChat}
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-['Space_Grotesk'] font-bold text-xs py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{t('whatsappModal.chatButton')}</span>
                </button>
              </div>
            )}

            {/* Tab 2: Book Field Demo */}
            {activeTab === 'demo' && (
              <>
                {submitted ? (
                  <div className="p-6 bg-[#2e7d32]/20 border border-[#4caf50] rounded-sm text-center text-xs text-white space-y-3 animate-fade-in">
                    <CheckCircle2 className="w-10 h-10 text-[#4caf50] mx-auto" />
                    <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#4caf50]">
                      Demo Requested!
                    </h4>
                    <p className="text-[#b0bec5]">
                      {t('whatsappModal.successMessage')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleDemoSubmit} className="space-y-3 text-xs">
                    <div>
                      <label className="block text-[#8c9ba5] font-bold mb-1">
                        {t('whatsappModal.nameLabel')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={farmerName}
                        onChange={(e) => setFarmerName(e.target.value)}
                        placeholder="e.g. K. Selvam"
                        className="w-full bg-[#0a0c0e] border border-white/10 rounded-sm px-3 py-2.5 text-white focus:outline-none focus:border-[#4caf50]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#8c9ba5] font-bold mb-1">
                        {t('whatsappModal.phoneLabel')} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="98765 43210"
                        className="w-full bg-[#0a0c0e] border border-white/10 rounded-sm px-3 py-2.5 text-white focus:outline-none focus:border-[#4caf50]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#8c9ba5] font-bold mb-1">
                        {t('whatsappModal.districtLabel')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        placeholder="e.g. Coimbatore / Thanjavur"
                        className="w-full bg-[#0a0c0e] border border-white/10 rounded-sm px-3 py-2.5 text-white focus:outline-none focus:border-[#4caf50]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#8c9ba5] font-bold mb-1">
                        {t('whatsappModal.selectMachine')}
                      </label>
                      <select
                        value={selectedMachine}
                        onChange={(e) => setSelectedMachine(e.target.value)}
                        className="w-full bg-[#0a0c0e] border border-white/10 rounded-sm px-3 py-2.5 text-white focus:outline-none focus:border-[#4caf50]"
                      >
                        {machineryCatalog.map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.name} ({m.powerHp})
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center text-xs py-3 mt-4 text-decoration-none"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{t('whatsappModal.submitDemo')}</span>
                    </button>
                  </form>
                )}
              </>
            )}

          </div>
        </div>
      )}
    </>
  );
}
