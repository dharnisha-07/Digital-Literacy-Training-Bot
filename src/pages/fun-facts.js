import React from 'react';
import Layout from '@/components/Layout';
import BackgroundDoodles from '@/components/BackgroundDoodles';
import FunFactCard from '@/components/FunFactCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const facts = [
    {
        factEn: "The first computer mouse was made of wood.",
        factTa: "முதல் கணினி மவுஸ் மரத்தால் செய்யப்பட்டது.",
        detailEn: "In 1964, Douglas Engelbart invented the mouse. It was a wooden block with two wheels!",
        detailTa: "1964 இல், டக்ளஸ் ஏங்கல்வார்ட் மவுஸைக் கண்டுபிடித்தார். இது இரண்டு சக்கரங்களைக் கொண்ட ஒரு மரத் துண்டு!",
        illustration: "🪵🖱️",
        color: "#A7C7E7",
        textColor: "#3D5A80" // Darker Blue
    },
    {
        factEn: "The world’s first website is still live today.",
        factTa: "உலகின் முதல் இணையதளம் இன்றும் இயங்குகிறது.",
        detailEn: "Created by Tim Berners-Lee in 1991, it's just plain text and links!",
        detailTa: "1991 இல் டிம் பெர்னர்ஸ்-லீயால் உருவாக்கப்பட்டது, இது வெறும் உரை மற்றும் இணைப்புகள் மட்டுமே!",
        illustration: "🕸️🖥️",
        color: "#CDEDE0",
        textColor: "#2C6E49" // Darker Green
    },
    {
        factEn: "90% of the world’s digital data was created in the last two years.",
        factTa: "உலகின் டிஜிட்டல் தரவுகளில் 90% கடந்த இரண்டு ஆண்டுகளில் உருவாக்கப்பட்டது.",
        detailEn: "We generate 2.5 quintillion bytes of data every single day!",
        detailTa: "நாம் ஒவ்வொரு நாளும் 2.5 குவிண்டில்லியன் பைட்டுகள் தரவை உருவாக்குகிறோம்!",
        illustration: "☁️😰",
        color: "#FFF6B0",
        textColor: "#8B8000" // Darker Yellow
    },
    {
        factEn: "The “@” symbol was chosen for email because nobody used it.",
        factTa: "மின்னஞ்சலுக்கு “@” குறியீடு தேர்ந்தெடுக்கப்பட்டது, ஏனெனில் அதை யாரும் பயன்படுத்தவில்லை.",
        detailEn: "Ray Tomlinson needed a symbol that wasn't in anyone's name. @ was perfect!",
        detailTa: "ரே டாம்லின்சனுக்கு யாருடைய பெயரிலும் இல்லாத ஒரு குறியீடு தேவைப்பட்டது. @ சரியாக இருந்தது!",
        illustration: "📧💃",
        color: "#FFD6C9",
        textColor: "#B55A30" // Darker Peach
    },
    {
        factEn: "Smartphone cameras are sharper than early digital cameras.",
        factTa: "ஸ்மார்ட்போன் கேமராக்கள் பழைய டிஜிட்டல் கேமராக்களை விட கூர்மையானவை.",
        detailEn: "Your phone has more processing power for photos than professional cameras from 2000.",
        detailTa: "2000 ஆம் ஆண்டின் தொழில்முறை கேமராக்களை விட உங்கள் போனில் புகைப்படங்களுக்கான செயலாக்க சக்தி அதிகம்.",
        illustration: "📸😱",
        color: "#E6D9FF",
        textColor: "#5D4E8C" // Darker Lavender
    },
    {
        factEn: "The first 1GB hard drive was the size of a fridge.",
        factTa: "முதல் 1GB ஹார்ட் டிரைவ் ஒரு குளிர்சாதன பெட்டியின் அளவில் இருந்தது.",
        detailEn: "IBM made it in 1980. It weighed over 500 pounds and cost $40,000!",
        detailTa: "IBM இதை 1980 இல் உருவாக்கியது. இது 500 பவுண்டுகளுக்கு மேல் எடை கொண்டது மற்றும் $40,000 விலை!",
        illustration: "🧊💾",
        color: "#EFEFEF",
        textColor: "#555555" // Darker Grey
    },
    {
        factEn: "NASA still uses 8-inch floppy disks in some machines.",
        factTa: "நாசா இன்றும் சில இயந்திரங்களில் 8-இன்ச் ஃப்ளாப்பி டிஸ்க்குகளைப் பயன்படுத்துகிறது.",
        detailEn: "Some legacy systems are too reliable (and expensive) to replace!",
        detailTa: "சில பழைய அமைப்புகள் மாற்றுவதற்கு மிகவும் நம்பகமானவை (மற்றும் விலை உயர்ந்தவை)!",
        illustration: "👨‍🚀💾",
        color: "#FFC8DD",
        textColor: "#A64D79" // Darker Pink
    },
    {
        factEn: "Bluetooth is named after a Viking king.",
        factTa: "புளூடூத் ஒரு வைக்கிங் மன்னரின் பெயரால் அழைக்கப்படுகிறது.",
        detailEn: "King Harald 'Bluetooth' Gormsson united tribes, just like Bluetooth unites devices.",
        detailTa: "மன்னர் ஹரால்ட் 'புளூடூத்' கோர்ம்ஸன் பழங்குடியினரை ஒன்றிணைத்தார், புளூடூத் சாதனங்களை இணைப்பது போல.",
        illustration: "👑🦷",
        color: "#BDE0FE",
        textColor: "#4A6FA5" // Darker Blue
    },
    {
        factEn: "First mobile phone weighed over 1 kg.",
        factTa: "முதல் மொபைல் போன் 1 கிலோவுக்கு மேல் எடை கொண்டது.",
        detailEn: "The Motorola DynaTAC 8000X took 10 hours to charge for 30 minutes of talk time.",
        detailTa: "மோட்டோரோலா டைனாடாக் 8000X 30 நிமிட பேச்சு நேரத்திற்கு 10 மணிநேரம் சார்ஜ் செய்ய வேண்டியிருந்தது.",
        illustration: "🏋️📱",
        color: "#D0F4DE",
        textColor: "#3A7D44" // Darker Green
    },
    {
        factEn: "Over 6,000 new Android apps appear every day.",
        factTa: "ஒவ்வொரு நாளும் 6,000 க்கும் மேற்பட்ட புதிய ஆண்ட்ராய்டு செயலிகள் வருகின்றன.",
        detailEn: "The Google Play Store is a busy place with millions of apps available.",
        detailTa: "கூகிள் பிளே ஸ்டோர் மில்லியன் கணக்கான செயலிகளுடன் பரபரப்பான இடமாகும்.",
        illustration: "🤖🌊",
        color: "#FF9AA2",
        textColor: "#C0392B" // Darker Red
    },
    {
        factEn: "The first YouTube video was uploaded in 2005.",
        factTa: "முதல் யூடியூப் வீடியோ 2005 இல் பதிவேற்றப்பட்டது.",
        detailEn: "It was called 'Me at the zoo' and featured co-founder Jawed Karim.",
        detailTa: "இது 'மீ அட் தி ஜூ' என்று அழைக்கப்பட்டது மற்றும் இணை நிறுவனர் ஜாவேத் கரீம் இடம்பெற்றார்.",
        illustration: "🦕📹",
        color: "#C7CEEA",
        textColor: "#5D6D7E" // Darker Blue Grey
    },
    {
        factEn: "“WiFi” doesn’t mean anything — it’s just branding.",
        factTa: "“WiFi” என்பதற்கு எந்த அர்த்தமும் இல்லை — இது வெறும் பிராண்டிங்.",
        detailEn: "It's not short for 'Wireless Fidelity'. A marketing firm just made it up!",
        detailTa: "இது 'வயர்லெஸ் ஃபிடிலிட்டி' என்பதன் சுருக்கம் அல்ல. ஒரு சந்தைப்படுத்தல் நிறுவனம் இதை உருவாக்கியது!",
        illustration: "📶🤷",
        color: "#E2F0CB",
        textColor: "#6B8E23" // Darker Olive
    },
    {
        factEn: "Smartphones today are more powerful than old supercomputers.",
        factTa: "இன்றைய ஸ்மார்ட்போன்கள் பழைய சூப்பர் கம்ப்யூட்டர்களை விட சக்திவாய்ந்தவை.",
        detailEn: "Your phone is millions of times faster than the computer that guided Apollo 11.",
        detailTa: "அப்போலோ 11 ஐ வழிநடத்திய கணினியை விட உங்கள் போன் மில்லியன் மடங்கு வேகமானது.",
        illustration: "📱💪",
        color: "#FFDAC1",
        textColor: "#D35400" // Darker Orange
    },
    {
        factEn: "More photos are taken every 2 minutes than the entire 1800s.",
        factTa: "1800கள் முழுவதையும் விட ஒவ்வொரு 2 நிமிடங்களுக்கும் அதிகமான புகைப்படங்கள் எடுக்கப்படுகின்றன.",
        detailEn: "Thanks to phones, we document everything instantly.",
        detailTa: "போன்களுக்கு நன்றி, நாம் எல்லாவற்றையும் உடனடியாக ஆவணப்படுத்துகிறோம்.",
        illustration: "📸🤯",
        color: "#B5EAD7",
        textColor: "#16A085" // Darker Teal
    },
    {
        factEn: "Email existed before the internet.",
        factTa: "இணையத்திற்கு முன்பே மின்னஞ்சல் இருந்தது.",
        detailEn: "Systems like MIT's CTSS allowed users to leave messages for each other on the same mainframe.",
        detailTa: "MIT இன் CTSS போன்ற அமைப்புகள் பயனர்கள் ஒரே மெயின்ஃபிரேமில் ஒருவருக்கொருவர் செய்திகளை அனுப்ப அனுமதித்தன.",
        illustration: "📨🏃",
        color: "#A0E7E5",
        textColor: "#0E6655" // Darker Teal
    },
    {
        factEn: "The first computer virus was a prank.",
        factTa: "முதல் கணினி வைரஸ் ஒரு குறும்பு.",
        detailEn: "The 'Creeper' program just displayed: 'I'M THE CREEPER: CATCH ME IF YOU CAN'.",
        detailTa: "'கிரீப்பர்' நிரல்: 'நான் கிரீப்பர்: முடிந்தால் என்னைப் பிடி' என்று மட்டுமே காட்டியது.",
        illustration: "🐛😜",
        color: "#FBE7C6",
        textColor: "#D68910" // Darker Orange
    },
    {
        factEn: "QR codes were invented for car factories.",
        factTa: "கார் தொழிற்சாலைகளுக்காக QR குறியீடுகள் கண்டுபிடிக்கப்பட்டன.",
        detailEn: "Toyota used them to track vehicle parts during manufacturing.",
        detailTa: "உற்பத்தியின் போது வாகன பாகங்களைக் கண்காணிக்க டொயோட்டா அவற்றைப் பயன்படுத்தியது.",
        illustration: "🚗🏁",
        color: "#FFAEBC",
        textColor: "#C0392B" // Darker Red
    },
    {
        factEn: "First smartwatch launched in 1998.",
        factTa: "முதல் ஸ்மார்ட்வாட்ச் 1998 இல் அறிமுகப்படுத்தப்பட்டது.",
        detailEn: "The Seiko Ruputer let you write notes and play games on your wrist.",
        detailTa: "சீக்கோ ருப்யூட்டர் உங்கள் மணிக்கட்டில் குறிப்புகளை எழுதவும் கேம்களை விளையாடவும் அனுமதித்தது.",
        illustration: "⌚👴",
        color: "#A0C4FF",
        textColor: "#2E86C1" // Darker Blue
    },
    {
        factEn: "The word “robot” means forced labor.",
        factTa: "“ரோபோ” என்ற சொல்லுக்கு கட்டாய உழைப்பு என்று பொருள்.",
        detailEn: "It comes from the Czech word 'robota', introduced in a 1920 play.",
        detailTa: "இது 1920 நாடகத்தில் அறிமுகப்படுத்தப்பட்ட 'ரோபோட்டா' என்ற செக் வார்த்தையிலிருந்து வந்தது.",
        illustration: "🤖🛑",
        color: "#FDFFB6",
        textColor: "#9A7D0A" // Darker Yellow
    },
    {
        factEn: "95% of cybersecurity breaches are human mistakes.",
        factTa: "சைபர் பாதுகாப்பு மீறல்களில் 95% மனித தவறுகளே.",
        detailEn: "Weak passwords and clicking phishing links are the biggest risks.",
        detailTa: "பலவீனமான கடவுச்சொற்கள் மற்றும் ஃபிஷிங் இணைப்புகளைக் கிளிக் செய்வது மிகப்பெரிய அபாயங்கள்.",
        illustration: "🤦‍♂️💻",
        color: "#CAFFBF",
        textColor: "#229954" // Darker Green
    }
];

