import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Share2, Users, Search } from 'lucide-react';

const features = [
  {
    title: "Resource Sharing",
    description: "Share and access a wide range of educational materials.",
    icon: Share2,
  },
  {
    title: "Collaborative Learning",
    description: "Connect with peers and learn together.",
    icon: Users,
  },
  {
    title: "Easy Access",
    description: "Find the resources you need quickly and easily.",
    icon: Search,
  },
  {
    title: "Diverse Content",
    description: "Access materials across various subjects and levels.",
    icon: BookOpen,
  },
];

const KeyFeatures = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover what makes MauriHub the go-to platform for Mauritanian students.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;