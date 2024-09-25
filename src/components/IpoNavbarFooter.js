// src/IpoList.js
import React, { useState } from 'react';

// Import local images
import logo1 from './assets/LTlogo.avif';
import logo2 from './assets/Tata-Power-logo.webp';
import logo3 from './assets/bajajLogo.png';
import logo4 from './assets/goair.png';
import logo5 from './assets/hero-logo.jpg';
import logo6 from './assets/jindal-steel-logo.webp';
import logo7 from './assets/oyo-logo.png';
import logo8 from './assets/tcs-logo.webp';
import logo9 from './assets/wipro-logo.webp';

import web_logo from './assets/web_logo.gif';




import IpoDetailPage from './IpoDetailPage';
import { Link } from 'react-router-dom';



// Function to generate a random date in the specified format
const getFormattedDateRange = () => {
  const startDate = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + Math.floor(Math.random() * 5) + 1); // Random range of 1-5 days

  const startDay = startDate.getDate();
  const endDay = endDate.getDate();
  
  const startMonth = startDate.toLocaleString('default', { month: 'short' });
  
  const formattedStartDay = startDay + (startDay === 1 ? 'st' : startDay === 2 ? 'nd' : startDay === 3 ? 'rd' : 'th');
  const formattedEndDay = endDay + (endDay === 1 ? 'st' : endDay === 2 ? 'nd' : endDay === 3 ? 'rd' : 'th');

  return `${formattedStartDay}-${formattedEndDay} ${startMonth} ${startDate.getFullYear()}`;
};

// Sample IPO data with real dummy company names
const ipoData = [
    { company: "Larsen & Toubro LTD", issueDate: getFormattedDateRange(), issueSize: "50 Crores", priceRange: "100 - 200", minInvestment: { amount: 5000, qty: 25 ,lots:5  } },
    { company: "Tata Power", issueDate: getFormattedDateRange(), issueSize: "75 Crores", priceRange: "150 - 250", minInvestment: { amount: 3000, qty: 15 ,lots:10} },
    { company: "Bajaj Group", issueDate: getFormattedDateRange(), issueSize: "100 Crores", priceRange: "200 - 300", minInvestment: { amount: 7000, qty: 35 ,lots:5} },
    { company: "GOAIR", issueDate: getFormattedDateRange(), issueSize: "80 Crores", priceRange: "120 - 220", minInvestment: { amount: 4000, qty: 20 ,lots:53} },
    { company: "Hero Group", issueDate: getFormattedDateRange(), issueSize: "60 Crores", priceRange: "110 - 210", minInvestment: { amount: 6000, qty: 30 ,lots:15} },
    { company: "FinTech Innovations", issueDate: getFormattedDateRange(), issueSize: "90 Crores", priceRange: "180 - 280", minInvestment: { amount: 5500, qty: 28 ,lots:3} },
    { company: "Smart Logistics Ltd", issueDate: getFormattedDateRange(), issueSize: "40 Crores", priceRange: "130 - 230", minInvestment: { amount: 2000, qty: 10 ,lots:12} },
    { company: "Digital Media Solutions", issueDate: getFormattedDateRange(), issueSize: "55 Crores", priceRange: "140 - 240", minInvestment: { amount: 4000, qty: 20 ,lots:7} },
    { company: "AgriTech Ventures", issueDate: getFormattedDateRange(), issueSize: "65 Crores", priceRange: "170 - 270", minInvestment: { amount: 4500, qty: 22 ,lots:8} },
    { company: "Green Construction Co", issueDate: getFormattedDateRange(), issueSize: "70 Crores", priceRange: "190 - 290", minInvestment: { amount: 3500, qty: 17 ,lots:23} },
    { company: "CyberSecurity Experts", issueDate: getFormattedDateRange(), issueSize: "85 Crores", priceRange: "160 - 260", minInvestment: { amount: 6000, qty: 30 ,lots:12} },
    { company: "AI Innovations Inc", issueDate: getFormattedDateRange(), issueSize: "95 Crores", priceRange: "200 - 300", minInvestment: { amount: 8000, qty: 40 ,lots:5} },
    { company: "Logistics Hub Ltd", issueDate: getFormattedDateRange(), issueSize: "100 Crores", priceRange: "150 - 250", minInvestment: { amount: 3000, qty: 15 ,lots:32} },
    { company: "Innovative Designs Ltd", issueDate: getFormattedDateRange(), issueSize: "55 Crores", priceRange: "125 - 225", minInvestment: { amount: 3500, qty: 17 ,lots:54} },
    { company: "Urban Development Corp", issueDate: getFormattedDateRange(), issueSize: "80 Crores", priceRange: "190 - 290", minInvestment: { amount: 4500, qty: 22 ,lots:21} },
    { company: "NextLevel Solutions", issueDate: getFormattedDateRange(), issueSize: "70 Crores", priceRange: "130 - 230", minInvestment: { amount: 2500, qty: 12 ,lots:7} },
    { company: "TravelTech Innovations", issueDate: getFormattedDateRange(), issueSize: "45 Crores", priceRange: "115 - 215", minInvestment: { amount: 3200, qty: 16 ,lots:9} },
    { company: "Quantum Computing Inc", issueDate: getFormattedDateRange(), issueSize: "110 Crores", priceRange: "220 - 320", minInvestment: { amount: 9000, qty: 45 ,lots:15} },
    { company: "Smart Home Technologies", issueDate: getFormattedDateRange(), issueSize: "50 Crores", priceRange: "140 - 240", minInvestment: { amount: 5000, qty: 25 ,lots:18} },
    { company: "E-Commerce Solutions", issueDate: getFormattedDateRange(), issueSize: "95 Crores", priceRange: "180 - 280", minInvestment: { amount: 4000, qty: 20 ,lots:5} },
    { company: "Wearable Tech Co", issueDate: getFormattedDateRange(), issueSize: "60 Crores", priceRange: "150 - 250", minInvestment: { amount: 3500, qty: 17 ,lots:19} },
  ];
  