export default function FunFacts() {
    const { language } = useLanguage();

    return (
        <Layout
            title="Tech Fun Facts - Digi Dhost"
            backgroundColor="#FFFFFF"
            backgroundImage="linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), url('/images/factpage img.jpg')" // Make sure 'factpage img.jpg' is in the 'public' folder
        >
            <BackgroundDoodles />

            <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 20px' }}>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h1 style={{
                        fontSize: '3rem',
                        color: 'var(--text-dark)',
                        marginBottom: '10px',
                        textShadow: '2px 2px 0px var(--highlight)'
                    }}>
                        {language === 'en' ? 'Tech Fun Facts' : 'தொழில்நுட்ப வேடிக்கை உண்மைகள்'}
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>
                        {language === 'en' ? 'Learn something cool before you chat!' : 'சாட் செய்வதற்கு முன் சுவாரஸ்யமான ஒன்றை கற்றுக்கொள்ளுங்கள்!'}
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '4rem'
                }}>
                    {facts.map((fact, index) => (
                        <FunFactCard
                            key={index}
                            {...fact}
                            fact={language === 'en' ? fact.factEn : fact.factTa}
                            detail={language === 'en' ? fact.detailEn : fact.detailTa}
                        />
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link href="/chatbot">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 214, 201, 0.6)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                backgroundColor: '#FFFFFF',
                                color: '#910508',
                                padding: '15px 40px',
                                borderRadius: '50px',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                            }}
                        >
                            {language === 'en' ? 'Proceed to Digi Dhost Chatbot →' : 'டிஜி தோஸ்த் சாட்போட்டிற்குச் செல்லவும் →'}
                        </motion.button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
