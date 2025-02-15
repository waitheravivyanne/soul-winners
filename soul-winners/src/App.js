// import React from 'react';
// // import './styles.css';
// const App = () => {
//   return (
//     <div>
//       <h1>Christian Soul Winners Theological College</h1>
//       <p>Welcome to the official website!</p>
//     </div>
//   );
// };

// export default App;
import React from "react";
import ReactDOM from "react-dom/client";

// App Component
const App = () => {
return (
<div className="min-h-screen bg-gray-100">
{/* Header */}
<header className="bg-blue-900 text-white py-4">
<div className="container mx-auto flex justify-between items-center">
<h1 className="text-2xl font-bold">Christian Soul Winners Theological College</h1>
<nav>
<ul className="flex space-x-4">
<li><a href="#" className="hover:underline">Home</a></li>
<li><a href="#about" className="hover:underline">About Us</a></li>
<li><a href="#programs" className="hover:underline">Programs</a></li>
<li><a href="#contact" className="hover:underline">Contact</a></li>
</ul>
</nav>
</div>
</header>

{/* Hero Section */}
<section className="bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('https://via.placeholder.com/1920x600')" }}>
<div className="text-center">
<h2 className="text-4xl font-bold">Preparing Servants of God to Reach the Nations</h2>
<p className="mt-4 text-lg">Join us to fulfill your calling in ministry.</p>
<button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
Learn More
</button>
</div>
</section>

{/* About Us */}
<section id="about" className="py-16 bg-white">
<div className="container mx-auto">
<h3 className="text-3xl font-bold text-center">About Us</h3>
<p className="mt-6 text-center text-gray-700 max-w-3xl mx-auto">
Founded in 2014 in Nairobi, Kenya, Christian Soul Winners Theological College aims to serve the Body of Christ by preparing servants of God to reach the nations with the Gospel of the Lord Jesus Christ. We value quality and excellence in all we do and strive to be obedient to God in reaching the nations.
</p>
</div>
</section>

{/* Programs */}
<section id="programs" className="py-16 bg-gray-100">
<div className="container mx-auto">
<h3 className="text-3xl font-bold text-center">Our Programs</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
<div className="p-6 bg-white rounded shadow">
<h4 className="text-xl font-bold">Diploma in Theology</h4>
<p className="mt-4 text-gray-600">A foundational program for those called to ministry.</p>
</div>
<div className="p-6 bg-white rounded shadow">
<h4 className="text-xl font-bold">Degree in Biblical Studies</h4>
<p className="mt-4 text-gray-600">In-depth biblical training for advanced ministry roles.</p>
</div>
<div className="p-6 bg-white rounded shadow">
<h4 className="text-xl font-bold">Postgraduate Studies</h4>
<p className="mt-4 text-gray-600">Advanced studies in Theology, Christian Education, and Biblical Studies.</p>
</div>
</div>
</div>
</section>

{/* Footer */}
<footer className="bg-blue-900 text-white py-8">
<div className="container mx-auto text-center">
<p>&copy; 2025 Christian Soul Winners Theological College. All rights reserved.</p>
<p>Nairobi, Kenya</p>
</div>
</footer>
</div>
);
};

// Render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;