"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const steps = [
  {
    title: "Sign Up",
    description: "Create your MauriHub account in minutes.",
  },
  {
    title: "Explore Resources",
    description: "Browse through a wide range of educational materials.",
  },
  {
    title: "Download or Share",
    description: "Access the resources you need or contribute your own.",
  },
  {
    title: "Collaborate",
    description: "Connect with peers and engage in group discussions.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Get started with MauriHub in just a few simple steps.
          </p>
        </div>

        <div className="mt-20">
          <Tabs defaultValue="step1" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              {steps.map((step, index) => (
                <TabsTrigger key={index} value={`step${index + 1}`}>
                  Step {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>
            {steps.map((step, index) => (
              <TabsContent key={index} value={`step${index + 1}`}>
                <Card>
                  <CardHeader>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;