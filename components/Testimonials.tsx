"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Aminata Diallo",
    school: "University of Nouakchott",
    quote: "MauriHub has been a game-changer for my studies. I can easily find resources that aren't available in our university library.",
    avatar: "AD",
  },
  {
    name: "Mohamed Ould Ahmed",
    school: "Higher Institute of Technological Education",
    quote: "The collaborative features on MauriHub have helped me connect with peers across different institutions. It's not just a resource platform, it's a community.",
    avatar: "MA",
  },
  {
    name: "Fatima Mint Abdallahi",
    school: "National School of Public Health",
    quote: "As a medical student, having access to up-to-date research papers on MauriHub has been invaluable. It's helping me stay current in my field.",
    avatar: "FA",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Hear from students who have transformed their learning experience with MauriHub.
          </p>
        </div>

        <div className="mt-20">
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Avatar className="mr-4">
                          <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div>{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.school}</div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;