import { Utensils, Clock, Award, MapPin, Phone, Star, ChevronRight, Coffee, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar/Navbar"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <Navbar/>
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <img
          src="/placeholder.svg?height=800&width=1600"
          alt="Traditional Yemeni cuisine"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <div className="animate-fade-in-up">
            <Badge className="bg-amber-500 hover:bg-amber-600 mb-6 py-1.5 px-4 text-white uppercase tracking-wider">
              Est. 2010
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Authentic Yemeni <span className="text-amber-400">Cuisine</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              A culinary journey through the rich flavors and traditions of Yemen
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">Our Menu</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Make a Reservation
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Our Story Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block mb-6">
              <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 py-1 px-3">Our Story</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              A Taste of <span className="text-amber-500">Yemen</span> in Every Bite
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded in 2010, Yemeni Restaurant began with a simple mission: to share the rich culinary heritage of
              Yemen with food lovers everywhere. Our founder, Ahmed Al-Yamani, brought his family's treasured recipes
              from Sana'a to create an authentic dining experience that honors tradition while embracing innovation.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              What started as a small family restaurant has grown into a beloved culinary destination, where every dish
              tells a story of Yemen's diverse regions and cultural influences. We take pride in preserving traditional
              cooking methods while using the freshest locally-sourced ingredients.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-amber-500/10 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">13+ Years</h3>
                  <p className="text-muted-foreground text-sm">Of Culinary Excellence</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-500/10 p-3 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Award-Winning</h3>
                  <p className="text-muted-foreground text-sm">Authentic Cuisine</p>
                </div>
              </div>
            </div>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/placeholder.svg?height=600&width=800" alt="Restaurant interior" className="w-full h-auto" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[90%] max-h-[90%] border-4 border-amber-500/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 bg-amber-500 p-4 rounded-lg shadow-xl hidden md:block">
              <p className="text-white font-bold">Authentic Yemeni Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Cuisine Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 py-1 px-3">Our Cuisine</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Discover Yemeni <span className="text-amber-500">Flavors</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the rich flavors and aromatic spices that make Yemeni cuisine one of the most distinctive in the
              Middle East.
            </p>
          </div>

          <Tabs defaultValue="popular" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-background/50 p-1">
                <TabsTrigger
                  value="popular"
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
                >
                  Popular Dishes
                </TabsTrigger>
                <TabsTrigger
                  value="specialties"
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
                >
                  Chef's Specialties
                </TabsTrigger>
                <TabsTrigger
                  value="desserts"
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
                >
                  Desserts
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="popular" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="overflow-hidden border-none shadow-lg group">
                  <div className="h-60 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mandi"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 relative">
                    <div className="absolute -top-6 left-6 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-md">
                      <Utensils className="h-5 w-5" />
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">Mandi</h3>
                      <p className="text-muted-foreground mb-4">
                        Our signature dish features tender meat slow-cooked with a blend of aromatic spices, served over
                        fragrant rice.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-amber-500">$18.99</span>
                        <Button variant="ghost" className="text-amber-500 hover:text-amber-600 p-0 h-auto">
                          View Details <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-none shadow-lg group">
                  <div className="h-60 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Saltah"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 relative">
                    <div className="absolute -top-6 left-6 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-md">
                      <Utensils className="h-5 w-5" />
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">Saltah</h3>
                      <p className="text-muted-foreground mb-4">
                        Yemen's national dish combines a hearty meat stew with fenugreek foam, creating a unique and
                        satisfying flavor profile.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-amber-500">$16.99</span>
                        <Button variant="ghost" className="text-amber-500 hover:text-amber-600 p-0 h-auto">
                          View Details <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-none shadow-lg group">
                  <div className="h-60 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Fahsa"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 relative">
                    <div className="absolute -top-6 left-6 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-md">
                      <Utensils className="h-5 w-5" />
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">Fahsa</h3>
                      <p className="text-muted-foreground mb-4">
                        A traditional Yemeni stew made with shredded lamb or beef, served bubbling hot with freshly
                        baked bread.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-amber-500">$17.99</span>
                        <Button variant="ghost" className="text-amber-500 hover:text-amber-600 p-0 h-auto">
                          View Details <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="specialties" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Similar card structure for specialties */}
                <Card className="overflow-hidden border-none shadow-lg group">
                  <div className="h-60 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Kabsa"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 relative">
                    <div className="absolute -top-6 left-6 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-md">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">Kabsa</h3>
                      <p className="text-muted-foreground mb-4">
                        Chef's special rice dish with tender meat, raisins, and a blend of traditional Yemeni spices.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-amber-500">$21.99</span>
                        <Button variant="ghost" className="text-amber-500 hover:text-amber-600 p-0 h-auto">
                          View Details <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Add more specialty dishes */}
              </div>
            </TabsContent>

            <TabsContent value="desserts" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Similar card structure for desserts */}
                <Card className="overflow-hidden border-none shadow-lg group">
                  <div className="h-60 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Bint Al-Sahn"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 relative">
                    <div className="absolute -top-6 left-6 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-md">
                      <Coffee className="h-5 w-5" />
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">
                        Bint Al-Sahn
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        A traditional Yemeni honey cake with multiple layers, served with a drizzle of black honey.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-amber-500">$8.99</span>
                        <Button variant="ghost" className="text-amber-500 hover:text-amber-600 p-0 h-auto">
                          View Details <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Add more desserts */}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              View Full Menu <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 py-1 px-3">Our Team</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Meet the <span className="text-amber-500">Culinary Artists</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate people behind every delicious dish and memorable dining experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Ahmed Al-Yamani",
              role: "Founder & Head Chef",
              image: "/placeholder.svg?height=300&width=300",
              bio: "With over 25 years of culinary experience, Ahmed brings authentic Yemeni recipes from his hometown.",
            },
            {
              name: "Layla Hassan",
              role: "Executive Chef",
              image: "/placeholder.svg?height=300&width=300",
              bio: "Trained in both traditional and modern techniques, Layla creates innovative twists on classic dishes.",
            },
            {
              name: "Omar Saleh",
              role: "Pastry Chef",
              image: "/placeholder.svg?height=300&width=300",
              bio: "Omar specializes in traditional Yemeni sweets and desserts, with a focus on honey-based treats.",
            },
            {
              name: "Fatima Noor",
              role: "Restaurant Manager",
              image: "/placeholder.svg?height=300&width=300",
              bio: "Fatima ensures every guest enjoys exceptional service and an authentic dining experience.",
            },
          ].map((member, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button variant="ghost" className="text-white hover:bg-white/20 w-full">
                    View Profile
                  </Button>
                </div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-amber-500 transition-colors">{member.name}</h3>
              <p className="text-amber-500 mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 py-1 px-3">Our Values</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              The <span className="text-amber-500">Principles</span> That Guide Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The core values that define our restaurant and shape every aspect of your dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Utensils className="h-10 w-10 text-amber-500" />,
                title: "Authentic Flavors",
                description:
                  "We stay true to traditional Yemeni recipes and cooking techniques, ensuring an authentic culinary experience with every dish we serve.",
              },
              {
                icon: <Award className="h-10 w-10 text-amber-500" />,
                title: "Quality Ingredients",
                description:
                  "We source the freshest, highest-quality ingredients to create dishes that honor our heritage and delight our guests with exceptional taste.",
              },
              {
                icon: <Users className="h-10 w-10 text-amber-500" />,
                title: "Warm Hospitality",
                description:
                  "We believe in treating every guest like family, providing attentive service and a welcoming atmosphere that makes you feel right at home.",
              },
            ].map((value, index) => (
              <Card key={index} className="p-8 border-none shadow-lg bg-background hover:shadow-xl transition-shadow">
                <div className="bg-amber-500/10 p-4 rounded-full w-fit mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 py-1 px-3">Testimonials</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            What Our <span className="text-amber-500">Guests</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "The most authentic Yemeni food I've had outside of Yemen. The Mandi is absolutely incredible!",
              author: "Sarah K.",
              location: "New York",
              rating: 5,
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              quote:
                "Amazing atmosphere and even better food. The staff made us feel like family from the moment we walked in.",
              author: "Michael T.",
              location: "Chicago",
              rating: 5,
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              quote: "A hidden gem! The flavors are bold, the portions are generous, and the service is impeccable.",
              author: "Aisha M.",
              location: "Los Angeles",
              rating: 5,
              image: "/placeholder.svg?height=100&width=100",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="p-8 border-none shadow-lg relative">
              <div className="absolute -top-5 -right-5 bg-amber-500 text-white p-3 rounded-full shadow-lg">
                <Star className="h-5 w-5" />
              </div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-white/20 hover:bg-white/30 text-white mb-6">Visit Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Experience Authentic Yemeni Hospitality
              </h2>
              <p className="mb-8 text-white/90 leading-relaxed">
                We look forward to welcoming you to our restaurant and taking you on a culinary journey through the
                flavors of Yemen. Come experience our warm hospitality and authentic cuisine.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-white/80">123 Culinary Street, Foodie District, City, 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                    <p className="text-white/80">Monday - Thursday: 11:00 AM - 10:00 PM</p>
                    <p className="text-white/80">Friday - Sunday: 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Contact Us</h3>
                    <p className="text-white/80">Phone: (123) 456-7890</p>
                    <p className="text-white/80">Email: info@yemenirestaurant.com</p>
                  </div>
                </div>
              </div>
              <Button className="bg-white text-amber-500 hover:bg-white/90">Make a Reservation</Button>
            </div>
            <div className="relative hidden md:block">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img src="/placeholder.svg?height=600&width=800" alt="Restaurant exterior" className="w-full h-auto" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[90%] max-h-[90%] border-4 border-white/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
