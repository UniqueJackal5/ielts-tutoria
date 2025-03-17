
import React from 'react';

interface Testimonial {
  name: string;
  score: string;
  text: string;
  image: string;
  delay: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      score: "8.5",
      text: "The personalized approach and detailed feedback on my writing tasks helped me improve from band 6.5 to 8.5 in just two months!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      delay: 100
    },
    {
      name: "Michael Chen",
      score: "7.5",
      text: "My speaking skills were my biggest challenge. The targeted practice and tips from my tutor made a huge difference in my confidence and score.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      delay: 200
    },
    {
      name: "Aisha Patel",
      score: "8.0",
      text: "The flexible scheduling was perfect for my busy work life. I could practice at my own pace while still getting expert guidance when needed.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      delay: 300
    }
  ];
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Read about the experiences of students who achieved their target IELTS scores with our tutoring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-border shadow-sm relative animate-scale-in opacity-0"
              style={{ animationDelay: `${testimonial.delay}ms`, animationFillMode: 'forwards' }}
            >
              <div className="mb-4">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">IELTS Band {testimonial.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