// Logo List
const LogoList = () => {
  const logos = [
    { src: logo1, alt: 'LT Logo' },
    { src: logo2, alt: 'Tata Power Logo' },
    { src: logo3, alt: 'Bajaj Logo' },
    { src: logo4, alt: 'GoAir Logo' },
    { src: logo5, alt: 'Hero Logo' },
    { src: logo6, alt: 'Jindal Steel Logo' },
    { src: logo7, alt: 'Oyo Logo' },
    { src: logo8, alt: 'TCS Logo' },
    { src: logo9, alt: 'Wipro Logo' },
    { src: logo1, alt: 'LT Logo' }, // Repeat for more logos
    { src: logo2, alt: 'Tata Power Logo' },
    { src: logo3, alt: 'Bajaj Logo' },
    { src: logo4, alt: 'GoAir Logo' },
    { src: logo5, alt: 'Hero Logo' },
    { src: logo6, alt: 'Jindal Steel Logo' },
    { src: logo7, alt: 'Oyo Logo' },
    { src: logo8, alt: 'TCS Logo' },
    { src: logo9, alt: 'Wipro Logo' },
  ];

  return logos;
};

const IpoNavbarFooter = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const logos = LogoList(); // Get logos

  // Filter data based on search input
  const filteredData = ipoData.filter(item =>
    item.company.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
     <div className="container mx-auto p-5 font-sora">
       {/* Fixed Header */}
       <header className="fixed top-0 left-0 right-0 bg-gray-700 text-white z-50">
        <nav className="flex items-center justify-between p-4">
          <img src={web_logo} alt="Header Logo" className="h-8" /> {/* Logo on the left */}
          <div className="flex space-x-4">
            <a href="#ipo-list" className="hover:text-gray-300">
              <Link to='/ipolistpage'>
              IPO List
              
              </Link>
              </a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        </nav>
      </header>
    </div>
    <IpoDetailPage />
    
    </>
   
  );
};

export default IpoNavbarFooter;
