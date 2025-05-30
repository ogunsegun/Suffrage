import React from 'react';
import { Link } from 'react-router-dom';
import { Vote, Building, School, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedDots from '../components/AnimatedDots';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-400 via-indigo-600 to-indigo-900">
      <AnimatedDots />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">WELCOME TO SUFFRAGE!!!</h1>
              <p className="text-xl md:text-2xl mb-8">
                WHERE YOU CAN VOTE, CAN RUN AND CREATE YOUR ELECTION
              </p>
              <Link to="/signup">
                <Button className="text-lg px-8 py-3 rounded-full">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-white/30 rounded-md flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-0 bg-indigo-500/20 backdrop-blur-sm"></div>
                <div className="text-white text-center z-10">
                  <p className="text-4xl font-bold mb-2">LET'S</p>
                  <p className="text-4xl font-bold">VOTE</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Suffrage</h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6">
                Suffrage is a cornerstone of democracy, enabling citizens to participate in shaping their government and society.
              </p>
              <p className="text-gray-700 mb-6">
                You can create a channel for your election to run government and society. Any form of voting can be created.
              </p>
            </div>
            
            {/* Election Types */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg" 
                  alt="General Election" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">General Election</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Popular direct representation for national or local government.
                    Examples: Presidential, parliamentary, or congressional elections.
                    Frequency: Typically occurs 2-5 years.
                  </p>
                  <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">Let's Vote</Link>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg" 
                  alt="Primary Election" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Primary Election</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Elections held to nominate candidates within a political party.
                    Used to determine who will represent the party in general elections.
                  </p>
                  <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">Let's Vote</Link>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg" 
                  alt="Parliamentary Elections" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Parliamentary Elections</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Elections to select representatives for a parliament or legislative body.
                    Determines the composition of the government in parliamentary systems.
                  </p>
                  <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">Let's Vote</Link>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1850021/pexels-photo-1850021.jpeg" 
                  alt="Referendum or Plebiscite" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Referendum or Plebiscite</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Direct vote by citizens on a specific political question or proposed law.
                    Used for constitutional amendments, major policy decisions, or territorial changes.
                  </p>
                  <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">Let's Vote</Link>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                  alt="School Elections" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">School Elections</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Elections for student government positions in educational institutions.
                    Teaches democratic principles and leadership skills to students.
                  </p>
                  <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">Let's Vote</Link>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
                  alt="Organizational or Corporate Elections" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Organizational or Corporate Elections</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    These are internal elections within a group or organization, such as a company, association, union, or club.
                  </p>
                  <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">Let's Vote</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Create Server Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Create Your Suffrage Server</h2>
            
            <div className="max-w-5xl mx-auto bg-indigo-900 rounded-lg overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-3">
                <div className="bg-indigo-950 p-4">
                  <div className="py-4">
                    <div className="flex items-center space-x-2 text-white mb-6">
                      <Vote className="h-6 w-6" />
                      <span className="font-bold">Create Your Server</span>
                    </div>
                    
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-2 text-white p-2 bg-indigo-800 rounded">
                        <Users className="h-5 w-5" />
                        <span>Create Vote</span>
                      </li>
                      <li className="flex items-center space-x-2 text-white p-2 hover:bg-indigo-800 rounded">
                        <Vote className="h-5 w-5" />
                        <span>General Election</span>
                      </li>
                      <li className="flex items-center space-x-2 text-white p-2 hover:bg-indigo-800 rounded">
                        <School className="h-5 w-5" />
                        <span>School Election</span>
                      </li>
                      <li className="flex items-center space-x-2 text-white p-2 hover:bg-indigo-800 rounded">
                        <Building className="h-5 w-5" />
                        <span>Organizational or Corporate Election</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:col-span-2 p-6 bg-indigo-800">
                  <div className="text-center text-white mb-8">
                    <h3 className="text-2xl font-bold mb-2">Welcome to INEC Suffrage Server</h3>
                    <p className="text-sm opacity-80">Create your election, manage voters, and view results</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-indigo-700 p-4 rounded-md text-white text-center">
                      <Vote className="h-8 w-8 mx-auto mb-2" />
                      <p>Share your Suffrage Server</p>
                    </div>
                    <div className="bg-indigo-700 p-4 rounded-md text-white text-center">
                      <Vote className="h-8 w-8 mx-auto mb-2" />
                      <p>Add your App and link</p>
                    </div>
                    <div className="bg-indigo-700 p-4 rounded-md text-white text-center">
                      <Vote className="h-8 w-8 mx-auto mb-2" />
                      <p>Create Channel</p>
                    </div>
                    <div className="bg-indigo-700 p-4 rounded-md text-white text-center">
                      <Vote className="h-8 w-8 mx-auto mb-2" />
                      <p>Create Vote</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Vote className="h-24 w-24 text-white opacity-30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* E-Voting Section */}
        <section className="py-16 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/7319163/pexels-photo-7319163.jpeg" 
                  alt="Mobile Voting" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">YOUR VOTE<br />YOUR VOICE</h2>
                <p className="text-lg mb-8">
                  (E-voting) is revolutionizing democratic processes worldwide.
                  With advancements in technology, governments and organizations are exploring
                  secure, efficient, and accessible ways to conduct elections digitally.
                </p>
                <Link to="/signup">
                  <Button className="text-lg px-8 py-3 rounded-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;