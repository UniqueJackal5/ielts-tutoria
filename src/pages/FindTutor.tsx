
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Filter, Star, Calendar, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/sections/Footer';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const FindTutor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [filteredTutors, setFilteredTutors] = useState(tutors);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    academic: false,
    general: false,
    speaking: false,
    writing: false,
    reading: false,
    listening: false,
    beginners: false,
    advanced: false
  });
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter tutors based on search term and other filters
    const filtered = tutors.filter(tutor => {
      const matchesSearch = searchTerm === '' ||
        tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesPrice = tutor.hourlyRate >= priceRange[0] && tutor.hourlyRate <= priceRange[1];
      
      // Check if any filters are active
      const anyFilterActive = Object.values(filters).some(value => value);
      
      // If no filters are active, return just based on search and price
      if (!anyFilterActive) {
        return matchesSearch && matchesPrice;
      }
      
      // Check against active filters
      let matchesFilters = false;
      
      if (filters.academic && tutor.modules.includes('Academic')) matchesFilters = true;
      if (filters.general && tutor.modules.includes('General Training')) matchesFilters = true;
      if (filters.speaking && tutor.skills.includes('Speaking')) matchesFilters = true;
      if (filters.writing && tutor.skills.includes('Writing')) matchesFilters = true;
      if (filters.reading && tutor.skills.includes('Reading')) matchesFilters = true;
      if (filters.listening && tutor.skills.includes('Listening')) matchesFilters = true;
      if (filters.beginners && tutor.levels.includes('Beginner')) matchesFilters = true;
      if (filters.advanced && tutor.levels.includes('Advanced')) matchesFilters = true;
      
      return matchesSearch && matchesPrice && matchesFilters;
    });
    
    setFilteredTutors(filtered);
  };
  
  const toggleFilter = (filter: keyof typeof filters) => {
    setFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange([20, 80]);
    setFilters({
      academic: false,
      general: false,
      speaking: false,
      writing: false,
      reading: false,
      listening: false,
      beginners: false,
      advanced: false
    });
    setFilteredTutors(tutors);
  };
  
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect IELTS Tutor
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Browse our qualified tutors and find the right match for your learning needs and goals.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <div className="flex">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search by name, specialization, or skill..."
                      className="pl-10 pr-4 py-6 rounded-l-md w-full"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="rounded-l-none px-6">
                    Search
                  </Button>
                </div>
              </form>
              
              <div className="mt-4 flex justify-between items-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  Showing {filteredTutors.length} of {tutors.length} tutors
                </div>
              </div>
              
              {showFilters && (
                <div className="mt-4 p-6 border rounded-lg bg-card">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-medium">Price Range ($/hour)</Label>
                      <div className="flex items-center justify-between mt-2 mb-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                      <Slider
                        defaultValue={[20, 80]}
                        min={10}
                        max={100}
                        step={5}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-base font-medium">IELTS Module</Label>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="academic" 
                              checked={filters.academic}
                              onCheckedChange={() => toggleFilter('academic')}
                            />
                            <label htmlFor="academic" className="text-sm">Academic</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="general" 
                              checked={filters.general}
                              onCheckedChange={() => toggleFilter('general')}
                            />
                            <label htmlFor="general" className="text-sm">General Training</label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-base font-medium">IELTS Skills</Label>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="speaking" 
                              checked={filters.speaking}
                              onCheckedChange={() => toggleFilter('speaking')}
                            />
                            <label htmlFor="speaking" className="text-sm">Speaking</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="writing" 
                              checked={filters.writing}
                              onCheckedChange={() => toggleFilter('writing')}
                            />
                            <label htmlFor="writing" className="text-sm">Writing</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="reading" 
                              checked={filters.reading}
                              onCheckedChange={() => toggleFilter('reading')}
                            />
                            <label htmlFor="reading" className="text-sm">Reading</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="listening" 
                              checked={filters.listening}
                              onCheckedChange={() => toggleFilter('listening')}
                            />
                            <label htmlFor="listening" className="text-sm">Listening</label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-base font-medium">Student Level</Label>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="beginners" 
                              checked={filters.beginners}
                              onCheckedChange={() => toggleFilter('beginners')}
                            />
                            <label htmlFor="beginners" className="text-sm">Beginner</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="advanced" 
                              checked={filters.advanced}
                              onCheckedChange={() => toggleFilter('advanced')}
                            />
                            <label htmlFor="advanced" className="text-sm">Advanced</label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-base font-medium">Sort By</Label>
                        <Select defaultValue="recommended">
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Sort by" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="recommended">Recommended</SelectItem>
                            <SelectItem value="price-low">Price: Low to High</SelectItem>
                            <SelectItem value="price-high">Price: High to Low</SelectItem>
                            <SelectItem value="rating">Highest Rated</SelectItem>
                            <SelectItem value="experience">Most Experienced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-4 border-t">
                      <Button variant="outline" onClick={clearFilters}>
                        Clear Filters
                      </Button>
                      <Button onClick={handleSearch}>
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Tutors List */}
      <section className="py-8 flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          {filteredTutors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutors.map((tutor, index) => (
                <Card key={index} className="overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img 
                      src={tutor.image} 
                      alt={tutor.name} 
                      className="w-full h-48 object-cover object-center"
                    />
                    {tutor.featured && (
                      <Badge className="absolute top-3 right-3 bg-yellow-500">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">{tutor.name}</h3>
                        <p className="text-muted-foreground">{tutor.specialization}</p>
                      </div>
                      <div className="flex items-center bg-primary/10 px-2 py-1 rounded">
                        <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{tutor.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="py-2 flex-grow">
                    <div className="space-y-4">
                      <p className="text-sm line-clamp-3">{tutor.bio}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {tutor.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="bg-primary/5">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>${tutor.hourlyRate}/hr</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>{tutor.experience} yrs</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>{tutor.availability}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-2">
                    <div className="w-full space-y-2">
                      <Button className="w-full" asChild>
                        <Link to={`/tutors/${tutor.id}`}>
                          View Profile
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/book/${tutor.id}`}>
                          Book Session
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No tutors found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search term
              </p>
              <Button onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not Sure Which Tutor to Choose?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us match you with the perfect tutor based on your needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="group min-w-[180px]">
                  Request a Match
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="mailto:support@ieltstutoria.com">
                <Button size="lg" variant="outline" className="min-w-[180px]">
                  Contact Support
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Sample tutor data
const tutors = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialization: "IELTS Academic Expert",
    bio: "Former IELTS examiner with over 10 years of experience. Specialized in academic writing and speaking preparation.",
    rating: 4.9,
    hourlyRate: 45,
    experience: 10,
    availability: "Flexible",
    featured: true,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    skills: ["Speaking", "Writing", "Academic"],
    modules: ["Academic"],
    levels: ["Beginner", "Intermediate", "Advanced"]
  },
  {
    id: 2,
    name: "David Chen",
    specialization: "Speaking & Pronunciation Coach",
    bio: "Certified language coach focused on improving fluency and pronunciation. Helps students overcome speaking anxiety.",
    rating: 4.8,
    hourlyRate: 40,
    experience: 7,
    availability: "Evenings",
    featured: false,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    skills: ["Speaking", "Pronunciation", "Fluency"],
    modules: ["Academic", "General Training"],
    levels: ["Intermediate", "Advanced"]
  },
  {
    id: 3,
    name: "Priya Patel",
    specialization: "Writing & Grammar Expert",
    bio: "MA in English Language Teaching. Specializes in teaching essay structure, grammar, and vocabulary for IELTS writing tasks.",
    rating: 4.7,
    hourlyRate: 35,
    experience: 5,
    availability: "Weekdays",
    featured: false,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
    skills: ["Writing", "Grammar", "Vocabulary"],
    modules: ["Academic", "General Training"],
    levels: ["Beginner", "Intermediate", "Advanced"]
  },
  {
    id: 4,
    name: "Michael Brown",
    specialization: "Reading & Listening Strategies",
    bio: "Develops customized strategies for improving reading speed and listening comprehension. Expert in test-taking techniques.",
    rating: 4.6,
    hourlyRate: 38,
    experience: 6,
    availability: "Weekends",
    featured: false,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    skills: ["Reading", "Listening", "Test Strategies"],
    modules: ["Academic", "General Training"],
    levels: ["Beginner", "Intermediate"]
  },
  {
    id: 5,
    name: "Emma Wilson",
    specialization: "Band 8+ Preparation",
    bio: "Specialized in helping students achieve Band 8 or higher. Focus on advanced vocabulary and sophisticated writing structures.",
    rating: 4.9,
    hourlyRate: 50,
    experience: 8,
    availability: "Flexible",
    featured: true,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80",
    skills: ["Speaking", "Writing", "Reading", "Listening"],
    modules: ["Academic"],
    levels: ["Advanced"]
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    specialization: "General Training IELTS Coach",
    bio: "Focuses on practical English for immigration and work purposes. Expert in General Training writing formats and requirements.",
    rating: 4.7,
    hourlyRate: 35,
    experience: 5,
    availability: "Mornings",
    featured: false,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    skills: ["Speaking", "Writing", "Cultural Knowledge"],
    modules: ["General Training"],
    levels: ["Beginner", "Intermediate"]
  }
];

export default FindTutor;
