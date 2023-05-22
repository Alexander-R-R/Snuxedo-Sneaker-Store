import { createServer, Model } from "miragejs";

createServer({
  models: {
    shoes: Model,
  },

  seeds(server) {
    server.create("shoe", {
      id: "1",
      name: "Air Jordan 1 Retro Bred",
      price: 799,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl:
        "https://images.stockx.com/images/Air-Jordan-1-Retro-Bred-2016-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1606318705&q=75",
      type: "air-jordan",
      hostId: "123",
      visibility: "Public",
    });
    server.create("shoe", {
      id: "2",
      name: "Air Jordan 1 Obsidian Blue",
      price: 180,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl:
        "https://images.stockx.com/images/Air-Jordan-1-Retro-High-UNC-Leather.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606322077",
      type: "air-jordan",
      hostId: "123",
      visibility: "Public",
    });
    server.create("shoe", {
      id: "3",
      name: "Air Jordan 1 Storm Blue",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        "https://images.stockx.com/images/Air-Jordan-1-Retro-Storm-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1607061465&q=75",
      type: "air-jordan",
      hostId: "456",
      visibility: "Public",
    });
    server.create("shoe", {
      id: "4",
      name: "Air Jordan 1 Dark Marina Blue",
      price: 165,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl:
        "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Dark-Marina-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1642023273",
      type: "air-jordan",
      hostId: "789",
      visibility: "Public",
    });
    server.create("shoe", {
      id: "5",
      name: "Air Jordan 1 Hyper Crimson",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl:
        "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Neutral-Grey-Hyper-Crimson-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606319872",
      type: "air-jordan",
      hostId: "789",
      visibility: "Public",
    });
    server.create("shoe", {
      id: "6",
      name: "Air Jordan 1 All Star Chameleon",
      price: 170,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        "https://images.stockx.com/images/Air-Jordan-1-Retro-All-Star-2017-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1607656880&q=75",
      type: "air-jordan",
      hostId: "123",
      visibility: "Private",
    });
    server.create("shoe", {
        id: "7",
        name: "Nike Dunk Low White Black Panda",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633027409",
        type: "nike",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "8",
        name: "Nike Air Force 1 Low SP Undefeated 5 On It",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/Nike-Air-Force-1-Low-Undefeated-5-On-It-Dunk-vs-AF1-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633621281",
        type: "nike",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "9",
        name: "Nike Dunk Low Free 99",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/Nike-Dunk-Low-Free-99-White-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1644311999&q=75",
        type: "nike",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "10",
        name: "Nike Kobe 6 Protro Challenge Red All-Star",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/Nike-Kobe-6-Protro-Challenge-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1659335330",
        type: "nike",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "11",
        name: "Nike SB Dunk Low Barcelona",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/Nike-SB-Dunk-Low-Barcelona-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1633115002&q=75",
        type: "nike",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "12",
        name: "Nike SB Dunk Low Club 58 Gulf",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/Nike-SB-Dunk-Low-Club-58-Gulf-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1612295293&q=75",
        type: "nike",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "13",
        name: "Nike SB Dunk Low Pro Bart Simpson",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/Nike-SB-Dunk-Low-Pro-Bart-Simpson-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1650655298",
        type: "nike",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "14",
        name: "adidas Yeezy Foam RNNR Vermillion",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Vermillion-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1635875119&q=75",
        type: "yeezy",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "15",
        name: "adidas Yeezy Boost 700 Wave Runner",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/adidas-Yeezy-Wave-Runner-700-Solid-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1628533740&q=75",
        type: "yeezy",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "16",
        name: "adidas Yeezy Boost 350 V2 Beluga Reflective",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1638996919&q=75",
        type: "yeezy",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "17",
        name: "adidas Yeezy 450 Cloud White",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/adidas-Yeezy-450-Cloud-White-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1615564111&q=75",
        type: "yeezy",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "18",
        name: "adidas Yeezy Foam RNR Onyx",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Onyx-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1654264132&q=75",
        type: "yeezy",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "19",
        name: "adidas Yeezy Boost 350 V2 Bone",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Pure-Oat-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1648503664",
        type: "yeezy",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "20",
        name: "adidas NMD R1 Pharrell HU Burgundy",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/Adidas-NMD-HU-Pharrell-Williams-Friends-and-Family-Burgundy.png?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1606318293&q=75",
        type: "adidas",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "21",
        name: "adidas NMD HU Pharrell Human Race Yellow",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/Adidas-NMD-HU-Pharrell-Williams-Yellow-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606321318",
        type: "adidas",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "22",
        name: "adidas Campus 80s South Park Towelie",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/adidas-Campus-80s-South-Park-Towelie-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1619198945&q=75",
        type: "adidas",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "23",
        name: "adidas Forum Buckle Low Bad Bunny Last Forum",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/adidas-Forum-Buckle-Low-White-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1670919042&q=75",
        type: "adidas",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "24",
        name: "adidas Forum Buckle Low Bad Bunny Blue Tint",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/adidas-Forum-Buckle-Low-Bad-Bunny-Blue-Tint-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1659725558",
        type: "adidas",
        hostId: "123",
        visibility: "Private",
      });
      server.create("shoe", {
        id: "25",
        name: "adidas Ultra 4D Cloud White",
        price: 170,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://images.stockx.com/images/adidas-Ultra-4D-Cloud-White.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1611592928",
        type: "adidas",
        hostId: "123",
        visibility: "Private",
      });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/sneakers", (schema, request) => {
      return schema.shoes.all();
    });

    this.get("/sneakers/:id", (schema, request) => {
      const id = request.params.id;
      return schema.shoes.find(id);
    });

    this.get("/sneakers/vans", (schema, request) => {
      // Hard-code the hostId for now
      return schema.shoes.where({ hostId: "123" });
    });

    this.get("/host/vans/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id;
      return schema.shoes.findBy({ id, hostId: "123" });
    });
  },
});
